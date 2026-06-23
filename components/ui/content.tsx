import * as motion from "framer-motion/client";
import React from "react";
import Card from "./card";

const Content = () => {
  return (
    <div className="h-full w-full bg-gray-200 mb-20 p-10">
      <div
        className="h-60 max-w-330  mx-auto  rounded-3xl bg-neutral-900 flex items-center justify-center mb-10 "
        style={{
          backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212.,0.2) 0.5px, transparent 0)`,
          backgroundSize: "8px 8px",
          backgroundRepeat: "repeat",
        }}
      >
        <motion.button
          whileHover={{
            rotateX: 25,
            rotateY: 10,
            boxShadow: "0px 20px 50px rgba(8,112,184,0.7)",
            y: -5,
          }}
          whileTap={{
            y: 0,
          }}
          initial={{}}
          animate={{}}
          exit={{}}
          style={{
            translateZ: 100,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="group relative text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]"
        >
          <span className="group-hover:text-cyan-500 transition-colors duration-300">
            {" "}
            Subscribe
          </span>
          <span className="absolute  group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-0.5 hover:h-1 w-3/4 hover:w-full mx-auto hover:blur-sm"></span>
        </motion.button>
      </div>

      <div className="flex items-center justify-center">
        <Card />
      </div>
    </div>
  );
};

export default Content;
