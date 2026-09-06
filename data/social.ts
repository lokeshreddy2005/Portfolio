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
    // TODO: add your Codeforces profile URL — rating is shown without a link until then.
    url: undefined,
    icon: "codeforces",
    note: "1400+ rating",
  },
  {
    label: "LeetCode",
    // TODO: add your LeetCode profile URL — count is shown without a link until then.
    url: undefined,
    icon: "leetcode",
    note: "500+ problems solved",
  },
];
