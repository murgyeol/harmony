import type { Metadata } from "next";
import { ProjectNav } from "@/components/ProjectNav";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = { title: "House" };

const photos = [
  "h01.png",
  "143becaac2a9a.jpg",
  "176b65bf8bd58.jpg",
  "1443f9998f5ee.jpg",
  "1781b12f64250.jpg",
  "197ead50ca863.jpg",
  "3870583de9a4b.jpg",
  "42cf4a3280e76.jpg",
  "535132b52efb2.jpg",
  "61f288fbf42ce.jpg",
  "781f04eb19043.jpg",
] as const;

export default function HousePage() {
  return (
    <>
      <SiteHeader active="projects" />
      <main className="page-main" id="top">
        <div className="shell">
          <ProjectNav active="house" />
          <h1 className="visually-hidden">House</h1>
          <section className="house-gallery" aria-label="House project gallery">
            {photos.map((photo) => (
              <figure className="house-gallery__item" key={photo}>
                <img src={`/project-photos/house/${photo}`} alt="" />
              </figure>
            ))}
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
