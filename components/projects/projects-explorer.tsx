"use client";

import { ProjectCard } from "@/components/projects/project-card";
import { cn } from "@/lib/utils";
import { Project, ProjectCategory, ResumeTrack } from "@/lib/types";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

const trackOptions: { id: ResumeTrack | "All"; label: string }[] = [
  { id: "All", label: "All tracks" },
  { id: "software", label: "Software track" },
  { id: "quant", label: "Quant track" },
];

export function ProjectsExplorer({
  projects,
  categories,
}: {
  projects: Project[];
  categories: ProjectCategory[];
}) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">(
    "All"
  );
  const [activeTrack, setActiveTrack] = useState<ResumeTrack | "All">("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;
      if (!matchesCategory) return false;
      const matchesTrack =
        activeTrack === "All" || project.tracks?.includes(activeTrack);
      if (!matchesTrack) return false;
      if (!q) return true;
      const haystack = [
        project.title,
        project.shortDescription,
        project.category,
        ...project.technologies,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [projects, activeCategory, activeTrack, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {(["All", ...categories] as const).map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "focus-ring rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                activeCategory === category
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects…"
            className="focus-ring w-full rounded-full border border-border bg-transparent py-2 pl-9 pr-4 text-sm placeholder:text-muted-foreground"
          />
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {trackOptions.map((track) => (
          <button
            key={track.id}
            type="button"
            onClick={() => setActiveTrack(track.id)}
            className={cn(
              "focus-ring rounded-full px-3 py-1 font-mono text-xs uppercase tracking-wide transition-colors",
              activeTrack === track.id
                ? "text-accent"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {track.label}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <motion.div
          layout
          className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <p className="mt-16 text-center text-sm text-muted-foreground">
          No projects match your filters.
        </p>
      )}
    </div>
  );
}
