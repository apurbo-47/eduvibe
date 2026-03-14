import Image from "next/image";
import React from "react";

const GallerySection = () => {
  const categories = [
    {
      title: "Graduated",
      img: "/images/gallery1.png",
      rotation: "rotate-10",
    },
    {
      title: "Learning",
      img: "/images/gallery.png",
      rotation: "-rotate-10",
    },
    {
      title: "Achievements",
      img: "/images/gallery.png",
      rotation: "rotate-10",
    },
    {
      title: "Achievements",
      img: "/images/gallery.png",
      rotation: "-rotate-10",
    },
    {
      title: "Research",
      img: "/images/gallery.png",
      rotation: " rotate-10",
    },
    {
      title: "Graduates",
      img: "/images/gallery1.png",
      rotation: "-rotate-10",
    },
  ];

  return (
    <section className="relative bg-[#7A60FF] py-8 md:py-20 px-5 md:px-0 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute -top-3 md:top-10 -left-2 md:left-10 ">
        <Image
          src="/images/b.png"
          alt="books"
          width={100}
          height={28}
          className="md:w-32 w-16 h-16 md:h-32  object-contain opacity-90"
        />
      </div>
      <div className="absolute top-12 md:top-10 right-0 md:right-10 ">
        <Image
          src="/images/cap.png"
          alt="graduation cap"
          width={100}
          height={24}
          className="md:w-32 w-16 h-16 md:h-32 object-contain rotate-23 opacity-70"
        />
      </div>

      {/* Header Text */}
      <div className="max-w-4xl mx-auto text-center text-white mb-8 md:mb-16">
        <h2 className="text-2xl md:text-5xl font-bold mb-4 tracking-tight">
          Discover{" "}
          <span className="relative inline-block">
            Our Campus Gallery
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 10"
              fill="none"
            >
              <path
                d="M1 8C50 2 250 2 299 8"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>
        <p className="text-sm md:text-lg opacity-90 max-w-2xl mx-auto">
          Explore moments from campus life, academic spaces, and student
          experiences that reflect the spirit, culture, and vibrancy of our
          university.
        </p>
      </div>

      {/* Polaroids Container */}
      <div className="flex justify-center items-center gap-4 md:gap-0 w-full mx-auto">
        {categories.map((item, index) => (
          <div
            key={index}
            className={`bg-white p-3 pb-8 shadow-xl rounded-xl transition-transform hover:scale-105 hover:z-10 ${item.rotation} `}
          >
            <div className=" overflow-hidden mb-4">
              <Image
                src={item.img}
                alt={item.title}
                width={200}
                height={100}
                className="w-full h-30 md:h-50 object-cover rounded-xl"
              />
            </div>
            <p className="text-center font-semibold text-black text-sm md:text-xl">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
