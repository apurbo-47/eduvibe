import Address from "@/components/shared/address";
import ContactForm from "@/components/shared/contactForm";
import ContactHero from "@/components/shared/contactHero";
import Form from "@/components/shared/form";
import HeroSection from "@/components/shared/heroSection";
import MapSection from "@/components/shared/mapSection";
import Content from "@/components/ui/content";
import MovingMiddleCardSection from "@/components/ui/movingMiddleCardSection";
import ProductFlightSection from "@/components/ui/ProductTransitionSection";
import StickyVideoCard from "@/components/ui/StickyVideoCard";
// import OTPWithSuccess from "@/components/shared/Otp";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <ContactHero />
      <ContactForm />
      <Address />
      <MapSection />
      <HeroSection />

      {/* <OTPWithSuccess /> */}
      {/* <MovingMiddleCardSection /> */}

      {/* <Form /> */}
      {/* <Content /> */}
      {/* <ProductFlightSection /> */}
      {/* <StickyVideoCard
        title="Creative Studio"
        description="We build immersive digital experiences with premium animation and interaction."
        video="/videos/hero.mp4"
      /> */}
    </div>
  );
};

export default ContactPage;
