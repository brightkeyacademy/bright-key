"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Rocket, PlaneTakeoff, GraduationCap, Globe2 } from "lucide-react";
import Link from "next/link"; // Next.js Link added for routing

export default function AcademyCTA() {
  return (
    // Section spacing optimized to blend perfectly
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden z-20">
      
      {/* Container matching standard layout */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 w-full">
        
        {/* Premium Dark Glassmorphism Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-slate-950 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden px-6 py-12 md:py-16 text-center shadow-[0_20px_50px_rgba(15,23,42,0.15)] border border-slate-800"
        >
          {/* ================= Background Decorative Glows ================= */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-2xl bg-gradient-to-br from-blue-600/30 via-violet-600/20 to-transparent blur-[90px] rounded-full pointer-events-none z-0" />
          <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-cyan-500/15 blur-[70px] rounded-full pointer-events-none z-0" />

          {/* ================= Floating Cute Icons (Education Theme) ================= */}
          <motion.div 
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 left-8 md:top-12 md:left-16 text-blue-400/20 hidden md:block z-0"
          >
            <PlaneTakeoff className="w-10 h-10" />
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-8 right-8 md:bottom-12 md:right-16 text-violet-400/20 hidden md:block z-0"
          >
            <Globe2 className="w-12 h-12" />
          </motion.div>

          <motion.div 
            animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.7, 0.4] }} 
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/2 right-6 md:right-24 -translate-y-1/2 text-cyan-400/20 hidden lg:block z-0"
          >
            <GraduationCap className="w-10 h-10 rotate-12" />
          </motion.div>

          {/* ================= Main Content ================= */}
          <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
            
            {/* Cute Glowing Badge (Rocket for Education/Launch) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-300 font-medium text-[10px] md:text-xs mb-6 backdrop-blur-md shadow-sm uppercase tracking-widest"
            >
              <Rocket className="w-3.5 h-3.5 text-cyan-400" />
              Secure Your Future
            </motion.div>
            
            {/* Powerful Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.2] tracking-tight mb-5"
            >
              Ready to Study in <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                South Korea?
              </span>
            </motion.h2>
            
            {/* Paragraph - Clear and concise */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="text-sm md:text-base text-slate-300 mb-8 leading-relaxed max-w-lg font-medium"
            >
              Don't let complicated visa processes hold you back. Our experts are ready to guide you from application to your first day on campus.
            </motion.p>

            {/* Action Buttons with Next/Link */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0"
            >
              {/* Primary Button -> Contact Page */}
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-900 rounded-full text-sm font-bold flex items-center justify-center gap-2 hover:bg-cyan-50 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgb(255,255,255,0.15)]">
                  Talk to an Advisor
                  <PhoneCall className="w-4 h-4" />
                </button>
              </Link>
              
              {/* Secondary Button -> Contact Page */}
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-3.5 bg-slate-800/50 text-white border border-slate-700 rounded-full text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-700/60 hover:border-slate-500 hover:scale-105 backdrop-blur-sm transition-all duration-300">
                  Apply Now for 2026
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </button>
              </Link>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}