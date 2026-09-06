export type ProjectCategory =
  | "Full Stack"
  | "Machine Learning"
  | "Natural Language Processing"
  | "Distributed Computing"
  | "Systems"
  | "Networking"
  | "Compilers & PL"
  | "Backend Systems"
  | "Quantitative Finance";

export type ResumeTrack = "software" | "quant";

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  category: ProjectCategory;
  technologies: string[];
  team?: string;
  featured: boolean;
  github?: string;
  live?: string;
  highlights: string[];
  problem?: string;
  approach?: string[];
  results?: string[];
  learnings?: string[];
  /** Tailored resumes this project is featured on (see data/site.ts resumeTracks). Omit for general-portfolio-only projects. */
  tracks?: ResumeTrack[];
  /** True while the project entry is a placeholder awaiting real details. */
  incomplete?: boolean;
}

export interface ExperienceEntry {
  id: string;
  organization: string;
  role: string;
  startDate: string;
  endDate: string;
  type: "Internship" | "Leadership";
  location?: string;
  description: string;
  responsibilities: string[];
  technologies?: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  year: string;
  score: string;
  scoreLabel: string;
}

export interface AchievementEntry {
  id: string;
  title: string;
  detail: string;
  category: "Academic" | "Competitive Programming";
  /** Optional numeric value + suffix for an animated counter, e.g. value: 1400, suffix: "+ rating" */
  value?: number;
  suffix?: string;
}

export interface ResumeTrackConfig {
  id: ResumeTrack | "general";
  label: string;
  shortLabel: string;
  file: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface SocialLink {
  label: string;
  url?: string;
  icon: "github" | "linkedin" | "mail" | "codeforces" | "leetcode" | "phone";
  note?: string;
}
