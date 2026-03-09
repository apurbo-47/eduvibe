import Image from "next/image";

export default function FloatingShapes() {
  return (
    <>
      {/* Left green badge */}
      <div className="absolute left-100 md:left-3 lg:left-24 md:top-90 z-10 rounded-full md:bg-[#00A991] px-4 py-2 text-xs font-semibold text-white shadow-md">
        Excellence
      </div>

      {/* Right purple badge */}
      <div className="absolute right-100 md:right-5 lg:right-24 md:top-50 z-10 rounded-full  md:bg-[#7A60FF] px-4 py-2 text-xs font-semibold text-white shadow-md">
        Innovation
      </div>

      {/* book badge */}
      <div className="absolute left-0 top-0 md:top-30 z-10">
        <Image
          src="/images/books.png"
          alt="book"
          width={20}
          height={20}
          className="md:w-24 md:h-24 w-8 h-8"
        />
      </div>

      {/* scholarship badge */}
      <div className="absolute right-2 lg:right-24 top-60 md:top-85 z-10">
        <Image
          src="/images/scholarship.png"
          alt="scholarship"
          width={80}
          height={80}
          className="md:w-24 md:h-24 w-16 h-16"
        />
      </div>

      {/* Decorative blur */}
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full  blur-3xl"></div>
    </>
  );
}
