"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <motion.div
      viewport={{ once: true, amount: 0.3 }}
      className="w-full relative overflow-hidden bg-grid-pattern bg-[#EFEBFF] pt-28 pb-30 md:pt-40 md:pb-80 px-5 md:px-0"
    >
      {/* Left Icon */}
      <div>
        <Image
          src="/images/diary.png"
          width={70}
          height={70}
          alt="icon"
          className="w-13 h-13 md:w-20 md:h-20 absolute top-24 left-8 md:top-36 md:left-60"
        />
      </div>

      {/* Right Icon */}
      <div>
        <Image
          src="/images/cap.png"
          width={70}
          height={70}
          alt="icon"
          className="w-16 h-16 md:w-32 md:h-32 absolute opacity-50 top-28 right-5 md:top-32 md:right-20 object-cover rotate-23"
        />
      </div>

      <div className="text-center">
        <motion.h3
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg md:text-2xl font-bold"
        >
          Contact Us
        </motion.h3>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="max-w-xl mx-auto text-2xl md:text-5xl font-bold mt-2.5 md:mt-8"
        >
          Get in Touch with Our University
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-2.5 md:mt-8 max-w-2xl mx-auto text-xs md:text-base"
        >
          We’re here to help with your questions, admissions inquiries, and
          general information. Get in touch with our team and we’ll guide you
          with the support you need every step of the way.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ContactHero;
