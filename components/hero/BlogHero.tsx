import { newsData } from "@/constants/news.constant";
import React from "react";
import BlogCard from "../cards/BlogCard";
import Image from "next/image";

const BlogHero = () => {
  const firstThree = newsData.slice(0, 3);
  return (
    <div className="md:pt-40 pt-28 md:pb-20 pb-5 px-5 md:px-20 bg-grid bg-white">
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
      <div>
        <h3 className="text-lg md:text-2xl text-center md:text-start font-bold mb-2.5 md:mb-8">
          Blog
        </h3>
        <h1 className="md:max-w-xl font-bold text-center md:text-start text-2xl md:text-4xl mb-5 md:mb-15 leading-tight">
          Stories and Updates from Our Academic Blog & News
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 ">
        {firstThree.map((item) => (
          <BlogCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default BlogHero;
