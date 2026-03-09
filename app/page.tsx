import Hero from "@/components/hero/hero";
import CampusLife from "@/components/shared/campusLife";
import FacilitiesCard from "@/components/shared/facilitiesCard";
import FAQSection from "@/components/shared/faqSection";
import GallerySection from "@/components/shared/gallerySection";
import HeroSection from "@/components/shared/heroSection";
import NewsSection from "@/components/shared/newsSection";
import ProgramsSection from "@/components/shared/programsSection";
import Section1 from "@/components/shared/section1";
import StudentReviews from "@/components/shared/studentReviews";
import UpcomingEvents from "@/components/shared/upcomingEvents";
import VideoCard from "@/components/shared/videoSection";

export default function Home() {
  return (
    <div className="mb-25">
      <Hero />
      <Section1 />
      <ProgramsSection />
      <UpcomingEvents />
      <FacilitiesCard />
      <CampusLife />
      <StudentReviews />
      <GallerySection />
      <VideoCard />
      <FAQSection />
      <NewsSection />
      <HeroSection />
    </div>
  );
}
