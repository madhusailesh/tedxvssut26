"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          <div className="text-center">
            {/* TEDxVSSUT */}
            <div className="flex justify-center overflow-hidden">
              {"TEDxVSSUT".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                  className="text-4xl font-black text-white sm:text-5xl md:text-7xl"
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Loading line */}
            <div className="mx-auto mt-6 h-[2px] w-48 overflow-hidden bg-white/10 sm:w-64">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="h-full w-full bg-red-600"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-5 text-[10px] uppercase tracking-[0.4em] text-white/40"
            >
              Dialectics of Discovery
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}