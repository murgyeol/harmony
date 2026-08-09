import type { Metadata } from "next";
import { CategoryPage, type ProjectCard } from "@/components/CategoryPage";

export const metadata: Metadata = { title: "Office Projects" };

const projects: ProjectCard[] = [
  {
    title: "카라 더 봄 센터",
    copy: "",
    image: "/project-photos/office/01_카라 더 봄 센터/01_kara.jpg",
    alt: "카라 더 봄 센터",
    shape: "landscape",
  },
  {
    title: "서울대 정밀기계연구소",
    copy: "",
    image: "/project-photos/office/02_서울대 정밀기계연구소/01_sun.png",
    alt: "서울대 정밀기계연구소",
    shape: "landscape",
  },
  {
    title: "안성 물류센터",
    copy: "",
    image: "/project-photos/office/03_안성 물류센터/01_anseong.jpg",
    alt: "안성 물류센터",
    shape: "landscape",
  },
  {
    title: "쿠팡 하남 물류센터",
    copy: "",
    image: "/project-photos/office/04_쿠팡 하남 물류센터/01_hanam.png",
    alt: "쿠팡 하남 물류센터",
    shape: "landscape",
  },
];

export default function OfficePage() {
  return (
    <CategoryPage
      category="office"
      title="Office Projects"
      intro="Where structural integrity meets human comfort. Our commercial spaces foster collaboration, focus, and longevity with quiet confidence and architectural precision."
      projects={projects}
      cta="Planning a workplace with lasting value?"
      showCategoryLabel={false}
      showIndexes={false}
    />
  );
}
