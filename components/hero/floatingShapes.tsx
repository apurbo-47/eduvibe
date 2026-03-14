import Image from "next/image";

export default function FloatingShapes() {
  return (
    <>
      {/* Left green badge */}
      <div className="absolute left-100 md:left-3 lg:left-24 md:top-90 z-10">
        <Image src="/images/excelence.png" alt="btn" width={150} height={71} />
      </div>

      {/* Right purple badge */}
      <div className="absolute right-100 md:right-5 lg:right-24 md:top-45 z-10 ">
        <Image src="/images/innovation.png" alt="btn" width={150} height={71} />
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
          src="/images/cap.png"
          alt="scholarship"
          width={80}
          height={80}
          className="md:w-28 md:h-28 w-16 h-16 rotate-23 opacity-60"
        />
      </div>

      {/* Decorative blur */}
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full  blur-3xl"></div>
    </>
  );
}
