"use client";

import { motion, Variants } from "framer-motion"; // Ensure Variants is imported
import { ShieldCheck, Globe2, Zap, HeartHandshake } from "lucide-react";

export default function WhyTrustUs() {
  const reasons = [
    {
      id: 1,
      title: "Expert Visa Guidance",
      description: "We handle the complex paperwork and documentation, ensuring a stress-free process.",
      icon: ShieldCheck,
      theme: "blue",
      bg: "bg-blue-50",
      color: "text-blue-600",
      borderHover: "hover:border-blue-200",
      shadowHover: "hover:shadow-blue-900/5",
    },
    {
      id: 2,
      title: "Exclusive Network",
      description: "Direct partnerships with top-tier universities across South Korea for priority admissions.",
      icon: Globe2,
      theme: "emerald",
      bg: "bg-emerald-50",
      color: "text-emerald-600",
      borderHover: "hover:border-emerald-200",
      shadowHover: "hover:shadow-emerald-900/5",
    },
    {
      id: 3,
      title: "Fast-Track Processing",
      description: "Optimized application workflows to secure your university offer letters much faster.",
      icon: Zap,
      theme: "violet",
      bg: "bg-violet-50",
      color: "text-violet-600",
      borderHover: "hover:border-violet-200",
      shadowHover: "hover:shadow-violet-900/5",
    },
    {
      id: 4,
      title: "Post-Arrival Support",
      description: "Guidance on accommodation and settling into your new life abroad comfortably.",
      icon: HeartHandshake,
      theme: "rose",
      bg: "bg-rose-50",
      color: "text-rose-600",
      borderHover: "hover:border-rose-200",
      shadowHover: "hover:shadow-rose-900/5",
    }
  ];

  // FIXED: Explicitly typed as Variants and cast the ease array
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.15, 
        duration: 0.7, 
        ease: [0.2, 0.65, 0.3, 1] as [number, number, number, number] 
      },
    }),
  };

  return (
    // bg-slate-50 maintains the alternating section colors
    <section className="relative w-full py-20 md:py-32 bg-slate-50 overflow-hidden z-20">
      
      {/* Subtle Premium Background Glows */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-cyan-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* ===================== CENTERED HEADER (Matched with Hero) ===================== */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-20">
          
          {/* Animated Badge (Exactly like Hero section) */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100 text-blue-600 font-bold text-xs sm:text-sm mb-6 shadow-sm"
          >
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-blue-500"></span>
            </span>
            The Bright Key Advantage
          </motion.div>

          {/* Main Heading (Matched font sizes with Hero) */}
          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariants}
            className="text-[2.5rem] sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] sm:leading-[1.15] tracking-tight mb-5 sm:mb-6"
          >
            Why Students & Parents <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Trust Us.
            </span>
          </motion.h2>

          {/* Subtitle (Matched font size with Hero) */}
          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariants}
            className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-medium px-2 sm:px-0"
          >
            We take the guesswork out of studying abroad. From choosing the right university to landing safely in your dream destination, we are with you every step of the way with 100% transparency.
          </motion.p>
        </div>

        {/* ===================== STAGGERED 4-COLUMN GRID ===================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            // The magic for desktop: 2nd and 4th items are pushed down by 2rem (32px)
            const staggerClass = index % 2 !== 0 ? "lg:translate-y-8" : "";

            return (
              <motion.div
                key={reason.id}
                custom={index + 3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUpVariants}
                className={`${staggerClass} group relative bg-white p-6 sm:p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:-translate-y-2 transition-all duration-500 cursor-default ${reason.borderHover} ${reason.shadowHover} hover:shadow-xl flex flex-col items-start`}
              >
                {/* Colored Top Border Indicator */}
                <div className={`absolute top-0 left-8 w-12 h-1 rounded-b-full bg-${reason.theme}-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Cute Icon Box */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${reason.bg} ${reason.color} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm border border-white`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                {/* Clean Typography */}
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-slate-500 leading-relaxed text-sm font-medium">
                  {reason.description}
                </p>
                
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}