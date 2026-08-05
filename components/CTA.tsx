import Link from "next/link";

export function CTA({
  title = "우리 학교에 맞는 수학 내신 전략이 필요하다면",
  body = "최근 시험지, 현재 등급, 목표 등급을 알려주시면 학생 상황에 맞춰 상담을 도와드립니다."
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="cta-band">
      <div>
        <p className="eyebrow">상담 신청</p>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <Link className="button light" href="/consultation">
        상담 신청하기
      </Link>
    </section>
  );
}
