import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-5 md:px-0 py-8 md:py-10">
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-[#8770FA] to-[#5F51A8]">
        {/* grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[40px_40px]" />

        {/* floating shapes */}
        <Image
          src="/images/scholarship.png"
          alt="cap"
          width={70}
          height={70}
          className="absolute w-28 h-24 -top-8 left-36 md:left-125 -rotate-12"
        />
        <Image
          src="/images/book.png"
          alt="book"
          width={60}
          height={60}
          className="absolute  w-32 h-28  -bottom-8 rotate-14 right-5 md:right-60 "
        />

        <div className="relative z-10 grid md:grid-cols-2 gap-6 items-center p-6 md:p-0">
          {/* left image */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/student.png"
              alt="Students"
              width={420}
              height={420}
              className="w-full h-full"
            />
          </div>

          {/* right content */}
          <div className="text-white space-y-5">
            <div className="flex items-center gap-2 font-semibold text-2xl md:text-4xl">
              <Image
                src="/images/logowhite.png"
                alt="logo"
                width={40}
                height={40}
              />
              Eduvibe
            </div>

            <h1 className="text-2xl md:text-4xl font-bold leading-snug">
              Start Your Academic Journey <br />
              With Confidence at Our <br />
              University
            </h1>

            <button className="inline-flex items-center gap-2 cursor-pointer bg-white text-[#713CE9] px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
              Apply Now
              <span className="bg-[#6A5AE0] text-white w-6 h-6 rounded-full flex items-center justify-center">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
