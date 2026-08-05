import { notFound } from "next/navigation";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";

const foreignSchools = {
  "gyeonggi-foreign-language-high-school": {
    name: "경기외고",
    area: "경기도 의왕시",
    summary: "경기외고 학생을 위한 학교별 맞춤 내신관리 과외 페이지입니다."
  },
  "goyang-foreign-language-high-school": {
    name: "고양외고",
    area: "경기도 고양시",
    summary:
      "고양외고 내신은 영어 본문, 부교재, 학교 프린트, 수행평가와 제2외국어 일정을 함께 관리해야 합니다."
  }
};

export function generateStaticParams() {
  return Object.keys(foreignSchools).map((foreignSchool) => ({ foreignSchool }));
}

export function generateMetadata({ params }: { params: { foreignSchool: keyof typeof foreignSchools } }) {
  const school = foreignSchools[params.foreignSchool];
  if (!school) return {};

  return createMetadata({
    title: `${school.name} 과외 - 학교별 맞춤 내신관리`,
    description: `${school.name} 학생을 위한 학교별 내신관리, 과목별 수업 설계, 상담 신청 페이지입니다.`,
    path: `/schools/foreign-language-high-schools/${params.foreignSchool}`
  });
}

export default function ForeignLanguageHighSchoolPage({
  params
}: {
  params: { foreignSchool: keyof typeof foreignSchools };
}) {
  const school = foreignSchools[params.foreignSchool];
  if (!school) notFound();

  return (
    <section className="section">
      <p className="eyebrow">외국어고등학교</p>
      <h1>{school.name} 과외</h1>
      <p className="section-kicker">{school.name} 내신과 학교 일정에 맞춘 1:1 과외 설계</p>
      <p className="section-summary">
        {school.summary} 첫 페이지는 학교 정보를 중심으로 구성하고, 이후 수학·영어 등 과목별 페이지로 확장합니다.
      </p>
      <div className="grid two">
        <article className="card">
          <strong>학교 정보</strong>
          <span>{school.area}</span>
        </article>
        <article className="card">
          <strong>페이지 확장 구조</strong>
          <span>학교별 × 과목별 의미형 URL로 자동 확장</span>
        </article>
      </div>
      <div className="button-row">
        <Link className="button" href="/consultation">
          상담 신청
        </Link>
        <Link className="button secondary" href="/schools/foreign-language-high-schools">
          외고 목록 보기
        </Link>
      </div>
    </section>
  );
}
