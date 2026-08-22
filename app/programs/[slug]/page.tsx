import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/site/JsonLd";
import { faculties } from "@/data/site";
import { siteUrl } from "@/lib/site-config";
import { ProgramDetailClient } from "./program-detail-client";

export function generateStaticParams() {
  return faculties.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const faculty = faculties.find((item) => item.slug === slug);

  if (faculty) {
    return {
      title: `${faculty.name.en} | MIA Academy`,
      description: faculty.description.en,
      openGraph: {
        title: `${faculty.name.en} | MIA Academy`,
        description: faculty.description.en,
        url: `/programs/${faculty.slug}`,
      },
      alternates: { canonical: `/programs/${faculty.slug}` },
    };
  }
  return {
    title: "Faculty not found | MIA",
    robots: { index: false },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const faculty = faculties.find((item) => item.slug === slug);
  if (!faculty) notFound();

  const facultyJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    "@id": `${siteUrl}/programs/${faculty.slug}#program`,
    name: faculty.name.en,
    description: faculty.description.en,
    url: `${siteUrl}/programs/${faculty.slug}`,
    provider: { "@id": `${siteUrl}/#organization` },
    occupationalCategory: faculty.name.en,
    image: `${siteUrl}${faculty.image}`,
  };

  return (
    <>
      <JsonLd data={facultyJsonLd} />
      <ProgramDetailClient faculty={faculty} />
    </>
  );
}
