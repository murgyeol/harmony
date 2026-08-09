import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = { title: "About Us" };

const principles = [
  ["Innovation", "Pushing the boundaries of modern engineering while respecting timeless architectural proportions."],
  ["Sustainability", "Integrating environmentally conscious materials and practices to ensure structural longevity."],
  ["Integrity", "An unwavering commitment to precision, transparency, and excellence in every phase."],
];

const leaders = [
  ["Elias Vance", "Principal Architect", "/stitch/about-02.jpg"],
  ["Sarah Jenkins", "Head of Engineering", "/stitch/about-03.jpg"],
  ["Marcus Thorne", "Director of Operations", "/stitch/about-04.jpg"],
  ["Elena Rostova", "Sustainability Lead", "/stitch/about-05.jpg"],
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader active="about" />
      <main className="page-main" id="top">
        <section className="shell about-hero">
          <h1>Building structures that honor the environment and elevate the human experience.</h1>
        </section>

        <section className="philosophy">
          <div className="shell philosophy__grid">
            <img src="/stitch/about-01.jpg" alt="Minimal interior opening toward a tranquil garden" />
            <div>
              <h2>Our Philosophy</h2>
              <p className="lead">We believe true harmony in construction is found at the intersection of structural permanence and emotional resonance. A building is not merely a shelter; it is a canvas for life.</p>
              <p>By adhering to strict architectural principles while maintaining deep respect for natural materials, we create spaces that feel both grounded and expansive.</p>
            </div>
          </div>
        </section>

        <section className="section shell">
          <div className="section-intro">
            <h2>Core Principles</h2>
          </div>
          <div className="principles-grid">
            {principles.map(([title, copy]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="leadership">
          <div className="shell">
            <div className="section-intro section-intro--center">
              <h2>Leadership</h2>
            </div>
            <div className="leadership-grid">
              {leaders.map(([name, role, image]) => (
                <article key={name}>
                  <img src={image} alt={`${name}, ${role}`} />
                  <h3>{name}</h3>
                  <p>{role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
