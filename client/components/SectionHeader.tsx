import React from "react";
import { cn } from "@/lib/utils";

export function SectionHeader({ subtitle, title, description, center = false }: { subtitle: string, title: string, description?: string, center?: boolean }) {
  return (
    <div className={cn("max-w-2xl mb-16", center && "mx-auto text-center")}>
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">{subtitle}</p>
      <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
        {title.split(" ").map((word, i) => (
          i === title.split(" ").length - 1 ? <span key={i} className="gradient-text"> {word}</span> : <span key={i}>{word} </span>
        ))}
      </h2>
      {description && <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>}
    </div>
  );
}
