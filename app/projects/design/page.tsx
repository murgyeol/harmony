import type { Metadata } from "next";
import { CategoryPage, type ProjectCard } from "@/components/CategoryPage";

export const metadata: Metadata = { title: "Design" };

const projects: ProjectCard[] = [
  {
    title: "태재대학교 리모델링",
    copy: "",
    image: "/project-photos/design/01_태재대학교-리모델링/01_teje.png",
    alt: "태재대학교 리모델링",
    shape: "wide",
  },
  {
    title: "평창수석테마공원 공모",
    copy: "",
    image: "/project-photos/design/02_평창수석테마공원-공모/01_57b01bd64aa3b.jpg",
    alt: "평창수석테마공원 공모",
    additionalImages: [
      {
        image: "/project-photos/design/02_평창수석테마공원-공모/02_susek02.gif",
        alt: "평창수석테마공원 공모 추가 이미지",
      },
    ],
    shape: "landscape",
  },
  {
    title: "건설인력플랫폼 김반장",
    copy: "",
    image: "/project-photos/design/03_건설인력플랫폼-김반장/01_kim01.png",
    alt: "건설인력플랫폼 김반장",
    shape: "landscape",
  },
];

export default function DesignPage() {
  return (
    <CategoryPage
      category="design"
      title="Design"
      intro="Exploring the intersection of aesthetic ambition and functional longevity through spatial harmony, material integrity, and respect for the environment."
      projects={projects}
      cta="Discuss an ambitious concept with our design team."
      showCategoryLabel={false}
      showIndexes={false}
    />
  );
}
