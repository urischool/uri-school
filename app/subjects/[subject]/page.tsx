import { notFound } from "next/navigation";
import { LinkCard, Section } from "@/components/PageSections";
import { subjects } from "@/data/site";
import { getSchool, getSubject, getSubjectPages } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return subjects.map((subject) => ({ subject: subject.slug }));
}

export function generateMetadata({ params }: { params: { subject: string } }) {
  const subject = getSubject(params.subject);
  if (!subject) return {};

  return createMetadata({
    title: `${subject.title} - 학교별 맞춤 과외`,
    description: subject.summary,
    path: `/subjects/${subject.slug}`
  });
}

export default function SubjectPage({ params }: { params: { subject: string } }) {
  const subject = getSubject(params.subject);
  if (!subject) notFound();

  const pages = getSubjectPages(subject.slug);

  return (
    <>
      <section className="home-hero">
        <div className="home-hero-inner">
        <p className="eyebrow">과목별 내신관리</p>
        <h1>{subject.title}</h1>
        <p className="subline">{subject.summary}</p>
        </div>
      </section>
      <Section title={`${subject.name} 수업 핵심`}>
        <div className="grid">
          {subject.strengths.map((item) => (
            <div className="card" key={item}>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </Section>
      <Section title={`학교별 ${subject.name}과외`}>
        <div className="grid">
          {pages.map((page) => {
            const school = getSchool(page.schoolSlug);
            if (!school) return null;
            return (
              <LinkCard
                key={`${page.schoolSlug}-${page.subjectSlug}`}
                href={`/schools/${page.schoolSlug}/${page.subjectSlug}`}
                title={page.h1}
                body={`${school.name} 학생을 위한 학교별 ${subject.name} 내신관리 페이지입니다.`}
              />
            );
          })}
        </div>
      </Section>
    </>
  );
}
