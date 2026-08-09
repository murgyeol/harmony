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
  ["/projects", "Selected portfolio"],
  ["/projects/model-house", "The Pavilion Model"],
  ["/projects/office", "Tech Hub HQ"],
  ["/projects/house", "The Glass Pavilion"],
  ["/projects/design", "The Atrium Pavilion"],
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
      /Quiet confidence|Structure with permanence|Begin a project|Let&#x27;s build something enduring/,
    );
  });
}
