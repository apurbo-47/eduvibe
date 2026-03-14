"use client";

import { useRef, useState } from "react";

export default function VideoCard() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-5 pt-10 md:pt-20 md:pb-20">
      <div className="relative overflow-hidden rounded-2xl bg-neutral-900 shadow-xl">
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
            <div className="flex h-14 w-14 md:h-20 md:w-20 items-center justify-center rounded-full bg-[#7A60FF] md:text-4xl text-white backdrop-blur hover:scale-105 transition">
              ▶
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
