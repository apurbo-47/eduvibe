import Image from "next/image";
import React from "react";

const FacilitiesCard = () => {
  return (
    <div className="w-full max-w-7xl mx-auto rounded-xl px-5 py-10 md:p-20 bg-[#F5F7FA] ">
      <div className="max-w-7xl mx-auto grid grid-cols-2  lg:grid-cols-4 gap-2.5 md:gap-5  ">
        <div className="order-3 lg:order-1 border border-white rounded-3xl bg-white p-2.5 md:p-5">
          <h3 className="text-sm md:text-xl font-bold mb-2.5 md:mb-5">
            Academic Excellence
          </h3>

          <Image
            src="/images/frame2.png"
            alt="frame"
            width={60}
            height={60}
            className="w-10 h-10 md:w-15 md:h-15"
          />

          <p className="text-xs md:text-base text-[#333333] mt-2.5 md:mt-5">
            Industry-relevant programs designed to deliver strong academic
            foundations and practical knowledge
          </p>
        </div>

        <div className="order-1 col-span-2 lg:order-2 text-center max-w-lg mx-auto ">
          <h1 className="text-2xl md:text-4xl font-semibold mb-3 md:mb-6">
            Why {""}
            <span className="relative inline-block">
              Choose Eduvibe
              <span>
                <Image
                  src="/Line1547.svg"
                  alt="line"
                  width={300}
                  height={2}
                  className="w-44 md:w-72"
                />
              </span>
            </span>
          </h1>
          <p className="text-sm text-center md:text-lg mb-4">
            Eduvibe offers quality education, experienced facility, and industry
            focused programs. We prepare students with the knowledge, skills,
            and confidence to succeed globally.
          </p>
          <button className="px-4 py-3 md:px-6 md:py-4 border rounded-full cursor-pointer md:text-base text-xs text-white bg-[#7A60FF] hover:bg-blue-800">
            Eduvibe Since 1980
          </button>
        </div>

        <div className="order-4 lg:order-4 border border-white rounded-3xl bg-white p-2.5 md:p-5">
          <h3 className="text-sm md:text-xl font-bold mb-2.5 md:mb-5">
            Global Learning Hub
          </h3>

          <Image
            src="/images/frame2.png"
            alt="frame"
            width={60}
            height={60}
            className="w-10 h-10 md:w-15 md:h-15"
          />

          <p className="text-xs md:text-base text-[#333333] mt-2.5 md:mt-5">
            A diverse, inclusive campus experience that supports global
            perspectives and growth worldwide.
          </p>
        </div>

        <div className="order-5 lg:order-5 border border-white rounded-3xl bg-white p-1.5 md:p-2.5 ">
          <div className="flex">
            <button className="border border-[#4B5563] py-1 px-1 md:py-2 md:px-4 -rotate-17 md:-rotate-15 rounded-full mt-8 md:mt-10 text-xs md:text-sm text-[#1F2A37]">
              Personalized Plan
            </button>
            <button className="border border-[#4B5563] py-1 px-1 md:py-2 md:px-4 -rotate-10 rounded-full mt-8 md:mt-10 text-xs md:text-base text-[#1F2A37]">
              Guided
            </button>
          </div>

          <div className="flex">
            <button className="border border-[#4B5563] py-1 px-1 md:py-2 md:px-4 -rotate-10 rounded-full mt-5 md:mt-6 text-xs md:text-sm text-[#1F2A37]">
              Guided
            </button>
            <button className="border border-[#4B5563] py-1 px-1 md:py-2 md:px-4 rotate-17 rounded-full mt-5 md:mt-6 text-xs md:text-sm text-[#1F2A37]">
              Personalized Plan
            </button>
          </div>

          <div className="flex  md:gap-2.5">
            <button className="border border-[#4B5563] py-1 px-1 md:py-2 md:px-4 rounded-full mt-6 text-xs md:text-sm text-[#1F2A37] mb-2">
              Personalized Plan
            </button>
            <button className="border border-[#4B5563] py-1 px-1 md:py-2 md:px-4 rounded-full mt-6 text-xs md:text-base text-[#1F2A37] mb-2">
              Guided
            </button>
          </div>
        </div>

        <div className="order-6 lg:order-6 border border-white rounded-3xl bg-white p-2.5 md:p-5">
          <h3 className="text-sm md:text-xl font-bold mb-2.5 md:mb-5">
            World Class Faculty
          </h3>

          <Image
            src="/images/frame2.png"
            alt="frame"
            width={60}
            height={60}
            className="w-10 h-10 md:w-15 md:h-15"
          />

          <p className="text-xs md:text-base text-[#333333] mt-2.5 md:mt-5">
            Learn from industry-leading experts, combining real-world experience
            with innovative teaching techniques.
          </p>
        </div>

        <div className="order-7 lg:order-7 border border-white rounded-3xl bg-white p-2.5 md:p-5">
          <h3 className="text-sm md:text-xl font-bold mb-2.5 md:mb-5">
            Global Learning Hub
          </h3>

          <Image
            src="/images/frame2.png"
            alt="frame"
            width={60}
            height={60}
            className="w-10 h-10 md:w-15 md:h-15"
          />

          <p className="text-xs md:text-base text-[#333333] mt-2.5 md:mt-5">
            Hands-on training, research opportunities, and career guidance to
            prepare future leaders.
          </p>
        </div>
        <div className="order-8 lg:order-8 border border-white rounded-3xl bg-white p-1.5 md:p-2.5 ">
          <div className="flex">
            <button className="border border-[#4B5563] py-1 px-1 md:py-2 md:px-4 -rotate-17 md:-rotate-15 rounded-full mt-8 md:mt-10 text-xs md:text-sm text-[#1F2A37]">
              Personalized Plan
            </button>
            <button className="border border-[#4B5563] py-1 px-1 md:py-2 md:px-4 -rotate-10 rounded-full mt-8 md:mt-10 text-xs md:text-base text-[#1F2A37]">
              Guided
            </button>
          </div>

          <div className="flex">
            <button className="border border-[#4B5563] py-1 px-1 md:py-2 md:px-4 -rotate-10 rounded-full mt-5 md:mt-6 text-xs md:text-sm text-[#1F2A37]">
              Guided
            </button>
            <button className="border border-[#4B5563] py-1 px-1 md:py-2 md:px-4 rotate-17 rounded-full mt-5 md:mt-6 text-xs md:text-sm text-[#1F2A37]">
              Personalized Plan
            </button>
          </div>

          <div className="flex  md:gap-2.5">
            <button className="border border-[#4B5563] py-1 px-1 md:py-2 md:px-4 rounded-full mt-6 text-xs md:text-sm text-[#1F2A37] mb-2">
              Personalized Plan
            </button>
            <button className="border border-[#4B5563] py-1 px-1 md:py-2 md:px-4 rounded-full mt-6 text-xs md:text-base text-[#1F2A37] mb-2">
              Guided
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesCard;
