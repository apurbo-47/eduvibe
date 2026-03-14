"use client";
import React from "react";
import Image from "next/image";

type Video = {
  id: number;
  thumbnail: string;
};

const videos: Video[] = [
  { id: 1, thumbnail: "/images/th1.png" },
  { id: 2, thumbnail: "/images/th2.png" },
  { id: 3, thumbnail: "/images/th3.png" },
];

const VirtualTour = () => {
  return (
    <div>
      <div className="lg:p-20 p-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-3 md:gap-8">
          <h1 className="text-xl lg:text-4xl font-bold">Virtual Tour</h1>
          <div className="w-48 md:w-full max-w-4xl mx-auto h-0.5 bg-linear-to-r from-white to-[#7A60FF]"></div>
        </div>

        <div className=" max-w-7xl mx-auto pt-5 md:pt-13 ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2.5 md:gap-5">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className={`relative overflow-hidden rounded-xl md:rounded-[20px] group cursor-pointer w-full h-65 lg:h-125
              lg:w-65 ${index === 1 ? "lg:w-170" : ""}`}
              >
                {/* Thumbnail */}
                <Image
                  src={video.thumbnail}
                  alt="video"
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#7A60FF] flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 ml-1"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;
