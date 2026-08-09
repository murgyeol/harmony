import type { Metadata } from "next";
import { CategoryPage, type ProjectCard } from "@/components/CategoryPage";

export const metadata: Metadata = { title: "Office Projects" };

const projects: ProjectCard[] = [
  {
    title: "Tech Hub HQ",
    copy: "San Francisco, CA",
    image: "/stitch/office-01.jpg",
    alt: "Bright modern office with exposed concrete, oak floors, and a central tree",
    shape: "landscape",
  },
  {
    title: "Creative Studio Loft",
    copy: "New York, NY",
    image: "/stitch/office-02.jpg",
    alt: "Open creative studio with black steel beams and warm light",
    shape: "landscape",
  },
  {
    title: "Financial Partners Suite",
    copy: "Chicago, IL",
    image: "/stitch/office-03.jpg",
    alt: "Executive boardroom with walnut table and panoramic city view",
    shape: "landscape",
  },
  {
    title: "The Monolith Lobby",
    copy: "Austin, TX",
    image: "/stitch/office-04.jpg",
    alt: "Minimal corporate lobby with travertine walls and a dark stone desk",
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
    />
  );
}
