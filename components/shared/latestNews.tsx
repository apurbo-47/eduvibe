"use client";

import { newsData } from "@/constants/news.constant";
import { useState } from "react";
import BlogCard from "../cards/BlogCard";
import { motion } from "framer-motion";
import { animations } from "../animations/animation";

export default function LatestNews() {
  const [search, setSearch] = useState("");

  //   filtered news items
  const filtered = newsData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <motion.section className="w-full max-w-7xl mx-auto bg-white py-6 md:py-16 px-5 ">
      {/* Header */}
      <motion.div
        variants={animations.fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between mb-5 md:mb-10 gap-4"
      >
        <h2 className="text-2xl md:text-4xl font-semibold">
          Latest News & Blogs
        </h2>

        <input
          type="text"
          placeholder="Search blogs & articles"
          className="bg-[#E9E9F5] px-5 py-2 rounded-full outline-none text-sm w-full md:w-65"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={animations.stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8"
      >
        {filtered.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <BlogCard key={item.id} data={item} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
