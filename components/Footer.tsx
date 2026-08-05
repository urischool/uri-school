import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>{site.name}</strong>
        <p>사업자명: 우리학교과외 · 사업자등록번호: 690-26-02024</p>
      </div>
      <div className="footer-links">
        <Link href="/#inquiries">과외문의</Link>
        <Link href="/subjects/math">수학과외</Link>
        <Link href="/consultation">상담 신청</Link>
      </div>
    </footer>
  );
}
