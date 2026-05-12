"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Globe, ShieldCheck, MapPin, Navigation } from "lucide-react";
import Link from "next/link";

export default function AcademyHero() {
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
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

  // Fixed floatAnimation with explicit types for ease
  const floatAnimation = (delay: number) => ({
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const, // Added 'as const' to fix the string type error
      delay: delay
    }
  });

  return (
    <section className="relative w-full min-h-[100dvh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#fafcff] pt-36 pb-16 md:pt-40 md:pb-24"> 
      {/* Soft Animated Background Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-100/60 rounded-full blur-[80px] md:blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-cyan-50/60 rounded-full blur-[80px] md:blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          
          {/* ===================== TEXT COLUMN ===================== */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-20">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100 text-blue-600 font-bold text-xs sm:text-sm mb-6 shadow-sm"
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
              className="text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-[4rem] font-extrabold tracking-tight text-slate-900 mb-5 sm:mb-6 leading-[1.15]"
            >
              Take Your Next Step. <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                In South Korea.
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="text-sm sm:text-base md:text-lg text-slate-600 mb-8 sm:mb-10 max-w-lg leading-relaxed font-medium px-2 sm:px-0"
            >
              We help you find the right university, secure your visa, and start your journey abroad. No complications, just clear guidance from start to finish.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto px-2 sm:px-0"
            >
              <button className="group w-full sm:w-auto px-7 py-4 bg-slate-900 text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all duration-300 active:scale-95 shadow-lg text-[15px] sm:text-sm">
                Explore Universities
                <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </button>
              
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="group w-full sm:w-auto px-7 py-4 bg-white text-slate-800 border border-slate-200 rounded-full font-bold flex items-center justify-center gap-2 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 active:scale-95 shadow-sm text-[15px] sm:text-sm">
                  Talk to an Advisor
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </div>

          {/* ===================== MAP SECTION (Right Column) ===================== */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full flex items-center justify-center z-10"
          >
            <div className="relative w-full max-w-[500px] lg:max-w-[700px] mx-auto overflow-visible">
              
              {/* Map Image */}
              <img 
                src="/world-map.png" 
                alt="World Map" 
                className="w-full h-auto opacity-30 mix-blend-multiply pointer-events-none select-none transform-gpu" 
              />

              {/* Responsive SVG Path */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none z-10" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="flightGlow" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#2563eb" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <motion.path 
                  d="M 65 55 Q 72.5 40 80 50" 
                  fill="none" 
                  stroke="url(#flightGlow)" 
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>

              {/* Sri Lanka Icon */}
              <div className="absolute left-[65%] top-[55%] -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="absolute w-8 h-8 bg-blue-500/20 rounded-full animate-ping" />
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-lg bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>

              {/* South Korea Icon */}
              <div className="absolute left-[80%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="absolute w-8 h-8 bg-cyan-500/20 rounded-full animate-ping" />
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>

              {/* Floating Card 1 */}
              <motion.div 
                animate={floatAnimation(0)}
                className="absolute top-[0%] left-[0%] z-30 bg-white/90 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 transform-gpu will-change-transform"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-extrabold text-slate-900 leading-none">100% Success</p>
                  <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">Visa Guaranteed</p>
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div 
                animate={floatAnimation(0.5)}
                className="absolute bottom-[5%] right-[-5%] sm:right-[0%] z-30 bg-white/90 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 transform-gpu will-change-transform"
              >
                <div className="text-right">
                  <p className="text-xs font-extrabold text-slate-900 leading-none">Direct Route</p>
                  <p className="text-[9px] font-bold text-blue-600 uppercase tracking-widest mt-1">Top Universities</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Navigation className="w-4 h-4" />
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}