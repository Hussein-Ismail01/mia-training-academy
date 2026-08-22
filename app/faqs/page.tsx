import type { Metadata } from "next";
import { JsonLd } from "@/components/site/JsonLd";
import { faqs } from "@/data/site";
import { FaqsClient } from "./faqs-client";

export const metadata: Metadata = {
  title: "FAQs | Admissions, Tuition & Academics at MIA",
  description:
    "Answers on MIA Academy admissions, tuition and payment plans, academics, campus life and online learning.",
  openGraph: {
    title: "Frequently Asked Questions | MIA Academy",
    description: "Search answers about admissions, fees, academics, campus life and online study.",
    url: "/faqs",
  },
  alternates: { canonical: "/faqs" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <FaqsClient />
    </>
  );
}
