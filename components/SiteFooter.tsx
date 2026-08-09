import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="shell site-footer__lead">
        <p className="eyebrow">Begin a project</p>
        <h2>Let&apos;s build something enduring.</h2>
        <p>We welcome conversations about residential, commercial, office, and design projects.</p>
      </div>
      <div className="shell site-footer__bottom">
        <div>
          <Link className="wordmark wordmark--light" href="/">HARMONY</Link>
          <p>Building spaces that endure. Precision engineering meets architectural purity.</p>
        </div>
        <nav aria-label="Project categories">
          <Link href="/projects/model-house">Model House</Link>
          <Link href="/projects/office">Office</Link>
          <Link href="/projects/house">House</Link>
          <Link href="/projects/design">Design</Link>
        </nav>
        <p className="site-footer__copyright">© 2026 Harmony Construction.<br />Built for longevity.</p>
      </div>
    </footer>
  );
}
