import type { Metadata } from "next";
import { JsonLd } from "@/components/site/JsonLd";
import { siteUrl } from "@/lib/site-config";
import { AcademicsClient } from "./academics-client";

export const metadata: Metadata = {
  title: "Academics at MIA | Faculties, Methodology & Facilities",
  description:
    "Explore MIA Academy's teaching methodology, six faculties, modern labs and the 2026/27 academic calendar.",
  openGraph: {
    title: "Academics at MIA Academy",
    description: "Our methodology, faculties, facilities and academic calendar.",
    url: "/academics",
  },
  alternates: { canonical: "/academics" },
};

export default function Page() {
  const academicsJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/academics#webpage`,
    url: `${siteUrl}/academics`,
    name: "Academics at MIA | Faculties, Methodology & Facilities",
    about: { "@id": `${siteUrl}/#organization` },
  };

  return (
    <>
      <JsonLd data={academicsJsonLd} />
      <AcademicsClient />
    </>
  );
}
