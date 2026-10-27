"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import AnimatedCard from "../AnimatedCard";

interface StickyVideoCardProps {
  title: string;
  description: string;
  video: string;
}

export default function StickyVideoCard({
  title,
  description,
  video,
}: StickyVideoCardProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  });

  // Animation
  const animationProgress = useTransform(smoothProgress, [0, 0.7], [0, 1]);

  const width = useTransform(animationProgress, [0, 0.7], ["50%", "100%"]);

  const height = useTransform(smoothProgress, [0, 0.7], ["90px", "100vh"]);

  const borderRadius = useTransform(smoothProgress, [0, 0.7], [36, 0]);

  return (
    <section ref={sectionRef} className="relative h-[220vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-6">
        <motion.div
          style={{
            width,
            height,
            borderRadius,
            willChange: "width,height,border-radius",
          }}
          className="overflow-hidden bg-black shadow-2xl"
        >
          <AnimatedCard
            title={title}
            description={description}
            video={video}
            progress={smoothProgress}
            className="h-full w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
