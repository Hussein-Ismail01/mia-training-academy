import type { Metadata } from "next";
import { JsonLd } from "@/components/site/JsonLd";
import { siteUrl } from "@/lib/site-config";
import { AdmissionsClient } from "./admissions-client";

export const metadata: Metadata = {
  title: "Admissions | Apply to MIA Academy",
  description:
    "Four steps to enrol at MIA Academy: choose a programme, submit documents, interview and confirm your place. Scholarships available.",
  openGraph: {
    title: "Admissions | Apply to MIA Academy",
    description: "Entry requirements, tuition, scholarships and the MIA application form.",
    url: "/admissions",
  },
  alternates: { canonical: "/admissions" },
};

export default function Page() {
  const admissionsJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/admissions#webpage`,
    url: `${siteUrl}/admissions`,
    name: "Admissions | Apply to MIA Academy",
    about: { "@id": `${siteUrl}/#organization` },
    mainEntity: {
      "@type": "HowTo",
      name: "How to apply to MIA Academy",
      step: ["Select your programme", "Submit documents", "Interview", "Enrol"].map(
        (name, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name,
        }),
      ),
    },
  };

  return (
    <>
      <JsonLd data={admissionsJsonLd} />
      <AdmissionsClient />
    </>
  );
}
