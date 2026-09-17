import { SocialLink } from "@/lib/types";
import { siteConfig } from "./site";

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    url: "https://github.com/lokeshreddy2005",
    icon: "github",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/lokesh-reddy-bolla",
    icon: "linkedin",
  },
  {
    label: "Email",
    url: `mailto:${siteConfig.email}`,
    icon: "mail",
  },
  {
    label: "Codeforces",
    url: "https://codeforces.com/profile/Black_Rock_8025",
    icon: "codeforces",
    note: "Specialist (Max Rating 1500)",
  },
  {
    label: "LeetCode",
    url: "https://leetcode.com/u/lokesh_reddy_8025/",
    icon: "leetcode",
    note: "500+ problems solved",
  },
];
