"use client";

import Image from "next/image";
import { MotionValue, motion } from "framer-motion";
import bookImage from "@/assets/images/book.jpg";

interface Props {
  x: MotionValue<number>;
  y: MotionValue<number>;
  scale: MotionValue<number>;
  rotateY: MotionValue<number>;
  rotateZ: MotionValue<number>;
}

export default function FloatingBook({ x, y, scale, rotateY, rotateZ }: Props) {
  return (
    <motion.div
      style={{
        x,
        y,
        scale,
        rotateY,
        rotateZ,
        transformOrigin: "left center",
        transformStyle: "preserve-3d",
      }}
      className="
        absolute
        right-[8%]
        top-[12vh]
        z-[100]
        hidden
        lg:block
      "
    >
      <div className="relative h-[650px] w-[520px]">
        {/* Spine */}

        <div
          className="
            absolute
            left-0
            top-0
            h-full
            w-[20px]
            rounded-l-[30px]
            bg-zinc-800
          "
        />

        {/* Front */}

        <div
          className="
            absolute
            inset-0
            overflow-hidden
            rounded-[30px]
            bg-white
            shadow-[0_80px_200px_rgba(0,0,0,.45)]
          "
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <Image
            src={bookImage}
            alt="Book"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Back */}

        <div
          className="
            absolute
            inset-0
            rounded-[30px]
            border
            border-white/10
            bg-zinc-900
          "
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="flex h-full items-center justify-center">
            <h3 className="text-4xl font-bold">Features</h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
