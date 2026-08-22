import type { Metadata } from "next";
import { JsonLd } from "@/components/site/JsonLd";
import { faculties } from "@/data/site";
import { siteUrl } from "@/lib/site-config";
import { ProgramsClient } from "./programs-client";

export const metadata: Metadata = {
  title: "Programs | MIA Academy",
  description:
    "Browse MIA Academy faculties across business, technology, marketing and languages, with the study areas and programmes connected to each specialism.",
  openGraph: {
    title: "Programs at MIA Academy",
    description:
      "Explore the academy by faculty and discover the learning tracks connected to each area.",
    url: "/programs",
  },
  alternates: { canonical: "/programs" },
};

const programsJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteUrl}/programs#webpage`,
  url: `${siteUrl}/programs`,
  name: "Programs | MIA Academy",
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: { "@id": `${siteUrl}/#organization` },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: faculties.map((faculty, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: faculty.name.en,
      url: `${siteUrl}/programs/${faculty.slug}`,
    })),
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={programsJsonLd} />
      <ProgramsClient />
    </>
  );
}
