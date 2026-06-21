import Address from "@/components/shared/address";
import ContactForm from "@/components/shared/contactForm";
import ContactHero from "@/components/shared/contactHero";
import Form from "@/components/shared/form";
import HeroSection from "@/components/shared/heroSection";
import MapSection from "@/components/shared/mapSection";
import MovingMiddleCardSection from "@/components/ui/movingMiddleCardSection";
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
      <MovingMiddleCardSection />

      <Form />
    </div>
  );
};

export default ContactPage;
