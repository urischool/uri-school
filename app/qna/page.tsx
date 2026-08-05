import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "실제후기",
  description: "우리학교과외 학생과 학부모의 실제 수업 후기와 상담 사례를 확인하세요.",
  path: "/qna"
});

const reviews = [
  ["고양국제고", "수학", "시험 전 계획을 주차별로 나눠주셔서 무엇부터 해야 할지 분명해졌어요."],
  ["외국어고", "영어", "부교재와 학교 프린트를 같이 정리해주셔서 서술형 대비가 훨씬 수월했습니다."],
  ["일반고", "국어", "오답 원인을 따로 봐주셔서 같은 실수를 줄일 수 있었습니다."],
  ["자사고", "과학", "물리 계산 문제와 개념 설명을 나눠서 잡아주셔서 도움이 됐습니다."],
  ["중학생", "학습관리", "숙제량과 공부 시간을 현실적으로 조절해주셔서 아이가 덜 지쳐했습니다."],
  ["예고", "수행평가", "실기 일정과 수행평가를 같이 챙겨주셔서 내신 준비가 밀리지 않았습니다."],
  ["국제고", "사회", "사회문화 자료 해석을 반복해서 잡아주셔서 서술형 답안이 안정됐습니다."],
  ["외고", "제2외국어", "전공어 수행평가와 영어 내신을 같이 관리해주셔서 일정이 덜 복잡했습니다."],
  ["고등학생", "수학", "풀이 과정을 꼼꼼히 봐주셔서 계산 실수가 확실히 줄었습니다."],
  ["중학생", "영어", "단어 암기와 문법 복습을 꾸준히 체크해주셔서 습관이 잡혔습니다."],
  ["과학고", "과학", "개념 설명 후 바로 문제에 적용하는 방식이라 어려운 단원이 정리됐습니다."],
  ["학부모", "상담", "아이에게 필요한 과목부터 현실적으로 안내해주셔서 상담이 만족스러웠습니다."]
];

const pages = Array.from({ length: 10 }, (_, index) => index + 1);

export default function QnaPage() {
  return (
    <main className="board-page review-board-page">
      <section className="board-hero">
        <p className="eyebrow">Real Review</p>
        <h1>실제후기</h1>
        <p>수업을 경험한 학생과 학부모님이 남긴 핵심 후기를 과목별로 정리했습니다.</p>
      </section>

      <section className="review-board-wrap" aria-label="실제후기 목록">
        {reviews.map(([school, subject, body]) => (
          <article className="review-board-card" key={`${school}-${subject}`}>
            <div>
              <span>{school}</span>
              <em>{subject}</em>
            </div>
            <p>{body}</p>
          </article>
        ))}
      </section>

      <nav className="board-pagination" aria-label="실제후기 페이지">
        <Link className="arrow" href="/qna" aria-label="이전 실제후기 페이지">
          ‹
        </Link>
        {pages.map((page) => (
          <Link className={page === 1 ? "active" : undefined} href="/qna" key={page}>
            {page} 후기
          </Link>
        ))}
        <Link className="arrow" href="/qna" aria-label="다음 실제후기 페이지">
          ›
        </Link>
      </nav>

      <section className="board-cta compact">
        <div>
          <h2>비슷한 상황의 수업이 궁금하다면</h2>
          <p>학생의 학교와 과목을 알려주시면 필요한 관리 방식부터 안내드립니다.</p>
        </div>
        <Link className="button" href="/consultation">
          상담신청
        </Link>
      </section>
    </main>
  );
}
