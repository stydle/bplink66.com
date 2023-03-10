import React from "react";
import BlogLayout from "@/layouts/blog";

import BiographySection from "@/components/HomSection/BiographySection";
import ProfileSection from "@/components/HomSection/ProfileSection";
import SkillsSection from "@/components/HomSection/SkillsSection";
import WorksSection from "@/components/HomSection/WorksSection";

export default function Home() {
  return (
    <BlogLayout>
      <BiographySection />
      <ProfileSection />
      <SkillsSection />
      <WorksSection />
    </BlogLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {}
  };
}
