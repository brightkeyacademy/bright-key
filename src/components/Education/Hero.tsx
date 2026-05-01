"use client";

import { motion, Variants } from "framer-motion"; // Added 'Variants' import
import { ArrowRight, Globe, PlaneTakeoff, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AcademyHero() {
  // Added strict Variants type and cast the ease array
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 1] as [number, number, number, number], // Strict 4-value array cast
      },
    }),
  };

  return (
    // FIX: Removed 'py-8' which was conflicting. Changed mobile pt to 'pt-36' for better gap. Desktop kept exactly as 'md:pt-40'.
    <section className="relative w-full min-h-[100dvh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#fafcff] pt-36 pb-16 md:pt-40 md:pb-24"> 
      {/* Soft Animated Background Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-100/60 rounded-full blur-[80px] md:blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-cyan-50/60 rounded-full blur-[80px] md:blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10 w-full">
        {/* MOBILE FIX: Removed 'order-x' classes. 
          By default (mobile), Text is first, Image is second.
          On lg screens (desktop), it automatically splits into 2 columns.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          
          {/* ===================== TEXT COLUMN (Top on Mobile, Left on Desktop) ===================== */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-20">
            
            {/* Animated Badge */}
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

            {/* Main Heading (Responsive sizing) */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-[4rem] font-extrabold tracking-tight text-slate-900 mb-5 sm:mb-6 leading-[1.15] sm:leading-[1.15]"
            >
              Take Your Next Step. <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                In South Korea.
              </span>
            </motion.h1>

            {/* Subtitle */}
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
              // Mobile wala w-full deela CTA eke wage size eka haduwa. sm:w-auto nisa desktop wenas wenne na.
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto px-2 sm:px-0"
            >
              <button className="group w-full sm:w-auto px-7 sm:px-7 py-4 sm:py-3.5 bg-slate-900 text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all duration-300 active:scale-95 shadow-lg shadow-slate-900/20 text-[15px] sm:text-sm">
                Explore Universities
                <Globe className="w-[18px] h-[18px] sm:w-4 sm:h-4 group-hover:rotate-12 transition-transform" />
              </button>
              
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="group w-full sm:w-auto px-7 sm:px-7 py-4 sm:py-3.5 bg-white text-slate-800 border border-slate-200 rounded-full font-bold flex items-center justify-center gap-2 hover:border-blue-300 hover:text-blue-600 hover:bg-slate-50 transition-all duration-300 active:scale-95 shadow-sm text-[15px] sm:text-sm">
                  Talk to an Advisor
                  <ArrowRight className="w-[18px] h-[18px] sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </div>

          {/* ===================== IMAGE COLLAGE (Desktop Layout Unchanged) ===================== */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative w-full h-[350px] sm:h-[450px] lg:h-[600px] flex items-center justify-center z-10"
          >
            {/* Main Big Image (Background) */}
            <div className="absolute right-0 lg:right-0 w-[90%] lg:w-[85%] h-[100%] lg:h-[90%] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
              <div className="absolute inset-0 bg-blue-900/10 z-10 mix-blend-overlay"></div>
              {/* Main Photo (Students/Korean Campus) */}
              <Image 
                src="/education/hero-1.jpg" 
                alt="Students in South Korea" 
                fill 
                className="object-cover"
                priority
              />
            </div>

            {/* Smaller Overlapping Image (Bottom Left) */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 bottom-[5%] lg:bottom-[10%] w-[50%] lg:w-[30%] h-[30%] rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-xl border-4 border-white z-20 hidden sm:block"
            >
              <Image 
                src="/education/logoedu.png" 
                alt="Korean Campus" 
                fill 
                className="object-cover"
              />
            </motion.div>

            {/* Floating Glass Card - Success Rate */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[5%] lg:top-[15%] left-[0%] lg:left-[5%] z-30 bg-white/95 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-xl border border-white flex items-center gap-2 sm:gap-3"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="text-left">
                <p className="text-[10px] sm:text-xs font-extrabold text-slate-900">100% Guaranteed</p>
                <p className="text-[8px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider">Visa Success</p>
              </div>
            </motion.div>

            {/* Floating Glass Card - Flight/Travel */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-[10%] lg:bottom-[25%] right-[-2%] lg:right-[-5%] z-30 bg-white/95 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-3 rounded-2xl shadow-xl border border-white flex items-center gap-2 sm:gap-3"
            >
              <div className="text-right hidden sm:block">
                <p className="text-[10px] sm:text-xs font-extrabold text-slate-900">Direct Flights</p>
                <p className="text-[8px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider">To Seoul</p>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <PlaneTakeoff className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}