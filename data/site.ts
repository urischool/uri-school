export const site = {
  name: "우리학교과외",
  tagline: "학교별 맞춤 내신관리 과외",
  description: "특목고, 국제고, 외고 학생을 위한 학교별 맞춤 내신관리와 수행평가 대비 1:1 과외.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://uri-school.imweb.me",
  phone: "010-5741-1134",
  nav: [
    { label: "우리학교과외", href: "/" },
    { label: "특목고", href: "/specialized-high-schools" },
    { label: "수업방식", href: "/lesson-method" },
    { label: "과외문의", href: "/#inquiries" },
    { label: "실제후기", href: "/#reviews" },
    { label: "상담신청", href: "/consultation" }
  ]
};

export type Subject = {
  slug: string;
  name: string;
  title: string;
  summary: string;
  strengths: string[];
};

export type School = {
  slug: string;
  name: string;
  type: "international-high-school" | "foreign-language-high-school" | "science-high-school" | "autonomous-private-high-school" | "regional-autonomous-private-high-school" | "top-general-high-school" | "arts-high-school";
  typeLabel: string;
  area: string;
  summary: string;
  availableSubjects: string[];
};

export type SchoolSubjectPage = {
  schoolSlug: string;
  subjectSlug: string;
  heroImage: string;
  h1: string;
  summary: string;
  aiSummary: string[];
  features: string[];
  currentChecks: string[];
  analysis: string[];
  curriculum: { title: string; items: string[] }[];
  cases: { title: string; body: string }[];
  faqs: { question: string; answer: string }[];
};

export const subjects: Subject[] = [
  { slug: "korean", name: "국어", title: "국어 내신관리 과외", summary: "학교 지문, 문법, 서술형 답안을 함께 정리합니다.", strengths: ["학교 지문 분석", "문법 적용", "서술형 답안 관리"] },
  { slug: "english", name: "영어", title: "영어 내신관리 과외", summary: "본문, 부교재, 어법, 서술형 변형까지 관리합니다.", strengths: ["본문 변형 대비", "어법 오답 관리", "서술형 문장 훈련"] },
  { slug: "math", name: "수학", title: "수학 내신관리 과외", summary: "개념, 유형, 서술형, 실전 훈련을 분리해 보완합니다.", strengths: ["개념 공백 진단", "유형별 오답 분석", "서술형 풀이 관리"] },
  { slug: "social", name: "사회", title: "사회 내신관리 과외", summary: "개념 구조와 자료 해석, 서술형 답안을 함께 준비합니다.", strengths: ["개념 구조화", "자료 해석", "서술형 답안"] },
  { slug: "science", name: "과학", title: "과학 내신관리 과외", summary: "개념, 탐구 자료, 계산형 문항을 단원별로 정리합니다.", strengths: ["단원별 개념", "탐구 자료 해석", "계산형 대비"] },
  { slug: "second-language", name: "제2외국어", title: "제2외국어 내신관리 과외", summary: "어휘, 문법, 회화 표현과 수행평가 기준을 함께 관리합니다.", strengths: ["어휘 누적", "문법 적용", "수행평가 대비"] },
  { slug: "french", name: "프랑스어", title: "프랑스어 내신관리 과외", summary: "어휘, 문법, 독해, 회화와 작문 수행평가를 함께 관리합니다.", strengths: ["어휘 누적", "문법 적용", "회화·작문 수행평가"] },
  { slug: "german", name: "독일어", title: "독일어 내신관리 과외", summary: "격변화, 문장 구조, 독해와 수행평가 기준을 함께 관리합니다.", strengths: ["문법 구조", "독해 적용", "수행평가 대비"] },
  { slug: "spanish", name: "스페인어", title: "스페인어 내신관리 과외", summary: "동사변화, 어휘, 독해, 회화 표현과 수행평가를 함께 관리합니다.", strengths: ["동사변화", "본문 독해", "회화 수행평가"] },
  { slug: "japanese", name: "일본어", title: "일본어 내신관리 과외", summary: "문자, 어휘, 문법, 독해와 회화 수행평가를 함께 관리합니다.", strengths: ["문자·어휘", "문법 적용", "회화 수행평가"] },
  { slug: "chinese", name: "중국어", title: "중국어 내신관리 과외", summary: "성조, 어휘, 문법, 독해와 말하기 수행평가를 함께 관리합니다.", strengths: ["성조·어휘", "문법 적용", "말하기 수행평가"] },
  { slug: "russian", name: "러시아어", title: "러시아어 내신관리 과외", summary: "문자, 발음, 격변화, 독해와 말하기 수행평가를 함께 관리합니다.", strengths: ["문자·발음", "격변화", "말하기 수행평가"] },
  { slug: "vietnamese", name: "베트남어", title: "베트남어 내신관리 과외", summary: "성조, 어휘, 문법, 독해와 말하기 수행평가를 함께 관리합니다.", strengths: ["성조·어휘", "문법 적용", "말하기 수행평가"] },
  { slug: "arabic", name: "아랍어", title: "아랍어 내신관리 과외", summary: "문자, 발음, 어휘, 문법과 말하기 수행평가를 함께 관리합니다.", strengths: ["문자·발음", "어휘 누적", "말하기 수행평가"] },
  { slug: "ib", name: "IB반", title: "IB반 내신관리 과외", summary: "IB 수업의 탐구형 과제, 영어 독해, 에세이형 답안을 함께 관리합니다.", strengths: ["탐구형 과제", "영어 독해", "에세이 답안"] },
  { slug: "performance", name: "수행평가", title: "수행평가 관리 과외", summary: "보고서, 발표, 포트폴리오, 산출물 기준을 학교 일정에 맞춰 관리합니다.", strengths: ["보고서 관리", "발표 대비", "평가 기준 분석"] },
  { slug: "research-experiment", name: "탐구/실험", title: "탐구·실험 내신관리 과외", summary: "실험 설계, 탐구 보고서, 자료 해석과 발표까지 함께 관리합니다.", strengths: ["실험 설계", "자료 해석", "탐구 보고서"] }
];

const allSubjectSlugs = subjects.map((subject) => subject.slug);

const coreSubjectSlugs = ["korean", "english", "math", "social", "science"] as const;
const internationalSubjectSlugs = [...coreSubjectSlugs, "second-language"] as const;
export const scienceHighSchoolSubjects = ["math", "science", "english", "korean", "social", "performance", "research-experiment", "second-language"] as const;
export const foreignLanguageSchoolSubjects: Record<string, string[]> = {
  "daewon-foreign-language-high-school": [...coreSubjectSlugs, "japanese", "chinese", "french", "german", "spanish"],
  "daeil-foreign-language-high-school": [...coreSubjectSlugs, "german", "spanish", "french", "russian", "japanese", "chinese"],
  "myeongdeok-foreign-language-high-school": [...coreSubjectSlugs, "german", "french", "russian", "japanese", "chinese"],
  "hanyoung-foreign-language-high-school": [...coreSubjectSlugs, "french", "german", "spanish", "chinese", "japanese"],
  "seoul-foreign-language-high-school": [...coreSubjectSlugs, "french", "german", "spanish", "chinese", "japanese"],
  "ewha-foreign-language-high-school": [...coreSubjectSlugs, "german", "french", "chinese"],
  "gyeonggi-foreign-language-high-school": [...coreSubjectSlugs, "ib", "chinese", "japanese"],
  "goyang-foreign-language-high-school": [...coreSubjectSlugs, "spanish", "chinese", "japanese"],
  "gwacheon-foreign-language-high-school": [...coreSubjectSlugs, "french", "german"],
  "gimpo-foreign-language-high-school": [...coreSubjectSlugs, "chinese", "japanese"],
  "dongducheon-foreign-language-high-school": [...coreSubjectSlugs, "chinese", "japanese"],
  "seongnam-foreign-language-high-school": [...coreSubjectSlugs, "german", "chinese", "japanese"],
  "suwon-foreign-language-high-school": [...coreSubjectSlugs, "french", "russian", "chinese", "japanese"],
  "anyang-foreign-language-high-school": [...coreSubjectSlugs, "chinese", "japanese"],
  "michuhol-foreign-language-high-school": [...coreSubjectSlugs, "spanish", "french", "chinese", "japanese"],
  "incheon-foreign-language-high-school": [...coreSubjectSlugs, "spanish", "chinese", "japanese"],
  "jeonnam-foreign-language-high-school": [...coreSubjectSlugs, "german", "french", "english", "chinese"],
  "jeonbuk-foreign-language-high-school": [...coreSubjectSlugs, "spanish", "german", "french", "chinese", "japanese"],
  "gyeongnam-foreign-language-high-school": [...coreSubjectSlugs, "chinese", "japanese"],
  "gimhae-foreign-language-high-school": [...coreSubjectSlugs, "chinese", "japanese"],
  "gyeongbuk-foreign-language-high-school": [...coreSubjectSlugs, "chinese", "japanese"],
  "chungnam-foreign-language-high-school": [...coreSubjectSlugs, "vietnamese", "chinese", "japanese"],
  "chungbuk-foreign-language-high-school": [...coreSubjectSlugs, "german", "french", "spanish", "russian", "vietnamese", "japanese", "chinese"],
  "daegu-foreign-language-high-school": [...coreSubjectSlugs, "spanish", "japanese", "french", "chinese"],
  "daejeon-foreign-language-high-school": [...coreSubjectSlugs, "german", "french", "spanish", "russian", "chinese", "japanese"],
  "busan-foreign-language-high-school": [...coreSubjectSlugs, "german", "french", "spanish", "chinese", "japanese"],
  "ulsan-foreign-language-high-school": [...coreSubjectSlugs, "russian", "arabic", "chinese", "japanese"],
  "jeju-foreign-language-high-school": [...coreSubjectSlugs, "spanish", "chinese", "japanese"],
};

export const schools: School[] = [
  { slug: "goyang-international-high-school", name: "고양국제고", type: "international-high-school", typeLabel: "국제고등학교", area: "경기도 고양시", summary: "고양국제고 내신은 중간고사, 기말고사, 수행평가와 학교별 자료 흐름을 함께 관리해야 합니다.", availableSubjects: [...internationalSubjectSlugs] },
  { slug: "seoul-international-high-school", name: "서울국제고", type: "international-high-school", typeLabel: "국제고등학교", area: "서울특별시", summary: "서울국제고 내신은 학교 자료, 수행평가, 서술형 대비를 학교 일정에 맞춰 관리해야 합니다.", availableSubjects: [...internationalSubjectSlugs] },
  { slug: "dongtan-international-high-school", name: "동탄국제고", type: "international-high-school", typeLabel: "국제고등학교", area: "경기도 화성시", summary: "동탄국제고 내신은 과목별 출제경향과 수행평가 기준을 함께 확인해야 합니다.", availableSubjects: [...internationalSubjectSlugs] },
  { slug: "cheongshim-international-high-school", name: "청심국제고", type: "international-high-school", typeLabel: "국제고등학교", area: "경기도 가평군", summary: "청심국제고 내신은 과목별 수업 자료와 수행평가 일정을 함께 관리해야 합니다.", availableSubjects: [...internationalSubjectSlugs] },
  { slug: "incheon-international-high-school", name: "인천국제고", type: "international-high-school", typeLabel: "국제고등학교", area: "인천광역시", summary: "인천국제고 내신은 학교별 출제경향과 과목별 커리큘럼을 함께 관리해야 합니다.", availableSubjects: [...internationalSubjectSlugs] },
  { slug: "busan-international-high-school", name: "부산국제고", type: "international-high-school", typeLabel: "국제고등학교", area: "부산광역시", summary: "부산국제고 내신은 교과서, 프린트, 수행평가 일정을 기준으로 전략을 세워야 합니다.", availableSubjects: [...internationalSubjectSlugs] },
  { slug: "sejong-international-high-school", name: "세종국제고", type: "international-high-school", typeLabel: "국제고등학교", area: "세종특별자치시", summary: "세종국제고 내신은 시험 범위, 수행평가, 과목별 출제경향을 함께 관리해야 합니다.", availableSubjects: [...internationalSubjectSlugs] },
  { slug: "daegu-international-high-school", name: "대구국제고", type: "international-high-school", typeLabel: "국제고등학교", area: "대구광역시", summary: "대구국제고 내신은 IB영어, 국제사회 계열 과목, 제2외국어 흐름을 학교 자료 중심으로 관리해야 합니다.", availableSubjects: [...internationalSubjectSlugs] },
  { slug: "daewon-foreign-language-high-school", name: "대원외고", type: "foreign-language-high-school", typeLabel: "외국어고등학교", area: "서울특별시 광진구", summary: "대원외고 내신은 주요 과목과 외국어 전공 과목을 학교 자료와 수행평가 기준에 맞춰 함께 관리해야 합니다.", availableSubjects: foreignLanguageSchoolSubjects["daewon-foreign-language-high-school"] },
  { slug: "daeil-foreign-language-high-school", name: "대일외고", type: "foreign-language-high-school", typeLabel: "외국어고등학교", area: "서울특별시 성북구", summary: "대일외고 내신은 주요 과목과 외국어 전공 과목을 학교 자료와 수행평가 기준에 맞춰 함께 관리해야 합니다.", availableSubjects: foreignLanguageSchoolSubjects["daeil-foreign-language-high-school"] },
  { slug: "myeongdeok-foreign-language-high-school", name: "명덕외고", type: "foreign-language-high-school", typeLabel: "외국어고등학교", area: "서울특별시 강서구", summary: "명덕외고 내신은 주요 과목과 외국어 전공 과목을 학교 자료와 수행평가 기준에 맞춰 함께 관리해야 합니다.", availableSubjects: foreignLanguageSchoolSubjects["myeongdeok-foreign-language-high-school"] },
  { slug: "hanyoung-foreign-language-high-school", name: "한영외고", type: "foreign-language-high-school", typeLabel: "외국어고등학교", area: "서울특별시 강동구", summary: "한영외고 내신은 주요 과목과 외국어 전공 과목을 학교 자료와 수행평가 기준에 맞춰 함께 관리해야 합니다.", availableSubjects: foreignLanguageSchoolSubjects["hanyoung-foreign-language-high-school"] },
  { slug: "seoul-foreign-language-high-school", name: "서울외고", type: "foreign-language-high-school", typeLabel: "외국어고등학교", area: "서울특별시 도봉구", summary: "서울외고 내신은 주요 과목과 외국어 전공 과목을 학교 자료와 수행평가 기준에 맞춰 함께 관리해야 합니다.", availableSubjects: foreignLanguageSchoolSubjects["seoul-foreign-language-high-school"] },
  { slug: "ewha-foreign-language-high-school", name: "이화외고", type: "foreign-language-high-school", typeLabel: "외국어고등학교", area: "서울특별시 중구", summary: "이화외고 내신은 주요 과목과 외국어 전공 과목을 학교 자료와 수행평가 기준에 맞춰 함께 관리해야 합니다.", availableSubjects: foreignLanguageSchoolSubjects["ewha-foreign-language-high-school"] },
  { slug: "gyeonggi-foreign-language-high-school", name: "경기외고", type: "foreign-language-high-school", typeLabel: "외국어고등학교", area: "경기도 의왕시", summary: "경기외고 내신은 주요 과목과 외국어 전공 과목을 학교 자료와 수행평가 기준에 맞춰 함께 관리해야 합니다.", availableSubjects: foreignLanguageSchoolSubjects["gyeonggi-foreign-language-high-school"] },
  { slug: "goyang-foreign-language-high-school", name: "고양외고", type: "foreign-language-high-school", typeLabel: "외국어고등학교", area: "경기도 고양시", summary: "고양외고 내신은 주요 과목과 외국어 전공 과목을 학교 자료와 수행평가 기준에 맞춰 함께 관리해야 합니다.", availableSubjects: foreignLanguageSchoolSubjects["goyang-foreign-language-high-school"] },
  { slug: "gwacheon-foreign-language-high-school", name: "과천외고", type: "foreign-language-high-school", typeLabel: "외국어고등학교", area: "경기도 과천시", summary: "과천외고 내신은 주요 과목과 외국어 전공 과목을 학교 자료와 수행평가 기준에 맞춰 함께 관리해야 합니다.", availableSubjects: foreignLanguageSchoolSubjects["gwacheon-foreign-language-high-school"] },
  { slug: "gimpo-foreign-language-high-school", name: "김포외고", type: "foreign-language-high-school", typeLabel: "외국어고등학교", area: "경기도 김포시", summary: "김포외고 내신은 주요 과목과 외국어 전공 과목을 학교 자료와 수행평가 기준에 맞춰 함께 관리해야 합니다.", availableSubjects: foreignLanguageSchoolSubjects["gimpo-foreign-language-high-school"] },
  { slug: "dongducheon-foreign-language-high-school", name: "동두천외고", type: "foreign-language-high-school", typeLabel: "외국어고등학교", area: "경기도 동두천시", summary: "동두천외고 내신은 주요 과목과 외국어 전공 과목을 학교 자료와 수행평가 기준에 맞춰 함께 관리해야 합니다.", availableSubjects: foreignLanguageSchoolSubjects["dongducheon-foreign-language-high-school"] },
  { slug: "seongnam-foreign-language-high-school", name: "성남외고", type: "foreign-language-high-school", typeLabel: "외국어고등학교", area: "경기도 성남시", summary: "성남외고 내신은 주요 과목과 외국어 전공 과목을 학교 자료와 수행평가 기준에 맞춰 함께 관리해야 합니다.", availableSubjects: foreignLanguageSchoolSubjects["seongnam-foreign-language-high-school"] },
  { slug: "suwon-foreign-language-high-school", name: "수원외고", type: "foreign-language-high-school", typeLabel: "외국어고등학교", area: "경기도 수원시", summary: "수원외고 내신은 주요 과목과 외국어 전공 과목을 학교 자료와 수행평가 기준에 맞춰 함께 관리해야 합니다.", availableSubjects: foreignLanguageSchoolSubjects["suwon-foreign-language-high-school"] },
  { slug: "anyang-foreign-language-high-school", name: "안양외고", type: "foreign-language-high-school", typeLabel: "외국어고등학교", area: "경기도 안양시", summary: "안양외고 내신은 주요 과목과 외국어 전공 과목을 학교 자료와 수행평가 기준에 맞춰 함께 관리해야 합니다.", availableSubjects: foreignLanguageSchoolSubjects["anyang-foreign-language-high-school"] },
  { slug: "michuhol-foreign-language-high-school", name: "미추홀외고", type: "foreign-language-high-school", typeLabel: "외국어고등학교", area: "인천광역시", summary: "미추홀외고 내신은 주요 과목과 외국어 전공 과목을 학교 자료와 수행평가 기준에 맞춰 함께 관리해야 합니다.", availableSubjects: foreignLanguageSchoolSubjects["michuhol-foreign-language-high-school"] },
  { slug: "incheon-foreign-language-high-school", name: "인천외고", type: "foreign-language-high-school", typeLabel: "외국어고등학교", area: "인천광역시", summary: "인천외고 내신은 주요 과목과 외국어 전공 과목을 학교 자료와 수행평가 기준에 맞춰 함께 관리해야 합니다.", availableSubjects: foreignLanguageSchoolSubjects["incheon-foreign-language-high-school"] },
  { slug: "jeonnam-foreign-language-high-school", name: "전남외고", type: "foreign-language-high-school", typeLabel: "외국어고등학교", area: "전라남도 나주시", summary: "전남외고 내신은 주요 과목과 외국어 전공 과목을 학교 자료와 수행평가 기준에 맞춰 함께 관리해야 합니다.", availableSubjects: foreignLanguageSchoolSubjects["jeonnam-foreign-language-high-school"] },
  { slug: "jeonbuk-foreign-language-high-school", name: "전북외고", type: "foreign-language-high-school", typeLabel: "외국어고등학교", area: "전라북도", summary: "전북외고 내신은 주요 과목과 외국어 전공 과목을 학교 자료와 수행평가 기준에 맞춰 함께 관리해야 합니다.", availableSubjects: foreignLanguageSchoolSubjects["jeonbuk-foreign-language-high-school"] },
  { slug: "gyeongnam-foreign-language-high-school", name: "경남외고", type: "foreign-language-high-school", typeLabel: "외국어고등학교", area: "경상남도 양산시", summary: "경남외고 내신은 주요 과목과 외국어 전공 과목을 학교 자료와 수행평가 기준에 맞춰 함께 관리해야 합니다.", availableSubjects: foreignLanguageSchoolSubjects["gyeongnam-foreign-language-high-school"] },
  { slug: "gimhae-foreign-language-high-school", name: "김해외고", type: "foreign-language-high-school", typeLabel: "외국어고등학교", area: "경상남도 김해시", summary: "김해외고 내신은 주요 과목과 외국어 전공 과목을 학교 자료와 수행평가 기준에 맞춰 함께 관리해야 합니다.", availableSubjects: foreignLanguageSchoolSubjects["gimhae-foreign-language-high-school"] },
  { slug: "gyeongbuk-foreign-language-high-school", name: "경북외고", type: "foreign-language-high-school", typeLabel: "외국어고등학교", area: "경상북도 구미시", summary: "경북외고 내신은 주요 과목과 외국어 전공 과목을 학교 자료와 수행평가 기준에 맞춰 함께 관리해야 합니다.", availableSubjects: foreignLanguageSchoolSubjects["gyeongbuk-foreign-language-high-school"] },
  { slug: "chungnam-foreign-language-high-school", name: "충남외고", type: "foreign-language-high-school", typeLabel: "외국어고등학교", area: "충청남도 아산시", summary: "충남외고 내신은 주요 과목과 외국어 전공 과목을 학교 자료와 수행평가 기준에 맞춰 함께 관리해야 합니다.", availableSubjects: foreignLanguageSchoolSubjects["chungnam-foreign-language-high-school"] },
  { slug: "chungbuk-foreign-language-high-school", name: "충북외고", type: "foreign-language-high-school", typeLabel: "외국어고등학교", area: "충청북도 청주시", summary: "충북외고 내신은 주요 과목과 외국어 전공 과목을 학교 자료와 수행평가 기준에 맞춰 함께 관리해야 합니다.", availableSubjects: foreignLanguageSchoolSubjects["chungbuk-foreign-language-high-school"] },
  { slug: "daegu-foreign-language-high-school", name: "대구외고", type: "foreign-language-high-school", typeLabel: "외국어고등학교", area: "대구광역시", summary: "대구외고 내신은 주요 과목과 외국어 전공 과목을 학교 자료와 수행평가 기준에 맞춰 함께 관리해야 합니다.", availableSubjects: foreignLanguageSchoolSubjects["daegu-foreign-language-high-school"] },
  { slug: "daejeon-foreign-language-high-school", name: "대전외고", type: "foreign-language-high-school", typeLabel: "외국어고등학교", area: "대전광역시", summary: "대전외고 내신은 주요 과목과 외국어 전공 과목을 학교 자료와 수행평가 기준에 맞춰 함께 관리해야 합니다.", availableSubjects: foreignLanguageSchoolSubjects["daejeon-foreign-language-high-school"] },
  { slug: "busan-foreign-language-high-school", name: "부산외고", type: "foreign-language-high-school", typeLabel: "외국어고등학교", area: "부산광역시", summary: "부산외고 내신은 주요 과목과 외국어 전공 과목을 학교 자료와 수행평가 기준에 맞춰 함께 관리해야 합니다.", availableSubjects: foreignLanguageSchoolSubjects["busan-foreign-language-high-school"] },
  { slug: "ulsan-foreign-language-high-school", name: "울산외고", type: "foreign-language-high-school", typeLabel: "외국어고등학교", area: "울산광역시", summary: "울산외고 내신은 주요 과목과 외국어 전공 과목을 학교 자료와 수행평가 기준에 맞춰 함께 관리해야 합니다.", availableSubjects: foreignLanguageSchoolSubjects["ulsan-foreign-language-high-school"] },
  { slug: "jeju-foreign-language-high-school", name: "제주외고", type: "foreign-language-high-school", typeLabel: "외국어고등학교", area: "제주특별자치도", summary: "제주외고 내신은 주요 과목과 외국어 전공 과목을 학교 자료와 수행평가 기준에 맞춰 함께 관리해야 합니다.", availableSubjects: foreignLanguageSchoolSubjects["jeju-foreign-language-high-school"] },
  { slug: "hansung-science-high-school", name: "한성과고", type: "science-high-school", typeLabel: "과학고등학교", area: "서울특별시", summary: "한성과고 내신은 심화 수학·과학, 탐구/실험, 수행평가를 학교 자료와 일정에 맞춰 함께 관리해야 합니다.", availableSubjects: [...scienceHighSchoolSubjects] },
  { slug: "sejong-science-high-school", name: "세종과고", type: "science-high-school", typeLabel: "과학고등학교", area: "서울특별시", summary: "세종과고 내신은 심화 수학·과학, 탐구/실험, 수행평가를 학교 자료와 일정에 맞춰 함께 관리해야 합니다.", availableSubjects: [...scienceHighSchoolSubjects] },
  { slug: "gyeonggibuk-science-high-school", name: "경기북과고", type: "science-high-school", typeLabel: "과학고등학교", area: "경기도 의정부시", summary: "경기북과고 내신은 심화 수학·과학, 탐구/실험, 수행평가를 학교 자료와 일정에 맞춰 함께 관리해야 합니다.", availableSubjects: [...scienceHighSchoolSubjects] },
  { slug: "incheon-science-high-school", name: "인천과고", type: "science-high-school", typeLabel: "과학고등학교", area: "인천광역시", summary: "인천과고 내신은 심화 수학·과학, 탐구/실험, 수행평가를 학교 자료와 일정에 맞춰 함께 관리해야 합니다.", availableSubjects: [...scienceHighSchoolSubjects] },
  { slug: "jinsan-science-high-school", name: "진산과고", type: "science-high-school", typeLabel: "과학고등학교", area: "인천광역시", summary: "진산과고 내신은 심화 수학·과학, 탐구/실험, 수행평가를 학교 자료와 일정에 맞춰 함께 관리해야 합니다.", availableSubjects: [...scienceHighSchoolSubjects] },
  { slug: "gangwon-science-high-school", name: "강원과고", type: "science-high-school", typeLabel: "과학고등학교", area: "강원특별자치도", summary: "강원과고 내신은 심화 수학·과학, 탐구/실험, 수행평가를 학교 자료와 일정에 맞춰 함께 관리해야 합니다.", availableSubjects: [...scienceHighSchoolSubjects] },
  { slug: "jeonnam-science-high-school", name: "전남과고", type: "science-high-school", typeLabel: "과학고등학교", area: "전라남도", summary: "전남과고 내신은 심화 수학·과학, 탐구/실험, 수행평가를 학교 자료와 일정에 맞춰 함께 관리해야 합니다.", availableSubjects: [...scienceHighSchoolSubjects] },
  { slug: "jeonbuk-science-high-school", name: "전북과고", type: "science-high-school", typeLabel: "과학고등학교", area: "전라북도", summary: "전북과고 내신은 심화 수학·과학, 탐구/실험, 수행평가를 학교 자료와 일정에 맞춰 함께 관리해야 합니다.", availableSubjects: [...scienceHighSchoolSubjects] },
  { slug: "gyeongnam-science-high-school", name: "경남과고", type: "science-high-school", typeLabel: "과학고등학교", area: "경상남도", summary: "경남과고 내신은 심화 수학·과학, 탐구/실험, 수행평가를 학교 자료와 일정에 맞춰 함께 관리해야 합니다.", availableSubjects: [...scienceHighSchoolSubjects] },
  { slug: "changwon-science-high-school", name: "창원과고", type: "science-high-school", typeLabel: "과학고등학교", area: "경상남도 창원시", summary: "창원과고 내신은 심화 수학·과학, 탐구/실험, 수행평가를 학교 자료와 일정에 맞춰 함께 관리해야 합니다.", availableSubjects: [...scienceHighSchoolSubjects] },
  { slug: "gyeongbuk-science-high-school", name: "경북과고", type: "science-high-school", typeLabel: "과학고등학교", area: "경상북도", summary: "경북과고 내신은 심화 수학·과학, 탐구/실험, 수행평가를 학교 자료와 일정에 맞춰 함께 관리해야 합니다.", availableSubjects: [...scienceHighSchoolSubjects] },
  { slug: "gyeongsan-science-high-school", name: "경산과고", type: "science-high-school", typeLabel: "과학고등학교", area: "경상북도 경산시", summary: "경산과고 내신은 심화 수학·과학, 탐구/실험, 수행평가를 학교 자료와 일정에 맞춰 함께 관리해야 합니다.", availableSubjects: [...scienceHighSchoolSubjects] },
  { slug: "chungnam-science-high-school", name: "충남과고", type: "science-high-school", typeLabel: "과학고등학교", area: "충청남도", summary: "충남과고 내신은 심화 수학·과학, 탐구/실험, 수행평가를 학교 자료와 일정에 맞춰 함께 관리해야 합니다.", availableSubjects: [...scienceHighSchoolSubjects] },
  { slug: "chungbuk-science-high-school", name: "충북과고", type: "science-high-school", typeLabel: "과학고등학교", area: "충청북도", summary: "충북과고 내신은 심화 수학·과학, 탐구/실험, 수행평가를 학교 자료와 일정에 맞춰 함께 관리해야 합니다.", availableSubjects: [...scienceHighSchoolSubjects] },
  { slug: "daegu-il-science-high-school", name: "대구일과고", type: "science-high-school", typeLabel: "과학고등학교", area: "대구광역시", summary: "대구일과고 내신은 심화 수학·과학, 탐구/실험, 수행평가를 학교 자료와 일정에 맞춰 함께 관리해야 합니다.", availableSubjects: [...scienceHighSchoolSubjects] },
  { slug: "dongshin-science-high-school", name: "동신과고", type: "science-high-school", typeLabel: "과학고등학교", area: "광주광역시", summary: "동신과고 내신은 심화 수학·과학, 탐구/실험, 수행평가를 학교 자료와 일정에 맞춰 함께 관리해야 합니다.", availableSubjects: [...scienceHighSchoolSubjects] },
  { slug: "busan-science-high-school", name: "부산과고", type: "science-high-school", typeLabel: "과학고등학교", area: "부산광역시", summary: "부산과고 내신은 심화 수학·과학, 탐구/실험, 수행평가를 학교 자료와 일정에 맞춰 함께 관리해야 합니다.", availableSubjects: [...scienceHighSchoolSubjects] },
  { slug: "busan-il-science-high-school", name: "부산일과고", type: "science-high-school", typeLabel: "과학고등학교", area: "부산광역시", summary: "부산일과고 내신은 심화 수학·과학, 탐구/실험, 수행평가를 학교 자료와 일정에 맞춰 함께 관리해야 합니다.", availableSubjects: [...scienceHighSchoolSubjects] },
  { slug: "ulsan-science-high-school", name: "울산과고", type: "science-high-school", typeLabel: "과학고등학교", area: "울산광역시", summary: "울산과고 내신은 심화 수학·과학, 탐구/실험, 수행평가를 학교 자료와 일정에 맞춰 함께 관리해야 합니다.", availableSubjects: [...scienceHighSchoolSubjects] },
  { slug: "jeju-science-high-school", name: "제주과고", type: "science-high-school", typeLabel: "과학고등학교", area: "제주특별자치도", summary: "제주과고 내신은 심화 수학·과학, 탐구/실험, 수행평가를 학교 자료와 일정에 맞춰 함께 관리해야 합니다.", availableSubjects: [...scienceHighSchoolSubjects] },
  { slug: "minjok-leadership-academy", name: "민족사관고", type: "autonomous-private-high-school", typeLabel: "전국단위 자율형사립고등학교", area: "강원특별자치도 횡성군", summary: "민족사관고 내신은 심화 영어, 토론·발표, 수학·과학 심화 과목과 수행평가를 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "sangsan-high-school", name: "상산고", type: "autonomous-private-high-school", typeLabel: "전국단위 자율형사립고등학교", area: "전라북도 전주시", summary: "상산고 내신은 수학 변별 문항, 국어·영어 서술형, 과학 탐구형 과제까지 균형 있게 대비해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "hyundai-cheongun-high-school", name: "현대청운고", type: "autonomous-private-high-school", typeLabel: "전국단위 자율형사립고등학교", area: "울산광역시 동구", summary: "현대청운고 내신은 주요 과목의 난도 높은 지필평가와 수행평가 일정을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "pohang-jecheol-high-school", name: "포항제철고", type: "autonomous-private-high-school", typeLabel: "전국단위 자율형사립고등학교", area: "경상북도 포항시", summary: "포항제철고 내신은 수학·과학 심화 학습과 영어 독해, 국어 서술형 대비가 중요합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "gwangyang-jecheol-high-school", name: "광양제철고", type: "autonomous-private-high-school", typeLabel: "전국단위 자율형사립고등학교", area: "전라남도 광양시", summary: "광양제철고 내신은 학교 자료와 시험 범위를 기준으로 주요 과목별 학습 우선순위를 나눠야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "gimcheon-high-school", name: "김천고", type: "autonomous-private-high-school", typeLabel: "전국단위 자율형사립고등학교", area: "경상북도 김천시", summary: "김천고 내신은 국어·영어·수학 핵심 과목과 탐구 과목 수행평가를 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "bugil-high-school", name: "북일고", type: "autonomous-private-high-school", typeLabel: "전국단위 자율형사립고등학교", area: "충청남도 천안시", summary: "북일고 내신은 주요 과목의 지필평가와 학교별 수행평가, 학생부 흐름을 함께 준비해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "hana-academy-seoul", name: "하나고", type: "autonomous-private-high-school", typeLabel: "전국단위 자율형사립고등학교", area: "서울특별시 은평구", summary: "하나고 내신은 토론·발표형 수행평가와 과목별 심화 문항을 학교 일정에 맞춰 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "incheon-haneul-high-school", name: "인천하늘고", type: "autonomous-private-high-school", typeLabel: "전국단위 자율형사립고등학교", area: "인천광역시 중구", summary: "인천하늘고 내신은 국어·영어·수학 주요 과목과 탐구 과목 평가를 체계적으로 대비해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "yongin-korean-foreign-language-university-bugoseo-high-school", name: "용인외대부고", type: "autonomous-private-high-school", typeLabel: "전국단위 자율형사립고등학교", area: "경기도 용인시", summary: "용인외대부고 내신은 영어 심화 과목, 수학 고난도 문항, 수행평가와 학생부 관리를 함께 설계해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  // GENERATED_STANDARD_SCHOOL_PAGES_START
  { slug: "autonomous-private-high-school-01", name: "경희고", type: "regional-autonomous-private-high-school", typeLabel: "자율형사립고등학교", area: "자사고", summary: "경희고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "autonomous-private-high-school-02", name: "배재고", type: "regional-autonomous-private-high-school", typeLabel: "자율형사립고등학교", area: "자사고", summary: "배재고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "autonomous-private-high-school-03", name: "세화고", type: "regional-autonomous-private-high-school", typeLabel: "자율형사립고등학교", area: "자사고", summary: "세화고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "autonomous-private-high-school-04", name: "세화여고", type: "regional-autonomous-private-high-school", typeLabel: "자율형사립고등학교", area: "자사고", summary: "세화여고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "autonomous-private-high-school-05", name: "중동고", type: "regional-autonomous-private-high-school", typeLabel: "자율형사립고등학교", area: "자사고", summary: "중동고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "autonomous-private-high-school-06", name: "현대고", type: "regional-autonomous-private-high-school", typeLabel: "자율형사립고등학교", area: "자사고", summary: "현대고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "autonomous-private-high-school-07", name: "휘문고", type: "regional-autonomous-private-high-school", typeLabel: "자율형사립고등학교", area: "자사고", summary: "휘문고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "autonomous-private-high-school-08", name: "보인고", type: "regional-autonomous-private-high-school", typeLabel: "자율형사립고등학교", area: "자사고", summary: "보인고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "autonomous-private-high-school-09", name: "중앙고", type: "regional-autonomous-private-high-school", typeLabel: "자율형사립고등학교", area: "자사고", summary: "중앙고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "hanyang-university-high-school", name: "한양사대부고", type: "regional-autonomous-private-high-school", typeLabel: "자율형사립고등학교", area: "자사고", summary: "한양사대부고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "autonomous-private-high-school-11", name: "이화여고", type: "regional-autonomous-private-high-school", typeLabel: "자율형사립고등학교", area: "자사고", summary: "이화여고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "autonomous-private-high-school-12", name: "선덕고", type: "regional-autonomous-private-high-school", typeLabel: "자율형사립고등학교", area: "자사고", summary: "선덕고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "autonomous-private-high-school-13", name: "양정고", type: "regional-autonomous-private-high-school", typeLabel: "자율형사립고등학교", area: "자사고", summary: "양정고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "autonomous-private-high-school-14", name: "신일고", type: "regional-autonomous-private-high-school", typeLabel: "자율형사립고등학교", area: "자사고", summary: "신일고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "autonomous-private-high-school-15", name: "대성고", type: "regional-autonomous-private-high-school", typeLabel: "자율형사립고등학교", area: "자사고", summary: "대성고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-01", name: "숙명여고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "숙명여고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-02", name: "영동고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "영동고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-03", name: "중산고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "중산고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "dankook-university-high-school", name: "단국사대부고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "단국사대부고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-05", name: "상문고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "상문고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-06", name: "반포고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "반포고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "saerom-gukyeongsu", name: "새롬점 / 국영수", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "새롬점 / 국영수 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-08", name: "한양사대부고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "한양사대부고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-09", name: "대진고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "대진고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-10", name: "한가람고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "한가람고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-11", name: "혜화여고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "혜화여고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-12", name: "서울반도체고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "서울반도체고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-13", name: "미림여고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "미림여고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-14", name: "동안고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "동안고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-15", name: "평촌고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "평촌고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-16", name: "인덕원고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "인덕원고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-17", name: "신성고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "신성고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-18", name: "군포고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "군포고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-19", name: "수리고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "수리고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-20", name: "동화고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "동화고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-21", name: "와부고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "와부고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-22", name: "청학고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "청학고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-23", name: "우성고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "우성고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-24", name: "가온고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "가온고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-25", name: "양서고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "양서고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-26", name: "양주고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "양주고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-27", name: "운정고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "운정고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-28", name: "파주봉일천고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "파주봉일천고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-29", name: "세마고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "세마고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-30", name: "저현고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "저현고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-31", name: "병점고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "병점고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-32", name: "삼괴고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "삼괴고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-33", name: "화성고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "화성고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-34", name: "낙생고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "낙생고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-35", name: "함현고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "함현고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-36", name: "안법고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "안법고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "dimi-high-school-regular-admission", name: "디미고 / 정시", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "디미고 / 정시 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-38", name: "양지고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "양지고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-39", name: "경화여고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "경화여고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-40", name: "평택고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "평택고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-41", name: "홍천고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "홍천고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-42", name: "인천영종고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "인천영종고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-43", name: "인천해송고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "인천해송고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-44", name: "대륜고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "대륜고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-45", name: "대구여고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "대구여고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-46", name: "정화여고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "정화여고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-47", name: "경일여고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "경일여고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-48", name: "강원외국어고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "강원외국어고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-49", name: "거창고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "거창고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-50", name: "거창대성고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "거창대성고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-51", name: "창녕옥야고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "창녕옥야고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-52", name: "함안고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "함안고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-53", name: "함양고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "함양고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-54", name: "남해해성고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "남해해성고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-55", name: "풍산고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "풍산고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-56", name: "점촌고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "점촌고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-57", name: "익산고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "익산고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-58", name: "청원고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "청원고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-59", name: "성신고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "성신고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-60", name: "부산장안고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "부산장안고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-61", name: "부산장안제일고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "부산장안제일고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-62", name: "부흥고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "부흥고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "top-general-high-school-63", name: "신성여고", type: "top-general-high-school", typeLabel: "갓반고등학교", area: "갓반고", summary: "신성여고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "arts-high-school-01", name: "서울예고", type: "arts-high-school", typeLabel: "예술고등학교", area: "예고", summary: "서울예고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "arts-high-school-02", name: "선화예고", type: "arts-high-school", typeLabel: "예술고등학교", area: "예고", summary: "선화예고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "arts-high-school-03", name: "계원예고", type: "arts-high-school", typeLabel: "예술고등학교", area: "예고", summary: "계원예고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "arts-high-school-04", name: "덕원예고", type: "arts-high-school", typeLabel: "예술고등학교", area: "예고", summary: "덕원예고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "arts-high-school-05", name: "부산예고", type: "arts-high-school", typeLabel: "예술고등학교", area: "예고", summary: "부산예고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "arts-high-school-06", name: "경북예고", type: "arts-high-school", typeLabel: "예술고등학교", area: "예고", summary: "경북예고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "arts-high-school-07", name: "경기예고", type: "arts-high-school", typeLabel: "예술고등학교", area: "예고", summary: "경기예고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "arts-high-school-08", name: "대전예고", type: "arts-high-school", typeLabel: "예술고등학교", area: "예고", summary: "대전예고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "arts-high-school-09", name: "인천예고", type: "arts-high-school", typeLabel: "예술고등학교", area: "예고", summary: "인천예고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "arts-high-school-10", name: "충남예고", type: "arts-high-school", typeLabel: "예술고등학교", area: "예고", summary: "충남예고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "arts-high-school-11", name: "고양예고", type: "arts-high-school", typeLabel: "예술고등학교", area: "예고", summary: "고양예고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "arts-high-school-12", name: "김천예고", type: "arts-high-school", typeLabel: "예술고등학교", area: "예고", summary: "김천예고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "arts-high-school-13", name: "서울미술고", type: "arts-high-school", typeLabel: "예술고등학교", area: "예고", summary: "서울미술고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "arts-high-school-14", name: "안양예고", type: "arts-high-school", typeLabel: "예술고등학교", area: "예고", summary: "안양예고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "arts-high-school-15", name: "경남예고", type: "arts-high-school", typeLabel: "예술고등학교", area: "예고", summary: "경남예고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "arts-high-school-16", name: "광주예고", type: "arts-high-school", typeLabel: "예술고등학교", area: "예고", summary: "광주예고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "arts-high-school-17", name: "포항예고", type: "arts-high-school", typeLabel: "예술고등학교", area: "예고", summary: "포항예고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "arts-high-school-18", name: "전주예고", type: "arts-high-school", typeLabel: "예술고등학교", area: "예고", summary: "전주예고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "arts-high-school-19", name: "충북예고", type: "arts-high-school", typeLabel: "예술고등학교", area: "예고", summary: "충북예고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "arts-high-school-20", name: "강원예고", type: "arts-high-school", typeLabel: "예술고등학교", area: "예고", summary: "강원예고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "arts-high-school-21", name: "국립국악고", type: "arts-high-school", typeLabel: "예술고등학교", area: "예고", summary: "국립국악고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "arts-high-school-22", name: "브니엘예고", type: "arts-high-school", typeLabel: "예술고등학교", area: "예고", summary: "브니엘예고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "arts-high-school-23", name: "울산예고", type: "arts-high-school", typeLabel: "예술고등학교", area: "예고", summary: "울산예고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "arts-high-school-24", name: "세종예고", type: "arts-high-school", typeLabel: "예술고등학교", area: "예고", summary: "세종예고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  { slug: "arts-high-school-25", name: "국립전통예고", type: "arts-high-school", typeLabel: "예술고등학교", area: "예고", summary: "국립전통예고 내신은 학교 자료, 중간고사·기말고사, 수행평가와 과목별 학습 루틴을 함께 관리해야 합니다.", availableSubjects: ["korean", "english", "math", "social", "science", "performance", "second-language"] },
  // GENERATED_STANDARD_SCHOOL_PAGES_END
];

function makeSubjectPage(school: School, subject: Subject): SchoolSubjectPage {
  const subjectLabel = subject.name;
  return {
    schoolSlug: school.slug,
    subjectSlug: subject.slug,
    heroImage: school.slug === "seoul-international-high-school" ? "/images/seoul-international-high-school-school-analysis.svg" : "/images/goyang-international-school-analysis.png",
    h1: `${school.name} ${subjectLabel} 내신대비`,
    summary: `${school.name} ${subjectLabel} 내신은 학교 자료, 수행평가, 시험 범위, 학생 현재상황을 함께 확인해 설계합니다.`,
    aiSummary: [
      `${school.name} ${subjectLabel} 내신은 학교별 출제경향과 시험 범위 분석이 중요합니다.`,
      `우리학교과외는 ${school.name} ${subjectLabel} 수업을 현재상황 진단, 학교별 자료 분석, 커리큘럼, FAQ 구조로 제공합니다.`,
      `고양국제고 마스터 템플릿과 동일한 UI를 사용해 국제고 페이지 경험을 통일합니다.`
    ],
    features: [`${school.name} 학교 자료 중심 대비`, `${subjectLabel} 수행평가 일정 반영`, "시험 직전 오답과 서술형 관리"],
    currentChecks: ["최근 시험지와 현재 등급", "학교 프린트와 부교재 정리 상태", "수행평가 일정", "목표 등급과 학습 가능 시간"],
    analysis: ["학교 시험 범위와 진도를 기준으로 계획을 세웁니다.", "학생 오답을 유형별로 분리합니다.", "시험 직전 실전 훈련으로 마무리합니다."],
    curriculum: [
      { title: "1단계 진단", items: ["현재 등급", "오답 원인", "목표 설정"] },
      { title: "2단계 학교별 분석", items: ["교과서", "프린트", "부교재"] },
      { title: "3단계 내신대비", items: ["개념", "유형", "서술형"] },
      { title: "4단계 실전 점검", items: ["오답", "시간 관리", "수행평가"] }
    ],
    cases: [{ title: `${school.name} ${subjectLabel} 학습 변화 사례`, body: "대표적인 학습 변화 사례로, 학교 자료 분석과 오답 관리를 통해 시험 준비 방향을 명확히 잡는 방식입니다." }],
    faqs: [
      { question: `${school.name} ${subjectLabel} 내신대비는 일반 과외와 무엇이 다른가요?`, answer: "학교 시험 범위, 수업 자료, 수행평가 일정, 학생 오답 원인을 함께 반영한다는 점이 다릅니다." },
      { question: `${school.name} ${subjectLabel} 수행평가도 관리하나요?`, answer: "네. 발표, 보고서, 제출물, 서술형 기준을 과목별 내신 계획에 함께 반영합니다." },
      { question: "상담 전에 무엇을 준비하면 좋나요?", answer: "최근 시험지, 학교 프린트, 수행평가 일정, 현재 등급과 목표 등급을 알려주시면 좋습니다." }
    ]
  };
}
export const schoolSubjectPages: SchoolSubjectPage[] = schools.flatMap((school) =>
  school.availableSubjects
    .map((subjectSlug) => subjects.find((subject) => subject.slug === subjectSlug))
    .filter((subject): subject is Subject => Boolean(subject))
    .map((subject) => makeSubjectPage(school, subject))
);




