import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, MonitorPlay } from "lucide-react";
import type { Program } from "@/data/site";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="hover-lift group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
      <span className="w-fit rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-secondary-foreground">
        {program.category}
      </span>
      <h3 className="mt-4 text-xl leading-snug font-semibold text-foreground">{program.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{program.excerpt}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {program.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-accent/40 bg-accent-soft px-3 py-1 text-xs font-medium text-accent-foreground"
          >
            {tag}
          </li>
        ))}
      </ul>

      <dl className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-5 text-sm text-muted-foreground">
        <div className="flex min-w-0 items-center gap-2">
          <Clock className="h-4 w-4 shrink-0 text-accent-foreground" />
          <span className="truncate">{program.duration}</span>
        </div>
        <div className="flex min-w-0 items-center gap-2">
          <MonitorPlay className="h-4 w-4 shrink-0 text-accent-foreground" />
          <span className="truncate">{program.format}</span>
        </div>
      </dl>

      <Link
        to="/programs/$slug"
        params={{ slug: program.slug }}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent-foreground"
      >
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
