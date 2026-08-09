import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const description =
    "Harmony Construction creates enduring residential, commercial, office, and design spaces.";

  return {
    metadataBase: new URL(origin),
    title: {
      default: "HARMONY — Harmony Construction",
      template: "%s — HARMONY",
    },
    description,
    openGraph: {
      title: "HARMONY",
      description: "가치를 짓다, 삶을 담다 — 주식회사 하모니 건설",
      type: "website",
      images: [{ url: new URL("/og.png", origin), width: 1734, height: 907 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "HARMONY",
      description,
      images: [new URL("/og.png", origin)],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
