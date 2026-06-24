"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

import HeroContent from "./HeroContent";
import FloatingBook from "./FloatingBook";
import FeatureLanding from "./FeatureLanding";
import FeatureCards from "./FeatureCards";

import bookImage from "@/assets/images/book.jpg";
import { useBookFlight } from "@/interfaces/useBookFlight";

export default function ProductStorySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const heroCardRef = useRef<HTMLDivElement>(null);

  const landingRef = useRef<HTMLDivElement>(null);

  const [travel, setTravel] = useState({
    x: 0,
    y: 0,
  });

  useLayoutEffect(() => {
    const calculateTravel = () => {
      if (!heroCardRef.current) return;
      if (!landingRef.current) return;

      const startRect = heroCardRef.current.getBoundingClientRect();

      const endRect = landingRef.current.getBoundingClientRect();

      const startX = startRect.left + startRect.width / 2;

      const startY = startRect.top + startRect.height / 2;

      const endX = endRect.left + endRect.width * 0.62;

      const endY = endRect.top + endRect.height * 0.5;

      setTravel({
        x: endX - startX,
        y: endY - startY,
      });
    };

    calculateTravel();

    window.addEventListener("resize", calculateTravel);

    return () => {
      window.removeEventListener("resize", calculateTravel);
    };
  }, []);

  const { x, y, scale, rotateY, rotateZ } = useBookFlight(
    containerRef,
    travel.x,
    travel.y,
  );

  return (
    <div
      ref={containerRef}
      className="
        relative
        mx-auto
        max-w-[1600px]
        overflow-hidden
        rounded-[48px]
        bg-black
        text-white
      "
      style={{
        perspective: "2500px",
      }}
    >
      {/* ================================================= */}
      {/* DESKTOP FLOATING BOOK */}
      {/* ================================================= */}

      <FloatingBook
        x={x}
        y={y}
        scale={scale}
        rotateY={rotateY}
        rotateZ={rotateZ}
      />

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative min-h-screen">
        <div
          className="
            mx-auto
            flex
            min-h-screen
            max-w-7xl
            items-center
            px-6
            lg:px-12
          "
        >
          <div className="grid w-full gap-20 lg:grid-cols-2">
            <HeroContent />

            {/* Desktop Placeholder */}

            <div
              ref={heroCardRef}
              className="
                hidden
                items-center
                justify-center
                lg:flex
              "
            >
              <div
                className="
                  h-[650px]
                  w-[520px]
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/5
                "
              />
            </div>

            {/* Mobile Image */}

            <div className="lg:hidden">
              <div
                className="
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white
                "
              >
                <Image
                  src={bookImage}
                  alt="Product"
                  width={900}
                  height={1200}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* TRANSITION SECTION */}
      {/* ================================================= */}

      <section
        className="
          relative
          flex
          min-h-[60vh]
          items-center
          justify-center
        "
      >
        <div className="text-center">
          <p
            className="
              mb-4
              text-sm
              uppercase
              tracking-[0.4em]
              text-blue-400
            "
          >
            Scroll To Discover
          </p>

          <h2
            className="
              text-4xl
              font-bold
              lg:text-7xl
            "
          >
            Product Story
          </h2>
        </div>
      </section>

      {/* ================================================= */}
      {/* FEATURES */}
      {/* ================================================= */}

      <section className="relative min-h-screen">
        <div
          className="
            mx-auto
            flex
            min-h-screen
            max-w-7xl
            items-center
            px-6
            py-24
            lg:px-12
          "
        >
          <div className="grid w-full gap-20 lg:grid-cols-2">
            <FeatureLanding landingRef={landingRef} />

            <div className="flex flex-col justify-center">
              <span
                className="
                  mb-4
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-blue-400
                "
              >
                Deep Dive
              </span>

              <h2
                className="
                  mb-10
                  text-5xl
                  font-bold
                  lg:text-7xl
                "
              >
                Built For
                <br />
                Modern Teams
              </h2>

              <FeatureCards />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* FINAL CTA */}
      {/* ================================================= */}

      <section
        className="
          relative
          flex
          min-h-screen
          items-center
          justify-center
          px-6
        "
      >
        <div className="max-w-4xl text-center">
          <p
            className="
              mb-4
              text-sm
              uppercase
              tracking-[0.4em]
              text-blue-400
            "
          >
            Ready To Start
          </p>

          <h2
            className="
              mb-8
              text-5xl
              font-bold
              lg:text-8xl
            "
          >
            Build Better
            <br />
            Experiences
          </h2>

          <button
            className="
              rounded-full
              bg-white
              px-10
              py-5
              text-black
            "
          >
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}
