"use client";

import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

import image1 from "@/assets/images/image1.png";
import image2 from "@/assets/images/image2.png";
import image4 from "@/assets/images/image4.png";
import image5 from "@/assets/images/image5.png";
import slide_img from "@/assets/images/slide_img.png";

const rows = [
  [image1, image2, null, image4, image5],
  [image2, image5, null, image4, image1],
  [image5, image4, null, image1, image2],
];

export default function MovingCenterCardSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const row1Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);

  const [travelDistance, setTravelDistance] = useState(0);

  useLayoutEffect(() => {
    const calculateDistance = () => {
      if (!row1Ref.current || !row3Ref.current) return;

      const row1Top = row1Ref.current.offsetTop;
      const row3Top = row3Ref.current.offsetTop;

      // Row 3 এর নিচ পর্যন্ত যাবে
      setTravelDistance(row3Top - row1Top + 0);
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => window.removeEventListener("resize", calculateDistance);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yTransform = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [0, 0, travelDistance],
  );

  const y = useSpring(yTransform, {
    stiffness: 120,
    damping: 22,
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.06, 1]);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        py-32
        bg-[radial-gradient(circle_at_top,#7FBF3F_0%,#223d16_35%,#000_100%)]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-32
          -translate-x-1/2
          w-[600px]
          h-[600px]
          rounded-full
          bg-[#8DE04F]/20
          blur-[180px]
          pointer-events-none
        "
      />

      <div className="max-w-[1700px] mx-auto px-6 relative overflow-visible">
        {/* Background Grid */}
        <div className="space-y-6">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              ref={rowIndex === 0 ? row1Ref : rowIndex === 2 ? row3Ref : null}
              className="
                grid
                grid-cols-5
                gap-1.5
              "
            >
              {row.map((item, index) => (
                <div key={index}>
                  {item ? (
                    <PhoneCard src={item} />
                  ) : (
                    <div className="w-full h-full" />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* HERO CARD */}
        <motion.div
          style={{
            y,
            scale,
          }}
          className="
            absolute
            left-1/2
            -top-10
            -translate-x-1/2
            z-10
            pointer-events-none
          "
        >
          <Image
            src={slide_img}
            alt="Hero Phone"
            priority
            width={1000}
            height={700}
            className="
              w-[1000px]
              h-[600px]
              pl-8
             
            "
          />
        </motion.div>
      </div>
    </section>
  );
}

function PhoneCard({ src }: { src: string | StaticImageData }) {
  return (
    <div className="relative">
      <Image
        src={src}
        alt=""
        width={300}
        height={600}
        className="
          w-[300px]
          h-[600px]
          rounded-[32px]
          shadow-[0_20px_60px_rgba(0,0,0,.35)]
        "
      />
    </div>
  );
}
