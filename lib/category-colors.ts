import { ProjectCategory } from "@/lib/types";

interface CategoryColor {
  text: string;
  border: string;
  bg: string;
  dot: string;
}

export const categoryColors: Record<ProjectCategory, CategoryColor> = {
  "Full Stack": {
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-500/25",
    bg: "bg-blue-500/10",
    dot: "bg-blue-500",
  },
  "Machine Learning": {
    text: "text-violet-600 dark:text-violet-400",
    border: "border-violet-500/25",
    bg: "bg-violet-500/10",
    dot: "bg-violet-500",
  },
  "Natural Language Processing": {
    text: "text-pink-600 dark:text-pink-400",
    border: "border-pink-500/25",
    bg: "bg-pink-500/10",
    dot: "bg-pink-500",
  },
  "Distributed Computing": {
    text: "text-orange-600 dark:text-orange-400",
    border: "border-orange-500/25",
    bg: "bg-orange-500/10",
    dot: "bg-orange-500",
  },
  Systems: {
    text: "text-teal-600 dark:text-teal-400",
    border: "border-teal-500/25",
    bg: "bg-teal-500/10",
    dot: "bg-teal-500",
  },
  Networking: {
    text: "text-cyan-600 dark:text-cyan-400",
    border: "border-cyan-500/25",
    bg: "bg-cyan-500/10",
    dot: "bg-cyan-500",
  },
  "Compilers & PL": {
    text: "text-amber-600 dark:text-amber-400",
    border: "border-amber-500/25",
    bg: "bg-amber-500/10",
    dot: "bg-amber-500",
  },
  "Backend Systems": {
    text: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-500/25",
    bg: "bg-emerald-500/10",
    dot: "bg-emerald-500",
  },
  "Quantitative Finance": {
    text: "text-rose-600 dark:text-rose-400",
    border: "border-rose-500/25",
    bg: "bg-rose-500/10",
    dot: "bg-rose-500",
  },
};
