"use client";

import { useScroll, useTransform, useSpring } from "framer-motion";

export function useBookFlight(
  containerRef: React.RefObject<HTMLDivElement | null>,
  travelX: number,
  travelY: number,
) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const xRaw = useTransform(
    scrollYProgress,
    [0.12, 0.4, 0.75],
    [0, travelX * 0.45, travelX * 0.9],
  );

  const yRaw = useTransform(
    scrollYProgress,
    [0.12, 0.4, 0.75],
    [0, travelY * 0.55, travelY],
  );

  const scaleRaw = useTransform(
    scrollYProgress,
    [0.12, 0.4, 0.75],
    [1, 1.06, 0.82],
  );

  const rotateYRaw = useTransform(
    scrollYProgress,
    [0.12, 0.35, 0.55, 0.75],
    [0, -35, -95, -160],
  );

  const rotateZRaw = useTransform(scrollYProgress, [0.12, 0.75], [0, -7]);

  const config = {
    stiffness: 95,
    damping: 24,
    mass: 0.9,
  };

  return {
    x: useSpring(xRaw, config),
    y: useSpring(yRaw, config),
    scale: useSpring(scaleRaw, config),
    rotateY: useSpring(rotateYRaw, config),
    rotateZ: useSpring(rotateZRaw, config),
  };
}
