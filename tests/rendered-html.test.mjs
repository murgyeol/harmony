import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

const routes = [
  ["/", "조화(調和)를 짓다."],
  ["/about", "Our Philosophy"],
  ["/projects", "Our Work"],
  ["/projects/model-house", "해링턴 목감 견본주택"],
  ["/projects/office", "Tech Hub HQ"],
  ["/projects/house", "The Glass Pavilion"],
  ["/projects/design", "태재대학교 리모델링"],
];

for (const [pathname, expected] of routes) {
  test(`server-renders ${pathname}`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

    const html = await response.text();
    assert.match(html, /HARMONY/);
    assert.match(html, new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
    assert.doesNotMatch(
      html,
      /Quiet confidence|Structure with permanence|Begin a project|Let&#x27;s build something enduring|What we build|Explore work/,
    );
    if (pathname === "/") {
      assert.doesNotMatch(html, /class="eyebrow">Harmony Construction/);
    }
    if (pathname === "/about") {
      assert.doesNotMatch(html, /About Harmony|Our approach|How we work|>People</);
      assert.doesNotMatch(html, /<span>0[123]<\/span>/);
      assert.match(html, /section-intro section-intro--center/);
      assert.match(html, /조화를 짓고, 조화를 담는 공간/);
    }
    if (pathname === "/projects") {
      assert.doesNotMatch(html, /Selected portfolio|page-hero editorial-offset/);
      assert.match(html, /human-centered innovation, sustainable materials/);
      assert.match(html, /태재대학교 제안 설계 및 시공/);
      assert.match(html, />리모델링</);
      assert.match(html, /\/project-photos\/design\/d01\.png/);
      assert.match(html, /목감 해링턴 아파트/);
      assert.match(html, /실내 인테리어/);
      assert.match(html, /\/project-photos\/house\/h01\.png/);
      assert.match(html, /class="mosaic-card mosaic-card--1" lang="ko"/);
      assert.match(html, /공동주택 모델하우스/);
      assert.match(html, /\/project-photos\/model-house\/mh01\.png/);
      assert.match(html, /오피스 인테리어/);
      assert.match(html, /\/project-photos\/office\/ofi01\.png/);
    }
    if (pathname === "/projects/design") {
      assert.match(html, /평창수석테마공원 공모/);
      assert.match(html, /02_susek02\.gif/);
      assert.match(html, /건설인력플랫폼 김반장/);
      assert.doesNotMatch(html, /Cultural|Concept|Interior|Facade|Material|A conceptual exploration/);
      assert.doesNotMatch(html, /Project category|project-tile__index/);
    }
    if (pathname === "/projects/house") {
      assert.doesNotMatch(html, /Project category|project-tile__index/);
    }
    if (pathname === "/projects/office") {
      assert.doesNotMatch(html, /Project category|project-tile__index/);
    }
    if (pathname === "/projects/model-house") {
      assert.match(html, /인천 코아루 견본주택/);
      assert.match(html, /신마곡 벽산 블루밍/);
      assert.doesNotMatch(html, /Project category|project-tile__index|Residential|Minimalist|Multi-Story|Urban|Estate|Cantilever/);
    }
  });
}
