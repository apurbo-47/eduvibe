"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { animations } from "../animations/animation";

const campusData = [
  {
    id: "01",
    title: "Academic Buildings",
    description:
      "Our academic buildings are designed to support excellence in teaching and learning. They feature modern classrooms, advanced laboratories, and collaborative learning spaces.Each building fosters innovation, research, and academic engagement. Students benefit from a comfortable, technology-enabled learning environment.These spaces reflect our commitment to quality education and academic growth.",
    images: [
      "/images/campus1.png",
      "/images/campus2.png",
      "/images/campus3.png",
    ],
  },
  {
    id: "02",
    title: "Libraries Buildings",
    description:
      "Our libraries provide quiet study spaces, digital resources, and collaborative environments for students.",
    images: [
      "/images/libraries.png",
      "/images/campus2.png",
      "/images/campus3.png",
    ],
  },
  {
    id: "03",
    title: "Arts and Culture",
    description:
      "Our campus celebrates creativity through galleries, performance spaces, and cultural events.",
    images: ["/images/arts.png", "/images/campus2.png", "/images/campus3.png"],
  },
  {
    id: "04",
    title: "Research Centers",
    description:
      "Research facilities support innovation across disciplines with advanced labs and collaborative hubs.",
    images: [
      "/images/research.png",
      "/images/campus2.png",
      "/images/campus3.png",
    ],
  },
  {
    id: "05",
    title: "Sports Recreation",
    description:
      "Research facilities support innovation across disciplines with advanced labs and collaborative hubs.",
    images: [
      "/images/sports1.png",
      "/images/sports2.jpeg",
      "/images/sports3.jpg",
    ],
  },
];

export default function CampusLife() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % campusData.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + campusData.length) % campusData.length);
  };

  const active = campusData[index];

  return (
    <motion.section
      variants={animations.stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full bg-white py-8 md:py-16 px-5 md:px-20"
    >
      <div className="max-w-330 mx-auto">
        {/* Title */}
        <motion.div
          variants={animations.stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-5 md:mb-12"
        >
          <motion.h2
            variants={animations.fadeUp}
            className="text-2xl md:text-4xl font-bold"
          >
            Explore Our Campus Life
          </motion.h2>
          <motion.p
            variants={animations.fadeUp}
            className="text-sm md:text-lg mt-3 max-w-xl mx-auto"
          >
            Experience a vibrant campus of learning, culture, and community.
          </motion.p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          variants={animations.stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white rounded-3xl p-3 md:p-6 border-8 border-[#F5F7FA]  shadow-sm grid md:grid-cols-2 gap-6"
        >
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-between">
            <div>
              <motion.div variants={animations.fadeUp}>
                <p className="text-[clamp(16px,2vw,20px)] font-bold">
                  {active.id}
                </p>

                <div className="w-20 h-0.5 bg-black mt-2.5"></div>
                <div className="w-28 h-0.5 bg-black mt-1 "></div>
              </motion.div>

              <motion.h3
                variants={animations.fadeUp}
                className="text-2xl md:text-4xl font-bold mt-3 mb-3 md:mt-5 md:mb-5"
              >
                {active.title}
              </motion.h3>

              <motion.p
                variants={animations.fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="text-xs md:text-lg  leading-relaxed"
              >
                {active.description}
              </motion.p>

              <motion.button
                variants={animations.fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="mt-3 md:mt-6 text-sm md:text-lg text-[#7A60FF] font-medium flex items-center gap-2 cursor-pointer"
              >
                See More Details →
              </motion.button>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <motion.div
            variants={animations.fadeLeft}
            className="grid grid-cols-2 grid-rows-2 gap-4 h-70 md:h-87"
          >
            <motion.div className="row-span-2 relative rounded-xl overflow-hidden">
              <Image
                src={active.images[0]}
                alt=""
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div className="relative rounded-xl overflow-hidden">
              <Image
                src={active.images[1]}
                alt=""
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="relative rounded-xl overflow-hidden">
              <Image
                src={active.images[2]}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Navigation */}
        <motion.div
          variants={animations.fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between mt-8 gap-6"
        >
          {/* Tabs */}
          <div className="flex gap-2 md:gap-6 overflow-x-auto">
            {campusData.map((item, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`text-sm flex flex-col items-center ${
                  index === i ? "text-black font-semibold" : "text-gray-400"
                }`}
              >
                {item.id}

                <span className="text-[10px] md:text-sm">{item.title}</span>
              </button>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 cursor-pointer rounded-full border border-[#7A60FF] text-[#7A60FF] flex items-center justify-center hover:bg-[#7A60FF] hover:text-white"
            >
              ←
            </button>

            <span className="text-sm font-medium">
              {String(index + 1).padStart(2, "0")}/
              {String(campusData.length).padStart(2, "0")}
            </span>

            <button
              onClick={nextSlide}
              className="w-10 h-10 cursor-pointer rounded-full border border-[#7A60FF] text-[#7A60FF] flex items-center justify-center hover:bg-[#7A60FF] hover:text-white"
            >
              →
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
