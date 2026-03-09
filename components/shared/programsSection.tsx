"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { assets } from "@/assets";

const programs = [
  {
    id: 1,
    title: "Master of Science in Data Science MSDS",
    image: "/images/programs.png",
    tag: "Full time",
  },
  {
    id: 2,
    title: "Master of Public Health MPH Degree",
    image: "/images/health.png",
    tag: "Research",
  },
  {
    id: 3,
    title: "Bachelor of Business Data Administration BBA",
    image: "/images/sr4.png",
    tag: "Full time",
  },
  {
    id: 4,
    title: "Bachelor of Arts in Psychology Degree",
    image: "/images/psychology.png",
    tag: "Part time",
  },
];

export default function ProgramsSection() {
  const [cards, setCards] = useState(programs);

  const nextSlide = () => {
    const first = cards[0];
    setCards([...cards.slice(1), first]);
  };

  const prevSlide = () => {
    const last = cards[cards.length - 1];
    setCards([last, ...cards.slice(0, cards.length - 1)]);
  };

  return (
    <section className="py-8 md:py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Badge */}
        <span className="border px-3 py-2 md:px-5 md:py-3 rounded-full text-sm">
          Leading Our Programs
        </span>

        {/* Title */}
        <div className="flex md:flex-row flex-col justify-center items-center md:gap-4 mt-5 mb-8 md:mb-16">
          <Image
            src={assets.cap}
            alt="cap"
            width={60}
            height={40}
            className="w-8 h-8 md:w-16 md:h-16"
          />
          <h2 className="text-2xl md:text-4xl font-bold  ">
            Discover Our University Programs
          </h2>
        </div>

        {/* Cards */}
        <div className="flex items-center justify-center gap-8">
          {cards.map((card, index) => {
            const active = index === 1;

            return (
              <div
                key={card.id}
                className={`transition-all duration-500 rounded-2xl overflow-hidden shadow-lg
                  
                  ${
                    active
                      ? "scale-110 bg-linear-to-b from-[#7A60FF] to-[#7A60FF] text-white w-70"
                      : "bg-white w-60 hidden md:block opacity-70"
                  }
                `}
              >
                {/* Image */}
                <div className="relative h-42.5 w-full">
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    className="object-cover"
                  />

                  <span className="absolute top-3 right-3 text-xs px-3 py-1 bg-[#7A60FF] text-white rounded-full">
                    {card.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 text-left">
                  <h3 className="font-bold text-sm md:text-base">
                    {card.title}
                  </h3>

                  <p className="text-sm mt-2 opacity-80">
                    Master statistics, machine learning, and big data.
                  </p>

                  <div className="flex items-center justify-between mt-4 text-xs">
                    <span>⏱ 2 Years</span>
                    <span>16 Credits</span>

                    <button className="bg-white cursor-pointer text-[#7A60FF] px-3 py-1 rounded-full text-xs">
                      Apply →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className=" md:mt-16 mt-10 text-[#333333] max-w-md mx-auto ">
          <p className=" text-base md:text-2xl ">
            Thoughtfully Crafted Education Driven by Excellence and Innovation
          </p>
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-4 mt-3 md:mt-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-[#7A60FF] text-[#7A60FF] hover:bg-[#7A60FF] hover:text-white flex items-center justify-center cursor-pointer"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-[#7A60FF] text-[#7A60FF] hover:bg-[#7A60FF] hover:text-white flex items-center justify-center cursor-pointer"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
