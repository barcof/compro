import type { Metadata } from "next";
import LocalizedLayout from "@/components/LocalizedLayout";
import About from "@/components/About";
import VisiMisi from "@/components/VisiMisi";
import Certifications from "@/components/Certifications";
export const metadata: Metadata = {
  title: "About PT Gapura Kencana",
  description:
    "Learn about PT Gapura Kencana and its Mechanical Seal reconditioning, repair and industrial spare-part capabilities.",
  alternates: {
    canonical: "/en/about/",
    languages: { id: "/about/", en: "/en/about/" },
  },
};
export default function Page() {
  return (
    <LocalizedLayout lang="en" path="/en/about/">
      <About lang="en" />
      <VisiMisi lang="en" />
      <Certifications lang="en" />
    </LocalizedLayout>
  );
}
