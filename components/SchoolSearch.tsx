"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type SchoolSearchItem = {
  name: string;
  slug: string;
  typeLabel: string;
  area: string;
};

type SchoolSearchProps = {
  schools: SchoolSearchItem[];
};

function normalize(value: string) {
  return value.replace(/\s+/g, "").toLowerCase();
}

function aliasesForSchool(school: SchoolSearchItem) {
  const names = new Set<string>([school.name]);
  if (school.name.endsWith("국제고")) names.add(school.name.replace("국제고", "국제고등학교"));
  if (school.name.endsWith("외고")) names.add(school.name.replace("외고", "외국어고등학교"));
  if (school.name.endsWith("과고")) names.add(school.name.replace("과고", "과학고등학교"));
  if (school.name.endsWith("예고")) names.add(school.name.replace("예고", "예술고등학교"));
  if (school.name.endsWith("고")) names.add(`${school.name}등학교`);
  return [...names];
}

export function SchoolSearch({ schools }: SchoolSearchProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const prepared = useMemo(
    () =>
      schools.map((school) => {
        const aliases = aliasesForSchool(school);
        return {
          ...school,
          href: `/schools/${school.slug}`,
          aliases,
          searchable: aliases.map(normalize).join(" ")
        };
      }),
    [schools]
  );

  const normalizedQuery = normalize(query);
  const suggestions = useMemo(() => {
    if (!normalizedQuery) return [];
    return prepared.filter((school) => school.searchable.includes(normalizedQuery)).slice(0, 8);
  }, [normalizedQuery, prepared]);

  const goToSchool = (href: string) => {
    setFocused(false);
    router.push(href);
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const exact = prepared.find((school) =>
      school.aliases.some((alias) => normalize(alias) === normalizedQuery)
    );
    const target = exact ?? suggestions[0];
    if (target) goToSchool(target.href);
  };

  return (
    <div className="school-search-wrap">
      <form className="school-search" onSubmit={submit} role="search">
        <input
          aria-label="학교 검색"
          autoComplete="off"
          placeholder="내 학교 검색"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => setFocused(true)}
        />
        <button type="submit" aria-label="검색">
          ⌕
        </button>
      </form>
      {focused && suggestions.length > 0 ? (
        <div className="school-search-suggestions" role="listbox">
          {suggestions.map((school) => (
            <button
              key={school.slug}
              type="button"
              role="option"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => goToSchool(school.href)}
            >
              <span>{school.name}</span>
              <small>
                {school.typeLabel} · {school.area}
              </small>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
