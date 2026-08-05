import type { MetadataRoute } from "next";
import { schoolSubjectPages, schools, site, subjects } from "@/data/site";
import { schoolListCategories } from "@/data/schoolLists";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const staticRoutes = [
    "",
    "/specialized-high-schools",
    "/lesson-method",
    "/review",
    "/qna",
    "/consultation"
  ];

  const schoolListRoutes = schoolListCategories.map((category) => category.path);
  const foreignDetailRoutes = ["/schools/foreign-language-high-schools/gyeonggi-foreign-language-high-school"];
  const schoolRoutes = schools.map((school) => `/schools/${school.slug}`);
  const subjectRoutes = subjects.map((subject) => `/subjects/${subject.slug}`);
  const schoolSubjectRoutes = schoolSubjectPages.map(
    (page) => `/schools/${page.schoolSlug}/${page.subjectSlug}`
  );

  return [...staticRoutes, ...schoolListRoutes, ...foreignDetailRoutes, ...schoolRoutes, ...subjectRoutes, ...schoolSubjectRoutes].map((route) => ({
    url: `${base}${route || "/"}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("/goyang-international-high-school/math") ? 0.95 : 0.8
  }));
}