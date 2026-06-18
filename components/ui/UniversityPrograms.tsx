"use client";

import { useState } from "react";
import ProgramCard from "../../interfaces/programCard";
import { programs } from "@/constants/programe";
import { motion } from "framer-motion";
import { animations } from "../animations/animation";

export default function UniversityPrograms() {
  const [active, setActive] = useState("All");

  const filters = ["All", "Undergraduate", "Graduate", "PhD"];

  const filtered =
    active === "All"
      ? programs
      : programs.filter((item) => item.category === active);

  return (
    <motion.section className="max-w-330 mx-auto px-4 py-6 md:pt-16">
      {/* header */}
      <motion.div
        variants={animations.stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 mb-6 md:mb-12"
      >
        <motion.h2
          variants={animations.fadeUp}
          className="text-2xl md:text-4xl font-bold "
        >
          University Programs
        </motion.h2>

        {/* filter buttons */}
        <motion.div
          variants={animations.fadeUp}
          className="flex flex-wrap gap-2 md:gap-3"
        >
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
        </motion.div>
      </motion.div>

      {/* grid */}
      <motion.div
        variants={animations.stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-6 "
      >
        {filtered.map((program, index) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.16 }}
            viewport={{ once: true }}
          >
            <ProgramCard key={program.id} program={program} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
