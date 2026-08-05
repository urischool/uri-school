import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "특목고 내신관리",
  description:
    "외국어고등학교, 국제고등학교, 과학고등학교, 자사고등학교, 갓반고등학교, 예술고등학교 학생을 위한 유형별 내신관리와 수행평가 대비를 확인하세요.",
  path: "/specialized-high-schools"
});

const requiredSubjects = ["국어", "영어", "수학", "사회", "과학"];

const internationalSchoolLinks = [
  { name: "서울국제고", href: "/schools/seoul-international-high-school" },
  { name: "고양국제고", href: "/schools/goyang-international-high-school" },
  { name: "동탄국제고", href: "/schools/dongtan-international-high-school" },
  { name: "청심국제고", href: "/schools/cheongshim-international-high-school" },
  { name: "인천국제고", href: "/schools/incheon-international-high-school" },
  { name: "세종국제고", href: "/schools/sejong-international-high-school" },
  { name: "대구국제고", href: "/schools/daegu-international-high-school" },
  { name: "부산국제고", href: "/schools/busan-international-high-school" }
];

const specialSchoolTypes = [
  {
    id: "foreign-language-high-school",
    type: "외국어고등학교",
    title: "외고 내신관리",
    summary:
      "어학 계열 수업 흐름과 수행평가, 발표·토론 과제를 함께 관리해야 하는 외고형 내신 대비가 필요합니다.",
    keywords: ["중국어", "일본어", "프랑스어", "독일어", "스페인어", "심화영어", "회화", "IB"],
    details: [
      "국어, 영어, 수학, 사회, 과학의 기본 내신 흐름을 먼저 고정합니다.",
      "전공어 수행평가와 발표·토론 과제가 시험 기간 학습량과 충돌하지 않도록 관리합니다.",
      "영어 지문, 학교 프린트, 부교재 구문을 묶어 서술형 감점 포인트까지 정리합니다."
    ]
  },
  {
    id: "international-high-school",
    type: "국제고등학교",
    title: "국제고 내신관리",
    summary:
      "빠른 진도와 비교과 일정이 함께 움직이는 국제고 내신은 과목별 시험 범위와 수행평가 일정을 분리해 관리해야 합니다.",
    keywords: ["사회탐구", "사회문화", "생활과윤리", "윤리와사상", "법과정치", "제2외국어"],
    details: [
      "국어, 영어, 수학, 사회, 과학을 기준으로 학교별 시험 범위와 우선순위를 정합니다.",
      "사회탐구 과목은 개념 암기보다 자료 해석, 핵심어, 서술형 답안 구조를 함께 점검합니다.",
      "영어와 사회 수행평가가 겹치는 시기에는 주차별 학습량을 현실적으로 재배치합니다."
    ]
  },
  {
    id: "science-high-school",
    type: "과학고등학교",
    title: "과학고 내신관리",
    summary:
      "수학·과학 심화 과목의 난도가 높은 과학고는 개념 이해, 풀이 속도, 탐구형 문항 대응을 함께 끌어올려야 합니다.",
    keywords: ["심화수학", "미적분", "고급물리", "고급화학", "지구과학", "생명과학"],
    details: [
      "국어, 영어, 수학, 사회, 과학의 기본 과목 균형을 유지하면서 심화 과목 시간을 확보합니다.",
      "심화수학과 미적분은 개념 연결, 계산 실수, 고난도 변형 문제를 나누어 관리합니다.",
      "물리·화학·지구과학·생명과학은 실험·탐구형 문항과 서술형 답안을 함께 준비합니다."
    ]
  },
  {
    id: "autonomous-private-high-school",
    type: "자사고등학교",
    title: "자사고 내신관리",
    summary:
      "자사고 내신은 과목별 학습량이 많고 수행평가 반영도 높기 때문에 시험 전 루틴과 주간 관리가 중요합니다.",
    keywords: ["제2외국어", "수학1", "수학2", "심화영어", "고급물리", "고급화학", "AP", "IB"],
    details: [
      "국어, 영어, 수학, 사회, 과학을 필수 축으로 두고 시험 전 과목별 시간을 배분합니다.",
      "제2외국어는 단어, 문법, 수행평가 준비를 시험 기간에 밀리지 않도록 별도로 관리합니다.",
      "상위권은 고난도 변형과 실전 시간 관리, 중위권은 개념 공백과 반복 오답을 우선 보완합니다."
    ]
  },
  {
    id: "top-general-high-school",
    type: "갓반고등학교",
    title: "갓반고 내신관리",
    summary:
      "상위권 일반고는 학교별 변별 문항과 수행평가 비중이 높기 때문에 주요 과목의 우선순위를 빠르게 정해야 합니다.",
    keywords: ["수학1", "수학2", "언어와매체", "문학", "심화영어", "심화문항", "수행평가"],
    details: [
      "국어, 영어, 수학, 사회, 과학 필수 과목의 시험 범위와 학교 프린트를 먼저 정리합니다.",
      "상위권 경쟁에서 점수가 갈리는 서술형, 심화문항, 시간 관리 포인트를 별도로 훈련합니다.",
      "수행평가 일정과 시험 대비가 겹치지 않도록 월별·주별 학습량을 함께 조정합니다."
    ]
  },
  {
    id: "arts-high-school",
    type: "예술고등학교",
    title: "예고 내신관리",
    summary:
      "예술고는 실기 일정과 내신 일정이 함께 움직이기 때문에 짧은 시간 안에 핵심 과목과 수행평가를 압축 관리해야 합니다.",
    keywords: ["수행평가"],
    details: [
      "국어, 영어, 수학, 사회, 과학 필수 과목의 시험 범위를 작게 나눠 실기 일정과 함께 배치합니다.",
      "수행평가는 제출물, 발표, 감상문, 포트폴리오 일정을 미리 확인해 내신 학습과 연결합니다.",
      "수업 가능 시간이 제한적인 학생은 단기 시험 대비와 주간 과제 관리를 병행합니다."
    ]
  }
];

export default function SpecializedHighSchoolsPage() {
  return (
    <>
      <section className="subpage-hero specialized-hero">
        <p className="eyebrow">특목고 내신관리</p>
        <h1>학교에 맞춰 과목별 전략을 세웁니다</h1>
        <p>
          특목고 내신은 학교 유형마다 필요한 과목과 수행평가 흐름이 다릅니다. 우리학교과외는 필수 과목을
          중심으로 학교별 특성을 함께 반영합니다.
        </p>
      </section>

      <section className="specialized-school-grid" aria-label="특목고 유형별 카드">
        {specialSchoolTypes.map((school) => (
          <article className="specialized-school-card" key={school.id}>
            <span>{school.type}</span>
            <h2>{school.title}</h2>
            <p>{school.summary}</p>
            <div className="school-subject-tags" aria-label={`${school.type} 필수 과목`}>
              {requiredSubjects.map((subject) => (
                <em key={subject}>{subject}</em>
              ))}
              {school.keywords.map((keyword) => (
                <em className="accent" key={keyword}>{keyword}</em>
              ))}
            </div>
            <Link className="button secondary" href={`#${school.id}`}>
              자세히 보기
            </Link>
          </article>
        ))}
      </section>

      <section className="specialized-detail-wrap">
        {specialSchoolTypes.map((school) => (
          <article className="specialized-detail-panel" id={school.id} key={school.id}>
            <div>
              <p className="eyebrow">{school.type}</p>
              <h2>{school.title}</h2>
              <p>{school.summary}</p>
              <div className="school-subject-tags compact-tags">
                {requiredSubjects.map((subject) => (
                  <em key={subject}>{subject}</em>
                ))}
                {school.keywords.map((keyword) => (
                  <em className="accent" key={keyword}>{keyword}</em>
                ))}
              </div>
            </div>
            <ul>
              {school.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            {school.id === "international-high-school" && (
              <div className="international-school-links" aria-label="국제고 학교별 페이지">
                {internationalSchoolLinks.map((item) => (
                  <Link key={item.name} href={item.href}>{item.name}</Link>
                ))}
              </div>
            )}
            <div className="specialized-actions">
              <Link className="button" href="/consultation">
                상담신청
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}



