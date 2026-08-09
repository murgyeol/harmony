import type { Metadata } from "next";
import { CategoryPage, type ProjectCard } from "@/components/CategoryPage";

export const metadata: Metadata = { title: "Model House" };

const projects: ProjectCard[] = [
  {
    title: "해링턴 목감 견본주택",
    copy: "",
    image: "/project-photos/model-house/01_해링턴 목감 견본주택/01_hyseng.png",
    alt: "해링턴 목감 견본주택",
    shape: "landscape",
  },
  {
    title: "인천 코아루 견본주택",
    copy: "",
    image: "/project-photos/model-house/02_인천 코아루 견본주택/01_inchen.jpg",
    alt: "인천 코아루 견본주택",
    shape: "portrait",
  },
  {
    title: "신마곡 벽산 블루밍",
    copy: "",
    image: "/project-photos/model-house/03_신마곡 벽산 블루밍/01_buck.jpg",
    alt: "신마곡 벽산 블루밍",
    shape: "wide",
  },
];

export default function ModelHousePage() {
  return (
    <CategoryPage
      category="model-house"
      title="Model House"
      intro="A curated selection of our prototypical residential designs. Each model house explores spatial efficiency, structural integrity, and modern living across diverse sites and client visions."
      projects={projects}
      cta="Ready to discuss your vision?"
      showCategoryLabel={false}
      showIndexes={false}
    />
  );
}
