import FAQSection from "@/components/shared/faqSection";
import GallerySection from "@/components/shared/gallerySection";
import HeroSection from "@/components/shared/heroSection";
import StudentReviews from "@/components/shared/studentReviews";
import VideoCard from "@/components/shared/videoSection";
import AboutSection from "@/components/ui/section/aboutSection";
import ProgramHero from "@/components/ui/section/programHero";
import UniversityPartners from "@/components/ui/universityPartners";
import UniversityPrograms from "@/components/ui/UniversityPrograms";
import React from "react";

const ProgramPage = () => {
  return (
    <div>
      <ProgramHero />
      <UniversityPrograms />
      <UniversityPartners />
      <GallerySection />
      <VideoCard />
      <StudentReviews />
      <FAQSection />
      <HeroSection />
    </div>
  );
};

export default ProgramPage;
