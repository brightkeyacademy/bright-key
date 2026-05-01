"use client";

import { motion, useInView, animate } from "framer-motion";
import { Landmark, CalendarDays, ShieldCheck, PlaneTakeoff } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AnimatedStatItem = ({ stat, index, isLast }: { stat: any; index: number; isLast: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const [displayValue, setDisplayValue] = useState(
    (stat.padZero ? "00" : "0") + (stat.suffix || "")
  );

  const triggerAnimation = () => {
    animate(0, stat.numValue, {
      duration: 2,
      ease: [0.2, 0.65, 0.3, 1], // Custom cubic-bezier for premium smoothness
      onUpdate: (latest) => {
        let val = Math.floor(latest);
        let formatted = stat.padZero && val < 10 ? `0${val}` : `${val}`;
        setDisplayValue(formatted + (stat.suffix || ""));
      },
    });
  };

  useEffect(() => {
    if (isInView) {
      triggerAnimation();
    }
  }, [isInView]);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
        className="group relative flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 p-4 rounded-3xl hover:bg-white/40 transition-all duration-500 cursor-default w-full text-center sm:text-left"
      >
        {/* Modern Icon Box */}
        <div className={`relative flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center bg-white shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-slate-100 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500`}>
          <stat.icon className={`w-6 h-6 md:w-7 md:h-7 ${stat.color}`} />
          {/* Subtle Glow */}
          <div className={`absolute inset-0 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity ${stat.bg}`} />
        </div>
        
        {/* Text Container */}
        <div className="flex flex-col">
          <h3 className={`text-3xl md:text-4xl font-black tracking-tight leading-none mb-1 text-slate-900`}>
            {displayValue}
          </h3>
          <p className="text-[10px] md:text-xs font-bold text-slate-400 tracking-widest uppercase group-hover:text-blue-600 transition-colors">
            {stat.label}
          </p>
        </div>
      </motion.div>

      {/* Desktop Dividers */}
      {!isLast && (
        <div className="hidden lg:block w-[1px] h-10 bg-slate-200/50 rounded-full mx-4 self-center"></div>
      )}
    </>
  );
};

export default function AcademyStats() {
  const statsData = [
    { 
      id: 1, 
      numValue: 3, 
      padZero: true, 
      suffix: "", 
      label: "Top Partners", 
      icon: Landmark, // Partners wenuwata galapena icon eka
      color: "text-blue-600", 
      bg: "bg-blue-600",
    },
    { 
      id: 2, 
      numValue: 1, 
      padZero: true, 
      suffix: "+", 
      label: "Years Experience", 
      icon: CalendarDays, 
      color: "text-emerald-600", 
      bg: "bg-emerald-600",
    },
    { 
      id: 3, 
      numValue: 100, 
      padZero: false, 
      suffix: "%", 
      label: "Visa Guarantee", 
      icon: ShieldCheck, 
      color: "text-indigo-600", 
      bg: "bg-indigo-600",
    },
    { 
      id: 4, 
      numValue: 100, 
      padZero: false, 
      suffix: "+", 
      label: "Success Stories", 
      icon: PlaneTakeoff, 
      color: "text-rose-600", 
      bg: "bg-rose-600",
    },
  ];

  return (
    // Section spacing optimized for the new design
    <section className="relative w-full py-8 bg-[#fafcff] overflow-hidden flex justify-center z-20">
      
      {/* Container matching standard layout */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full flex justify-center">
        
        {/* Floating Pill Design */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-[95%] bg-white/60 backdrop-blur-xl border border-white rounded-[2.5rem] md:rounded-[4rem] px-8 py-8 md:px-12 md:py-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Stats Grid - 2x2 for Mobile, 1x4 for Desktop */}
          <div className="grid grid-cols-2 lg:flex lg:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-4 w-full">
            {statsData.map((stat, index) => (
              <AnimatedStatItem 
                key={stat.id} 
                stat={stat} 
                index={index} 
                isLast={index === statsData.length - 1} 
              />
            ))}
          </div>
        </motion.div>
      </div>
      
    </section>
  );
}