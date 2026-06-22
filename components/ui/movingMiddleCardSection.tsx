"use client";

import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

import image1 from "@/assets/images/image1.png";
import image2 from "@/assets/images/image2.png";
import image4 from "@/assets/images/image4.png";
import image5 from "@/assets/images/image5.png";
import slide_img from "@/assets/images/slide_img_cropped.png";

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

      setTravelDistance(row3Top - row1Top + 120);
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => window.removeEventListener("resize", calculateDistance);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end end"],
  });

  const yTransform = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    [0, 0, travelDistance],
  );

  const y = useSpring(yTransform, {
    stiffness: 90,
    damping: 24,
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.03, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 bg-black"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-24 -translate-x-1/2 w-175 h-175 rounded-full bg-[#8DE04F]/5 blur-[220px] pointer-events-none" />

      <div className="relative w-full overflow-hidden">
        {/* Background Grid */}
        <div className="space-y-0.5">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              ref={rowIndex === 0 ? row1Ref : rowIndex === 2 ? row3Ref : null}
              className="grid grid-cols-5 gap-5 space-y-5"
            >
              {row.map((item, index) => (
                <div key={index}>
                  {item ? (
                    <PhoneCard src={item} />
                  ) : (
                    <div className="h-150 w-full" />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Hero Card */}
        <motion.div
          style={{
            y,
            scale,
          }}
          className=" absolute left-1/2 top-0 -translate-x-1/2 z-30 pointer-events-none"
        >
          <Image
            src={slide_img}
            alt="Hero Phone"
            priority
            className=" w-full h-full "
          />
        </motion.div>
      </div>
    </section>
  );
}

function PhoneCard({ src }: { src: string | StaticImageData }) {
  return (
    <div className="relative h-150 rounded-3xl overflow-hidden ">
      <Image
        src={src}
        alt=""
        fill
        sizes="20vw"
        className="object-cover object-center scale-[1.04] select-none pointer-events-none"
      />
    </div>
  );
}
