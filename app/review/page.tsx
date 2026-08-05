import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "고양국제고 수학 학부모 후기 | 수학 내신 변화 사례",
  description:
    "고양국제고 수학 내신, 수행평가, 서술형 대비를 중심으로 학부모 후기와 대표적인 학습 변화 사례를 확인하세요.",
  path: "/review"
});

const parentReviews = [
  {
    initial: "김",
    name: "김OO 학부모님",
    tag: "고양국제고 고1 수학",
    text:
      "고양국제고 수학 시험은 문제량이 많고 서술형이 어려워 걱정이 많았습니다. 학교 출제경향에 맞춰 풀이 과정을 점검하면서 아이가 시험 준비 방향을 조금씩 잡아갔습니다."
  },
  {
    initial: "박",
    name: "박OO 학부모님",
    tag: "고양국제고 고2 수학",
    text:
      "고양국제고 수학 내신 범위와 학교 프린트를 함께 봐주셔서 좋았습니다. 단순히 문제를 많이 푸는 방식이 아니라, 어떤 유형에서 자주 틀리는지 확인해 주셔서 도움이 됐습니다."
  },
  {
    initial: "이",
    name: "이OO 학부모님",
    tag: "고양국제고 고1 수학",
    text:
      "고양국제고 수학 수행평가 일정까지 같이 관리해 주셔서 학습 계획을 세우기가 훨씬 수월했습니다. 내신 준비와 수행평가가 따로 움직이지 않아서 부담이 줄었습니다."
  },
  {
    initial: "최",
    name: "최OO 학부모님",
    tag: "고양국제고 고3 수학",
    text:
      "고국고 수학 준비가 막막했는데, 아이가 어려워하는 단원과 서술형 감점 포인트를 먼저 정리해 주셨습니다. 고양국제고 수학 내신을 어떻게 준비해야 하는지 기준이 생겼습니다."
  },
  {
    initial: "정",
    name: "정OO 학부모님",
    tag: "고양국제고 고2 수학",
    text:
      "학교 수학 자료를 놓치면 준비가 흐트러지기 쉬웠습니다. 오답노트와 주간 계획을 같이 확인하면서 아이가 혼자 공부할 때도 덜 헤매게 됐습니다."
  }
];

const growthCases = [
  {
    student: "이OO 학생",
    subject: "고1 수학",
    change: ["5등급", "2등급"],
    period: "6개월",
    text:
      "대표적인 학습 변화 사례입니다. 고양국제고 수학 내신 출제경향을 기준으로 단원별 오답노트를 만들고, 서술형 풀이 과정을 반복 점검했습니다."
  },
  {
    student: "정OO 학생",
    subject: "고2 수학",
    change: ["3등급", "1등급"],
    period: "5개월",
    text:
      "고양국제고 수학 수행평가와 시험 범위를 함께 관리한 사례입니다. 학교 프린트, 교과서 변형 문제, 고난도 유형을 순서대로 정리해 학습 흐름을 만들었습니다."
  },
  {
    student: "조OO 학생",
    subject: "고3 수학",
    change: ["4등급", "2등급"],
    period: "4개월",
    text:
      "고국고 수학에서 자주 나오는 계산 실수와 서술형 감점 요소를 중심으로 훈련했습니다. 기출 변형 문제를 유형별로 묶어 시험 직전 복습 효율을 높였습니다."
  },
  {
    student: "한OO 학생",
    subject: "고1 수학",
    change: ["4등급", "2등급"],
    period: "5개월",
    text:
      "수학 수행평가 일정과 내신 대비를 함께 관리한 변화 사례입니다. 학교별 출제경향 분석 후 부족한 개념을 보완하고 풀이 습관을 점검했습니다."
  }
];

export default function ReviewPage() {
  return (
    <main className="goyang-math-review-page">
      <section className="goyang-review-hero">
        <p className="eyebrow">Goyang International High School Math</p>
        <h1>고양국제고 수학 학부모님 생생 후기</h1>
        <p>
          수학과외보다 먼저, 학교별 수학 내신과 자료 흐름을 기준으로 상담과 수업 방향을 정리합니다.
        </p>
      </section>

      <section className="parent-review-section" aria-label="고양국제고 학부모 수학 후기">
        <div className="review-section-title">
          <span aria-hidden="true">▣</span>
          <h2>고양국제고 수학 학부모님 생생 후기</h2>
        </div>
        <div className="parent-review-track">
          {parentReviews.map((review) => (
            <article className="parent-review-card" key={`${review.name}-${review.tag}`}>
              <div className="review-card-head">
                <span className="review-avatar">{review.initial}</span>
                <div>
                  <strong>{review.name}</strong>
                  <em>{review.tag}</em>
                </div>
              </div>
              <p>{review.text}</p>
            </article>
          ))}
        </div>
        <div className="review-slider-dots" aria-hidden="true">
          <span />
          <span />
          <span className="active" />
        </div>
      </section>

      <section className="growth-case-section" aria-label="실제 성적 향상 사례">
        <div className="review-section-title">
          <span aria-hidden="true">▧</span>
          <h2>실제 성적 향상 사례</h2>
        </div>
        <p className="case-section-note">
          아래 내용은 실제 학생을 특정하지 않는 대표적인 학습 변화 사례입니다.
        </p>
        <div className="growth-case-grid">
          {growthCases.map((item) => (
            <article className="growth-case-card" key={`${item.student}-${item.subject}`}>
              <div className="growth-case-header">
                <strong>{item.student}</strong>
                <span>{item.subject}</span>
              </div>
              <div className="grade-change-row">
                <mark>{item.change[0]}</mark>
                <b>→</b>
                <mark className="after">{item.change[1]}</mark>
                <em>({item.period})</em>
              </div>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
