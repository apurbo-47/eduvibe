"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { IconPlayerPlayFilled } from "@tabler/icons-react";

interface AnimatedCardProps {
  title: string;
  description: string;
  video: string;
  progress: MotionValue<number>;
  className?: string;
}

export default function AnimatedCard({
  title,
  description,
  video,
  progress,
  className = "",
}: AnimatedCardProps) {
  const overlayOpacity = useTransform(progress, [0, 1], [0.45, 0.2]);

  const textY = useTransform(progress, [0, 1], [50, 0]);

  const textOpacity = useTransform(progress, [0.15, 0.5], [0, 1]);

  const videoScale = useTransform(progress, [0, 1], [1.08, 1]);

  return (
    <div
      className={`relative h-full w-full overflow-hidden bg-black ${className}`}
    >
      {/* Video */}
      <motion.video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        style={{
          scale: videoScale,
        }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <motion.div
        style={{
          opacity: overlayOpacity,
        }}
        className="absolute inset-0 bg-black"
      />

      {/* Play Button */}
      <motion.button
        className="
    absolute left-1/2 top-1/2 z-20 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl transition-transform duration-300 hover:scale-110 "
      >
        <IconPlayerPlayFilled size={30} className="fill-black" />
      </motion.button>

      {/* Text */}
      <motion.div
        style={{
          y: textY,
          opacity: textOpacity,
        }}
        className="absolute inset-x-0 bottom-0 z-20 p-8 md:p-12 text-white"
      >
        <motion.h2 className="text-3xl font-bold md:text-5xl lg:text-6xl">
          {title}
        </motion.h2>
        <motion.p className="mt-5 max-w-2xl text-lg text-white/90">
          {description}
        </motion.p>
      </motion.div>
    </div>
  );
}
