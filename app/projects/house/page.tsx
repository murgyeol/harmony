import type { Metadata } from "next";
import { CategoryPage, type ProjectCard } from "@/components/CategoryPage";

export const metadata: Metadata = { title: "House" };

const projects: ProjectCard[] = [
  {
    title: "The Glass Pavilion",
    copy: "A study in transparency and natural light integration.",
    image: "/stitch/house-01.jpg",
    alt: "Modern home with flat roof, concrete facade, and timber slats",
    status: "Completed",
    shape: "portrait",
  },
  {
    title: "Concrete & Light",
    copy: "Raw materials refined for everyday living.",
    image: "/stitch/house-02.jpg",
    alt: "Minimal living room with beige furniture and polished concrete floor",
    status: "In Progress",
    shape: "portrait",
  },
  {
    title: "Forest Retreat",
    copy: "Brutalist forms softened by the surrounding landscape.",
    image: "/stitch/house-03.jpg",
    alt: "Board-formed concrete home nested in a dense forest",
    status: "Completed",
    shape: "landscape",
  },
  {
    title: "The Floating Spine",
    copy: "Engineering precision translated into residential elegance.",
    image: "/stitch/house-04.jpg",
    alt: "Floating oak staircase with frameless glass balustrades",
    status: "Completed",
    shape: "landscape",
  },
];

export default function HousePage() {
  return (
    <CategoryPage
      category="house"
      title="House"
      intro="Residential spaces designed around structural integrity and human comfort. We balance the rugged reality of construction with the refined experience of living."
      projects={projects}
      cta="Ready to discuss your residential project?"
      showCategoryLabel={false}
      showIndexes={false}
    />
  );
}
