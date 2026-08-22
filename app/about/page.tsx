import type { Metadata } from "next";
import { JsonLd } from "@/components/site/JsonLd";
import { siteUrl } from "@/lib/site-config";
import { AboutClient } from "./about-client";

export const metadata: Metadata = {
  title: "About MIA Academy | Our Mission & History",
  description:
    "Learn how MIA Academy grew from its founding in 2017 into an academy licensed by Egyptian government bodies, with 6,000+ graduates.",
  openGraph: {
    title: "About MIA Academy",
    description: "Our mission, values, milestones and government accreditation.",
    url: "/about",
  },
  alternates: { canonical: "/about" },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${siteUrl}/about#webpage`,
  url: `${siteUrl}/about`,
  name: "About MIA Academy | Our Mission & History",
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: { "@id": `${siteUrl}/#organization` },
  inLanguage: ["ar-EG", "en-US"],
};

export default function Page() {
  return (
    <>
      <JsonLd data={aboutJsonLd} />
      <AboutClient />
    </>
  );
}
