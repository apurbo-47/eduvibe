import Address from "@/components/shared/address";
import ContactForm from "@/components/shared/contactForm";
import ContactHero from "@/components/shared/contactHero";
import HeroSection from "@/components/shared/heroSection";
import MapSection from "@/components/shared/mapSection";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <ContactHero />
      <ContactForm />
      <Address />
      <MapSection />
      <HeroSection />
    </div>
  );
};

export default ContactPage;
