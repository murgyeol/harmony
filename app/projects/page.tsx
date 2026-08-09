import type { Metadata } from "next";
import Link from "next/link";
import { ProjectNav } from "@/components/ProjectNav";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = { title: "Our Work" };

const projects = [
  {
    title: "실내 인테리어",
    location: "목감 해링턴 아파트",
    category: "House",
    href: "/projects/house",
    image: "/project-photos/house/h01.png",
    alt: "목감 해링턴 아파트 실내 인테리어",
    locale: "ko",
  },
  {
    title: "오피스 인테리어",
    location: "OOO 로비",
    category: "Office",
    href: "/projects/office",
    image: "/project-photos/office/ofi01.png",
    alt: "OOO 로비 오피스 인테리어",
    locale: "ko",
  },
  {
    title: "공동주택 모델하우스",
    location: "Hyosungtonw, Harrington",
    category: "Model House",
    href: "/projects/model-house",
    image: "/project-photos/model-house/mh01.png",
    alt: "공동주택 모델하우스 Hyosungtonw Harrington",
    locale: "ko",
  },
  {
    title: "리모델링",
    location: "태재대학교 제안 설계 및 시공",
    category: "Design",
    href: "/projects/design",
    image: "/project-photos/design/d01.png",
    alt: "태재대학교 제안 설계 및 시공 리모델링",
    locale: "ko",
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
              <Link className={`mosaic-card mosaic-card--${index + 1}`} href={project.href} key={project.title} lang={project.locale}>
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
