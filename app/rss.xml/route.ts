import { schoolSubjectPages, schools, site, subjects } from "@/data/site";
import { schoolListCategories } from "@/data/schoolLists";

export const dynamic = "force-static";

type RssItem = {
  title: string;
  description: string;
  path: string;
  category?: string;
};

const staticItems: RssItem[] = [
  { title: site.name, description: site.description, path: "/", category: "Home" },
  {
    title: `${site.name} \uD2B9\uBAA9\uACE0 \uD559\uAD50\uBCC4 \uB0B4\uC2E0\uAD00\uB9AC`,
    description: "\uAD6D\uC81C\uACE0, \uC678\uACE0, \uACFC\uD559\uACE0, \uC790\uC0AC\uACE0 \uB4F1 \uD559\uAD50\uBCC4 \uB0B4\uC2E0\uAD00\uB9AC \uD750\uB984\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
    path: "/specialized-high-schools",
    category: "School"
  },
  {
    title: `${site.name} \uC218\uC5C5\uBC29\uC2DD`,
    description: "\uC0C1\uB2F4, \uC9C4\uB2E8, \uD559\uAD50\uBCC4 \uBD84\uC11D, \uC218\uC5C5 \uAD00\uB9AC\uB85C \uC774\uC5B4\uC9C0\uB294 \uC6B0\uB9AC\uD559\uAD50\uACFC\uC678 \uC218\uC5C5 \uBC29\uC2DD\uC785\uB2C8\uB2E4.",
    path: "/lesson-method",
    category: "Lesson"
  },
  {
    title: `${site.name} \uC0C1\uB2F4\uC2E0\uCCAD`,
    description: "\uD559\uC0DD\uC758 \uD559\uAD50, \uACFC\uBAA9, \uD604\uC7AC \uC0C1\uD669\uC5D0 \uB9DE\uCD98 \uB0B4\uC2E0\uAD00\uB9AC \uC0C1\uB2F4\uC744 \uC2E0\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
    path: "/consultation",
    category: "Consultation"
  }
];

function absoluteUrl(path = "/") {
  const base = site.url.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

function escapeXml(value: string) {
  return value.replace(/[<>&'"]/g, (char) => {
    switch (char) {
      case "<": return "&lt;";
      case ">": return "&gt;";
      case "&": return "&amp;";
      case "'": return "&apos;";
      case '"': return "&quot;";
      default: return char;
    }
  });
}

function getRssItems(): RssItem[] {
  const schoolSubjectItems = schoolSubjectPages.map((page) => ({
    title: page.h1,
    description: page.summary,
    path: `/schools/${page.schoolSlug}/${page.subjectSlug}`,
    category: "Subject"
  }));

  const schoolItems = schools.map((school) => ({
    title: `${school.name} \uB0B4\uC2E0\uAD00\uB9AC`,
    description: school.summary,
    path: `/schools/${school.slug}`,
    category: school.typeLabel
  }));

  const schoolListItems = schoolListCategories.map((category) => ({
    title: category.title,
    description: category.description,
    path: category.path,
    category: category.category
  }));

  const subjectItems = subjects.map((subject) => ({
    title: subject.title,
    description: subject.summary,
    path: `/subjects/${subject.slug}`,
    category: "Subject Hub"
  }));

  return [...schoolSubjectItems, ...schoolItems, ...schoolListItems, ...subjectItems, ...staticItems].slice(0, 100);
}

export async function GET() {
  const now = new Date();
  const items = getRssItems();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(site.name)}</title>
    <link>${escapeXml(site.url)}</link>
    <description>${escapeXml(site.description)}</description>
    <language>ko-KR</language>
    <lastBuildDate>${now.toUTCString()}</lastBuildDate>
    <atom:link href="${escapeXml(absoluteUrl("/rss.xml"))}" rel="self" type="application/rss+xml" />
${items.map((item, index) => {
  const pubDate = new Date(now.getTime() - index * 60 * 60 * 1000).toUTCString();
  const url = absoluteUrl(item.path);
  return `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <description>${escapeXml(item.description)}</description>
      ${item.category ? `<category>${escapeXml(item.category)}</category>` : ""}
      <pubDate>${pubDate}</pubDate>
    </item>`;
}).join("\n")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600"
    }
  });
}
