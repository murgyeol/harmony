import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = { title: "About Us" };

const principles = [
  [
    "Innovation",
    "We blend warm, human-centered innovation with thoughtful technology, constantly exploring new ways to design spaces that quietly enrich everyday life and adapt to how people truly live.",
  ],
  [
    "Sustainability",
    "We design with lasting value in mind, choosing materials and forms that age gracefully, so each space grows more meaningful and beautiful as time passes.",
  ],
  [
    "Integrity",
    "To build spaces our clients can truly trust, we use honest materials and meticulous construction, doing our utmost at every step to minimize defects.",
  ],
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
              <p className="lead">
                조화를 짓고, 조화를 담는 공간.<br />
                당신의 일상에 스며드는 감성과 기술의 건축을 만들어갑니다.
              </p>
              <p>
                최근의 건축·인테리어 트렌드는 단순한 ‘멋’이나 ‘기능성’을 넘어,
                사람 중심의 가치와 지속 가능한 아름다움을 지향합니다. 삶의 방식이
                다양해지고, 공간에 대한 생각이 깊어지는 지금, 건축은 더 이상 구조물에
                머물지 않고, 사람의 삶을 담는 그릇이 되어야 합니다.
              </p>
              <p>
                우리는 이러한 흐름에 발맞춰, 조화로운 디자인과 따뜻한 기술로 삶의 질을
                높이는 공간을 제안합니다. 우리는 단순히 공간을 ‘꾸미는’ 것이 아닌,
                고객 한 사람 한 사람의 생활 방식, 가치관, 감성을 반영한 공간을 ‘짓고,
                담는’ 건축 인테리어 전문 회사입니다.
              </p>
              <p>
                우리는 당신의 일상에 꼭 맞는 공간을 만들어 갑니다. 우리가 짓는 공간에는
                늘 따뜻한 혁신(Human-Centered Innovation)이 담겨 있습니다. 눈에 보이는
                형태보다, 그 안에 담긴 생각과 마음을 더 중요하게 여기며 사람, 공간,
                자연이 조화를 이루는 디자인을 고민합니다.
              </p>
              <p>
                불필요한 것을 덜어내고, 본질을 남기는 간결함 속에 세심한 디테일과 깊은
                철학이 깃든 공간을 만들어내는 것, 그것이 우리가 추구하는 진정한
                건축입니다.
              </p>
              <p>
                앞으로도 우리는 ‘조화를 짓고, 조화를 담는’ 공간으로 고객 여러분의 삶에
                영감을 더하고, 지속 가능한 아름다움을 실현해 나가겠습니다.
              </p>
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
