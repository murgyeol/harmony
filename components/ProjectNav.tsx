import Link from "next/link";

const categories = [
  ["Model House", "/projects/model-house", "model-house"],
  ["Office", "/projects/office", "office"],
  ["House", "/projects/house", "house"],
  ["Design", "/projects/design", "design"],
] as const;

export function ProjectNav({ active }: { active?: string }) {
  return (
    <nav className="project-nav" aria-label="Project categories">
      {categories.map(([label, href, key]) => (
        <Link className={active === key ? "is-active" : undefined} href={href} key={key}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
