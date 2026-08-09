import type { Metadata } from "next";
import { CategoryPage, type ProjectCard } from "@/components/CategoryPage";

export const metadata: Metadata = { title: "Design" };

const projects: ProjectCard[] = [
  {
    title: "The Atrium Pavilion",
    copy: "A conceptual exploration of light and volume in public spaces.",
    image: "/stitch/design-01.jpg",
    alt: "Modern architectural pavilion with glass, concrete, and timber",
    tags: ["Cultural", "Concept"],
    shape: "wide",
  },
  {
    title: "Gallery Horizon",
    copy: "Redefining exhibition spaces through minimalist intervention.",
    image: "/stitch/design-02.jpg",
    alt: "Minimal gallery interior with diffuse skylight and abstract sculpture",
    tags: ["Interior"],
    shape: "landscape",
  },
  {
    title: "Tectonic Study 04",
    copy: "Material articulation and structural expression.",
    image: "/stitch/design-03.jpg",
    alt: "Architectural facade detail with charcoal steel and warm stone",
    tags: ["Facade", "Material"],
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
    />
  );
}
