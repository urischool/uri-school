import Link from "next/link";
import type { SchoolListCategory, SchoolListItem } from "@/data/schoolLists";

function SchoolCard({ school }: { school: SchoolListItem }) {
  const content = (
    <>
      <strong>{school.name}</strong>
      <span>학교별 과외 페이지 보기</span>
    </>
  );

  if (school.href) {
    return (
      <Link className="card school-list-card" href={school.href}>
        {content}
      </Link>
    );
  }

  return (
    <article className="card school-list-card school-list-card-disabled" aria-disabled="true">
      {content}
    </article>
  );
}

export function SchoolListPage({ category }: { category: SchoolListCategory }) {
  const linkedCount = category.schools.filter((school) => school.href).length;

  return (
    <section className="section school-list-section">
      <p className="eyebrow">{category.category}</p>
      <h1>{category.title}</h1>
      <p className="section-summary">{category.description}</p>
      <p className="school-list-count">
        전체 {category.schools.length}개 학교 중 상세 페이지 준비 {linkedCount}개
      </p>
      <div className="grid school-list-grid" aria-label={`${category.category} 학교 목록`}>
        {category.schools.map((school) => (
          <SchoolCard school={school} key={school.name} />
        ))}
      </div>
    </section>
  );
}
