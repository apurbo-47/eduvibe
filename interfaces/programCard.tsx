import Image from "next/image";
import { Clock, BookOpen } from "lucide-react";

export default function ProgramCard({
  program,
}: {
  program: {
    image: string;
    badge: string;
    title: string;
    duration: string;
    credits: string;
  };
}) {
  return (
    <div className="group bg-[#F5F7FA] hover:bg-[#7A60FF] hover:text-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition duration-300 p-2.5 md:p-4 cursor-pointer">
      {/* image */}
      <div className="relative">
        <Image
          src={program.image}
          width={400}
          height={250}
          alt="program"
          className="w-full h-32 md:h-50 object-cover rounded-xl "
        />

        {/* badge */}
        <span className="absolute top-3 right-3 bg-[#713CE9] text-white group-hover:text-[#713CE9] group-hover:bg-white text-xs px-3 py-1 rounded-full">
          {program.badge}
        </span>
      </div>

      {/* content */}
      <div className=" mt-2 md:mt-4 space-y-2 md:space-y-2.5">
        <h3 className="text-xs md:text-lg font-semibold leading-snug text-black group-hover:text-white transition">
          {program.title}
        </h3>

        <p className="text-xs md:text-base text-[#4C4C4C] group-hover:text-white">
          Master statistics, machine learning, and big data to uncover insights.
        </p>

        {/* bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between md:pt-2">
          <div className="flex items-center gap-4 text-xs ">
            <div className="flex items-center gap-1">
              <Clock size={14} />
              {program.duration}
            </div>

            <div className="flex  items-center gap-1">
              <BookOpen size={14} />
              {program.credits}
            </div>
          </div>

          <button className="mt-3 md:mt-0 bg-[#7A60FF] text-white group-hover:text-[#7A60FF] group-hover:bg-white text-xs px-4 py-1.5 rounded-full hover:scale-105 transition">
            Apply →
          </button>
        </div>
      </div>
    </div>
  );
}
