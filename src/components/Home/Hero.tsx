"use client";

import { motion, Variants } from "framer-motion"; // Added 'Variants' import
import { ArrowRight, Globe, Building2, GraduationCap, Star } from "lucide-react";

export default function Hero() {
  // Added the strict 'Variants' type and cast the ease array
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="relative w-full min-h-[95vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#fafcff] pt-24 md:pt-32 pb-16">
      
      {/* 1. 2027 Aurora Mesh Background (Animated Soft Glowing Blobs) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-blue-400/10 rounded-full blur-[80px] md:blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-cyan-400/10 rounded-full blur-[80px] md:blur-[120px]" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* 2. Floating Spatial Cards (The "WOW" Factor for Desktop/Tablet) */}
        {/* Left Floating Card - Construction */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="hidden lg:flex absolute top-1/4 left-0 xl:left-10 items-center gap-3 bg-white/60 backdrop-blur-md border border-white/40 shadow-xl shadow-blue-900/5 px-5 py-3 rounded-2xl z-20"
        >
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
            <Building2 className="w-5 h-5" />
          </div>
          <div className="text-left">
            <p className="text-xs font-bold text-slate-800">Premium Builds</p>
            <p className="text-[10px] font-medium text-slate-500">Amano & Materials</p>
          </div>
        </motion.div>

        {/* Right Floating Card - Education */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="hidden lg:flex absolute bottom-1/3 right-0 xl:right-10 items-center gap-3 bg-white/60 backdrop-blur-md border border-white/40 shadow-xl shadow-cyan-900/5 px-5 py-3 rounded-2xl z-20"
        >
          <div className="text-left">
            <div className="flex items-center gap-1 mb-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
            </div>
            <p className="text-xs font-bold text-slate-800">Global Academy</p>
            <p className="text-[10px] font-medium text-slate-500">100% Visa Success</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600">
            <GraduationCap className="w-5 h-5" />
          </div>
        </motion.div>


        {/* 3. Main Content (Elegant & Clean) */}
        
        {/* Next-Gen Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200/60 shadow-sm text-slate-600 font-medium text-xs sm:text-sm mb-8 md:mb-10 backdrop-blur-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
          </span>
          Welcome to the Future of Services
        </motion.div>

        {/* Typography: Tight tracking, perfect leading, elegant split colors */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.02em] text-slate-900 mb-6 max-w-4xl mx-auto leading-[1.15] md:leading-[1.1]"
        >
          Building Foundations. <br className="hidden sm:block" />
          <span className="relative inline-block mt-2 sm:mt-0">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500">
              Empowering Minds.
            </span>
            {/* Soft underline glow for 2027 aesthetic */}
            <span className="absolute -bottom-2 left-0 w-full h-3 bg-blue-400/20 blur-md rounded-full"></span>
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="text-base sm:text-lg md:text-xl text-slate-500/90 mb-10 max-w-2xl mx-auto leading-relaxed font-medium px-4 sm:px-0"
        >
          Bright Key delivers world-class solutions across Construction and Education. Experience unparalleled quality and innovation tailored for your success.
        </motion.p>

        {/* 4. Advanced CTA Buttons */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-6 sm:px-0"
        >
          {/* Primary Button with dynamic inner shadow & sweep effect */}
          <button className="group relative w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-semibold flex items-center justify-center gap-2 overflow-hidden shadow-[0_8px_30px_rgb(15,23,42,0.2)] hover:shadow-[0_8px_30px_rgb(37,99,235,0.3)] transition-all duration-300 hover:-translate-y-0.5 active:scale-95">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600/0 via-blue-600/40 to-blue-600/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-all"></span>
            <span className="relative z-10 flex items-center gap-2">
              Explore Services
              <Globe className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
            </span>
          </button>
          
          {/* Secondary Button with Glassy Hover */}
          <button className="w-full sm:w-auto px-8 py-4 bg-white/50 backdrop-blur-sm text-slate-800 border border-slate-200/80 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white hover:border-blue-200 hover:text-blue-600 transition-all duration-300 active:scale-95 shadow-sm">
            Contact Us
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}