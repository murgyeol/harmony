import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const services = [
  {
    number: "01",
    title: "Residential",
    copy: "Creating personal sanctuaries that balance aesthetic purity with everyday comfort.",
    href: "/projects/house",
  },
  {
    number: "02",
    title: "Commercial",
    copy: "Designing robust, engaging spaces that communicate brand identity and longevity.",
    href: "/projects/model-house",
  },
  {
    number: "03",
    title: "Office",
    copy: "Structuring environments that foster focus, collaboration, and professional clarity.",
    href: "/projects/office",
  },
  {
    number: "04",
    title: "Design",
    copy: "Professional design services covering interior design, landscaping, and exhibition planning.",
    href: "/projects/design",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader active="home" transparent />
      <main id="top">
        <section className="home-hero">
          <img
            className="home-hero__image"
            src="/stitch/home-01.jpg"
            alt="Warm, modern living room with expansive windows"
          />
          <div className="home-hero__wash" />
          <div className="home-hero__content shell">
            <p className="eyebrow">Harmony Construction</p>
            <h1>
              <span>조화(調和)를 짓다.</span>
              <span>조화(調和)를 담다</span>
            </h1>
            <p className="home-hero__english">Build Harmony &amp; Embrace Harmony</p>
          </div>
        </section>

        <section className="section shell" aria-labelledby="services-title">
          <div className="section-intro">
            <h2 id="services-title">Our Services</h2>
            <p>Expertise across disciplines, unified by a commitment to enduring quality.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <Link className="service-card" href={service.href} key={service.title}>
                <span className="service-card__number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </Link>
            ))}
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
