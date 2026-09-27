"use client";

import { motion } from "framer-motion";

export default function Loader() {
  const text = "TEDxVSSUT";

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="flex justify-center overflow-hidden">
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.18,
                duration: 0.35,
                ease: "easeOut",
              }}
              className="text-5xl font-black text-white sm:text-6xl md:text-7xl"
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="mx-auto mt-5 h-[2px] max-w-xs bg-red-600"
        />
      </div>
    </div>
  );
}