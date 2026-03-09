"use client";

import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Mohan Maliq",
    class: "20",
    img: "/images/sr1.png",
    text: "his university has helped me grow academically and personally through quality education and supportive faculty",
  },
  {
    id: 2,
    name: "Mohan Maliq",
    class: "20",
    img: "/images/sr2.png",
    text: "This university has helped me grow academically  and personally through quality education.",
  },
  {
    id: 3,
    name: "Mohan Maliq",
    class: "20",
    img: "/images/sr3.png",
    text: "This university has helped me grow academically and personally through quality education.",
  },
  {
    id: 4,
    name: "Mohan Maliq",
    class: "20",
    img: "/images/sr4.png",
    text: "This university has helped me grow academically and personally through quality education.",
  },
  {
    id: 5,
    name: "Mohan Maliq",
    class: "20",
    img: "/images/sr5.png",
    text: "This university has helped me grow academically and personally through quality education.",
  },
];

const ReviewCard = ({ review }: { review: (typeof reviews)[0] }) => (
  <div className="flex items-center gap-4 bg-[#F5F7FA] backdrop-blur-md border border-[#F5F7FA] p-4 rounded-full md:max-w-7xl md:mx-auto ">
    <div className="relative w-15 h-15 md:w-30 md:h-30 ">
      <Image src={review.img} alt={review.name} fill className="rounded-full" />
    </div>
    <div>
      <p className="text-xs md:text-lg italic max-w-3xs md:max-w-xs text-[#333333]">
        {review.text}
      </p>
      <p className="text-sm md:text-lg font-bold">
        {review.name}{" "}
        <span className="text-sm md:text-lg font-bold ">
          | Class of {review.class}
        </span>
      </p>
    </div>
  </div>
);

export default function StudentReviews() {
  return (
    <section className="relative py-8 md:py-20  overflow-hidden ">
      <div className="absolute -top-5 left-0  hidden md:block">
        <Image
          src="/images/Group1707480895.png"
          alt="books"
          width={28}
          height={28}
          className="w-40 h-50 object-contain "
        />
      </div>
      <div className="absolute top-16  right-10  hidden md:block">
        <Image
          src="/images/colon1.png"
          alt="graduation cap"
          width={24}
          height={24}
          className="w-20 h-20 md:w-45 md:h-32 object-contain"
        />
      </div>

      <div className="text-center max-w-2xl mx-auto mb-6 md:mb-13">
        <h1 className="text-2xl md:text-5xl font-bold mb-5">
          Wh
          <span className="relative inline-block">
            ats our student
            <span>
              <Image
                src="/Line1547.svg"
                alt="line"
                width={300}
                height={5}
                className="w-40 md:w-85"
              />
            </span>
          </span>
          {""} says
        </h1>
        <p className="text-sm md:text-lg text-[#333333]">
          Hear directly from our students as they share their experiences,
          achievements, and journey within our vibrant academic community
        </p>
      </div>

      {/* Global keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="flex flex-col gap-6">
        <div
          className="flex w-max gap-6"
          style={{ animation: "marquee 60s linear infinite" }}
        >
          {[...reviews, ...reviews].map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>

        <div
          className="flex w-max  gap-6"
          style={{ animation: "marqueeReverse 60s linear infinite" }}
        >
          {[...reviews, ...reviews].map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>

        <div
          className="flex w-max gap-6"
          style={{ animation: "marquee 60s linear infinite" }}
        >
          {[...reviews, ...reviews].map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
