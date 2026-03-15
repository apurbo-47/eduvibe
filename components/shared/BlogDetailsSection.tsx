"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TOCItem {
  title: string;
  href: string;
}

const tocItems: TOCItem[] = [
  {
    title: "How Smart Classrooms Are Transforming Student Learning",
    href: "#item1",
  },
  {
    title: "How Smart Classrooms Are Transforming Student Learning",
    href: "#item2",
  },
  {
    title: "How Smart Classrooms Are Transforming Student Learning",
    href: "#item3",
  },
  {
    title: "How Smart Classrooms Are Transforming Student Learning",
    href: "#item4",
  },
  {
    title: "How Smart Classrooms Are Transforming Student Learning",
    href: "#item5",
  },
  {
    title: "How Smart Classrooms Are Transforming Student Learning",
    href: "#item6",
  },
];

const BlogDetailsSection = () => {
  return (
    <div className="w-full max-w-7xl  mx-auto px-4 py-6 md:py-16 grid lg:grid-cols-4 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-3 space-y-3 md:space-y-6">
        {/* Banner Image */}
        <div className="w-full h-50 md:h-90 relative rounded-xl overflow-hidden">
          <Image
            src="/images/built.png" // Replace with your image path
            alt="Campus"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Blog Title */}
        <h1 className="text-xl md:text-3xl font-bold">
          A Campus Built for Learning: The Eduvibe University Experience
        </h1>

        <p className="text-gray-600 text-xs md:text-base">
          Education is more than classrooms and textbooks—it is about creating
          an environment where ideas grow, innovation thrives, and students feel
          inspired to achieve their goals. At Eduvibe University, the campus has
          been thoughtfully designed to support academic excellence, creativity,
          and personal growth.
        </p>

        {/* Section Image */}
        <div className="w-full h-50 md:h-90 relative rounded-xl overflow-hidden">
          <Image
            src="/images/vision2.png" // Replace with your image path
            alt="Students Learning"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Another Section */}
        <h2 className="text-xl md:text-3xl font-semibold">
          A Learning Environment That Inspires
        </h2>
        <p className="text-gray-600 text-xs md:text-base">
          Eduvibe University offers a modern and welcoming campus equipped with
          advanced classrooms, research labs, and collaborative learning spaces.
          Every corner of the campus is built to encourage curiosity,
          discussion, and hands-on learning, allowing students to engage deeply
          with their studies.
        </p>

        {/* Banner Image */}
        <div className="w-full h-50 md:h-90 relative rounded-xl overflow-hidden">
          <Image
            src="/images/built.png" // Replace with your image path
            alt="Campus"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Blog Title */}
        <h1 className="text-xl md:text-3xl font-bold">
          Innovation at the Heart of Campus Life
        </h1>

        <p className="text-gray-600 text-xs md:text-base">
          Innovation is a key part of the Eduvibe experience. From
          technology-enabled lecture halls to creative hubs and research
          centers, students are given opportunities to explore new ideas and
          turn them into real-world solutions. The university promotes a culture
          where learning goes beyond theory and into practical application.
        </p>

        {/* Banner Image */}
        <div className="w-full h-50 md:h-90 relative rounded-xl overflow-hidden">
          <Image
            src="/images/news6.png" // Replace with your image path
            alt="Campus"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Blog Title */}
        <h1 className="text-xl md:text-3xl font-bold">Beyond the Classroom</h1>

        <p className="text-gray-600 text-xs md:text-base">
          Campus life at Eduvibe extends beyond academics. Open spaces, student
          activities, and collaborative zones allow learners to connect, share
          ideas, and develop leadership and communication skills—preparing them
          for success in both their careers and personal lives.
        </p>
      </div>

      {/* Table of Content */}
      <aside className="hidden lg:block lg:col-span-1 sticky top-20 space-y-4">
        <h3 className="font-semibold text-lg">Table Of Content</h3>
        <ul className="space-y-2">
          {tocItems.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.href}
                className="text-blue-600 hover:underline text-sm block"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Share Section */}
        <div className="mt-8 space-y-2">
          <h4 className="font-semibold">Share This Article</h4>
          <div className="flex space-x-3">
            <Link
              href="#"
              className="p-2 rounded-full border border-black hover:bg-black hover:text-white"
            >
              <Youtube size={24} />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-full border border-black hover:bg-black hover:text-white"
            >
              <Instagram size={24} />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-full border border-black hover:bg-black hover:text-white"
            >
              <Facebook size={24} />
            </Link>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-6 p-4 bg-[#7A60FF] rounded-lg text-white">
          <p className="mb-2 font-semibold text-white">
            Stay Updated With School News!
          </p>
          <p className="text-white text-sm mb-2">
            Receive school updates, events, announcements, and important notices
            directly in your inbox.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 rounded-lg text-white"
          />
          <button className="mt-2 w-full bg-white text-[#7A60FF] p-2 rounded-lg hover:bg-purple-800">
            Subscribe
          </button>
        </div>
      </aside>
    </div>
  );
};

export default BlogDetailsSection;
