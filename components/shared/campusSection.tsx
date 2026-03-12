import Image from "next/image";

export default function CampusSection() {
  return (
    <section className="relative w-full bg-[#F3F4F8] pt-26 md:pt-32 pb-8 md:pb-20 px-5 lg:px-20 overflow-hidden">
      {/* Decorative book icons */}
      <Image
        src="/images/diary.png"
        width={70}
        height={70}
        alt="icon"
        className="w-13 h-13 md:w-20 md:h-20 absolute top-24 left-2.5 md:top-24 md:left-130 "
      />

      <Image
        src="/images/diary.png"
        width={70}
        height={70}
        alt="icon"
        className="w-12 h-12 md:w-20 md:h-20 absolute -bottom-5  left-20 object-cover "
      />

      <Image
        src="/images/cap.png"
        width={70}
        height={70}
        alt="icon"
        className="w-16 h-16 md:w-32 md:h-32 absolute opacity-70 top-24 right-5 md:top-32 md:right-10 object-cover rotate-23 "
      />

      {/* grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(#d6d6f0_1px,transparent_1px),linear-gradient(90deg,#d6d6f0_1px,transparent_1px)] bg-size-[40px_40px] opacity-40"></div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 md:gap-8 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-lg md:text-2xl font-bold mb-2.5 md:mb-8 text-center md:text-start">
            Campus
          </p>

          <h2 className="text-[28px] lg:text-5xl font-bold leading-tight text-center md:text-start mb-2.5 md:mb-5">
            A Campus Built for Learning
          </h2>

          <p className=" max-w-lg mb-5 md:mb-8 text-center md:text-start">
            Our campus is thoughtfully designed to support academic excellence
            and student success. With modern facilities, collaborative spaces,
            and a vibrant learning environment, students are encouraged to
            explore, innovate, and grow.
          </p>

          {/* bottom small card + circle */}
          <div className="flex items-center gap-2 md:gap-10 ">
            <div className="relative w-50 h-35 md:w-70 md:h-50 rounded-xl overflow-hidden">
              <Image
                src="/images/study.png"
                alt="student"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-35 h-35 md:w-50 md:h-50 rounded-xl overflow-hidden">
              <Image
                src="/images/circle.png"
                alt="student"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="flex gap-2.5 md:gap-6 justify-center items-end lg:justify-end ">
          {/* big image */}
          <div className="relative w-47 md:w-full h-47 md:h-120 rounded-2xl overflow-hidden">
            <Image
              src="/images/walking.png"
              alt="student walking"
              fill
              className="object-cover"
            />
          </div>

          {/* small image */}
          <div className="relative w-47 md:w-80 h-47 md:h-68 rounded-2xl overflow-hidden mt-4 ">
            <Image
              src="/images/reading.png"
              alt="student reading"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
