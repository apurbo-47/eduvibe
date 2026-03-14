import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="w-full bg-[#F4F6FB] pt-30 md:pt-40 pb-8 md:pb-12 px-4 md:px-10 lg:px-20 bg-grid">
      <div className="max-w-7xl mx-auto">
        {/* Text (mobile top) */}
        <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0 mb-10 lg:mb-0 lg:hidden">
          <p className="text-sm font-bold  mb-2.5">About Us</p>

          <h2 className="text-2xl font-bold  leading-tight">
            Our Commitment to <br />
            <span className="relative inline-block">
              Excellence
              <span>
                <Image
                  src="/images/Vector4.png"
                  alt="line"
                  width={300}
                  height={3}
                  className="w-37 md:w-60"
                />
              </span>
            </span>
          </h2>

          <p className="text-sm text-gray-500 mt-2.5">
            We are a forward-thinking university committed to academic
            excellence, innovation, and student success. Through quality
            education, research, and a supportive learning environment, we
            prepare students to lead and succeed in a global future.
          </p>
        </div>

        <div className="absolute top-20 right-5 md:top-50 md:right-10 rotate-23  hidden md:block">
          <Image
            src="/images/cap.png"
            alt="graduation cap"
            width={100}
            height={24}
            className="w-28 h-28 object-contain opacity-70"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-2.5 md:gap-10 items-center">
          {/* Left Image */}
          <div className="w-full">
            <div className="relative w-full h-75 md:h-140 rounded-2xl overflow-hidden">
              <Image
                src="/images/about1.png"
                alt="students"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-6">
            {/* Text (desktop) */}
            <div className="hidden lg:block">
              <p className="text-2xl font-bold mb-2.5">About Us</p>

              <h2 className="text-5xl font-bold  leading-tight">
                Our Commitment <br />
                <span className="relative inline-block">
                  to Excellence
                  <span>
                    <Image
                      src="/images/Vector4.png"
                      alt="line"
                      width={300}
                      height={5}
                      className="w-37 md:w-80"
                    />
                  </span>
                </span>
              </h2>

              <p className="text-[15px] text-[#4C4C4C] mt-10 max-w-xl">
                We are a forward-thinking university committed to academic
                excellence, innovation, and student success. Through quality
                education, research, and a supportive learning environment, we
                prepare students to lead and succeed in a global future.
              </p>
            </div>

            {/* Small Images */}
            <div className="grid grid-cols-2 gap-2.5 md:gap-4">
              <div className="relative h-40 md:h-50 rounded-2xl overflow-hidden">
                <Image
                  src="/images/img2.png"
                  alt="student reading"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-40 md:h-50 rounded-2xl overflow-hidden">
                <Image
                  src="/images/about3.png"
                  alt="graduation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
