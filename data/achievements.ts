import { AchievementEntry } from "@/lib/types";

export const achievements: AchievementEntry[] = [
  {
    id: "jee-advanced",
    title: "AIR 953 — JEE Advanced 2023",
    detail: "Top 0.5% nationally",
    category: "Academic",
  },
  {
    id: "jee-mains",
    title: "AIR 1541 — JEE Mains 2023",
    detail: "Top 0.15% nationally",
    category: "Academic",
  },
  {
    id: "ts-eamcet",
    title: "State Rank 118 — TS EAMCET 2023",
    detail: "Top 0.05% in Telangana State",
    category: "Academic",
  },
  {
    id: "ap-eapcet",
    title: "State Rank 257 — AP EAPCET 2023",
    detail: "Top 0.1% in Andhra Pradesh State",
    category: "Academic",
  },
  {
    id: "codeforces",
    title: "Codeforces",
    detail: "Specialist (Max Rating 1500)",
    category: "Competitive Programming",
    value: 1500,
    prefix: "Specialist (Max Rating ",
    suffix: ")",
  },
  {
    id: "leetcode",
    title: "LeetCode",
    detail: "500+ problems solved",
    category: "Competitive Programming",
    value: 500,
    suffix: "+ solved",
  },
];
