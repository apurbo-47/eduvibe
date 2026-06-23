"use client";
import Image from "next/image";
import { useState } from "react";
import logo from "../../public/images/logo.png";

import {
  Icon24Hours,
  Icon360View,
  IconMessage,
  IconPlus,
  IconXFilled,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";

const Card = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="w-72 min-h-100 h-100 rounded-xl shadow-md p-4 flex flex-col bg-white "
          >
            <h2 className="font-bold text-xs">Organization UI Components</h2>
            <p className="text-neutral-600 mt-2 text-[10px]">
              Clerks UI components add turn-key simplicity to complex
              Organization management tasks.
            </p>
            <div className="flex items-center justify-center">
              <button
                onClick={() => setOpen(false)}
                className="flex items-center gap-1 text-xs mt-4 shadow-md rounded-lg px-2 py-1"
              >
                <Image
                  src={logo}
                  alt="logo"
                  width={50}
                  height={50}
                  className="h-4 w-4"
                />
                Aceternity
                <IconXFilled size={16} />
              </button>
            </div>
            <div className="bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 relative">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  filter: "blur(10px)",
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1.05,
                  filter: "blur(0px)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className="absolute inset-0 h-full w-full bg-white rounded-lg border border-neutral-200 divide-y divide-neutral-200"
              >
                <div className="flex gap-2 p-4">
                  <div className="h-8 w-8 shrink-0 bg-linear-to-br shadow-md bg-white rounded-md flex items-center justify-center">
                    <IconMessage className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[10px] font-bold text-neutral-600">
                      Organization UI Components
                    </p>
                    <p className="text-neutral-400 text-[10px] mt-1">
                      A Collection of UI Components
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 p-4">
                  <div className="h-8 w-8 shrink-0 bg-linear-to-br shadow-md bg-white rounded-md flex items-center justify-center">
                    <Icon24Hours className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[10px] font-bold text-neutral-600">
                      24 hours turnaround
                    </p>
                    <p className="text-neutral-400 text-[10px] mt-1">
                      Super fast delivary at wrap speed.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 p-4">
                  <div className="h-8 w-8 shrink-0 bg-linear-to-br shadow-md bg-white rounded-md flex items-center justify-center">
                    <Icon360View className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[10px] font-bold text-neutral-600">
                      360 days all around
                    </p>
                    <p className="text-neutral-400 text-[10px] mt-1">
                      Were here to help you 24/7
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4 items-center justify-center">
                  <div className="h-4 w-4 shrink-0 bg-linear-to-br shadow-md bg-white rounded-md flex items-center justify-center">
                    <IconPlus className="h-3 w-3 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[10px] font-bold text-neutral-600">
                      create Project
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
