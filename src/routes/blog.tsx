import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { posts } from "@/data/site";
import { useLanguage } from "@/lib/i18n";
import { localizeCategory, localizePost } from "@/lib/content-i18n";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights & News | MIA Training Academy Blog" },
      {
        name: "description",
        content:
          "Career advice, campus news, industry insights and student life stories from MIA Training Academy in Maadi, Cairo.",
      },
      { property: "og:title", content: "Insights & News | MIA Training Academy" },
      {
        property: "og:description",
        content: "Career advice, campus news and industry insights from MIA.",
      },
    ],
  }),
  component: BlogPage,
});

const categories = ["All", "Career Advice", "Campus News", "Industry Insights", "Student Life"];

function BlogPage() {
  const { language } = useLanguage();
  const [category, setCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);
  const featured = localizePost(posts[0]!, language);
  const rest = posts.slice(1).map((p) => localizePost(p, language));
  const filtered = category === "All" ? rest : rest.filter((p) => p.category === category);
  const visible = filtered.slice(0, visibleCount);

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Writing from the MIA community"
        description="Practical guidance from our faculty, career team and students."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Blog" }]}
      />

      <Section>
        <Reveal>
          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            className="hover-lift grid overflow-hidden rounded-3xl border border-border bg-card shadow-soft lg:grid-cols-2"
          >
            <img
              src={featured.image}
              alt={featured.title}
              width={1200}
              height={800}
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
            <div className="p-8 sm:p-10">
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                {localizeCategory(featured.category, language)}
              </span>
              <h2 className="mt-5 text-2xl font-semibold text-balance text-foreground sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{featured.excerpt}</p>
              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                  {featured.author
                    .split(" ")
                    .slice(-2)
                    .map((n) => n[0])
                    .join("")}
                </span>
                <span className="font-medium text-foreground">{featured.author}</span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" /> {featured.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" /> {featured.read}
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      </Section>

      <Section muted className="pt-0 pb-24">
        <Reveal className="flex flex-wrap gap-2 pt-20">
          {categories.map((item) => (
            <Button
              key={item}
              variant={category === item ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => {
                setCategory(item);
                setVisibleCount(3);
              }}
            >
              {item}
            </Button>
          ))}
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((post, i) => (
            <Reveal key={post.slug} delay={i * 60}>
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="hover-lift flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={225}
                    loading="lazy"
                    className="h-64 w-full object-cover object-top"
                  />
                  <span className="absolute top-4 left-4 w-fit rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-secondary-foreground shadow-soft">
                    {localizeCategory(post.category, language)}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg leading-snug font-semibold text-foreground">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-5 text-xs text-muted-foreground">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
                      {post.author
                        .split(" ")
                        .slice(-2)
                        .map((n) => n[0])
                        .join("")}
                    </span>
                    <span className="font-medium text-foreground">{post.author}</span>
                    <span>{post.date}</span>
                    <span>· {post.read}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {visibleCount < filtered.length && (
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" onClick={() => setVisibleCount((c) => c + 3)}>
              Load more articles
            </Button>
          </div>
        )}

        <Reveal className="mt-16">
          <div className="glass-panel grid gap-6 rounded-3xl p-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
            <div className="min-w-0">
              <h2 className="text-2xl font-semibold text-foreground">Weekly insights, no noise</h2>
              <p className="mt-3 text-muted-foreground">
                One email a week with career guidance and upcoming intakes.
              </p>
            </div>
            <form
              className="flex flex-wrap gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Subscribed", { description: "Welcome to the MIA briefing." });
                (e.target as HTMLFormElement).reset();
              }}
            >
              <label htmlFor="blog-email" className="sr-only">
                Email address
              </label>
              <input
                id="blog-email"
                type="email"
                required
                placeholder="you@example.com"
                className="h-12 min-w-56 flex-1 rounded-lg border border-input bg-background px-4 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
              />
              <Button type="submit" variant="hero" size="lg">
                Subscribe
              </Button>
            </form>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
