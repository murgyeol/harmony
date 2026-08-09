import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="shell site-footer__bottom">
        <div className="site-footer__brand">
          <Link className="wordmark" href="/">HARMONY</Link>
          <p>© 2026 Harmony Construction. Built for longevity.</p>
        </div>
        <nav aria-label="Legal links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </nav>
        <nav aria-label="Social links">
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </nav>
      </div>
    </footer>
  );
}
