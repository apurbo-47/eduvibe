import Link from "next/link";
import { Mail, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import * as motion from "framer-motion/client";
import { animations } from "@/components/animations/animation";

export default function Footer() {
  return (
    <footer className="relative w-full rounded-xl bg-linear-to-br from-black via-[#0f0f1a] to-[#1b1b3a] text-white overflow-hidden">
      {/* Grid overlay (subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]" />

      <motion.div
        variants={animations.stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative max-w-330 mx-auto px-6 pt-6 md:pt-20 pb-5"
      >
        {/* Big title */}
        <motion.h2
          variants={animations.fadeUp}
          className="text-xl md:text-4xl lg:text-7xl font-extrabold tracking-tight text-center mb-8 md:mb-16"
        >
          EDU<span className="text-[#7A60FF]">VIBE</span> UNIVERSITY USA
        </motion.h2>

        {/* Content */}
        <motion.div
          variants={animations.stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-10"
        >
          {/* Brand */}
          <motion.div
            variants={animations.fadeUp}
            className="col-span-2 space-y-4"
          >
            <div className="flex items-center gap-2 text-xl md:text-4xl font-semibold">
              <Image src={logo} alt="logo" />
              Eduvibe
            </div>

            <p className="text-sm text-gray-300  ">
              We are a trusted university committed to academic excellence and
              innovation. We empower students with knowledge, skills, and global
              perspectives for future success.
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Mail size={16} />
              <span>Eduvibeuniversity@gmail.com</span>
            </div>
          </motion.div>

          {/* Menu */}
          <motion.div variants={animations.fadeUp}>
            <h4 className="font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Program</Link>
              </li>
              <li>
                <Link href="#">Campus</Link>
              </li>
            </ul>
          </motion.div>

          {/* Resource */}
          <motion.div variants={animations.fadeUp}>
            <h4 className="font-semibold mb-4">Resource</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Our Programs</Link>
              </li>
              <li>
                <Link href="#">Stories Student</Link>
              </li>
              <li>
                <Link href="#">Campus Information</Link>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={animations.fadeUp}>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms of Service</Link>
              </li>
              <li>
                <Link href="#">Cookie Policy</Link>
              </li>
              <li>
                <Link href="#">Compliance</Link>
              </li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={animations.fadeUp}>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#">FAQs</Link>
              </li>
              <li>
                <Link href="#">Vision & Mission</Link>
              </li>
              <li>
                <Link href="#">Help Center</Link>
              </li>
              <li>
                <Link href="#">Gallery</Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={animations.stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="border-t border-white/14 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <motion.p
            variants={animations.fadeUp}
            className="text-xs text-gray-400"
          >
            © 2025 Eduvibe. All Rights Reserved
          </motion.p>

          {/* Social icons */}
          <motion.div variants={animations.fadeUp} className="flex gap-4">
            <Link
              href="#"
              className="p-2 rounded-full border border-white/20 hover:bg-white/10"
            >
              <Youtube size={16} />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-full border border-white/20 hover:bg-white/10"
            >
              <Instagram size={16} />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-full border border-white/20 hover:bg-white/10"
            >
              <Facebook size={16} />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-full border border-white/20 hover:bg-white/10"
            >
              <Linkedin size={16} />
            </Link>
          </motion.div>

          <motion.div
            variants={animations.fadeUp}
            className="flex gap-4 text-xs text-gray-400"
          >
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Refund Policy</Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
