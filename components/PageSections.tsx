import Link from "next/link";

export function Section({
  eyebrow,
  title,
  children
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function LinkCard({
  href,
  title,
  body
}: {
  href: string;
  title: string;
  body: string;
}) {
  return (
    <Link className="link-card" href={href}>
      <strong>{title}</strong>
      <span>{body}</span>
    </Link>
  );
}

export function ReportTitle({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="report-title">
      <span />
      {eyebrow && <p>{eyebrow}</p>}
      <div className="report-title-row">
        <h2>{title}</h2>
        <img src="/images/brand-logo.png" alt="우리학교 과외" />
      </div>
      {subtitle && <small>{subtitle}</small>}
    </div>
  );
}

export function PremiumReveal({
  summary = "자세히 보기",
  summaryHref,
  detail,
  faqs = []
}: {
  summary?: string;
  summaryHref?: string;
  detail: string;
  faqs?: { question: string; answer: string }[];
}) {
  if (summaryHref) {
    return (
      <div className="premium-reveal">
        <Link className="premium-reveal-summary" href={summaryHref}>
          {summary}
        </Link>
      </div>
    );
  }

  return (
    <details className="premium-reveal">
      <summary>{summary}</summary>
      <div className="premium-detail">
        <p>{detail}</p>
        {faqs.length > 0 && (
          <div className="compact-faqs">
            {faqs.map((faq) => (
              <article key={faq.question}>
                <strong>{faq.question}</strong>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </details>
  );
}
