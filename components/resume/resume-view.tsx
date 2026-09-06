"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { resumeTracks } from "@/data/site";
import { getProjectsByTrack } from "@/data/projects";
import { ResumeTrack } from "@/lib/types";
import { Download } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

export function ResumeView() {
  const searchParams = useSearchParams();
  const initialTrack = searchParams.get("track");
  const [activeId, setActiveId] = useState(
    resumeTracks.some((t) => t.id === initialTrack)
      ? (initialTrack as string)
      : "general"
  );

  const active = resumeTracks.find((t) => t.id === activeId) ?? resumeTracks[0];
  const trackProjects = useMemo(() => {
    if (active.id === "software" || active.id === "quant") {
      return getProjectsByTrack(active.id as ResumeTrack);
    }
    return [];
  }, [active.id]);

  return (
    <div>
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Resume
          </p>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Pick the version that fits the role
          </h1>
          <p className="mt-3 max-w-xl text-muted-foreground">
            {active.description}
          </p>
        </div>
        <Button href={active.file} external>
          <Download className="h-4 w-4" />
          Download PDF
        </Button>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {resumeTracks.map((track) => (
          <button
            key={track.id}
            type="button"
            onClick={() => setActiveId(track.id)}
            className={cn(
              "focus-ring rounded-full border px-4 py-2 text-sm transition-colors",
              active.id === track.id
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:text-foreground"
            )}
          >
            {track.label}
          </button>
        ))}
      </div>

      {trackProjects.length > 0 ? (
        <div className="mt-8">
          <p className="text-sm font-medium text-muted-foreground">
            Key projects on this resume
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {trackProjects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`}>
                <Badge className="cursor-pointer transition-colors hover:border-foreground/40 hover:text-foreground">
                  {project.title}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      ) : null}

      <div
        key={active.id}
        className="mt-10 overflow-hidden rounded-2xl border border-border"
      >
        <iframe src={active.file} title={`${active.label} resume`} className="h-[80vh] w-full" />
      </div>
    </div>
  );
}
