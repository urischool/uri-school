import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const HOST = "www.uri-school.com";
const BASE_URL = `https://${HOST}`;
const KEY = "edf8d86f1522467e98e175f9c6069500";
const KEY_LOCATION = `${BASE_URL}/${KEY}.txt`;
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const MAX_BATCH_SIZE = 10_000;
const RESUBMIT_INTERVAL_MS = 7 * 24 * 60 * 60 * 1000;
const STATE_FILE = path.resolve(process.cwd(), "work/indexnow-submissions.json");

function normalizeUrl(value) {
  const candidate = value.startsWith("/") ? new URL(value, BASE_URL) : new URL(value);

  if (candidate.protocol !== "https:") {
    throw new Error(`Only HTTPS URLs can be submitted: ${value}`);
  }

  if (candidate.hostname === "uri-school.com") {
    candidate.hostname = HOST;
  }

  if (candidate.hostname !== HOST) {
    throw new Error(`URL host must be ${HOST}: ${value}`);
  }

  candidate.hash = "";
  return candidate.toString();
}

function uniqueUrls(urls) {
  return [...new Set(urls.map(normalizeUrl))];
}

async function urlsFromSitemap() {
  const response = await fetch(`${BASE_URL}/sitemap.xml`, {
    headers: { "user-agent": "uri-school-indexnow/1.0" }
  });

  if (!response.ok) {
    throw new Error(`Unable to fetch sitemap.xml: HTTP ${response.status}`);
  }

  const xml = await response.text();
  return uniqueUrls(
    [...xml.matchAll(/<loc>([\s\S]*?)<\/loc>/gi)].map((match) =>
      match[1].trim().replaceAll("&amp;", "&")
    )
  );
}

async function readSubmissionState() {
  try {
    return JSON.parse(await readFile(STATE_FILE, "utf8"));
  } catch (error) {
    if (error?.code === "ENOENT") return {};
    throw error;
  }
}

async function writeSubmissionState(state) {
  await mkdir(path.dirname(STATE_FILE), { recursive: true });
  await writeFile(STATE_FILE, `${JSON.stringify(state, null, 2)}\n`, "utf8");
}

async function verifyKeyFile() {
  const response = await fetch(KEY_LOCATION, { cache: "no-store" });
  const body = await response.text();

  if (!response.ok || body.trim() !== KEY) {
    throw new Error(
      `IndexNow key verification failed at ${KEY_LOCATION}: HTTP ${response.status}`
    );
  }

  return response.status;
}

async function submitBatch(urlList) {
  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList
    })
  });

  if (response.status !== 200 && response.status !== 202) {
    const detail = (await response.text()).trim();
    throw new Error(`IndexNow submission failed: HTTP ${response.status}${detail ? ` - ${detail}` : ""}`);
  }

  return response.status;
}

async function main() {
  const args = process.argv.slice(2);
  const useSitemap = args.includes("--sitemap");
  const dryRun = args.includes("--dry-run");
  const force = args.includes("--force");
  const explicitUrls = args.filter((arg) => !arg.startsWith("--"));

  if (!useSitemap && explicitUrls.length === 0) {
    throw new Error(
      "Provide changed URL paths (for example /review) or opt in to --sitemap. Add --dry-run to preview."
    );
  }

  const candidates = uniqueUrls([
    ...explicitUrls,
    ...(useSitemap ? await urlsFromSitemap() : [])
  ]);
  const state = await readSubmissionState();
  const cutoff = Date.now() - RESUBMIT_INTERVAL_MS;
  const urlList = force
    ? candidates
    : candidates.filter((url) => !state[url] || Date.parse(state[url]) < cutoff);

  console.log(`IndexNow host: ${HOST}`);
  console.log(`Candidate URLs: ${candidates.length}`);
  console.log(`URLs selected: ${urlList.length}`);

  if (urlList.length === 0) {
    console.log("Nothing to submit; all URLs were submitted within the last 7 days.");
    return;
  }

  if (dryRun) {
    console.log(JSON.stringify({ host: HOST, keyLocation: KEY_LOCATION, urlList }, null, 2));
    return;
  }

  const keyStatus = await verifyKeyFile();
  console.log(`Key file verified: HTTP ${keyStatus} ${KEY_LOCATION}`);

  const submittedAt = new Date().toISOString();
  for (let offset = 0; offset < urlList.length; offset += MAX_BATCH_SIZE) {
    const batch = urlList.slice(offset, offset + MAX_BATCH_SIZE);
    const status = await submitBatch(batch);
    console.log(`Submitted ${batch.length} URL(s): HTTP ${status}`);
    for (const url of batch) state[url] = submittedAt;
  }

  await writeSubmissionState(state);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
