import BlogIDHero from "@/components/hero/BlogIDHero";
import BlogDetailsSection from "@/components/shared/BlogDetailsSection";
import HeroSection from "@/components/shared/heroSection";

import React from "react";

const BlogDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = await params;
  return (
    <div>
      <BlogIDHero />
      <BlogDetailsSection />
      <HeroSection />
    </div>
  );
};

export default BlogDetails;
