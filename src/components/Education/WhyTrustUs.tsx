"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Globe2, Zap, HeartHandshake } from "lucide-react";

const reasons = [
  {
    id: "01",
    title: "Expert Visa Guidance",
    description: "We handle the complex paperwork and documentation, ensuring a stress-free process.",
    icon: ShieldCheck,
    themeColor: "blue",
    iconBg: "bg-blue-50 text-blue-600",
    badgeBg: "bg-blue-100/50 text-blue-700 border-blue-200/60",
    hoverGlow: "hover:shadow-[0_15px_40px_-15px_rgba(37,99,235,0.25)] hover:border-blue-300",
    nodeGlow: "group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.6)]",
  },
  {
    id: "02",
    title: "Exclusive Network",
    description: "Direct partnerships with top-tier universities across South Korea for priority admissions.",
    icon: Globe2,
    themeColor: "cyan",
    iconBg: "bg-cyan-50 text-cyan-600",
    badgeBg: "bg-cyan-100/50 text-cyan-700 border-cyan-200/60",
    hoverGlow: "hover:shadow-[0_15px_40px_-15px_rgba(6,182,212,0.25)] hover:border-cyan-300",
    nodeGlow: "group-hover:border-cyan-500 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]",
  },
  {
    id: "03",
    title: "Fast-Track Processing",
    description: "Optimized application workflows to secure your university offer letters much faster.",
    icon: Zap,
    themeColor: "sky",
    iconBg: "bg-sky-50 text-sky-600",
    badgeBg: "bg-sky-100/50 text-sky-700 border-sky-200/60",
    hoverGlow: "hover:shadow-[0_15px_40px_-15px_rgba(14,165,233,0.25)] hover:border-sky-300",
    nodeGlow: "group-hover:border-sky-500 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.6)]",
  },
  {
    id: "04",
    title: "Post-Arrival Support",
    description: "Guidance on accommodation and settling into your new life abroad comfortably.",
    icon: HeartHandshake,
    themeColor: "indigo",
    iconBg: "bg-indigo-50 text-indigo-600",
    badgeBg: "bg-indigo-100/50 text-indigo-700 border-indigo-200/60",
    hoverGlow: "hover:shadow-[0_15px_40px_-15px_rgba(99,102,241,0.25)] hover:border-indigo-300",
    nodeGlow: "group-hover:border-indigo-500 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]",
  }
];

export default function WhyTrustUs() {
  return (
    <section className="py-12 md:py-8 bg-white relative overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ===================== HEADER ===================== */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 font-bold text-xs sm:text-sm mb-6 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            The Bright Key Advantage
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[2.5rem] sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-5"
          >
            Why Students & Parents <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Trust Us.
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-slate-500 leading-relaxed font-medium px-2 sm:px-0 max-w-2xl mx-auto"
          >
            We take the guesswork out of studying abroad. From choosing the right university to landing safely in your dream destination, we are with you every step of the way.
          </motion.p>
        </div>

        {/* ===================== PIPELINE JOURNEY LAYOUT ===================== */}
        <div className="relative w-full">
          
          {/* --- DESKTOP ANIMATED BEAM LINE --- */}
          <div className="hidden lg:block absolute top-[39px] left-[12.5%] right-[12.5%] h-[2px] z-0">
            {/* Dashed Base Line */}
            <div className="absolute inset-0 border-t-2 border-dashed border-slate-200" />
            {/* Animated Glowing Light Beam */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{ x: ["-100%", "400%"] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="w-1/4 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent drop-shadow-[0_0_8px_rgba(37,99,235,0.8)]"
              />
            </div>
          </div>

          {/* --- MOBILE ANIMATED BEAM LINE --- */}
          <div className="lg:hidden absolute top-[40px] bottom-[40px] left-[31px] w-[2px] z-0">
            {/* Dashed Base Line */}
            <div className="absolute inset-0 border-l-2 border-dashed border-slate-200" />
            {/* Animated Glowing Light Beam */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{ y: ["-100%", "400%"] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="h-1/4 w-full bg-gradient-to-b from-transparent via-blue-500 to-transparent drop-shadow-[0_0_8px_rgba(37,99,235,0.8)]"
              />
            </div>
          </div>

          {/* --- CARDS GRID --- */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <div key={reason.id} className="relative w-full group pt-0 lg:pt-[80px] pl-[70px] lg:pl-0">
                  
                  {/* --- DESKTOP NODE (Sits perfectly on the line) --- */}
                  <div className={`hidden lg:flex absolute top-[32px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-[3px] border-slate-200 z-10 transition-all duration-500 ${reason.nodeGlow}`} />

                  {/* --- MOBILE NODE (Sits perfectly on the vertical line) --- */}
                  <div className={`lg:hidden absolute top-[40px] left-[24px] w-4 h-4 rounded-full bg-white border-[3px] border-slate-200 z-10 transition-all duration-500 ${reason.nodeGlow}`} />

                  {/* --- THE CARD --- */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    // Added a custom soft shadow here (shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)]) so it perfectly blends with the pure white BG
                    className={`relative bg-white rounded-[1.5rem] p-6 lg:p-7 border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 overflow-hidden ${reason.hoverGlow}`}
                  >
                    {/* Top inner shine effect */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />

                    <div className="flex justify-between items-start mb-6">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${reason.iconBg}`}>
                        <Icon className="w-6 h-6" strokeWidth={2.5} />
                      </div>

                      {/* Premium Step Badge */}
                      <div className={`px-3 py-1 rounded-lg border text-xs font-bold tracking-wide uppercase transition-colors duration-300 ${reason.badgeBg}`}>
                        Step {reason.id}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-extrabold text-slate-900 mb-2 transition-colors duration-300 group-hover:text-slate-800">
                      {reason.title}
                    </h3>
                    
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">
                      {reason.description}
                    </p>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}