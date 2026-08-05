import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "수업방식",
  description:
    "우리학교과외의 상담, 진단, 시범수업, 학교별 내신 분석, 월별·주별 플래닝과 입시 동행 수업방식을 확인하세요.",
  path: "/lesson-method"
});

const processSteps = [
  {
    step: "STEP 01",
    title: "팀장교사와 상담진행",
    body: "학교, 성적, 성향, 현재 상황을 확인하고 학생에게 가장 필요한 수업 방향을 정합니다."
  },
  {
    step: "STEP 02",
    title: "진단과 학교별 분석",
    body: "학습유형과 학교별 내신 자료를 함께 확인해 과목별 약점과 우선순위를 정합니다."
  },
  {
    step: "STEP 03",
    title: "수업 진행과 관리",
    body: "분석 결과를 바탕으로 담당 선생님이 수업, 피드백, 주간 학습관리를 이어갑니다."
  }
];

const lessonSections = [
  {
    marker: "01",
    title: "학교분석",
    subtitle: "학교별 내신경향을 먼저 분석합니다",
    body:
      "학교에 대한 분석 없이 내신 경쟁에서 살아남기는 어렵습니다. 교과별 문제 비율, 부교재 반영 정도, 서술형 감점 포인트를 확인해 학생에게 맞는 전략을 설계합니다.",
    image: "/images/lesson-method-difference.png",
    alt: "우리학교과외 학교분석과 학생관리 시스템"
  },
  {
    marker: "02",
    title: "학교별 맞춤 내신 분석 및 피드백",
    subtitle: "문항별 출제비율과 시험지를 함께 봅니다",
    body:
      "교재별 문제 분석, 시험난도, 중심 단원, 오답 원인을 함께 확인합니다. 단순 풀이가 아니라 시험지에서 점수가 빠지는 구조를 찾아 피드백합니다.",
    image: "/images/lesson-method-analysis.png",
    alt: "학교별 맞춤 내신 분석 및 피드백"
  },
  {
    marker: "03",
    title: "월별 플래닝 + 학교일정 기반",
    subtitle: "수행평가와 지필평가 일정을 함께 반영합니다",
    body:
      "월초에 큰 계획을 세우고 매주 수업 시간에 점검합니다. 수행평가, 지필평가, 학원 과제 등 학생의 실제 일정을 기준으로 학습량을 조정합니다.",
    image: "/images/lesson-method-monthly.png",
    alt: "월별 플래닝과 학교일정 기반 관리"
  },
  {
    marker: "04",
    title: "주별 플래닝",
    subtitle: "실행 항목을 작게 나누어 관리합니다",
    body:
      "월별 계획을 주별 실행 항목으로 쪼개고 과목별 우선순위를 정합니다. 학생이 무엇을 해야 하는지 분명하게 보이도록 체크리스트화합니다.",
    image: "/images/lesson-method-weekly.png",
    alt: "주별 플래닝 체크리스트"
  },
  {
    marker: "05",
    title: "학습유형 진단",
    subtitle: "좋은 공부법은 곧 좋은 성적입니다",
    body:
      "학습만 한다고 공부가 아닙니다. 학생의 공부 MBTI와 풀이 습관을 확인해 암기형, 이해형, 실전형 중 어떤 보완이 필요한지 진단합니다.",
    image: "/images/lesson-method-studytype.png",
    alt: "학습유형 진단과 공부법 개선"
  }
];

export default function LessonMethodPage() {
  return (
    <>
      <section className="lesson-method-cover">
        <img src="/images/lesson-method-cover.png" alt="우리학교과외 이렇게 수업합니다" />
      </section>

      <section className="lesson-method-intro">
        <p className="eyebrow">수업방식</p>
        <h1>상담부터 학교별 분석, 수업관리까지 이어집니다</h1>
      </section>

      <section className="lesson-process-grid" aria-label="수업 진행 절차">
        {processSteps.map((item) => (
          <article key={item.step}>
            <span>{item.step}</span>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </article>
        ))}
      </section>

      <section className="lesson-method-sections">
        {lessonSections.map((section) => (
          <article className="lesson-method-detail" key={section.marker}>
            <div className="lesson-method-copy">
              <span>{section.marker}</span>
              <h2>{section.title}</h2>
              <strong>{section.subtitle}</strong>
              <p>{section.body}</p>
            </div>
            <figure>
              <img src={section.image} alt={section.alt} />
            </figure>
          </article>
        ))}
      </section>

      <section className="lesson-final-cta">
        <img src="/images/lesson-method-final-cta.png" alt="학생과 입시까지 함께하는 우리학교과외" />
        <div>
          <p className="eyebrow">무료 컨설팅</p>
          <h2>학생과 입시까지 함께하는 우리학교과외</h2>
          <p>현재 상황을 알려주시면 필요한 과목, 수업 강도, 관리 방식을 함께 정리해드립니다.</p>
          <Link className="button light" href="/consultation">
            무료 컨설팅 상담 신청하기
          </Link>
        </div>
      </section>
    </>
  );
}
