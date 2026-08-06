export type SchoolListItem = {
  name: string;
  href?: string;
};

export type SchoolListCategory = {
  key: string;
  category: string;
  navLabel: string;
  path: string;
  title: string;
  description: string;
  schools: SchoolListItem[];
};

const names = (items: string[]): SchoolListItem[] => items.map((name) => ({ name }));

export const schoolListCategories = [
  {
    key: "foreign-language-high-schools",
    category: "외국어고등학교",
    navLabel: "외국어고등학교",
    path: "/schools/foreign-language-high-schools",
    title: "외고별 맞춤 내신관리",
    description: "외국어고등학교별 내신관리 흐름을 확인하고, 학교별 상세 페이지가 준비된 학교는 바로 이동할 수 있습니다.",
    schools: [
      { name: "대원외국어고등학교", href: "/schools/daewon-foreign-language-high-school" },
      { name: "대일외국어고등학교", href: "/schools/daeil-foreign-language-high-school" },
      { name: "명덕외국어고등학교", href: "/schools/myeongdeok-foreign-language-high-school" },
      { name: "한영외국어고등학교", href: "/schools/hanyoung-foreign-language-high-school" },
      { name: "서울외국어고등학교", href: "/schools/seoul-foreign-language-high-school" },
      { name: "이화외국어고등학교", href: "/schools/ewha-foreign-language-high-school" },
      { name: "경기외국어고등학교", href: "/schools/gyeonggi-foreign-language-high-school" },
      { name: "고양외국어고등학교", href: "/schools/goyang-foreign-language-high-school" },
      { name: "과천외국어고등학교", href: "/schools/gwacheon-foreign-language-high-school" },
      { name: "김포외국어고등학교", href: "/schools/gimpo-foreign-language-high-school" },
      { name: "동두천외국어고등학교", href: "/schools/dongducheon-foreign-language-high-school" },
      { name: "성남외국어고등학교", href: "/schools/seongnam-foreign-language-high-school" },
      { name: "수원외국어고등학교", href: "/schools/suwon-foreign-language-high-school" },
      { name: "안양외국어고등학교", href: "/schools/anyang-foreign-language-high-school" },
      { name: "미추홀외국어고등학교", href: "/schools/michuhol-foreign-language-high-school" },
      { name: "인천외국어고등학교", href: "/schools/incheon-foreign-language-high-school" },
      { name: "전남외국어고등학교", href: "/schools/jeonnam-foreign-language-high-school" },
      { name: "전북외국어고등학교", href: "/schools/jeonbuk-foreign-language-high-school" },
      { name: "경남외국어고등학교", href: "/schools/gyeongnam-foreign-language-high-school" },
      { name: "김해외국어고등학교", href: "/schools/gimhae-foreign-language-high-school" },
      { name: "경북외국어고등학교", href: "/schools/gyeongbuk-foreign-language-high-school" },
      { name: "충남외국어고등학교", href: "/schools/chungnam-foreign-language-high-school" },
      { name: "충북외국어고등학교", href: "/schools/chungbuk-foreign-language-high-school" },
      { name: "대구외국어고등학교", href: "/schools/daegu-foreign-language-high-school" },
      { name: "대전외국어고등학교", href: "/schools/daejeon-foreign-language-high-school" },
      { name: "부산외국어고등학교", href: "/schools/busan-foreign-language-high-school" },
      { name: "울산외국어고등학교", href: "/schools/ulsan-foreign-language-high-school" },
      { name: "제주외국어고등학교", href: "/schools/jeju-foreign-language-high-school" }
    ]
  },
  {
    key: "international-high-schools",
    category: "국제고등학교",
    navLabel: "국제고등학교",
    path: "/schools/international-high-schools",
    title: "국제고별 맞춤 내신관리",
    description: "국제고등학교별 내신관리 흐름을 확인하고, 학교별 상세 페이지가 준비된 학교는 바로 이동할 수 있습니다.",
    schools: [
      { name: "서울국제고등학교", href: "/schools/seoul-international-high-school" },
      { name: "고양국제고등학교", href: "/schools/goyang-international-high-school" },
      { name: "동탄국제고등학교", href: "/schools/dongtan-international-high-school" },
      { name: "청심국제고등학교", href: "/schools/cheongshim-international-high-school" },
      { name: "인천국제고등학교", href: "/schools/incheon-international-high-school" },
      { name: "세종국제고등학교", href: "/schools/sejong-international-high-school" },
      { name: "대구국제고등학교", href: "/schools/daegu-international-high-school" },
      { name: "부산국제고등학교", href: "/schools/busan-international-high-school" }
    ]
  },
  {
    key: "science-high-schools",
    category: "과학고등학교",
    navLabel: "과학고등학교",
    path: "/schools/science-high-schools",
    title: "과학고별 맞춤 내신관리",
    description: "과학고등학교별 수학·과학 심화학습과 내신관리 흐름을 확인하고, 학교별 상세 페이지가 준비된 학교는 바로 이동할 수 있습니다.",
    schools: [
      { name: "한성과학고등학교", href: "/schools/hansung-science-high-school" },
      { name: "세종과학고등학교", href: "/schools/sejong-science-high-school" },
      { name: "경기북과학고등학교", href: "/schools/gyeonggibuk-science-high-school" },
      { name: "인천과학고등학교", href: "/schools/incheon-science-high-school" },
      { name: "진산과학고등학교", href: "/schools/jinsan-science-high-school" },
      { name: "강원과학고등학교", href: "/schools/gangwon-science-high-school" },
      { name: "전남과학고등학교", href: "/schools/jeonnam-science-high-school" },
      { name: "전북과학고등학교", href: "/schools/jeonbuk-science-high-school" },
      { name: "경남과학고등학교", href: "/schools/gyeongnam-science-high-school" },
      { name: "창원과학고등학교", href: "/schools/changwon-science-high-school" },
      { name: "경북과학고등학교", href: "/schools/gyeongbuk-science-high-school" },
      { name: "경산과학고등학교", href: "/schools/gyeongsan-science-high-school" },
      { name: "충남과학고등학교", href: "/schools/chungnam-science-high-school" },
      { name: "충북과학고등학교", href: "/schools/chungbuk-science-high-school" },
      { name: "대구일과학고등학교", href: "/schools/daegu-il-science-high-school" },
      { name: "동신과학고등학교", href: "/schools/dongshin-science-high-school" },
      { name: "부산과학고등학교", href: "/schools/busan-science-high-school" },
      { name: "부산일과학고등학교", href: "/schools/busan-il-science-high-school" },
      { name: "울산과학고등학교", href: "/schools/ulsan-science-high-school" },
      { name: "제주과학고등학교", href: "/schools/jeju-science-high-school" }
    ]
  },
  {
    key: "national-private-high-schools",
    category: "전사고등학교",
    navLabel: "전사고등학교",
    path: "/schools/national-private-high-schools",
    title: "전사고별 맞춤 내신관리",
    description: "전사고등학교별 내신관리와 학교별 학습 흐름을 확인하고, 상세 페이지가 준비된 학교는 바로 이동할 수 있습니다.",
    schools: [
      { name: "민족사관고등학교", href: "/schools/minjok-leadership-academy" },
      { name: "상산고등학교", href: "/schools/sangsan-high-school" },
      { name: "현대청운고등학교", href: "/schools/hyundai-cheongun-high-school" },
      { name: "포항제철고등학교", href: "/schools/pohang-jecheol-high-school" },
      { name: "광양제철고등학교", href: "/schools/gwangyang-jecheol-high-school" },
      { name: "김천고등학교", href: "/schools/gimcheon-high-school" },
      { name: "북일고등학교", href: "/schools/bugil-high-school" },
      { name: "하나고등학교", href: "/schools/hana-academy-seoul" },
      { name: "인천하늘고등학교", href: "/schools/incheon-haneul-high-school" },
      { name: "용인한국외국어대학교부설고등학교", href: "/schools/yongin-korean-foreign-language-university-bugoseo-high-school" }
    ]
  },
  {
    key: "autonomous-private-high-schools",
    category: "자율형사립고등학교",
    navLabel: "자사고등학교",
    path: "/schools/autonomous-private-high-schools",
    title: "자사고별 맞춤 내신관리",
    description: "자율형사립고등학교별 내신관리 흐름을 확인하고, 학교별 상세 페이지가 준비된 학교는 바로 이동할 수 있습니다.",
    schools: [
      { name: "경희고등학교", href: "/schools/autonomous-private-high-school-01" },
      { name: "배재고등학교", href: "/schools/autonomous-private-high-school-02" },
      { name: "세화고등학교", href: "/schools/autonomous-private-high-school-03" },
      { name: "세화여자고등학교", href: "/schools/autonomous-private-high-school-04" },
      { name: "중동고등학교", href: "/schools/autonomous-private-high-school-05" },
      { name: "현대고등학교", href: "/schools/autonomous-private-high-school-06" },
      { name: "휘문고등학교", href: "/schools/autonomous-private-high-school-07" },
      { name: "보인고등학교", href: "/schools/autonomous-private-high-school-08" },
      { name: "중앙고등학교", href: "/schools/autonomous-private-high-school-09" },
      { name: "한양대학교사범대학부속고등학교", href: "/schools/hanyang-university-high-school" },
      { name: "이화여자고등학교", href: "/schools/autonomous-private-high-school-11" },
      { name: "선덕고등학교", href: "/schools/autonomous-private-high-school-12" },
      { name: "양정고등학교", href: "/schools/autonomous-private-high-school-13" },
      { name: "신일고등학교", href: "/schools/autonomous-private-high-school-14" },
      { name: "대성고등학교", href: "/schools/autonomous-private-high-school-15" }
    ]
  },
  {
    key: "general-high-schools",
    category: "갓반고등학교",
    navLabel: "갓반고등학교",
    path: "/schools/general-high-schools",
    title: "갓반고별 맞춤 내신관리",
    description: "갓반고등학교별 내신관리와 과목별 학습 흐름을 확인하고, 학교별 상세 페이지가 준비된 학교는 바로 이동할 수 있습니다.",
    schools: [
      { name: "숙명여자고등학교", href: "/schools/top-general-high-school-01" },
      { name: "영동고등학교", href: "/schools/top-general-high-school-02" },
      { name: "중산고등학교", href: "/schools/top-general-high-school-03" },
      { name: "단국대학교사범대학부속고등학교", href: "/schools/dankook-university-high-school" },
      { name: "상문고등학교", href: "/schools/top-general-high-school-05" },
      { name: "반포고등학교", href: "/schools/top-general-high-school-06" },
      { name: "새롬점 / 국영수", href: "/schools/saerom-gukyeongsu" },
      { name: "한양대학교사범대학부속고등학교", href: "/schools/top-general-high-school-08" },
      { name: "대진고등학교", href: "/schools/top-general-high-school-09" },
      { name: "한가람고등학교", href: "/schools/top-general-high-school-10" },
      { name: "혜화여자고등학교", href: "/schools/top-general-high-school-11" },
      { name: "서울반도체고등학교", href: "/schools/top-general-high-school-12" },
      { name: "미림여자고등학교", href: "/schools/top-general-high-school-13" },
      { name: "동안고등학교", href: "/schools/top-general-high-school-14" },
      { name: "평촌고등학교", href: "/schools/top-general-high-school-15" },
      { name: "인덕원고등학교", href: "/schools/top-general-high-school-16" },
      { name: "신성고등학교", href: "/schools/top-general-high-school-17" },
      { name: "군포고등학교", href: "/schools/top-general-high-school-18" },
      { name: "수리고등학교", href: "/schools/top-general-high-school-19" },
      { name: "동화고등학교", href: "/schools/top-general-high-school-20" },
      { name: "와부고등학교", href: "/schools/top-general-high-school-21" },
      { name: "청학고등학교", href: "/schools/top-general-high-school-22" },
      { name: "우성고등학교", href: "/schools/top-general-high-school-23" },
      { name: "가온고등학교", href: "/schools/top-general-high-school-24" },
      { name: "양서고등학교", href: "/schools/top-general-high-school-25" },
      { name: "양주고등학교", href: "/schools/top-general-high-school-26" },
      { name: "운정고등학교", href: "/schools/top-general-high-school-27" },
      { name: "파주봉일천고등학교", href: "/schools/top-general-high-school-28" },
      { name: "세마고등학교", href: "/schools/top-general-high-school-29" },
      { name: "저현고등학교", href: "/schools/top-general-high-school-30" },
      { name: "병점고등학교", href: "/schools/top-general-high-school-31" },
      { name: "삼괴고등학교", href: "/schools/top-general-high-school-32" },
      { name: "화성고등학교", href: "/schools/top-general-high-school-33" },
      { name: "낙생고등학교", href: "/schools/top-general-high-school-34" },
      { name: "함현고등학교", href: "/schools/top-general-high-school-35" },
      { name: "안법고등학교", href: "/schools/top-general-high-school-36" },
      { name: "디미고 / 정시", href: "/schools/dimi-high-school-regular-admission" },
      { name: "양지고등학교", href: "/schools/top-general-high-school-38" },
      { name: "경화여자고등학교", href: "/schools/top-general-high-school-39" },
      { name: "평택고등학교", href: "/schools/top-general-high-school-40" },
      { name: "홍천고등학교", href: "/schools/top-general-high-school-41" },
      { name: "인천영종고등학교", href: "/schools/top-general-high-school-42" },
      { name: "인천해송고등학교", href: "/schools/top-general-high-school-43" },
      { name: "대륜고등학교", href: "/schools/top-general-high-school-44" },
      { name: "대구여자고등학교", href: "/schools/top-general-high-school-45" },
      { name: "정화여자고등학교", href: "/schools/top-general-high-school-46" },
      { name: "경일여자고등학교", href: "/schools/top-general-high-school-47" },
      { name: "강원외국어고등학교", href: "/schools/top-general-high-school-48" },
      { name: "거창고등학교", href: "/schools/top-general-high-school-49" },
      { name: "거창대성고등학교", href: "/schools/top-general-high-school-50" },
      { name: "창녕옥야고등학교", href: "/schools/top-general-high-school-51" },
      { name: "함안고등학교", href: "/schools/top-general-high-school-52" },
      { name: "함양고등학교", href: "/schools/top-general-high-school-53" },
      { name: "남해해성고등학교", href: "/schools/top-general-high-school-54" },
      { name: "풍산고등학교", href: "/schools/top-general-high-school-55" },
      { name: "점촌고등학교", href: "/schools/top-general-high-school-56" },
      { name: "익산고등학교", href: "/schools/top-general-high-school-57" },
      { name: "청원고등학교", href: "/schools/top-general-high-school-58" },
      { name: "성신고등학교", href: "/schools/top-general-high-school-59" },
      { name: "부산장안고등학교", href: "/schools/top-general-high-school-60" },
      { name: "부산장안제일고등학교", href: "/schools/top-general-high-school-61" },
      { name: "부흥고등학교", href: "/schools/top-general-high-school-62" },
      { name: "신성여자고등학교", href: "/schools/top-general-high-school-63" }
    ]
  },
  {
    key: "arts-high-schools",
    category: "예술고등학교",
    navLabel: "예술고등학교",
    path: "/schools/arts-high-schools",
    title: "예술고별 맞춤 내신관리",
    description: "예술고등학교별 국어·영어·수학 내신관리 흐름을 확인하고, 학교별 상세 페이지가 준비된 학교는 바로 이동할 수 있습니다.",
    schools: [
      { name: "서울예술고등학교", href: "/schools/arts-high-school-01" },
      { name: "선화예술고등학교", href: "/schools/arts-high-school-02" },
      { name: "계원예술고등학교", href: "/schools/arts-high-school-03" },
      { name: "덕원예술고등학교", href: "/schools/arts-high-school-04" },
      { name: "부산예술고등학교", href: "/schools/arts-high-school-05" },
      { name: "경북예술고등학교", href: "/schools/arts-high-school-06" },
      { name: "경기예술고등학교", href: "/schools/arts-high-school-07" },
      { name: "대전예술고등학교", href: "/schools/arts-high-school-08" },
      { name: "인천예술고등학교", href: "/schools/arts-high-school-09" },
      { name: "충남예술고등학교", href: "/schools/arts-high-school-10" },
      { name: "고양예술고등학교", href: "/schools/arts-high-school-11" },
      { name: "김천예술고등학교", href: "/schools/arts-high-school-12" },
      { name: "서울미술고등학교", href: "/schools/arts-high-school-13" },
      { name: "안양예술고등학교", href: "/schools/arts-high-school-14" },
      { name: "경남예술고등학교", href: "/schools/arts-high-school-15" },
      { name: "광주예술고등학교", href: "/schools/arts-high-school-16" },
      { name: "포항예술고등학교", href: "/schools/arts-high-school-17" },
      { name: "전주예술고등학교", href: "/schools/arts-high-school-18" },
      { name: "충북예술고등학교", href: "/schools/arts-high-school-19" },
      { name: "강원예술고등학교", href: "/schools/arts-high-school-20" },
      { name: "국립국악고등학교", href: "/schools/arts-high-school-21" },
      { name: "브니엘예술고등학교", href: "/schools/arts-high-school-22" },
      { name: "울산예술고등학교", href: "/schools/arts-high-school-23" },
      { name: "세종예술고등학교", href: "/schools/arts-high-school-24" },
      { name: "국립전통예술고등학교", href: "/schools/arts-high-school-25" }
    ]
  }
] satisfies SchoolListCategory[];

export function getSchoolListCategory(key: string) {
  return schoolListCategories.find((category) => category.key === key);
}

