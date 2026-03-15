import Image from "next/image";
import FloatingShapes from "./floatingShapes";
import { assets } from "@/assets";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative max-w-350 mx-auto overflow-hidden  bg-[#EFEBFF] bg-grid bg-grid-pattern">
      {/* Floating UI */}
      <FloatingShapes />

      <div className="container mx-auto px-6 pt-20 pb-36 text-center relative z-10">
        {/* Admission Badge */}
        <div className="mx-auto mt-10 md:mt-20 mb-6 inline-flex items-center gap-2 rounded-full bg-white px-2 md:px-4 py-3 text-sm font-medium text-[#111827] shadow">
          🎓2023-2025 University Year Open for Admissions
        </div>

        {/* Title */}
        <h1 className="mx-auto max-w-4xl text-2xl font-bold  text-[#111827] md:text-5xl">
          Empowering{" "}
          <span className="relative inline-block">
            Young Minds to
            <span>
              <Image
                src="/Line1547.svg"
                alt="line"
                width={300}
                height={5}
                className="w-37 md:w-75"
              />
            </span>
          </span>
          <br />
          Learn , Lead, and Succeed
        </h1>

        {/* Text */}
        <p className="mx-auto mt-5 max-w-2xl text-[#6B7280]">
          Our university is dedicated to providing transformational education,
          equipping students with the knowledge, skills, and experiences
          essential for lifelong success and global impact.
        </p>

        {/* CTA */}
        <div className="relative mt-10 -mb-48 md:-mb-52 flex justify-center">
          <button className="flex h-24 w-24 md:h-36 md:w-36 flex-col items-center justify-center  border-4 rounded-full bg-[#6C63FF] text-xs md:text-lg font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-[#7A60FF]">
            <span className="mb-2 md:mb-4">
              <ArrowDown size={28} />
            </span>
            Explore University
          </button>
        </div>
      </div>

      {/* Image */}
      <div className=" relative h-70 md:h-screen w-full ">
        <Image
          src={assets.university}
          alt="University"
          fill
          priority
          className=" md:rounded-xl object-cover"
        />
      </div>
    </section>
  );
}
