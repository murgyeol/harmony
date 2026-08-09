import type { Metadata } from "next";
import { CategoryPage, type ProjectCard } from "@/components/CategoryPage";

export const metadata: Metadata = { title: "Model House" };

const projects: ProjectCard[] = [
  {
    title: "The Pavilion Model",
    copy: "A single-story exploration of indoor-outdoor flow, utilizing deep overhangs and open-plan central living areas.",
    image: "/stitch/model-house-01.jpg",
    alt: "Minimal model house in concrete and warm timber at dawn",
    tags: ["Residential", "Minimalist"],
    shape: "landscape",
  },
  {
    title: "Vertical Courtyard",
    copy: "Designed for dense urban lots, this model prioritizes verticality and natural light drawn from a central, private atrium.",
    image: "/stitch/model-house-02.jpg",
    alt: "Open model house interior with high ceilings and neutral furniture",
    tags: ["Multi-Story", "Urban"],
    shape: "portrait",
  },
  {
    title: "The Overlook",
    copy: "A commanding presence designed to maximize vistas. Structural rigor allows for dramatic cantilevers and expansive glazing.",
    image: "/stitch/model-house-03.jpg",
    alt: "Cantilevered model home clad in charcoal panels and warm stone",
    tags: ["Estate", "Cantilever"],
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
    />
  );
}
