import Image from "next/image";

export default function Section1() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-6 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-14 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <button className="md:mb-6 mb-4 rounded-full border border-black bg-[#F6F4FFB2] px-4 py-1 text-sm md:text-lg hover:bg-black hover:text-white">
            Know About us
          </button>

          {/* Heading */}
          <h1 className="mx-auto max-w-4xl text-2xl font-bold leading-tight text-[#111827] md:text-4xl">
            A University{" "}
            <span className="relative inline-block">
              Committed to
              <span>
                <Image
                  src="/Line1547.svg"
                  alt="line"
                  width={300}
                  height={5}
                  className="w-37 md:w-60"
                />
              </span>
            </span>
            <br />
            Excellence, Research, and Global Leadership
          </h1>

          {/* Description */}
          <p className="mt-4 md:mt-6 text-[#333333] md:text-lg text-sm max-w-xl">
            Our university is dedicated to providing transformation education,
            equipping students with the knowledge, skills, and experiences
            essential for lifelong success and global impact.
          </p>

          {/* Features */}
          <ul className="mt-4 md:mt-6 space-y-3 text-[#333333] md:text-lg text-sm">
            <li className="flex items-center gap-3">
              <span className="text-[#7A60FF]">✦</span> Education Award Achived
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#7A60FF]">✦</span> Access Lifetime any
              Device
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#7A60FF]">✦</span> No Credit Card Required
            </li>
          </ul>

          {/* Button */}
          <button className="mt-4 md:mt-8 rounded-full bg-[#7A60FF] cursor-pointer px-4 py-2 md:px-6 md:py-3 text-white font-medium hover:bg-purple-700 transition">
            Read Our Story
          </button>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="mb-4 md:mb-8 text-base md:text-2xl md:text-right">
            Experience Where Heritage Meets Innovation
          </p>

          {/* Image 1 */}
          <div className="overflow-hidden mb-4 rounded-xl flex justify-end">
            <Image
              src="/images/img1.png"
              alt="Students studying"
              width={400}
              height={300}
              className=" object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-2.5 md:gap-4">
            {/* Stats Card */}
            <div className=" rounded-xl bg-[#7A60FF] px-6 py-5 text-white">
              <div className="flex justify-center items-center mb-6 ">
                <Image
                  src="/images/student1.png"
                  alt=""
                  width={40}
                  height={40}
                  className="w-8 h-8 md:w-12 md:h-12 rounded-full"
                />
                <Image
                  src="/images/student1.png"
                  alt=""
                  width={40}
                  height={40}
                  className="w-8 h-8 md:w-12 md:h-12 rounded-full"
                />
                <Image
                  src="/images/student1.png"
                  alt=""
                  width={40}
                  height={40}
                  className="w-8 h-8 md:w-12 md:h-12 rounded-full"
                />
                <Image
                  src="/images/student1.png"
                  alt=""
                  width={40}
                  height={40}
                  className="w-8 h-8 md:w-12 md:h-12 rounded-full"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-4xl mb-2 text-center font-bold">
                  50K
                </h3>
                <p className="text-xs md:text-lg text-center">
                  Thousands of reviews from Student
                </p>
              </div>
            </div>
            {/* Image 2 */}
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/images/img2.png"
                alt="Library student"
                width={400}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
