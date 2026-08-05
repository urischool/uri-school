import { createMetadata } from "@/lib/seo";
import { ConsultationForm } from "@/components/ConsultationForm";

export const metadata = createMetadata({
  title: "상담 신청",
  description: "학교명, 학년, 현재 등급, 목표 등급을 기준으로 우리학교과외 상담을 신청하세요.",
  path: "/consultation"
});

export default function ConsultationPage() {
  return (
    <>
      <section className="consultation-hero">
        <div className="consultation-hero-inner">
        <p className="eyebrow">상담 신청</p>
        <h1>학교와 현재 상황을 알려주세요</h1>
        <p className="subline">
          최근 시험지, 현재 등급, 어려운 단원, 목표 등급을 기준으로 학생에게 필요한
          수업 방향을 제안합니다.
        </p>
        </div>
      </section>
      <ConsultationForm />
    </>
  );
}
