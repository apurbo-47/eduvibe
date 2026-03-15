import { assets } from "@/assets";
import Image from "next/image";
import React from "react";

const MissionPage = () => {
  return (
    <div className="bg-[#F5F7FA] max-w-7xl mx-auto p-5 md:p-16 rounded-2xl">
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-5">
          <div className=" col-span-2 bg-white rounded-lg md:rounded-[20px] p-3 md:p-5">
            <h1 className="text-2xl text-[#333333] font-bold md:text-4xl">
              Our mission
            </h1>
            <div className="w-20 h-0.5 bg-black mt-2.5"></div>
            <div className="w-28 h-0.5 bg-black mt-1 "></div>
            <p className="text-[#333333] text-xs md:text-lg mt-5 md:mt-8">
              Our mission is to provide high-quality education that inspires
              academic excellence and lifelong learning. We are committed to
              fostering innovation, critical thinking, and ethical leadership.
              Through research and industry-focused programs, we prepare
              students for global success. We strive to create an inclusive and
              supportive learning environment for all. Our goal is to empower
              students to make a positive impact on society and the world.
            </p>
          </div>
          <div>
            <Image
              src={assets.university}
              alt="university"
              width={340}
              height={380}
              className="object-cover w-full h-full rounded-lg md:rounded-[21px]"
            />
          </div>
          <div>
            <Image
              src="/images/campus2.png"
              alt="university"
              width={340}
              height={380}
              className="object-cover w-full h-full rounded-lg md:rounded-[21px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-5 mt-5 ">
          <div className="bg-white p-3 md:p-6 rounded-lg md:rounded-[20px] md:h-40 ">
            <h1 className="text-2xl md:text-5xl font-bold">1980</h1>
            <h3 className="mt-7 md:mt-12 text-xs md:text-xl font-medium">
              Eduvibe Established Year
            </h3>
          </div>

          <div className="bg-white p-3 md:p-6 rounded-lg md:rounded-[20px] md:h-40 ">
            <h1 className="text-2xl md:text-5xl font-bold">25+</h1>
            <h3 className="mt-7 md:mt-12 text-xs md:text-xl font-medium">
              Our Partners
            </h3>
          </div>

          <div className="bg-white p-3 md:p-6 rounded-lg md:rounded-[20px] md:h-40 ">
            <h1 className="text-2xl md:text-5xl font-bold">30k</h1>
            <h3 className="mt-7 md:mt-12 text-xs md:text-xl font-medium">
              Students Enrolled
            </h3>
          </div>

          <div className="bg-white p-3 md:p-6 rounded-lg md:rounded-[20px] md:h-40 ">
            <h1 className="text-2xl md:text-5xl font-bold">98%</h1>
            <h3 className="mt-7 md:mt-12 text-xs md:text-xl font-medium">
              Employability Rate
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-5 mt-5">
          <div className="md:order-1 order-3">
            <Image
              src="/images/vision2(2).png"
              alt="university"
              width={340}
              height={380}
              className="object-cover w-full h-full rounded-lg md:rounded-[21px]"
            />
          </div>
          <div className="md:order-2 order-4">
            <Image
              src="/images/vision2.png"
              alt="university"
              width={340}
              height={380}
              className=" object-cover w-full h-full rounded-lg md:rounded-[21px]"
            />
          </div>
          <div className="md:order-3 col-span-2 order-1 bg-white rounded-lg md:rounded-[20px] p-3 md:p-5">
            <h1 className="text-2xl text-[#333333] font-bold md:text-4xl">
              Our vision
            </h1>
            <div className="w-20 h-0.5 bg-black mt-2.5"></div>
            <div className="w-28 h-0.5 bg-black mt-1 "></div>
            <p className="text-[#333333] text-xs md:text-lg mt-5 md:mt-8">
              Our vision is to be a globally recognized university known for
              academic excellence and innovation. We aim to shape future leaders
              through quality education and impactful research. By embracing
              modern learning and global perspectives, we prepare students for
              tomorrow’s challenges. We strive to foster a culture of
              creativity, integrity, and lifelong growth. Our vision is to
              create meaningful change through education, knowledge, and
              leadership
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionPage;
