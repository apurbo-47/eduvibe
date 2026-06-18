"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { animations } from "../animations/animation";

const CampusJourney = () => {
  return (
    <motion.div
      variants={animations.stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative max-w-330 mx-auto px-5 py-8 md:p-20 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <motion.div
        variants={animations.fadeLeft}
        className="absolute top-36 md:top-60 right-0"
      >
        <Image
          src="/images/arrow.png"
          width={70}
          height={70}
          alt="icon"
          className="w-16 h-16 md:w-60 md:h-50 "
        />
      </motion.div>

      <motion.div
        variants={animations.fadeRight}
        className="absolute top-8 md:top-3 left-0 rotate-180"
      >
        <Image
          src="/images/arrow.png"
          width={100}
          height={70}
          alt="icon"
          className="w-16 h-16 md:w-60 md:h-50 "
        />
      </motion.div>

      <div>
        <div className="max-w-4xl mx-auto">
          <motion.h1
            variants={animations.fadeUp}
            className="text-2xl md:text-5xl font-bold text-center"
          >
            Our Campus Journey
          </motion.h1>
          <motion.p
            variants={animations.fadeUp}
            className="relative text-sm md:text-3xl text-center leading-tight mt-2.5 md:mt-6"
          >
            Explore the journey of Eduvibe University as it continues to grow
            into a dynamic center of learning and innovation. Our campus
            reflects a commitment to {""}
            <span className="text-[#7F7F7F]">
              academic excellence, creativity, and an inspiring environment
              where students are empowered to achieve their full potential.
            </span>
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default CampusJourney;
