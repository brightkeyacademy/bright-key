"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // Thathpara 2.5kin loading eka iwara wenawa kiyala kiyanna
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-blue-600"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 0.8, delay: 2.5, ease: "easeInOut" }}
    >
      <div className="text-center overflow-hidden">
        {/* Company Name Reveal */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white tracking-widest uppercase"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Bright Key
        </motion.h1>
        
        {/* Loading Line Animation */}
        <motion.div
          className="h-1 bg-white mt-4 mx-auto"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}