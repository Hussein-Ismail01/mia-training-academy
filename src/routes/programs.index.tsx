import { createFileRoute } from "@tanstack/react-router";
import { CtaBanner } from "@/components/site/CtaBanner";
import { FacultyCard } from "@/components/site/FacultyCard";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { faculties } from "@/data/site";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/programs/")({
  head: () => ({
    meta: [
      { title: "Faculties | MIA Training Academy" },
      {
        name: "description",
        content:
          "Browse MIA Training Academy faculties across business, technology, marketing and languages, with the study areas and programmes connected to each specialism.",
      },
      { property: "og:title", content: "Faculties at MIA Training Academy" },
      {
        property: "og:description",
        content:
          "Explore the academy by faculty and discover the learning tracks connected to each area.",
      },
    ],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHero
        eyebrow={t.nav.programs}
        title={t.programsPage.title}
        description={t.programsPage.description}
        breadcrumb={[{ label: t.nav.home, to: "/" }, { label: t.nav.programs }]}
      />

      <Section>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {faculties.map((faculty, i) => (
            <Reveal key={faculty.slug} delay={i * 60}>
              <FacultyCard faculty={faculty} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBanner title={t.programsPage.ctaTitle} description={t.programsPage.ctaDescription} />
    </>
  );
}
