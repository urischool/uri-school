import Link from "next/link";
import { SchoolSearch } from "@/components/SchoolSearch";
import { schools } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "우리학교과외 - 학교별 맞춤 내신관리 과외",
  description:
    "우리학교과외는 학교별 진도, 내신 경향, 수행평가와 학생 현재상황을 분석해 맞춤 수업을 제공하는 내신관리 과외입니다.",
  path: "/"
});

const inquiries = [
  ["수학 내신관리 상담 요청", "2026.07.05"],
  ["영어 시험대비 수업 문의", "2026.07.05"],
  ["국어 서술형 대비 상담", "2026.07.04"],
  ["과학 개념 보완 수업 문의", "2026.07.04"],
  ["사회 자료해석 수업 상담", "2026.07.03"],
  ["한국사 단기 정리 수업 문의", "2026.07.03"],
  ["수행평가 준비 상담", "2026.07.02"],
  ["특목고 면접 대비 문의", "2026.07.02"],
  ["자기소개서 첨삭 상담", "2026.07.01"]
];

const homeDetailImages = [
  ["/images/home-detail-01.png", "우리학교과외 학교분석과 내신대비 안내"],
  ["/images/home-detail-02.png", "우리학교과외 학생관리 학교분석 학습코칭"]
];

const parentAdvantages = [
  {
    number: "1",
    title: "학교분석을 잘해주세요",
    visual: "/images/home-visual-school-analysis.png",
    visualAlt: "교재와 우리학교쌤 분석 솔루션 자료",
    body:
      "아이가 학습 방향성을 잡기 어려운 부분에 대해 수행평가 비율, 시험 준비사항, 학교별 내신 경향을 분석해서 수업을 진행합니다."
  },
  {
    number: "2",
    title: "꼼꼼히 관리해주세요",
    visual: "/images/home-visual-management.png",
    visualAlt: "고사 피드백과 학습관리 자료",
    body:
      "시험 이후 부족했던 부분을 피드백하고, 다음 시험에서 어떤 전략을 세워야 할지 세밀하게 관리합니다."
  },
  {
    number: "3",
    title: "성향에 맞는 공부법을 알려줘요",
    visual: "/images/home-visual-study-tests.png",
    visualAlt: "학습유형검사 진로종합검사 입시종합검사 자료",
    body:
      "학습유형검사, 진로종합검사, 입시종합검사를 바탕으로 학생 성향과 목표에 맞는 공부법을 제시합니다."
  }
];

const teacherChecks = [
  "교육청에 등록된 전문교사",
  "우리학교과외 정식 소속교사",
  "교육경력 5년이상 교사진",
  "자기주도학습코칭 자격증 TLC"
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-inner">
          <h1>
            <span className="hero-line">맞춤 내신대비를 위한 </span>
            <span className="hero-line">첫걸음</span>
            <strong>지금, 우리학교 과외에서</strong>
          </h1>
          <p className="subline">오직 내 학교 내신에 맞춘 수업</p>
          <div className="hero-logo">
            <img src="/images/seal-symbol.png" alt="우리학교 과외 로고" />
          </div>
          <SchoolSearch
            schools={schools.map((school) => ({
              name: school.name,
              slug: school.slug,
              typeLabel: school.typeLabel,
              area: school.area
            }))}
          />
          <p className="search-caption">학교명을 검색해주세요</p>
          <p className="question">수업 방식이 궁금하다면?</p>
          <Link className="pill-button" href="/lesson-method">
            과외 상세페이지 이동
          </Link>
        </div>
      </section>

      <section className="inquiry-strip" id="inquiries">
        <div className="inquiry-list">
          <h2>실시간 과외 문의 현황</h2>
          {inquiries.map(([title, date]) => (
            <div className="inquiry-row" key={title}>
              <span>{title}</span>
              <time>{date}</time>
            </div>
          ))}
        </div>
      </section>

      <section className="home-detail-flow" aria-label="우리학교과외 수업방식 상세 안내">
        {homeDetailImages.map(([src, alt]) => (
          <figure key={src}>
            <img src={src} alt={alt} />
          </figure>
        ))}
        <section className="home-advantage-intro">
          <p>학부모님들이 말하는</p>
          <h2>우리학교과외 장점 TOP 3</h2>
          <blockquote>
            학부모님들의 관심과 사랑 감사합니다. 학생들의 성적 향상으로 보답하겠습니다.
          </blockquote>
          <img src="/images/home-visual-top3-illustration.png" alt="학부모 상담 일러스트" />
        </section>
        {parentAdvantages.map((item) => (
          <article className="home-advantage-card" key={item.number}>
            <span>{item.number}</span>
            <h2>{item.title}</h2>
            <img src={item.visual} alt={item.visualAlt} />
            <p>{item.body}</p>
          </article>
        ))}
        <section className="home-teacher-card">
          <div>
            <p>우리학교과외 선생님</p>
            <h2>
              오직 <strong>나만을</strong>
              <br />
              위한 선생님
            </h2>
            <ul>
              {teacherChecks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <img src="/images/home-visual-teacher.png" alt="우리학교과외 선생님" />
        </section>
      </section>
    </>
  );
}
