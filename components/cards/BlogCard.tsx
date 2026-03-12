import { News } from "@/interfaces/news.interface";
import Image from "next/image";
import React from "react";

const BlogCard = ({ data }: { data: News }) => {
  return (
    <div
      key={data.id}
      className="group cursor-pointer transition hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative w-full h-50 rounded-xl overflow-hidden">
        <Image
          src={data.image}
          alt="news"
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Meta */}
      <div className="flex justify-between text-xs text-[#4C4C4C] mt-2 md:mt-4">
        <span>{data.date}</span>
        <span>{data.author}</span>
      </div>

      {/* Title */}
      <h3 className="text-sm font-medium mt-1.5 md:mt-3 leading-relaxed ">
        {data.title}
      </h3>

      {/* Link */}
      <button className="text-sm font-medium mt-1.5 md:mt-3 cursor-pointer underline">
        Read More News
      </button>
    </div>
  );
};

export default BlogCard;
