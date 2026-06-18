import { assets } from "@/assets";
import * as motion from "framer-motion/client";
import Image from "next/image";
import React from "react";
import { animations } from "../animations/animation";

const UniversityPartners = () => {
  return (
    <motion.div
      variants={animations.stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="w-full max-w-330 mx-auto overflow-hidden"
    >
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 p-5 md:py-16">
        <motion.div variants={animations.fadeRight}>
          <h1 className="text-2xl md:text-[44px] text-center md:text-start md:mt-5 ">
            Learn and Grow with Our Trusted University Partners
          </h1>
          <p className="mt-2.5 md:mt-8 text-xs md:text-lg text-center md:text-start ">
            We collaborate with trusted university partners to enhance academic
            quality, research opportunities, and global learning experiences.
            These partnerships help students gain broader perspectives, shared
            resources, and pathways to academic excellence.
          </p>
          <div className="flex gap-15 mt-5 md:mt-30 ">
            <div className="">
              <h1 className="text-2xl md:text-5xl">96%</h1>
              <p className="mt-2.5 md:text-lg text-sm ">
                Employment rate within 6 months of graduation
              </p>
            </div>
            <div className="">
              <h1 className="text-2xl md:text-5xl">300+</h1>
              <p className="mt-2.5 md:text-lg text-sm ">
                Corporate partners for internships
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={animations.fadeLeft}>
          <div className="flex justify-between items-center gap-2.5 md:gap-3.5">
            <div className="bg-[#F5F7FA] p-4 md:p-8 rounded-xl md:rounded-2xl">
              <Image
                src={assets.p1}
                alt="p1"
                width={100}
                height={100}
                className="w-20 h-20 md:w-28 md:h-28 object-cover "
              />
            </div>
            <div className="bg-[#F5F7FA] p-4 md:p-8 rounded-xl md:rounded-2xl">
              <Image
                src={assets.p2}
                alt="p1"
                width={100}
                height={100}
                className="w-20 h-20 md:w-28 md:h-28  object-cover "
              />
            </div>
            <div className="bg-[#F5F7FA] p-4 md:p-8 rounded-xl md:rounded-2xl">
              <Image
                src={assets.p3}
                alt="p1"
                width={100}
                height={100}
                className="w-20 h-20 md:w-28 md:h-28  object-cover "
              />
            </div>
          </div>

          <div className="flex justify-between items-center gap-2.5 md:gap-3.5 mt-2.5 md:mt-4">
            <div className="bg-[#F5F7FA] p-4 md:p-8 rounded-xl md:rounded-2xl">
              <Image
                src={assets.p1}
                alt="p1"
                width={100}
                height={100}
                className="w-20 h-20 md:w-28 md:h-28  object-cover "
              />
            </div>
            <div className="bg-[#F5F7FA] p-4 md:p-8 rounded-xl md:rounded-2xl">
              <Image
                src={assets.p2}
                alt="p1"
                width={100}
                height={100}
                className="w-20 h-20 md:w-28 md:h-28  object-cover "
              />
            </div>
            <div className="bg-[#F5F7FA] p-4 md:p-8 rounded-xl md:rounded-2xl">
              <Image
                src={assets.p3}
                alt="p1"
                width={100}
                height={100}
                className="w-20 h-20 md:w-28 md:h-28  object-cover "
              />
            </div>
          </div>

          <div className="flex justify-between items-center gap-2.5 md:gap-3.5 mt-2.5 md:mt-4">
            <div className="bg-[#F5F7FA] p-4 md:p-8 rounded-xl md:rounded-2xl">
              <Image
                src={assets.p1}
                alt="p1"
                width={100}
                height={100}
                className="w-20 h-20 md:w-28 md:h-28  object-cover "
              />
            </div>
            <div className="bg-[#F5F7FA] p-4 md:p-8 rounded-xl md:rounded-2xl">
              <Image
                src={assets.p2}
                alt="p1"
                width={100}
                height={100}
                className="w-20 h-20 md:w-28 md:h-28  object-cover "
              />
            </div>
            <div className="bg-[#F5F7FA] p-4 md:p-8 rounded-xl md:rounded-2xl">
              <Image
                src={assets.p3}
                alt="p1"
                width={100}
                height={100}
                className="w-20 h-20 md:w-28 md:h-28  object-cover "
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UniversityPartners;
