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
  ["/", "가치를 짓다, 삶을 담다"],
  ["/about", "Our Philosophy"],
  ["/projects", "Our Work"],
  ["/projects/model-house", "해링턴 목감 견본주택"],
  ["/projects/office", "카라 더 봄 센터"],
  ["/projects/house", "Residential spaces designed around structural integrity"],
  ["/projects/design", "태재대학교 리모델링"],
];

for (const [pathname, expected] of routes) {
  test(`server-renders ${pathname}`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

    const html = await response.text();
    assert.match(html, /HARMONY/);
    assert.match(html, /주식회사 하모니 건설/);
    assert.match(html, /010-9246-2148/);
    assert.match(html, /aceboon@kakao\.com/);
    assert.match(html, /류마타워/);
    assert.doesNotMatch(html, /Privacy Policy|Terms of Service|Instagram|LinkedIn|Built for longevity/);
    assert.match(html, new RegExp(expected.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
    assert.doesNotMatch(
      html,
      /Quiet confidence|Structure with permanence|Begin a project|Let&#x27;s build something enduring|What we build|Explore work/,
    );
    if (pathname === "/") {
      assert.doesNotMatch(html, /class="eyebrow">Harmony Construction/);
      assert.match(html, /공간을 짓다, 내일은 담다/);
      assert.match(html, /사람과 공간의 아름다운 어울림/);
      assert.match(html, /주식회사 하모니 건설이 함께 하겠습니다/);
      assert.doesNotMatch(html, /조화\(調和\)를 짓다|조화\(調和\)를 담다|Build Harmony|home-hero__english/);
    }
    if (pathname === "/about") {
      assert.doesNotMatch(html, /About Harmony|Our approach|How we work|>People</);
      assert.doesNotMatch(html, /<span>0[123]<\/span>/);
      assert.match(html, /section-intro section-intro--center/);
      assert.match(html, /AI로 생성한 가상 인물입니다/);
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
      assert.match(html, /<h1>House<\/h1>/);
      assert.match(html, /human comfort/);
      assert.match(html, /refined experience of living/);
      assert.match(html, /\/project-photos\/house\/h01\.png/);
      assert.match(html, /\/project-photos\/house\/781f04eb19043\.jpg/);
      assert.doesNotMatch(html, /Project category|project-tile__index|The Glass Pavilion|Concrete &amp; Light|Forest Retreat|The Floating Spine/);
    }
    if (pathname === "/projects/office") {
      assert.match(html, /서울대 정밀기계연구소/);
      assert.match(html, /안성 물류센터/);
      assert.match(html, /쿠팡 하남 물류센터/);
      assert.match(html, /실내 인테리어 공사/);
      assert.doesNotMatch(html, /Project category|project-tile__index/);
    }
    if (pathname === "/projects/model-house") {
      assert.match(html, /인천 코아루 견본주택/);
      assert.match(html, /신마곡 벽산 블루밍/);
      assert.doesNotMatch(html, /Project category|project-tile__index|Residential|Minimalist|Multi-Story|Urban|Estate|Cantilever/);
    }
  });
}
