"use client";

import { useState } from "react";
import ProgramCard from "../../interfaces/programCard";
import { programs } from "@/constants/programe";

export default function UniversityPrograms() {
  const [active, setActive] = useState("All");

  const filters = ["All", "Undergraduate", "Graduate", "PhD"];

  const filtered =
    active === "All"
      ? programs
      : programs.filter((item) => item.category === active);

  return (
    <section className="max-w-7xl mx-auto px-4 py-6 md:pt-16">
      {/* header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 mb-6 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-bold ">University Programs</h2>

        {/* filter buttons */}
        <div className="flex flex-wrap gap-2 md:gap-3">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-3 md:px-5 py-2 text-sm rounded-full cursor-pointer transition
              
              ${
                active === item
                  ? "bg-linear-to-r from-[#7C5CFC] to-[#5B3DF5] text-white shadow"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }
              
              `}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-6 ">
        {filtered.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </section>
  );
}
