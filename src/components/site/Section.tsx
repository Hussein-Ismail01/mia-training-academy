import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        tone === "dark" && "text-primary-foreground",
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "text-xs font-semibold tracking-[0.2em] uppercase",
            tone === "dark" ? "text-accent" : "text-accent-foreground",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl font-semibold text-balance sm:text-4xl">{title}</h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            tone === "dark" ? "text-primary-foreground/80" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

export function Section({
  children,
  className,
  id,
  muted = false,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  muted?: boolean;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-24", muted && "bg-surface", className)}>
      <div className="container-page">{children}</div>
    </section>
  );
}
