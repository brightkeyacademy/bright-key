"use client";

import { motion, Variants } from "framer-motion";
import { ShieldCheck, Globe2, Zap, HeartHandshake, Star } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    id: "01",
    title: "Expert Visa Guidance",
    description: "We handle the complex paperwork and documentation, ensuring a stress-free process.",
    icon: ShieldCheck,
    themeColor: "blue",
    iconBg: "bg-blue-50 text-blue-600",
    badgeBg: "bg-blue-100/50 text-blue-700 border-blue-200/60",
    hoverGlow: "hover:shadow-[0_20px_40px_rgb(37,99,235,0.08)] hover:border-blue-200 hover:-translate-y-1",
    nodeGlow: "group-hover:border-blue-500 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]",
  },
  {
    id: "02",
    title: "Exclusive Network",
    description: "Direct partnerships with top-tier universities across South Korea for priority admissions.",
    icon: Globe2,
    themeColor: "cyan",
    iconBg: "bg-cyan-50 text-cyan-600",
    badgeBg: "bg-cyan-100/50 text-cyan-700 border-cyan-200/60",
    hoverGlow: "hover:shadow-[0_20px_40px_rgb(6,182,212,0.08)] hover:border-cyan-200 hover:-translate-y-1",
    nodeGlow: "group-hover:border-cyan-500 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]",
  },
  {
    id: "03",
    title: "Fast-Track Processing",
    description: "Optimized application workflows to secure your university offer letters much faster.",
    icon: Zap,
    themeColor: "sky",
    iconBg: "bg-sky-50 text-sky-600",
    badgeBg: "bg-sky-100/50 text-sky-700 border-sky-200/60",
    hoverGlow: "hover:shadow-[0_20px_40px_rgb(14,165,233,0.08)] hover:border-sky-200 hover:-translate-y-1",
    nodeGlow: "group-hover:border-sky-500 group-hover:shadow-[0_0_15px_rgba(14,165,233,0.4)]",
  },
  {
    id: "04",
    title: "Post-Arrival Support",
    description: "Guidance on accommodation and settling into your new life abroad comfortably.",
    icon: HeartHandshake,
    themeColor: "indigo",
    iconBg: "bg-indigo-50 text-indigo-600",
    badgeBg: "bg-indigo-100/50 text-indigo-700 border-indigo-200/60",
    hoverGlow: "hover:shadow-[0_20px_40px_rgb(99,102,241,0.08)] hover:border-indigo-200 hover:-translate-y-1",
    nodeGlow: "group-hover:border-indigo-500 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]",
  }
];

export default function WhyTrustUs() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }),
  };

  return (
    <section className="pt-14 pb-10 md:pt-10 md:pb-8 bg-white relative overflow-hidden z-20">
      
      {/* Very subtle ambient gradients */}
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[120px] pointer-events-none transform-gpu" />
      <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-cyan-50/30 rounded-full blur-[120px] pointer-events-none transform-gpu" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* ===================== HEADER (Untouched) ===================== */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-blue-600 font-bold text-[10px] sm:text-xs mb-6 shadow-sm uppercase tracking-widest transform-gpu"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            The Bright Key Advantage
          </motion.div>
          
          <motion.h2
            custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-6 transform-gpu"
          >
            Why Students & Parents <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Trust Us.
            </span>
          </motion.h2>
          
          <motion.p
            custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
            className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium max-w-2xl transform-gpu"
          >
            We take the guesswork out of studying abroad. From choosing the right university to landing safely in your dream destination, we are with you every step of the way.
          </motion.p>
        </div>

        {/* ===================== LAYOUT: TIMELINE & BENTO GRID ===================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          
          {/* LEFT COLUMN: Vertical Timeline */}
          <div className="relative w-full flex flex-col justify-between">
            
            {/* FIXED LINE: Adjusted bottom property to stop perfectly inside the 4th node */}
            <div className="absolute top-[48px] bottom-[80px] sm:bottom-[95px] lg:bottom-[105px] left-[17px] sm:left-[21px] w-[2px] z-0">
              <div className="absolute inset-0 border-l-2 border-dashed border-slate-200" />
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  animate={{ y: ["-100%", "400%"] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="h-1/3 w-full bg-gradient-to-b from-transparent via-blue-500 to-transparent drop-shadow-[0_0_8px_rgba(37,99,235,0.8)] transform-gpu"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6 relative z-10 h-full justify-between">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <motion.div 
                    key={reason.id}
                    custom={index + 2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
                    className="relative w-full group pl-12 sm:pl-16 transform-gpu"
                  >
                    <div className={`absolute top-[40px] left-[10px] sm:left-[14px] w-[16px] h-[16px] rounded-full bg-white border-[3px] border-slate-200 z-10 transition-all duration-500 ${reason.nodeGlow}`} />

                    <div className={`relative bg-white rounded-[1.5rem] p-5 sm:p-6 border border-slate-100 shadow-[0_8px_30px_rgb(15,23,42,0.04)] transition-all duration-500 overflow-hidden ${reason.hoverGlow}`}>
                      <div className="flex items-center gap-4 mb-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${reason.iconBg}`}>
                          <Icon className="w-5 h-5" strokeWidth={2.5} />
                        </div>
                        <div>
                          <div className={`inline-block px-2 py-0.5 rounded-md border text-[10px] font-bold tracking-wide uppercase mb-1 transition-colors duration-300 ${reason.badgeBg}`}>
                            Step {reason.id}
                          </div>
                          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 transition-colors duration-300 group-hover:text-blue-600 leading-tight">
                            {reason.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed pl-14">
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Newly Designed Bento Grid from Sketch */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            // Grid Rows Updated: Logo row (0.8fr) podi, Bottom Banner row (1.4fr) loku karala thiyenne
            className="w-full h-full min-h-[500px] lg:min-h-[550px] grid grid-cols-2 grid-rows-[0.8fr_1.2fr_1.4fr] gap-4 sm:gap-6 transform-gpu"
          >
            {/* Box 1: Main Tall Image (Left Side - spans 2 rows) */}
            <div className="col-span-1 row-span-2 relative rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 group">
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <Image 
                src="/about/about-3.jpg" 
                alt="Students in South Korea" 
                fill 
                className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Box 2: Top Right Logo Box (Smaller height, Zoomed Logo) */}
            <div className="col-span-1 row-span-1 relative rounded-[2rem] bg-white border border-slate-100 shadow-sm flex items-center justify-center p-4 sm:p-6 group hover:shadow-md transition-all duration-300">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* scale-125/150 dila logo eka loku wela penna hadala thiyenne */}
                <Image 
                  src="/brightkeyedu.png" 
                  alt="Bright Key Logo" 
                  fill 
                  className="object-contain drop-shadow-sm scale-125 sm:scale-150 transform group-hover:scale-150 sm:group-hover:scale-[1.6] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Box 3: Middle Right Image Box */}
            <div className="col-span-1 row-span-1 relative rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 group">
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <Image 
                src="/about/about-4.jpg" 
                alt="University Life" 
                fill 
                className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Box 4: Bottom Full-Width Banner (Taller, With Background Image) */}
            <div className="col-span-2 row-span-1 relative rounded-[2rem] overflow-hidden shadow-md group flex items-center justify-between hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 px-6 py-6 sm:px-8 sm:py-8">
              
              {/* Background Image for Bottom Box (Oyata oni image ekakata SRC eka wens karanna) */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src="/about/about-5.jpg" 
                  alt="Success Background" 
                  fill 
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}