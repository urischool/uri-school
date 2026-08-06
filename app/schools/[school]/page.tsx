import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConsultationForm } from "@/components/ConsultationForm";
import { JsonLd } from "@/components/JsonLd";
import { ReportTitle } from "@/components/PageSections";
import { getSchoolAnalysisImage, schools, subjects } from "@/data/site";
import { absoluteUrl, createMetadata } from "@/lib/seo";
import { getSchool } from "@/lib/data";

const quickMenu = [
  { label: "학교소개", href: "#intro" },
  { label: "연간 학사일정", href: "#calendar" },
  { label: "내신특징", href: "#features" },
  { label: "국어", href: "subject:korean" },
  { label: "영어", href: "subject:english" },
  { label: "수학", href: "subject:math" },
  { label: "사회", href: "subject:social" },
  { label: "과학", href: "subject:science" },
  { label: "제2외국어", href: "subject:second-language" },
  { label: "수업방식", href: "#lesson-method" },
  { label: "학교별 맞춤 내신분석", href: "#analysis" },
  { label: "Q&A", href: "#qa" },
  { label: "상담신청", href: "#consultation" }
];

const daewonQuickMenu = [
  { label: "학교소개", href: "#intro" },
  { label: "연간 학사일정", href: "#calendar" },
  { label: "내신특징", href: "#features" },
  { label: "국어", href: "subject:korean" },
  { label: "영어", href: "subject:english" },
  { label: "수학", href: "subject:math" },
  { label: "사회", href: "subject:social" },
  { label: "과학", href: "subject:science" },
  { label: "일본어", href: "subject:japanese" },
  { label: "중국어", href: "subject:chinese" },
  { label: "프랑스어", href: "subject:french" },
  { label: "독일어", href: "subject:german" },
  { label: "스페인어", href: "subject:spanish" },
  { label: "수업방식", href: "#lesson-method" },
  { label: "학교별 맞춤 내신분석", href: "#analysis" },
  { label: "Q&A", href: "#qa" },
  { label: "상담신청", href: "#consultation" }
];

const subjectCards = [
  ["korean", "국어", "학교 지문, 문법, 서술형 답안을 함께 정리해 감점 요소를 줄입니다."],
  ["english", "영어", "본문, 부교재, 어법, 서술형 변형까지 함께 관리합니다."],
  ["math", "수학", "개념, 유형, 서술형, 시험 직전 실전 훈련을 분리해 보완합니다."],
  ["social", "사회", "개념 구조와 자료 해석, 서술형 답안을 함께 준비합니다."],
  ["science", "과학", "개념, 실험 자료, 계산형 문항을 단원별로 정리합니다."],
  ["second-language", "제2외국어", "어휘, 문법, 회화 표현과 수행평가 기준을 함께 관리합니다."]
] as const;
const daewonSubjectCards = [
  ["korean", "국어", "학교 지문, 문법, 서술형 답안을 함께 정리해 감점 요소를 줄입니다."],
  ["english", "영어", "본문, 부교재, 어법과 서술형 변형까지 함께 관리합니다."],
  ["math", "수학", "개념, 유형, 서술형, 시험 직전 실전 훈련을 분리해 보완합니다."],
  ["social", "사회", "개념 구조와 자료 해석, 서술형 답안을 함께 준비합니다."],
  ["science", "과학", "개념, 실험 자료, 계산형 문항을 단원별로 정리합니다."],
  ["japanese", "일본어", "어휘, 문법, 독해, 회화 표현과 수행평가 기준을 함께 관리합니다."],
  ["chinese", "중국어", "어휘, 문법, 독해, 회화 표현과 수행평가 기준을 함께 관리합니다."],
  ["french", "프랑스어", "어휘, 문법, 독해, 회화 표현과 수행평가 기준을 함께 관리합니다."],
  ["german", "독일어", "어휘, 문법, 독해, 회화 표현과 수행평가 기준을 함께 관리합니다."],
  ["spanish", "스페인어", "어휘, 문법, 독해, 회화 표현과 수행평가 기준을 함께 관리합니다."]
] as const;
function getSubjectLabel(subjectSlug: string) {
  return subjects.find((subject) => subject.slug === subjectSlug)?.name ?? subjectSlug;
}

function getSubjectCardBody(subjectSlug: string) {
  return {
    korean: "학교 지문, 문법, 서술형 답안을 함께 정리해 감점 요소를 줄입니다.",
    english: "본문, 부교재, 어법과 서술형 변형까지 함께 관리합니다.",
    math: "개념, 유형, 서술형, 시험 직전 실전 훈련을 분리해 보완합니다.",
    social: "개념 구조와 자료 해석, 서술형 답안을 함께 준비합니다.",
    science: "개념, 실험 자료, 계산형 문항을 단원별로 정리합니다.",
    "second-language": "어휘, 문법, 회화 표현과 수행평가 기준을 함께 관리합니다.",
    french: "어휘, 문법, 독해, 회화 표현과 수행평가 기준을 함께 관리합니다.",
    german: "격변화, 문장 구조, 독해와 수행평가 기준을 함께 관리합니다.",
    spanish: "동사변화, 어휘, 독해와 회화 수행평가를 함께 관리합니다.",
    japanese: "문자, 어휘, 문법, 독해와 회화 수행평가를 함께 관리합니다.",
    chinese: "성조, 어휘, 문법, 독해와 말하기 수행평가를 함께 관리합니다.",
    russian: "문자, 발음, 격변화, 독해와 말하기 수행평가를 함께 관리합니다.",
    vietnamese: "성조, 어휘, 문법, 독해와 말하기 수행평가를 함께 관리합니다.",
    arabic: "문자, 발음, 어휘, 문법과 말하기 수행평가를 함께 관리합니다.",
    ib: "탐구형 과제, 영어 독해, 에세이형 답안을 함께 관리합니다.",
    performance: "보고서, 발표, 포트폴리오와 평가 기준을 학교 일정에 맞춰 관리합니다.",
    "research-experiment": "탐구 설계, 실험 자료, 보고서와 발표를 함께 관리합니다."
  }[subjectSlug] ?? "학교 자료와 수행평가 기준을 함께 관리합니다.";
}

function getSchoolSubjectCards(school: { availableSubjects: string[] }) {
  return school.availableSubjects
    .map((slug) => {
      const subject = subjects.find((item) => item.slug === slug);
      return subject ? [slug, subject.name, getSubjectCardBody(slug)] as const : null;
    })
    .filter((item): item is readonly [string, string, string] => Boolean(item));
}

function getSchoolQuickMenu(school: { availableSubjects: string[] }) {
  const subjectItems = getSchoolSubjectCards(school).map(([slug, label]) => ({ label, href: `subject:${slug}` }));
  return [
    { label: "학교소개", href: "#intro" },
    { label: "연간 학사일정", href: "#calendar" },
    { label: "내신특징", href: "#features" },
    ...subjectItems,
    { label: "수업방식", href: "#lesson-method" },
    { label: "학교별 맞춤 내신분석", href: "#analysis" },
    { label: "Q&A", href: "#qa" },
    { label: "상담신청", href: "#consultation" }
  ];
}
const hubFaqs = [
  {
    question: "고양국제고 국어 내신은 어떻게 준비하나요?",
    answer: "학교 지문, 수업 필기, 문법 범위, 서술형 답안 기준을 함께 확인해 시험 범위에 맞춰 준비합니다.",
    link: "korean"
  },
  {
    question: "고양국제고 영어 내신대비는 어떻게 진행하나요?",
    answer: "본문, 부교재, 어법, 서술형, 수행평가 기준을 함께 분석해 학교 시험 흐름에 맞춰 진행합니다.",
    link: "english"
  },
  {
    question: "고양국제고 수학 과외는 어떤 학생에게 필요한가요?",
    answer: "개념은 알고 있지만 유형 적용, 서술형 풀이, 시간 관리에서 흔들리는 학생에게 적합합니다.",
    link: "math"
  },
  {
    question: "사회·과학·제2외국어도 수업이 가능한가요?",
    answer: "가능합니다. 과목별 학교 자료, 수행평가 일정, 시험 범위를 기준으로 내신 대비 흐름을 설계합니다.",
    link: "second-language"
  },
  {
    question: "중간고사와 기말고사 직전 대비도 가능한가요?",
    answer: "가능합니다. 시험 2~4주 전부터 학교 자료와 오답을 기준으로 개념, 유형, 서술형, 실전 훈련을 집중 관리합니다."
  },
  {
    question: "상담 전에 무엇을 준비하면 좋나요?",
    answer: "최근 시험지, 학교 프린트, 수행평가 일정, 현재 등급과 목표 등급을 알려주시면 더 정확하게 진단할 수 있습니다."
  }
] as const;

const internationalSchoolNameMap: Record<string, string> = {
  "goyang-international-high-school": "고양국제고",
  "seoul-international-high-school": "서울국제고",
  "dongtan-international-high-school": "동탄국제고",
  "cheongshim-international-high-school": "청심국제고",
  "incheon-international-high-school": "인천국제고",
  "busan-international-high-school": "부산국제고",
  "sejong-international-high-school": "세종국제고",
  "daegu-international-high-school": "대구국제고",
  "daewon-foreign-language-high-school": "대원외고",
  "daeil-foreign-language-high-school": "대일외고",
  "myeongdeok-foreign-language-high-school": "명덕외고",
  "hanyoung-foreign-language-high-school": "한영외고",
  "seoul-foreign-language-high-school": "서울외고",
  "ewha-foreign-language-high-school": "이화외고",
  "gyeonggi-foreign-language-high-school": "경기외고",
  "goyang-foreign-language-high-school": "고양외고",
  "gwacheon-foreign-language-high-school": "과천외고",
  "gimpo-foreign-language-high-school": "김포외고",
  "dongducheon-foreign-language-high-school": "동두천외고",
  "seongnam-foreign-language-high-school": "성남외고",
  "suwon-foreign-language-high-school": "수원외고",
  "anyang-foreign-language-high-school": "안양외고",
  "michuhol-foreign-language-high-school": "미추홀외고",
  "incheon-foreign-language-high-school": "인천외고",
  "jeonnam-foreign-language-high-school": "전남외고",
  "jeonbuk-foreign-language-high-school": "전북외고",
  "gyeongnam-foreign-language-high-school": "경남외고",
  "gimhae-foreign-language-high-school": "김해외고",
  "gyeongbuk-foreign-language-high-school": "경북외고",
  "chungnam-foreign-language-high-school": "충남외고",
  "chungbuk-foreign-language-high-school": "충북외고",
  "daegu-foreign-language-high-school": "대구외고",
  "daejeon-foreign-language-high-school": "대전외고",
  "busan-foreign-language-high-school": "부산외고",
  "ulsan-foreign-language-high-school": "울산외고",
  "jeju-foreign-language-high-school": "제주외고",
  "science-high-school": "과학고"
};


const scienceSchoolNameMap: Record<string, string> = {
  "hansung-science-high-school": "한성과고",
  "sejong-science-high-school": "세종과고",
  "gyeonggibuk-science-high-school": "경기북과고",
  "incheon-science-high-school": "인천과고",
  "jinsan-science-high-school": "진산과고",
  "gangwon-science-high-school": "강원과고",
  "jeonnam-science-high-school": "전남과고",
  "jeonbuk-science-high-school": "전북과고",
  "gyeongnam-science-high-school": "경남과고",
  "changwon-science-high-school": "창원과고",
  "gyeongbuk-science-high-school": "경북과고",
  "gyeongsan-science-high-school": "경산과고",
  "chungnam-science-high-school": "충남과고",
  "chungbuk-science-high-school": "충북과고",
  "daegu-il-science-high-school": "대구일과고",
  "dongshin-science-high-school": "동신과고",
  "busan-science-high-school": "부산과고",
  "busan-il-science-high-school": "부산일과고",
  "ulsan-science-high-school": "울산과고",
  "jeju-science-high-school": "제주과고"
};

const nationalPrivateSchoolNameMap: Record<string, string> = {
  "minjok-leadership-academy": "민족사관고",
  "sangsan-high-school": "상산고",
  "hyundai-cheongun-high-school": "현대청운고",
  "pohang-jecheol-high-school": "포항제철고",
  "gwangyang-jecheol-high-school": "광양제철고",
  "gimcheon-high-school": "김천고",
  "bugil-high-school": "북일고",
  "hana-academy-seoul": "하나고",
  "incheon-haneul-high-school": "인천하늘고",
  "yongin-korean-foreign-language-university-bugoseo-high-school": "용인외대부고"
};
const schoolNameBySlug = Object.fromEntries(schools.map((school) => [school.slug, school.name]));
const exactTemplateSchoolPrefixes = ["autonomous-private-high-school-", "top-general-high-school-", "arts-high-school-"];
function usesExactTemplateVisuals(schoolSlug: string) {
  return exactTemplateSchoolPrefixes.some((prefix) => schoolSlug.startsWith(prefix));
}
function adaptSchoolText(text: string, schoolSlug: string) {
  const schoolName = internationalSchoolNameMap[schoolSlug] ?? scienceSchoolNameMap[schoolSlug] ?? nationalPrivateSchoolNameMap[schoolSlug] ?? schoolNameBySlug[schoolSlug];
  if (!schoolName || schoolName === "고양국제고") return text;
  return text.replaceAll("고양국제고", schoolName).replaceAll("고국고", schoolName).replaceAll("고양", schoolName.replace("국제고", ""));
}

function getSchoolVisuals(schoolSlug: string, schoolName: string) {
  if (schoolSlug.startsWith("autonomous-private-high-school-")) {
    return {
      analysis: `/images/${schoolSlug}-school-analysis-v4.svg?v=exact-template-20260803b`,
      currentStatus: "/images/goyang-current-status-report.png",
      feedback: "/images/goyang-custom-analysis-feedback.png",
      lessons: [
        ["/images/regional-autonomous-private-high-school-lesson-method-1.png", `${schoolName} \uC790\uC0AC\uACE0\uD615 \uB0B4\uC2E0\uB300\uBE44 \uC218\uC5C5\uBC29\uC2DD`],
        ["/images/regional-autonomous-private-high-school-lesson-method-2.png", `${schoolName} \uC790\uC0AC\uACE0 \uC804\uBB38 \uAD50\uC0AC\uC9C4`]
      ] as const
    };
  }
  if (schoolSlug.startsWith("top-general-high-school-")) {
    return {
      analysis: `/images/${schoolSlug}-school-analysis-v4.svg?v=exact-template-20260803b`,
      currentStatus: "/images/goyang-current-status-report.png",
      feedback: "/images/goyang-custom-analysis-feedback.png",
      lessons: [
        ["/images/top-general-high-school-lesson-method-1.png", `${schoolName} \uAC13\uBC18\uACE0\uD615 \uB0B4\uC2E0\uB300\uBE44 \uC218\uC5C5\uBC29\uC2DD`],
        ["/images/top-general-high-school-lesson-method-2.png", `${schoolName} \uAC13\uBC18\uACE0 \uC804\uBB38 \uAD50\uC0AC\uC9C4`]
      ] as const
    };
  }
  if (schoolSlug.startsWith("arts-high-school-")) {
    return {
      analysis: `/images/${schoolSlug}-school-analysis-v4.svg?v=exact-template-20260803b`,
      currentStatus: "/images/goyang-current-status-report.png",
      feedback: "/images/goyang-custom-analysis-feedback.png",
      lessons: [
        ["/images/arts-high-school-lesson-method-1.png", `${schoolName} \uC608\uACE0\uD615 \uB0B4\uC2E0\uB300\uBE44 \uC218\uC5C5\uBC29\uC2DD`],
        ["/images/arts-high-school-lesson-method-2.png", `${schoolName} \uC608\uACE0 \uC804\uBB38 \uAD50\uC0AC\uC9C4`]
      ] as const
    };
  }
  if (usesExactTemplateVisuals(schoolSlug)) {
    return {
      analysis: `/images/${schoolSlug}-school-analysis-v4.svg?v=exact-template-20260803b`,
      currentStatus: "/images/goyang-current-status-report.png",
      feedback: "/images/goyang-custom-analysis-feedback.png",
      lessons: [
        ["/images/daewon-foreign-language-high-school-lesson-method-1.png", `${schoolName} 내신대비 수업방식`],
        ["/images/daewon-foreign-language-high-school-lesson-method-2.png", `${schoolName} 전문 교사진`]
      ] as const
    };
  }
  if (nationalPrivateSchoolNameMap[schoolSlug]) {
    return {
      analysis: `/images/${schoolSlug}-school-analysis-v4.svg?v=national-private-exact-20260803`,
      currentStatus: "/images/goyang-current-status-report.png",
      feedback: "/images/goyang-custom-analysis-feedback.png",
      lessons: [
        ["/images/national-private-high-school-lesson-method-1.png", `${schoolName} 전사고형 내신대비 수업방식`],
        ["/images/national-private-high-school-lesson-method-2.png", `${schoolName} 전사고 전문 교사진`]
      ] as const
    };
  }
  if (schoolSlug.includes("science-high-school")) {
    return {
      analysis: `/images/${schoolSlug}-school-analysis-v4.svg`,
      currentStatus: "/images/goyang-current-status-report.png",
      feedback: "/images/goyang-custom-analysis-feedback.png",
      lessons: [
        ["/images/science-high-school-lesson-method-user-7-1.png", `${schoolName} 과학고 학생 지도 방식`],
        ["/images/science-high-school-lesson-method-user-8-1.png", `${schoolName} 과학고 전문 교사진`]
      ] as const
    };
  }
  if (schoolSlug.includes("foreign-language-high-school")) {
    return {
      analysis: `/images/${schoolSlug}-school-analysis-v4.svg`,
      currentStatus: "/images/goyang-current-status-report.png",
      feedback: "/images/goyang-custom-analysis-feedback.png",
      lessons: [
        ["/images/daewon-foreign-language-high-school-lesson-method-1.png", `${schoolName} 외고형 내신대비 수업방식`],
        ["/images/daewon-foreign-language-high-school-lesson-method-2.png", `${schoolName} 외고 전문 교사진`]
      ] as const
    };
  }
  if (schoolSlug === "goyang-international-high-school") {
    return {
      analysis: "/images/goyang-international-school-analysis.png",
      currentStatus: "/images/goyang-current-status-report.png",
      feedback: "/images/goyang-custom-analysis-feedback.png",
      lessons: [
        ["/images/lesson-method-1.png", `${schoolName} 내신대비 수업방식`],
        ["/images/lesson-method-2.png", `${schoolName} 과목별 관리`],
        ["/images/lesson-method-3.png", `${schoolName} 전문 교사진`]
      ] as const
    };
  }

  if (internationalSchoolNameMap[schoolSlug]) {
    return {
      analysis: `/images/${schoolSlug}-school-analysis-v4.svg`,
      currentStatus: "/images/goyang-current-status-report.png",
      feedback: "/images/goyang-custom-analysis-feedback.png",
      lessons: [
        ["/images/lesson-method-2.png", `${schoolName} 과목별 관리`],
        ["/images/lesson-method-3.png", `${schoolName} 전문 교사진`]
      ] as const
    };
  }

  return {
    analysis: `/images/${schoolSlug}-school-analysis-v4.svg`,
    currentStatus: `/images/${schoolSlug}-current-status-report.svg`,
    feedback: `/images/${schoolSlug}-custom-analysis-feedback.svg`,
    lessons: [
      [`/images/${schoolSlug}-lesson-method-1.svg`, `${schoolName} 내신대비 수업방식`],
      [`/images/${schoolSlug}-lesson-method-2.svg`, `${schoolName} 과목별 관리`],
      [`/images/${schoolSlug}-lesson-method-3.svg`, `${schoolName} 전문 교사진`]
    ] as const
  };
}

export function generateStaticParams() {
  return schools.map((school) => ({ school: school.slug }));
}

export function generateMetadata({ params }: { params: { school: string } }) {
  const school = getSchool(params.school);
  if (!school) return {};
  const t = (text: string) => adaptSchoolText(text, school.slug);
  const image = getSchoolAnalysisImage(school);

  return createMetadata({
    title: `${school.name} 내신 가이드 - 중간고사·기말고사·수행평가 내신대비`,
    description: t("고양국제고 내신 종합 가이드입니다. 과목별 내신대비, 중간고사, 기말고사, 수행평가, 학교별 맞춤 수업 방식을 확인하세요."),
    path: `/schools/${school.slug}`,
    image
  });
}

export default function SchoolPage({ params }: { params: { school: string } }) {
  const school = getSchool(params.school);
  if (!school) notFound();
  const t = (text: string) => adaptSchoolText(text, school.slug);
  const schoolVisuals = getSchoolVisuals(school.slug, school.name);
  const pageSubjectCards = getSchoolSubjectCards(school);
  const pageQuickMenu = getSchoolQuickMenu(school);
  const schoolAnalysisImage = schoolVisuals.analysis;
  const lessonMethodImages = schoolVisuals.lessons;

  const breadcrumbs = [
    { label: "홈", href: "/" },
    { label: school.name, href: `/schools/${school.slug}` }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hubFaqs.map((faq) => ({
      "@type": "Question",
      name: t(faq.question),
      acceptedAnswer: { "@type": "Answer", text: t(faq.answer) }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href)
    }))
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: `${school.name} 내신 가이드 | 우리학교과외`,
    url: absoluteUrl(`/schools/${school.slug}`),
    areaServed: school.area,
    description: school.summary
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={organizationSchema} />
      <Breadcrumbs items={breadcrumbs} />

      <section className="school-hub-hero">
        <figure className="branded-image">
          <img className="report-cover-image" src={schoolAnalysisImage} alt={t("고양국제고 학교분석 자료")} />
        </figure>
        <div className="school-hub-hero-copy">
          <p className="eyebrow">{school.name} 내신관리</p>
          <h1 className="visually-hidden">{school.name} 내신 가이드</h1>
          <div className="school-hub-hero-text">
            <p>{t("고양국제고의 내신은 중간고사, 기말고사, 수행평가, 비교과 활동까지 함께 준비해야 합니다.")}</p>
            <p>{t("우리학교과외는 고양국제고의 출제경향과 평가 방식을 분석해 학생별 맞춤 학습 전략을 설계합니다.")}</p>
            <ul className="school-hub-hero-points" aria-label={`${school.name} 내신 관리 핵심`}>
              <li>학교별 출제경향 분석</li>
              <li>과목별 맞춤 내신관리</li>
              <li>학생별 학습전략 설계</li>
            </ul>
          </div>
        </div>
      </section>

      <nav className="quick-menu" aria-label={`${school.name} 페이지 빠른 이동`}>
        {pageQuickMenu.map((item) => {
          const href = item.href.startsWith("subject:") ? `/schools/${school.slug}/${item.href.replace("subject:", "")}` : item.href;
          return <a href={href} key={`${item.label}-${item.href}`}>{item.label}</a>;
        })}
      </nav>

      <main className="report-wrap school-hub-wrap">
        <section className="report-panel" id="intro">
          <ReportTitle title={`${school.name} 내신 ! 전략이 필요합니다`} />
          <p className="section-kicker">아래에서 원하시는 과목을 선택해주세요</p>
          <div className="subject-card-grid">
            {pageSubjectCards.map(([slug, label, body]) => (
              <Link className="subject-card" href={`/schools/${school.slug}/${slug}`} key={slug}>
                <strong>{label}</strong>
                <span>{t(`고양국제고 ${label} 내신은 ${body}`)}</span>
                <em>{label} 내신대비 확인</em>
              </Link>
            ))}
          </div>
        </section>
        <section className="report-panel" id="calendar">
          <ReportTitle title={`${school.name} 연간 학사일정`} subtitle="학교 시험 일정에 맞춰 수업 계획을 조정합니다" />
          <p className="section-kicker">중간·기말 시점에 맞춰 수업 강도를 조절합니다.</p>
          <table className="exam-table">
            <thead><tr><th>구분</th><th>1학기 중간</th><th>1학기 기말</th><th>2학기 중간</th><th>2학기 기말</th></tr></thead>
            <tbody>
              <tr><td>고1·2</td><td>4월 말</td><td>7월 초</td><td>9월 중순</td><td>12월 중순</td></tr>
              <tr><td>고3</td><td>4월 말</td><td>7월 초</td><td>수시 일정</td><td>개별 관리</td></tr>
            </tbody>
          </table>
        </section>

        <section className="report-panel" id="features">
          <ReportTitle title={`${school.name} 내신특징`} />
          <div className="analysis-cards">
            <article className="analysis-card"><strong>학교 자료 중심</strong><p>교과서, 프린트, 부교재, 수업 필기를 기준으로 시험 대비 방향을 잡습니다.</p></article>
            <article className="analysis-card"><strong>수행평가 병행</strong><p>발표, 보고서, 글쓰기, 실험 정리 등 수행평가 일정을 내신 계획에 반영합니다.</p></article>
            <article className="analysis-card"><strong>과목별 전략 분리</strong><p>국어, 영어, 수학, 사회, 과학, 제2외국어의 평가 방식에 맞춰 수업 흐름을 다르게 설계합니다.</p></article>
          </div>

        </section>
        <section className="report-panel" id="lesson-method">
          <ReportTitle title={`${school.name} 학생 이렇게 가르칩니다`} subtitle={`${school.name} 내신 흐름에 맞춘 1:1 수업 방식`} />
          <div className="lesson-method-grid">
            {lessonMethodImages.map(([src, alt]) => (
              <article className="lesson-method-card" key={src}>
                <img src={src} alt={alt} />
              </article>
            ))}
          </div>
        </section>


        <section className="report-panel" id="analysis">
          <ReportTitle title={`${school.name} 학교별 맞춤 내신분석`} />
          <figure className="branded-image">
            <img className="report-cover-image" src={schoolVisuals.feedback} alt={`${school.name} 학교별 맞춤 내신분석`} />
          </figure>
          <figure className="branded-image lesson-teaching-visual">
            <img className="report-cover-image" src={schoolVisuals.currentStatus} alt={`${school.name} 학생 현재상황 체크 리포트`} />
          </figure>
        </section>

        <section className="report-panel" id="qa">
          <ReportTitle title={`${school.name} 내신 Q&A`} />
          <div className="faq-list">
            {hubFaqs.map((faq) => (
              <details className="faq-item" key={t(faq.question)}>
                <summary>{t(faq.question)}</summary>
                <p>
                  {t(faq.answer)}{" "}
                  {"link" in faq && faq.link && <Link className="inline-link" href={`/schools/${school.slug}/${faq.link}`}>{`${school.name} ${getSubjectLabel(faq.link)} 내신대비 보기`}</Link>}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="school-phone-cta" aria-label="전화상담 바로 연결">
          <div>
            <strong>전화상담 바로 연결</strong>
            <p>{school.name} 내신 준비 방향이 궁금하다면 바로 전화로 상담할 수 있습니다.</p>
          </div>
          <a className="button" href="tel:010-5741-1134" aria-label="010-5741-1134 전화 상담">
            <span aria-hidden="true">☎</span>
            <span>010-5741-1134</span>
          </a>
        </section>
      </main>

      <div id="consultation">
        <ConsultationForm />
      </div>
    </>
  );
}
