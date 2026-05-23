"use client";

import { motion, Variants } from "framer-motion";
import { Compass, ArrowRight, ShieldCheck, MapPin, Navigation } from "lucide-react";
import Link from "next/link";

export default function AcademyAbout() {
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
    <section className="relative w-full py-20 md:py-28 bg-white overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-cyan-50/40 rounded-full blur-[100px] translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* =========================================================
            2-COLUMN SPLIT LAYOUT
            ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* ===================== LEFT COLUMN: Text Content ===================== */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-1">
            
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-blue-600 font-bold text-[10px] sm:text-xs mb-6 shadow-sm uppercase tracking-widest"
            >
              <Compass className="w-3.5 h-3.5" />
              Who We Are
            </motion.div>

            {/* Powerful Heading */}
            <motion.h2
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.15]"
            >
              Unlock Your Future. <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                We Architect Success.
              </span>
            </motion.h2>

            <motion.p
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariants}
              className="text-sm sm:text-base text-slate-500 mb-10 leading-relaxed font-medium max-w-lg"
            >
              Bright Key Academy is Sri Lanka’s premier educational consultancy specializing in South Korean university placements. We eliminate the confusion of studying abroad, providing a transparent, end-to-end pathway for ambitious students.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariants}
            >
              <Link href="/contact" className="group inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full text-sm font-bold shadow-lg shadow-slate-900/20 hover:bg-blue-600 hover:shadow-blue-600/30 transition-all duration-300 active:scale-95">
                Start your journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* ===================== MAP SECTION (Right Column) ===================== */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center justify-center order-2 w-full mt-10 lg:mt-0 z-10"
          >
            <div className="relative w-full max-w-[500px] lg:max-w-[700px] mx-auto overflow-visible">
              
              {/* Map Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
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
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
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