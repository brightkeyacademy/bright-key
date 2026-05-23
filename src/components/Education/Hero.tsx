"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AcademyHero() {
  const [isHovered, setIsHovered] = useState(false);

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section 
      className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ===================== BACKGROUND VIDEO & OVERLAY ===================== */}
      <div className="absolute inset-0 w-full h-full z-0 transform-gpu">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="object-cover w-full h-full opacity-90"
        >
          {/* Note: Place your video file in the public folder e.g. public/hero-video.mp4 */}
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Interactive Dark Overlay: Medium dark normally, darker on hover. No blur! */}
        <div 
          className={`absolute inset-0 transition-colors duration-1000 ease-in-out z-10 ${
            isHovered ? 'bg-black/75' : 'bg-black/45'
          }`} 
        />
        
        {/* Gradient Top & Bottom for smooth blending */}
        <div className="absolute inset-x-0 top-0 h-24 sm:h-32 bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />
      </div>

      {/* ===================== CENTERED TEXT CONTENT ===================== */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 relative z-20 w-full pt-16 sm:pt-20">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white text-slate-900 font-bold text-[11px] sm:text-xs md:text-sm mb-6 sm:mb-8 shadow-xl transition-colors duration-300 hover:bg-slate-100 transform-gpu"
          >
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-blue-500"></span>
            </span>
            2026 Intakes Are Now Open
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight text-white mb-4 sm:mb-6 leading-[1.15] drop-shadow-lg transform-gpu"
          >
            Take Your Next Step. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 filter drop-shadow-sm">
              In South Korea.
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 mb-8 sm:mb-10 max-w-[90%] sm:max-w-2xl leading-relaxed font-light drop-shadow-md transform-gpu"
          >
            We help you find the right university, secure your visa, and start your journey abroad. No complications, just clear guidance from start to finish.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0 transform-gpu"
          >
            <button className="group w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-blue-600 text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 active:scale-95 text-sm sm:text-[15px]">
              Explore Universities
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
            </button>
            
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="group w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-slate-900 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-slate-100 transition-all duration-300 active:scale-95 shadow-lg text-sm sm:text-[15px]">
                Talk to an Advisor
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}