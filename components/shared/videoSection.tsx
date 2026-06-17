"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { animations } from "../animations/animation";
import { BsPlayCircleFill } from "react-icons/bs";

export default function VideoCard() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

  return (
    <motion.div
      variants={animations.stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="max-w-330 mx-auto px-5 md:px-0 pt-10 md:pt-20 md:pb-20"
    >
      <motion.div
        variants={animations.fadeUp}
        className="relative overflow-hidden rounded-2xl bg-neutral-900 shadow-xl"
      >
        {/* Video */}
        <video
          ref={videoRef}
          className="w-full aspect-video object-cover"
          src="/images/thumbnail.png"
          poster="/images/thumbnail.png"
          controls={playing}
        />

        {/* Play Overlay */}
        {!playing && (
          <div
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/50 cursor-pointer transition hover:bg-black/60"
          >
            <div className=" md:text-4xl text-white backdrop-blur hover:scale-105 transition">
              <BsPlayCircleFill size={60} />
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
