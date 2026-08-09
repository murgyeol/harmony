import Link from "next/link";

type ActivePage = "home" | "about" | "projects";

export function SiteHeader({
  active,
  transparent = false,
}: {
  active: ActivePage;
  transparent?: boolean;
}) {
  const links = [
    { label: "Home", href: "/", key: "home" },
    { label: "About Us", href: "/about", key: "about" },
    { label: "Projects", href: "/projects", key: "projects" },
    { label: "Contact", href: "/#contact", key: "contact" },
  ];

  return (
    <header className={`site-header${transparent ? " site-header--transparent" : ""}`}>
      <div className="site-header__inner shell">
        <Link className="wordmark" href="/" aria-label="Harmony home">HARMONY</Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link
              className={active === link.key ? "is-active" : undefined}
              href={link.href}
              key={link.key}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Open navigation"><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            {links.map((link) => <Link href={link.href} key={link.key}>{link.label}</Link>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
