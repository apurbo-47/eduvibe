"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import { FaUser } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { animations } from "@/components/animations/animation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Program", href: "/program" },
  { name: "Campus", href: "/campus" },
  { name: "Blogs", href: "/blogs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.header
      variants={animations.stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="overflow-x-hidden"
    >
      <motion.div
        variants={animations.fadeDown}
        className="fixed top-5 md:left-1/2 md:-translate-x-1/2 z-50 w-[calc(100%-20px)]  bg-white shadow-lg rounded-[55px] "
      >
        <div className="p-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1.5">
              <Image src={logo} alt="logo" className="object-cover" />
              <span className="text-xl md:text-4xl font-bold">Eduvibe</span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-lg font-medium transition ${
                      isActive
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button className="h-9 w-9 rounded-full border flex items-center justify-center">
                <FaUser />
              </button>
              <Link
                href="/contact"
                className="rounded-[54px] cursor-pointer bg-[#7A60FF] px-5 py-4 text-sm text-white hover:bg-indigo-700"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden border-t bg-white">
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 hover:text-indigo-600"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="rounded-full bg-indigo-600 py-2 text-white text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </motion.div>
    </motion.header>
  );
}
