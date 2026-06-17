"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { animations } from "../animations/animation";

const newsData = [
  {
    id: 1,
    img: "/images/news1.png",
    date: "Jan 2026",
    author: "Budi Santano",
    title:
      "Peregrin University's Faculty of Engineering Unveils Cutting-Edge Research on Sustainable Urban Development to Combat Climate Change",
  },
  {
    id: 2,
    img: "/images/news2.png",
    date: "Jan 2026",
    author: "Budi Santano",
    title:
      "Peregrin University's Faculty of Engineering Unveils Cutting-Edge Research on Sustainable Urban Development to Combat Climate Change",
  },
  {
    id: 3,
    img: "/images/news3.png",
    date: "Jan 2026",
    author: "Budi Santano",
    title:
      "Peregrin University's Faculty of Engineering Unveils Cutting-Edge Research on Sustainable Urban Development to Combat Climate Change",
  },
  {
    id: 4,
    img: "/images/news4.png",
    date: "Jan 2026",
    author: "Budi Santano",
    title:
      "Peregrin University's Faculty of Engineering Unveils Cutting-Edge Research on Sustainable Urban Development to Combat Climate Change",
  },
  {
    id: 5,
    img: "/images/news5.png",
    date: "Jan 2026",
    author: "Budi Santano",
    title:
      "Peregrin University's Faculty of Engineering Unveils Cutting-Edge Research on Sustainable Urban Development to Combat Climate Change",
  },
  {
    id: 6,
    img: "/images/news6.png",
    date: "Jan 2026",
    author: "Budi Santano",
    title:
      "Peregrin University's Faculty of Engineering Unveils Cutting-Edge Research on Sustainable Urban Development to Combat Climate Change",
  },
];

export default function NewsSection() {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateView();
    window.addEventListener("resize", updateView);

    return () => window.removeEventListener("resize", updateView);
  }, []);

  const nextSlide = () => {
    if (index + cardsPerView < newsData.length) {
      setIndex(index + cardsPerView);
    }
  };

  const prevSlide = () => {
    if (index - cardsPerView >= 0) {
      setIndex(index - cardsPerView);
    }
  };

  const visibleCards = newsData.slice(index, index + cardsPerView);

  return (
    <motion.section
      variants={animations.stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="max-w-330 mx-auto py-6 md:py-16 px-5"
    >
      {/* Header */}
      <motion.div
        variants={animations.fadeUp}
        className="flex flex-col md:flex-row  items-center justify-between mb-10"
      >
        <h2 className=" text-2xl md:text-4xl font-semibold max-w-xl mb-5">
          Stay updated with news and events at Peregrin University.
        </h2>

        <div className="flex md:flex-col flex-row items-center justify-between gap-12 md:gap-6 ">
          <div className="">
            <button className="border px-4 py-3 md:px-5 md:py-4 rounded-full bg-[#F6F4FFB2] text-sm md:text-lg font-bold hover:bg-black hover:text-white cursor-pointer">
              Our Latest News
            </button>
          </div>

          <div className="flex gap-1.5 md:gap-3">
            <button
              onClick={prevSlide}
              className="w-10 h-10 cursor-pointer rounded-full border border-[#7A60FF] text-[#7A60FF] flex items-center justify-center hover:bg-[#7A60FF] hover:text-white"
            >
              ←
            </button>

            <button
              onClick={nextSlide}
              className="w-10 h-10 cursor-pointer rounded-full border border-[#7A60FF] text-[#7A60FF] flex items-center justify-center hover:bg-[#7A60FF] hover:text-white"
            >
              →
            </button>
          </div>
        </div>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={animations.fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
      >
        {visibleCards.map((item) => (
          <div key={item.id}>
            <div className="relative h-56 w-full object-cover rounded-xl overflow-hidden">
              <Image src={item.img} alt="" fill className="object-cover" />
            </div>

            <div className="mt-2 md:mt-4">
              <div className="flex justify-between text-xs md:text-base text-[#4C4C4C]">
                <span>{item.date}</span>
                <span>{item.author}</span>
              </div>

              <h3 className="mt-2 md:mt-4 text-sm md:text-lg font-medium">
                {item.title}
              </h3>

              <p className="mt-2 md:mt-4 text-sm md:text-lg font-medium underline cursor-pointer hover:text-[#4C4C4C]">
                Read More News
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}
