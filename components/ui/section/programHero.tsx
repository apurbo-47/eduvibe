"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ProgramHero() {
  return (
    <section className="w-full min-h-150 grid lg:grid-cols-2 overflow-hidden bg-grid-pattern">
      {/* LEFT SIDE */}
      <div className="pt-26 md:pt-32">
        <div
          className="relative flex flex-col justify-center w-full h-full text-white 
      bg-linear-to-br from-[#372B73] to-[#372B73]"
        >
          {/* Grid background */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(#ffffff22_1px,transparent_1px),linear-gradient(90deg,#ffffff22_1px,transparent_1px)] bg-size-[40px_40px]" />

          <div className="relative z-10 max-w-2xl p-5 md:p-16 ">
            <p className="text-xl md:text-2xl mb-5 md:mb-8 font-serif">
              Program
            </p>

            <h1 className="text-2xl md:text-[54px] font-bold leading-tight mb-2.5 md:mb-5">
              Discover Our University Programs
            </h1>

            <p className="text-xs md:text-base opacity-80 mb-4 md:mb-8">
              Our academic programs are carefully designed to combine strong
              theoretical foundations with practical learning experiences.
              Taught by experienced faculty and aligned with industry needs,
              each program prepares students with the knowledge, skills, and
              confidence to succeed in a global environment.
            </p>

            <button className="flex items-center gap-3 md:text-lg text-sm bg-white text-black px-3 py-2 md:px-5 md:py-3 rounded-full font-medium hover:scale-105 transition cursor-pointer hover:bg-[#00A991] hover:text-white">
              Explore Program
              <span className=" p-1 md:p-2 rounded-full">
                <ArrowUpRight size={16} />
              </span>
            </button>
          </div>

          {/* Decorative book icons */}
          <Image
            src="/images/d.png"
            width={100}
            height={70}
            alt="icon"
            className="w-13 h-13 md:w-20 md:h-20 absolute top-0 right-2.5 md:top-8 md:right-10 "
          />

          <Image
            src="/images/d.png"
            width={100}
            height={70}
            alt="icon"
            className="w-12 h12 md:w-20 md:h-20 absolute -bottom-20 right-6 md:bottom-0 md:left-20 object-cover "
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative flex items-center justify-center bg-[#F6F6FA] bg-grid-pattern pt-5 md:pt-36 ">
        {/* Student Image */}
        <Image
          src="/images/student.png"
          width={520}
          height={520}
          alt="students"
          className="w-full h-full relative  object-fill "
        />

        <Image
          src="/images/cap.png"
          width={100}
          height={100}
          alt="icon"
          className="w-16 h-16 md:w-32 md:h-32 absolute top-8 right-3 md:top-34 md:right-10 object-cover rotate-23 opacity-70 "
        />

        {/* Floating tag 1 */}
        <div className="absolute top-4  md:top-38 left-7 md:left-15 bg-[#00A991] text-white text-sm px-4 py-1 rounded-full shadow-md">
          Knowledge
        </div>

        {/* Floating tag 2 */}
        <div className="absolute bottom-0 -left-24 md:bottom-32 md:-left-12 bg-[#FF993F] text-white text-sm px-4 py-1 rounded-full shadow-md">
          Innovation
        </div>
      </div>
    </section>
  );
}
