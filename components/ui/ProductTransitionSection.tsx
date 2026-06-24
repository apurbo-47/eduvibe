"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function ProductFlightSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /**
   * Desktop Animation
   *
   * Right Hero
   * ↓
   * Left Feature Area
   */

  const xRaw = useTransform(scrollYProgress, [0.15, 0.55], [0, -560]);

  const yRaw = useTransform(scrollYProgress, [0.15, 0.55], [0, 720]);

  const scaleRaw = useTransform(scrollYProgress, [0.15, 0.55], [1, 0.62]);

  const radiusRaw = useTransform(scrollYProgress, [0.15, 0.55], [28, 42]);

  const rotateYRaw = useTransform(
    scrollYProgress,
    [0.15, 0.3, 0.55],
    [0, -45, 0],
  );

  const rotateZRaw = useTransform(
    scrollYProgress,
    [0.15, 0.55, 0.7],
    [0, 0, 0],
  );

  const shadowRaw = useTransform(
    scrollYProgress,
    [0.15, 0.4, 0.65],
    [
      "0 40px 100px rgba(0,0,0,0.15)",
      "0 70px 140px rgba(0,0,0,0.35)",
      "0 30px 80px rgba(0,0,0,0.2)",
    ],
  );

  const x = useSpring(xRaw, {
    stiffness: 120,
    damping: 22,
  });

  const y = useSpring(yRaw, {
    stiffness: 120,
    damping: 22,
  });

  const scale = useSpring(scaleRaw, {
    stiffness: 120,
    damping: 22,
  });

  const rotateY = useSpring(rotateYRaw, {
    stiffness: 120,
    damping: 22,
  });

  const rotateZ = useSpring(rotateZRaw, {
    stiffness: 120,
    damping: 22,
  });

  return (
    <div
      ref={containerRef}
      className="relative max-w-330 mx-auto border border-gray-200 rounded-3xl bg-black text-white mb-20"
      style={{
        perspective: "2500px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* DESKTOP FLOATING CARD */}

      <motion.div
        style={{
          x,
          y,
          scale,
          borderRadius: radiusRaw,
          rotateY,
          rotateZ,
          boxShadow: shadowRaw,
          transformOrigin: "left center",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
        className=" pointer-events-none absolute right-[8%] top-[14vh] z-50 hidden h-120 w-105 overflow-hidden border border-zinc-200 bg-white shadow-[0_40px_100px_rgba(0,0,0,0.15)] lg:block
        "
      >
        <Image
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
          alt="Product"
          fill
          priority
          className="w-full h-full object-cover "
        />
      </motion.div>

      {/* ================================================= */}
      {/* SECTION 1 */}
      {/* ================================================= */}

      <section className="relative min-h-screen overflow-hidden">
        <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-12">
          <div className="grid w-full gap-20 lg:grid-cols-2">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <span className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                Premium Product
              </span>

              <h1 className="mb-6 text-5xl font-bold leading-tight text-white lg:text-7xl">
                Designed For Modern Teams
              </h1>

              <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-400">
                A beautifully crafted product experience that transitions
                naturally through your story as users scroll.
              </p>

              <div className="mb-10">
                <span className="text-5xl font-bold text-blue-600">$299</span>
              </div>

              <div className="flex gap-4">
                <button className="rounded-full bg-white px-8 py-4 text-blue-600">
                  Buy Now
                </button>

                <button className="rounded-full border px-8 py-4 text-white">
                  Learn More
                </button>
              </div>
            </div>

            {/* Desktop Placeholder */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="h-130 w-105" />
            </div>

            {/* Mobile Image */}
            <div className="lg:hidden">
              <div className="sticky top-24 overflow-hidden rounded-3xl border bg-white shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
                  alt="Product"
                  width={900}
                  height={1000}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* SECTION 2 */}
      {/* ================================================= */}

      <section className="relative min-h-screen bg-black rounded-3xl text-white">
        <div className="mx-auto flex min-h-screen  max-w-7xl items-center px-6 py-20 lg:px-12">
          <div className="grid w-full gap-20 lg:grid-cols-2">
            {/* Landing Area */}
            <div className="flex items-center">
              <div className=" relative w-full  rounded-[42px] border border-white bg-white/5 p-4">
                <div className="aspect-4/5 rounded-4xl border  border-zinc-200 ">
                  <Image
                    src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop"
                    alt="Product"
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover rounded-4xl "
                  />
                </div>

                <p className="mt-4 text-sm text-white">
                  Product lands here after transition
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-col justify-center">
              <span className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                Deep Dive
              </span>

              <h2 className="mb-8 text-4xl font-bold lg:text-6xl">
                Built To Scale
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Performance",
                    text: "Optimized rendering and buttery smooth motion.",
                  },
                  {
                    title: "Interaction",
                    text: "Natural transitions that feel connected.",
                  },
                  {
                    title: "Responsive",
                    text: "Graceful fallback experience on mobile devices.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6"
                  >
                    <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>

                    <p className="text-zinc-400">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
