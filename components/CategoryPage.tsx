import { ProjectNav } from "@/components/ProjectNav";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export type ProjectCard = {
  title: string;
  copy: string;
  image: string;
  alt: string;
  tags?: string[];
  status?: string;
  shape?: "portrait" | "landscape" | "wide";
};

export function CategoryPage({
  category,
  title,
  intro,
  projects,
  cta,
  showCategoryLabel = true,
  showIndexes = true,
}: {
  category: string;
  title: string;
  intro: string;
  projects: ProjectCard[];
  cta: string;
  showCategoryLabel?: boolean;
  showIndexes?: boolean;
}) {
  return (
    <>
      <SiteHeader active="projects" />
      <main className="page-main" id="top">
        <div className="shell">
          <ProjectNav active={category} />
          <header className="page-hero editorial-offset">
            {showCategoryLabel && <p className="eyebrow">Project category</p>}
            <h1>{title}</h1>
            <p>{intro}</p>
          </header>
          <section className={`category-grid category-grid--${category}`} aria-label={`${title} projects`}>
            {projects.map((project, index) => (
              <article className={`project-tile ${project.shape ? `project-tile--${project.shape}` : ""}`} key={project.title}>
                <div className="project-tile__media">
                  <img src={project.image} alt={project.alt} />
                  {showIndexes && <span className="project-tile__index">{String(index + 1).padStart(2, "0")}</span>}
                </div>
                <div className="project-tile__meta">
                  <div>
                    {project.tags && <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>}
                    <h2>{project.title}</h2>
                    {project.copy && <p>{project.copy}</p>}
                  </div>
                  {project.status && <span className="status">{project.status}</span>}
                </div>
              </article>
            ))}
          </section>
          <section className="page-cta">
            <p className="eyebrow">New project</p>
            <h2>{cta}</h2>
            <a className="button button--dark" href="#contact">Start a conversation</a>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
