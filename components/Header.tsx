import Link from "next/link";
import { schoolListCategories } from "@/data/schoolLists";

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="우리학교과외 홈">
        <img src="/images/brand-logo.png" alt="우리학교 과외" />
      </Link>
      <nav className="nav" aria-label="주요 메뉴">
        <Link href="/">우리학교과외</Link>
        <div className="more-menu special-school-menu">
          <Link className="special-school-trigger" href="/specialized-high-schools" aria-label="특목고 페이지">
            특목고
          </Link>
          <div className="dropdown-panel mega-dropdown special-school-dropdown">
            <div className="dropdown-primary">
              {schoolListCategories.map((category) => (
                <div className="dropdown-branch" key={category.key}>
                  <Link href={category.path}>{category.navLabel} ›</Link>
                  <div className="dropdown-school-list" aria-label={`${category.navLabel} 학교 목록`}>
                    {category.schools.map((school) =>
                      school.href ? (
                        <Link key={school.name} href={school.href}>
                          {school.name}
                        </Link>
                      ) : (
                        <span className="dropdown-disabled" key={school.name}>
                          {school.name}
                        </span>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Link href="/lesson-method">수업방식</Link>
        <Link href="/review">과외문의</Link>
        <Link href="/qna">실제후기</Link>
        <Link href="/consultation">상담신청</Link>
      </nav>
    </header>
  );
}
