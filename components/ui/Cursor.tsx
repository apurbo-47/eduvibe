"use client";

import { useEffect, useState } from "react";

export default function CustomCursor({ active }: { active: boolean }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!active) return null;

  return (
    <div
      className="fixed w-4 h-4 rounded-full pointer-events-none z-9999"
      style={{
        left: mouse.x,
        top: mouse.y,
        transform: "translate(-50%, -50%)",
        background: "linear-gradient(135deg, #00f5ff, #7b61ff, #ff4fd8)",
      }}
    />
  );
}
