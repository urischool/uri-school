import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "과외현황 | 우리학교과외 실시간 문의 현황",
  description:
    "우리학교과외에 접수된 실시간 과외 문의 현황을 확인하고 학교별 내신관리 상담을 신청하세요.",
  path: "/review"
});

const inquiryRows = [
  "보인고 과외 가능한가요????",
  "수학과외 문의드립니다.",
  "김포외고 고3 1학기 내신 영어 문의드립니다.",
  "한양외고 내신관련 문의드립니다.",
  "영어과외",
  "이화외고 내신대비수업으로 가격문의 드립니다.",
  "학원에서 진기세반 내는경우로 상담이 필요합니다 도와주세요",
  "중3 기초가 부족함",
  "안녕하세요 휘문고등학교 수학문의가능할까요?",
  "대구국제고인데 전학을 생각할정도로 내신이 낮습니다 상담 부탁드립니다"
];

const pages = Array.from({ length: 9 }, (_, index) => index + 1);

export default function ReviewPage() {
  return (
    <main className="inquiry-status-page">
      <section className="inquiry-status-hero">
        <div>
          <h1>과외 문의 현황</h1>
          <p>현재 우리학교 과외 문의현황</p>
        </div>
        <div className="inquiry-bubble" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="inquiry-status-board" aria-label="실시간 과외 문의 현황">
        <h2>실시간 과외 문의 현황</h2>
        <div className="inquiry-table">
          <div className="inquiry-table-head">제목</div>
          {inquiryRows.map((row) => (
            <Link className="inquiry-table-row" href="/consultation" key={row}>
              <span aria-hidden="true">⌂</span>
              <strong>{row}</strong>
            </Link>
          ))}
        </div>
        <nav className="inquiry-pagination" aria-label="과외 문의 현황 페이지">
          <Link href="/review" aria-label="이전 페이지">
            ‹
          </Link>
          {pages.map((page) => (
            <Link className={page === 1 ? "active" : undefined} href="/review" key={page}>
              {page}
            </Link>
          ))}
          <Link href="/review" aria-label="다음 페이지">
            ›
          </Link>
        </nav>
      </section>
    </main>
  );
}
