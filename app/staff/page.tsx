import type { Metadata } from "next";
import { JsonLd } from "@/components/site/JsonLd";
import { staff } from "@/data/site";
import { siteUrl } from "@/lib/site-config";
import { StaffClient } from "./staff-client";

export const metadata: Metadata = {
  title: "Faculty & Staff | MIA Academy",
  description:
    "Meet the leadership, professors, industry mentors and guest lecturers who teach at MIA Academy in Maadi, Cairo.",
  openGraph: {
    title: "Faculty & Staff | MIA Academy",
    description: "Leadership, professors, industry mentors and guest lecturers at MIA.",
    url: "/staff",
  },
  alternates: { canonical: "/staff" },
};

export default function Page() {
  const staffJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteUrl}/staff#webpage`,
    url: `${siteUrl}/staff`,
    name: "Faculty & Staff | MIA Academy",
    about: { "@id": `${siteUrl}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: staff.map((member, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Person",
          name: member.name,
          jobTitle: member.role,
          description: member.bio,
        },
      })),
    },
  };

  return (
    <>
      <JsonLd data={staffJsonLd} />
      <StaffClient />
    </>
  );
}
