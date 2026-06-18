import * as motion from "framer-motion/client";
import Image from "next/image";
import React from "react";
import { animations } from "../animations/animation";

const BlogIDHero = () => {
  return (
    <motion.div
      variants={animations.stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative w-full  md:pt-40 pt-28 md:pb-20 pb-5 px-5 md:px-20 bg-grid bg-[#EFEBFF]"
    >
      <div className="max-w-330 mx-auto">
        <Image
          src="/images/cap.png"
          width={100}
          height={70}
          alt="icon"
          className="w-16 h-16 md:w-32 md:h-32 absolute opacity-50 top-28 right-5 md:top-32 md:right-10 object-cover rotate-23 "
        />
        <motion.h3
          variants={animations.fadeUp}
          className="text-lg md:text-2xl text-center md:text-start font-bold mb-2.5 md:mb-8"
        >
          Blog Details
        </motion.h3>
        <motion.h1
          variants={animations.fadeUp}
          className="md:max-w-xl font-bold text-center md:text-start text-2xl md:text-4xl mb-5 md:mb-15 leading-tight"
        >
          How Smart Classrooms Are Transforming Student Learning
        </motion.h1>
        <div className="flex flex-col  md:flex-row gap-3 justify-center md:justify-start">
          <motion.div
            variants={animations.fadeUp}
            className="flex bg-white rounded-full py-2 px-5 justify-center items-center gap-1.5"
          >
            <Image
              src="/images/omi.png"
              alt=""
              width={40}
              height={40}
              className="bg-linear-to-b from-[#713CE9] to-[#FFFFFF] rounded-full p-1 "
            />
            <h1>Mehedi Hasan</h1>
          </motion.div>

          <motion.div
            variants={animations.fadeUp}
            className="flex bg-white rounded-full py-2 px-5 justify-center items-center"
          >
            <h1>Date: 10/02/26 </h1>
          </motion.div>

          <motion.div
            variants={animations.fadeUp}
            className="flex bg-white rounded-full py-2 px-5 justify-center items-center"
          >
            <h1>Discipline </h1>
          </motion.div>

          <motion.div
            variants={animations.fadeUp}
            className="flex bg-white rounded-full py-2 px-5 justify-center items-center"
          >
            <h1>Classroom </h1>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogIDHero;
