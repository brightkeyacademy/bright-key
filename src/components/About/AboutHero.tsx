"use client";

import { motion, Variants } from "framer-motion"; // Added 'Variants' import
import { Globe, Building2, GraduationCap, ArrowDown } from "lucide-react";

export default function AboutHero() {
  // Added the strict 'Variants' type and cast the ease array
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: i * 0.15, 
        duration: 0.8, 
        ease: [0.2, 0.65, 0.3, 1] as [number, number, number, number] // Strict 4-value array cast
      }
    }),
  };

  return (
    <section className="relative w-full pt-38 pb-16 md:pt-42 md:pb-20 bg-[#fafcff] overflow-hidden flex justify-center z-20">
      
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-cyan-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 w-full text-center flex flex-col items-center">
        
        <motion.div
          custom={0} initial="hidden" animate="visible" variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-blue-600 font-bold text-[10px] sm:text-xs mb-6 shadow-sm uppercase tracking-widest"
        >
          <Globe className="w-3.5 h-3.5" />
          The Bright Key Story
        </motion.div>

        <motion.h1
          custom={1} initial="hidden" animate="visible" variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1] max-w-4xl"
        >
          Building Foundations. <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Empowering Minds.
          </span>
        </motion.h1>

        <motion.p
          custom={2} initial="hidden" animate="visible" variants={fadeUp}
          className="text-sm sm:text-base md:text-lg text-slate-500 mb-10 max-w-2xl leading-relaxed font-medium"
        >
          Bright Key Group is a diversified organization delivering unparalleled excellence across cutting-edge Construction solutions and world-class Educational services.
        </motion.p>

        {/* Floating Division Indicators (Very unique Apple-style UI) */}
        <motion.div
          custom={3} initial="hidden" animate="visible" variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full"
        >
          <div className="flex items-center gap-3 bg-white/60 backdrop-blur-md px-5 py-3 rounded-2xl border border-slate-100 shadow-sm w-full sm:w-auto">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-slate-900">Bright Key</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase">Construction</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-white/60 backdrop-blur-md px-5 py-3 rounded-2xl border border-slate-100 shadow-sm w-full sm:w-auto">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-slate-900">Bright Key</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase">Academy</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}