import Link from "next/link";

export function FloatingConsult() {
  return (
    <aside className="floating-consult" aria-label="빠른 상담">
      <Link href="http://pf.kakao.com/_VJTYn/chat">
        <span className="talk-icon">TALK</span>
        카카오톡 상담
      </Link>
      <Link href="tel:01057411134">
        <span className="phone-icon">☎</span>
        전화 상담
      </Link>
      <Link href="/consultation">
        <span className="memo-icon">▤</span>
        상담하기
      </Link>
    </aside>
  );
}
