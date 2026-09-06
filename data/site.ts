import { ResumeTrackConfig } from "@/lib/types";

export const siteConfig = {
  name: "Bolla Lokesh Reddy",
  shortName: "Lokesh Reddy",
  initials: "LR",
  title: "Software Engineer",
  tagline: "Systems, Machine Learning, and Quantitative Engineering",
  description:
    "Portfolio of Bolla Lokesh Reddy, a final-year B.Tech CSE student at IIT Hyderabad building software across distributed systems, machine learning, and quantitative research.",
  heroStatement:
    "I build software at the intersection of systems, machine learning, and quantitative research, with a particular interest in what happens beneath the abstraction.",
  // Live on Vercel — replace with a custom domain later if you buy one (see README).
  url: "https://bolla-lokesh-reddy.vercel.app",
  email: "lokeshreddybolla7917@gmail.com",
  location: "Hyderabad, India",
  institution: "Indian Institute of Technology, Hyderabad",
  keywords: [
    "Bolla Lokesh Reddy",
    "Software Engineer",
    "Quantitative Researcher",
    "IIT Hyderabad",
    "Machine Learning Engineer",
    "Distributed Systems",
    "Full Stack Developer",
    "Portfolio",
  ],
} as const;

export const resumeTracks: ResumeTrackConfig[] = [
  {
    id: "general",
    label: "General",
    shortLabel: "General",
    file: "/resume.pdf",
    description:
      "The full picture — every project, coursework, and leadership role.",
  },
  {
    id: "software",
    label: "Software Engineering",
    shortLabel: "Software",
    file: "/resume-software.pdf",
    description:
      "Tailored for SWE roles — backend systems, distributed computing, and infrastructure projects.",
  },
  {
    id: "quant",
    label: "Quantitative Research",
    shortLabel: "Quant",
    file: "/resume-quant.pdf",
    description:
      "Tailored for quant roles — alpha research, backtesting, and market-microstructure projects.",
  },
];
