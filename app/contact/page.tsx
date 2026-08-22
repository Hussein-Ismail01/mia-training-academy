import type { Metadata } from "next";
import { JsonLd } from "@/components/site/JsonLd";
import { siteUrl } from "@/lib/site-config";
import { ContactClient } from "./contact-client";

export const metadata: Metadata = {
  title: "Contact MIA Academy | Maadi, Cairo",
  description:
    "Reach the MIA Academy team in Maadi, Cairo. Send a message, call an advisor or book a 15-minute discovery call.",
  openGraph: {
    title: "Contact MIA Academy",
    description: "Address, phone, email, office hours and advisor bookings.",
    url: "/contact",
  },
  alternates: { canonical: "/contact" },
};

export default function Page() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteUrl}/contact#webpage`,
    url: `${siteUrl}/contact`,
    name: "Contact MIA Academy | Maadi, Cairo",
    about: { "@id": `${siteUrl}/#organization` },
    mainEntity: {
      "@type": "ContactPoint",
      telephone: "+20 2 2358 0100",
      email: "admissions@mia-academy.edu",
      contactType: "admissions",
      areaServed: "EG",
      availableLanguage: ["English", "Arabic"],
    },
  };

  return (
    <>
      <JsonLd data={contactJsonLd} />
      <ContactClient />
    </>
  );
}
