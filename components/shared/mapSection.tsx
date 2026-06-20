"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function MapSection() {
  const ref = useRef(null);
  const [interactive, setInteractive] = useState(false);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section ref={ref} className="w-full bg-white">
      <div className="relative w-full h-[500px] md:h-screen overflow-hidden shadow-lg">
        {isInView && (
          <>
            {!interactive && (
              <div
                onClick={() => setInteractive(true)}
                className="absolute inset-0 z-10 flex items-center justify-center bg-black/10 cursor-pointer"
              >
                <div className="rounded-lg bg-white px-4 py-2 shadow">
                  Click to interact with map
                </div>
              </div>
            )}

            <iframe
              src="https://www.google.com/maps?q=Chittagong,Bangladesh&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
            />
          </>
        )}
      </div>
    </section>
  );
}
