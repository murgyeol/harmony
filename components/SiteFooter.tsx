import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="shell site-footer__bottom">
        <Link className="wordmark" href="/">HARMONY</Link>
        <div className="site-footer__company">
          <p>주식회사 하모니 건설 <span aria-hidden="true">|</span> Since 2015</p>
          <p>
            Tel:. <a href="tel:+821092462148">010-9246-2148</a>
            <span aria-hidden="true"> | </span>
            Email: <a href="mailto:aceboon@kakao.com">aceboon@kakao.com</a>
          </p>
        </div>
        <address className="site-footer__address">
          <span>서울특별시 강서구 공항대로 164, 11층 1115호(마곡동, 류마타워)</span>
          <span>11F, 1115, Ryuma Tower, 164 Gonghang-daero, Gangseo-gu, Seoul, South Korea</span>
        </address>
      </div>
    </footer>
  );
}
