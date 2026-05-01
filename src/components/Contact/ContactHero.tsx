"use client";

import { motion, Variants } from "framer-motion"; // Added 'Variants' import
import { MessageCircle, Clock, ShieldCheck, Zap } from "lucide-react";

export default function ContactHero() {
  // Added the strict 'Variants' type and cast the ease array
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
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
    <section className="relative w-full pt-36 pb-16 md:pt-42 md:pb-20 bg-[#fafcff] overflow-hidden flex justify-center z-20 border-b border-slate-100">
      
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-cyan-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 w-full text-center flex flex-col items-center">
        
        <motion.div
          custom={0} initial="hidden" animate="visible" variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-blue-600 font-bold text-[10px] sm:text-xs mb-6 shadow-sm uppercase tracking-widest"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          Get In Touch
        </motion.div>

        <motion.h1
          custom={1} initial="hidden" animate="visible" variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]"
        >
          Let's Start a <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Conversation.
          </span>
        </motion.h1>

        <motion.p
          custom={2} initial="hidden" animate="visible" variants={fadeUp}
          className="text-sm sm:text-base md:text-lg text-slate-500 mb-10 max-w-2xl leading-relaxed font-medium"
        >
          Whether you're planning your next big construction project or taking the next step in your education journey, our experts are here to guide you.
        </motion.p>

        {/* Cute Trust Badges */}
        <motion.div
          custom={3} initial="hidden" animate="visible" variants={fadeUp}
          className="flex flex-wrap justify-center items-center gap-3 sm:gap-4"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-blue-500" />
            <span className="text-[11px] sm:text-xs font-bold text-slate-700">Fast Response</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm">
            <Clock className="w-3.5 h-3.5 text-cyan-500" />
            <span className="text-[11px] sm:text-xs font-bold text-slate-700">24/7 Support</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
            <span className="text-[11px] sm:text-xs font-bold text-slate-700">100% Transparent</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}