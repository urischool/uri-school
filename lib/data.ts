import { schoolSubjectPages, schools, subjects } from "@/data/site";

export function getSchool(slug: string) {
  return schools.find((school) => school.slug === slug);
}

export function getSubject(slug: string) {
  return subjects.find((subject) => subject.slug === slug);
}

export function getSchoolSubjectPage(schoolSlug: string, subjectSlug: string) {
  return schoolSubjectPages.find(
    (page) => page.schoolSlug === schoolSlug && page.subjectSlug === subjectSlug
  );
}

export function getSubjectPages(subjectSlug: string) {
  return schoolSubjectPages.filter((page) => page.subjectSlug === subjectSlug);
}
