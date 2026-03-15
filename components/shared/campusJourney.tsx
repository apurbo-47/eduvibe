"use client";
import Image from "next/image";
import React from "react";

const CampusJourney = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-5 py-8 md:p-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-36 md:top-60 right-0">
        <Image
          src="/images/arrow.png"
          width={70}
          height={70}
          alt="icon"
          className="w-16 h-16 md:w-60 md:h-50 "
        />
      </div>
      <div className="absolute top-8 md:top-3 left-0 rotate-180">
        <Image
          src="/images/arrow.png"
          width={100}
          height={70}
          alt="icon"
          className="w-16 h-16 md:w-60 md:h-50 "
        />
      </div>
      <div>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-5xl font-bold text-center">
            Our Campus Journey
          </h1>
          <p className="relative text-sm md:text-3xl text-center leading-tight mt-2.5 md:mt-6">
            Explore the journey of Eduvibe University as it continues to grow
            into a dynamic center of learning and innovation. Our campus
            reflects a commitment to {""}
            <span className="text-[#7F7F7F]">
              academic excellence, creativity, and an inspiring environment
              where students are empowered to achieve their full potential.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampusJourney;
