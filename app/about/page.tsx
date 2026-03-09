import FAQSection from "@/components/shared/faqSection";
import GallerySection from "@/components/shared/gallerySection";
import HeroSection from "@/components/shared/heroSection";
import Section1 from "@/components/shared/section1";
import StudentReviews from "@/components/shared/studentReviews";
import VideoCard from "@/components/shared/videoSection";
import AboutSection from "@/components/ui/section/aboutSection";
import MissionPage from "@/components/ui/mission";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <AboutSection />
      <Section1 />
      <MissionPage />
      <GallerySection />
      <VideoCard />
      <StudentReviews />
      <FAQSection />
      <HeroSection />
    </div>
  );
};

export default AboutPage;
