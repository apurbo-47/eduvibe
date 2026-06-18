import { newsData } from "@/constants/news.constant";
import React from "react";
import BlogCard from "../cards/BlogCard";
import Image from "next/image";
import * as motion from "framer-motion/client";
import { animations } from "../animations/animation";

const BlogHero = () => {
  const firstThree = newsData.slice(0, 3);
  return (
    <motion.div
      variants={animations.stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative w-full md:pt-40 pt-28 md:pb-20 pb-5 px-5 md:px-20 bg-grid bg-[#EFEBFF]"
    >
      <Image
        src="/images/diary.png"
        width={70}
        height={70}
        alt="icon"
        className="w-13 h-13 md:w-20 md:h-20 absolute top-24 left-2.5 md:top-32 md:left-125 "
      />

      <Image
        src="/images/cap.png"
        width={70}
        height={70}
        alt="icon"
        className="w-16 h-16 md:w-32 md:h-32 absolute opacity-50 top-28 right-5 md:top-32 md:right-10 object-cover rotate-23 "
      />
      <div className="max-w-330 mx-auto">
        <div>
          <motion.h3
            variants={animations.fadeUp}
            className="text-lg md:text-2xl text-center md:text-start font-bold mb-2.5 md:mb-8"
          >
            Blog
          </motion.h3>
          <motion.h1
            variants={animations.fadeUp}
            className="md:max-w-xl font-bold text-center md:text-start text-2xl md:text-4xl mb-5 md:mb-15 leading-tight"
          >
            Stories and Updates from Our Academic Blog & News
          </motion.h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 ">
          {firstThree.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <BlogCard key={item.id} data={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BlogHero;
