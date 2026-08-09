import type { Metadata } from "next";
import Link from "next/link";
import { ProjectNav } from "@/components/ProjectNav";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = { title: "Our Work" };

const projects = [
  {
    title: "목감 해링턴 아파트",
    location: "실내인테리어",
    category: "House",
    href: "/projects/house",
    image: "/project-photos/house/h01.png",
    alt: "목감 해링턴 아파트 실내인테리어",
  },
  {
    title: "Apex Tower",
    location: "Chicago, Illinois",
    category: "Office",
    href: "/projects/office",
    image: "/stitch/projects-02.jpg",
    alt: "Modern high-rise lobby with concrete columns and glass walls",
  },
  {
    title: "Timber Retreat",
    location: "Portland, Oregon",
    category: "Model House",
    href: "/projects/model-house",
    image: "/stitch/projects-03.jpg",
    alt: "Minimal concrete and timber house set within a forest",
  },
  {
    title: "태재대학교 리모델링",
    location: "제안설계",
    category: "Design",
    href: "/projects/design",
    image: "/project-photos/design/d01.png",
    alt: "태재대학교 리모델링 제안설계",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader active="projects" />
      <main className="page-main" id="top">
        <div className="shell">
          <header className="page-hero">
            <h1>Our Work</h1>
            <p>A collection of spaces shaped by human-centered innovation, sustainable materials, and an unwavering commitment to construction integrity.</p>
          </header>
          <ProjectNav />
          <section className="projects-mosaic" aria-label="Selected projects">
            {projects.map((project, index) => (
              <Link className={`mosaic-card mosaic-card--${index + 1}`} href={project.href} key={project.title}>
                <div className="mosaic-card__image">
                  <img src={project.image} alt={project.alt} />
                </div>
                <div className="mosaic-card__meta">
                  <div>
                    <h2>{project.title}</h2>
                    <p>{project.location}</p>
                  </div>
                  <span>{project.category}</span>
                </div>
              </Link>
            ))}
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
