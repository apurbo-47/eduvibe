"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ProgramHero() {
  return (
    <section className="w-full min-h-150 grid lg:grid-cols-2 overflow-hidden bg-grid-pattern">
      {/* LEFT SIDE */}
      <div className="pt-26 md:pt-32">
        <div
          className="relative flex flex-col justify-center px-8 md:px-16 py-5 md:py-20 text-white 
      bg-linear-to-br from-[#4B3F9B] to-[#2E2A74]"
        >
          {/* Grid background */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(#ffffff22_1px,transparent_1px),linear-gradient(90deg,#ffffff22_1px,transparent_1px)] bg-size-[40px_40px]" />

          <div className="relative z-10 max-w-xl">
            <p className="text-sm mb-4 opacity-80">Program</p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Discover Our <br /> University Programs
            </h1>

            <p className="text-sm md:text-base opacity-80 mb-8">
              Our academic programs are carefully designed to combine strong
              theoretical foundations with practical learning experiences.
              Taught by experienced faculty and aligned with industry needs,
              each program prepares students with the knowledge, skills, and
              confidence to succeed in a global environment.
            </p>

            <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition">
              Explore Program
              <span className="bg-gray-200 p-2 rounded-full">
                <ArrowUpRight size={16} />
              </span>
            </button>
          </div>

          {/* Decorative book icons */}
          <Image
            src="/images/books.png"
            width={70}
            height={70}
            alt="icon"
            className="absolute top-8 right-10 "
          />

          <Image
            src="/images/books.png"
            width={70}
            height={70}
            alt="icon"
            className="absolute bottom-10 left-10 object-cover "
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
          className="w-full h-full relative  object-cover "
        />

        {/* Floating tag 1 */}
        <div className="absolute top-36 left-10 bg-green-500 text-white text-sm px-4 py-1 rounded-full shadow-md">
          Knowledge
        </div>

        {/* Floating tag 2 */}
        <div className="absolute bottom-32 -left-12 bg-orange-500 text-white text-sm px-4 py-1 rounded-full shadow-md">
          Innovation
        </div>

        {/* Decorative shapes */}
        <div className="absolute w-16 h-16 bg-green-400 rounded-full blur-2xl top-40 left-20 opacity-50" />
        <div className="absolute w-20 h-20 bg-purple-400 rounded-full blur-2xl bottom-40 right-20 opacity-40" />
      </div>
    </section>
  );
}
