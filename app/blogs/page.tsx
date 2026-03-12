import BlogHero from "@/components/hero/BlogHero";
import FAQSection from "@/components/shared/faqSection";
import LatestNews from "@/components/shared/latestNews";
import React from "react";

const BlogPage = () => {
  return (
    <div>
      <BlogHero />
      <LatestNews />
      <FAQSection />
    </div>
  );
};

export default BlogPage;
