import CampusJourney from "@/components/shared/campusJourney";
import CampusLife from "@/components/shared/campusLife";
import CampusSection from "@/components/shared/campusSection";
import GallerySection from "@/components/shared/gallerySection";
import HeroSection from "@/components/shared/heroSection";
import UpcomingEvents from "@/components/shared/upcomingEvents";
import React from "react";

const CampusPage = () => {
  return (
    <div>
      <CampusSection />
      <CampusJourney />
      <GallerySection />
      <CampusLife />
      <UpcomingEvents />
      <HeroSection />
    </div>
  );
};

export default CampusPage;
