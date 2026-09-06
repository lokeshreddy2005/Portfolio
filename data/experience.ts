import { ExperienceEntry } from "@/lib/types";

export const experience: ExperienceEntry[] = [
  {
    id: "adobe",
    organization: "Adobe",
    role: "Machine Learning Engineering Intern",
    startDate: "May 2026",
    endDate: "July 2026",
    type: "Internship",
    description:
      "Developed an end-to-end email layout featurization pipeline to extract structural intelligence from marketing email HTML for Adobe GenStudio's Content Intelligence platform.",
    responsibilities: [
      "Rendered email HTML using Playwright/Chromium and combined DOM-derived geometry with Gemini-based semantic annotation to identify structural elements and hierarchical relationships.",
      "Designed canonical layout representations to preserve spatial structure while reducing sensitivity to textual and visual content, enabling comparison of structurally similar email layouts.",
      "Evaluated DINOv2 and Gemini multimodal embeddings with multiple clustering approaches to discover recurring email layout families across different representations.",
      "Implemented deterministic extraction of 22 structural features covering layout composition, headers, images, grids, CTA placement, and content structure; validated the pipeline on two independent datasets, obtaining coherent layout clusters and interpretable features.",
    ],
    technologies: [
      "Python",
      "Playwright",
      "Gemini",
      "DINOv2",
      "Clustering",
    ],
  },
  {
    id: "ocs-internship-coordinator",
    organization: "Office of Career Services, IIT Hyderabad",
    role: "OCS Internship Coordinator",
    startDate: "May 2025",
    endDate: "Apr 2026",
    type: "Leadership",
    description:
      "Assisting in internship process coordination, outreach, and student-industry communication.",
    responsibilities: [
      "Coordinating internship processes and outreach between students and industry.",
      "Facilitating student-industry communication for internship opportunities.",
    ],
  },
  {
    id: "ml-coordinator-tinkerers-lab",
    organization: "Tinkerer's Lab, IIT Hyderabad",
    role: "Machine Learning Coordinator",
    startDate: "May 2025",
    endDate: "Apr 2026",
    type: "Leadership",
    description:
      "Organizing hands-on ML workshops and mentoring peers in ML model development and deployment.",
    responsibilities: [
      "Organizing hands-on machine learning workshops.",
      "Mentoring peers in ML model development and deployment.",
    ],
  },
  {
    id: "web-coordinator-ebsb",
    organization: "Ek Bharat Shrestha Bharat (EBSB), IIT Hyderabad",
    role: "Web Coordinator",
    startDate: "Aug 2024",
    endDate: "Apr 2025",
    type: "Leadership",
    description:
      "Maintained the official EBSB website, showcasing cultural events and multimedia galleries. Enabled real-time updates and streamlined event communication across campus.",
    responsibilities: [
      "Maintained the official EBSB website, including cultural event and multimedia galleries.",
      "Enabled real-time updates and streamlined event communication across campus.",
    ],
  },
];
