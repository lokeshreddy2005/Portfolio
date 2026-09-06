"use client";

import { Badge } from "@/components/ui/badge";
import { categoryColors } from "@/lib/category-colors";
import { Project } from "@/lib/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ProjectCard({ project }: { project: Project }) {
  const colors = categoryColors[project.category];

  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Link
        href={`/projects/${project.slug}`}
        className={cn(
          "focus-ring group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border bg-card p-6 transition-colors",
          colors.border,
          "hover:border-foreground/30"
        )}
      >
        <div
          aria-hidden
          className={cn("absolute inset-x-0 top-0 h-1", colors.dot)}
        />
        <div>
          <div className="flex items-start justify-between gap-3">
            <p
              className={cn(
                "font-mono text-xs uppercase tracking-widest",
                colors.text
              )}
            >
              {project.category}
            </p>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
          </div>
          <div className="mt-3 flex items-center gap-2">
            <h3 className="text-lg font-semibold tracking-tight">
              {project.title}
            </h3>
            {project.incomplete ? (
              <span className="rounded-full bg-foreground/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                Draft
              </span>
            ) : null}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {project.shortDescription}
          </p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
          {project.technologies.length > 4 ? (
            <Badge>+{project.technologies.length - 4}</Badge>
          ) : null}
        </div>
      </Link>
    </motion.div>
  );
}
