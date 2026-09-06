import { Container } from "@/components/ui/container";
import { ResumeView } from "@/components/resume/resume-view";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Download Bolla Lokesh Reddy's resume — general, software engineering, or quantitative research track.",
};

export default function ResumePage() {
  return (
    <Container className="py-16 sm:py-24">
      <Suspense>
        <ResumeView />
      </Suspense>
    </Container>
  );
}
