import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { getSchoolListCategory } from "@/data/schoolLists";
import { SchoolListPage } from "@/components/SchoolListPage";

const category = getSchoolListCategory("international-high-schools");

export const metadata = category
  ? createMetadata({
      title: `${category.title} - ${site.name}`,
      description: category.description,
      path: category.path
    })
  : {};

export default function Page() {
  if (!category) notFound();

  return <SchoolListPage category={category} />;
}