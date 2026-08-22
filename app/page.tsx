import type { Metadata } from "next";
import { JsonLd } from "@/components/site/JsonLd";
import { siteUrl } from "@/lib/site-config";
import { HomeClient } from "./home-client";

export const metadata: Metadata = {
  title: "MIA Academy | Professional Diplomas in Maadi, Cairo",
  description:
    "Industry-built diplomas and certificates in business, data, marketing and languages. Join MIA Academy's next cohort in Maadi, Cairo.",
  openGraph: {
    title: "MIA Academy | Professional Diplomas in Cairo",
    description:
      "Industry-built diplomas and certificates in business, data, marketing and languages at MIA Academy.",
    url: "/",
    images: [{ url: "/images/mia-og.png", width: 1620, height: 970, alt: "MIA Academy campus" }],
  },
  alternates: { canonical: "/" },
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/#webpage`,
  url: siteUrl,
  name: "MIA Academy | Professional Diplomas in Maadi, Cairo",
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: { "@id": `${siteUrl}/#organization` },
  inLanguage: ["ar-EG", "en-US"],
};

export default function Page() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <HomeClient />
    </>
  );
}
