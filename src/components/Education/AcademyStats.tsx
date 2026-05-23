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
      duration: 2.5,
      ease: [0.16, 1, 0.3, 1], // Advanced spring-like easing for super smooth finish
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
        className="group relative flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 p-4 rounded-3xl hover:bg-slate-50 transition-all duration-500 cursor-default w-full text-center sm:text-left z-10"
      >
        {/* Premium Icon Box */}
        <div className="relative flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center bg-white shadow-[0_4px_15px_rgba(0,0,0,0.04)] border border-slate-100 transition-all duration-500 group-hover:shadow-lg group-hover:-translate-y-1 group-hover:scale-110">
          <stat.icon className={`w-6 h-6 md:w-7 md:h-7 ${stat.color} z-10 transition-transform duration-500 group-hover:rotate-6`} />
          
          {/* Animated Glow behind Icon only on hover */}
          <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${stat.gradient}`} />
        </div>
        
        {/* Text Container */}
        <div className="flex flex-col">
          <motion.h3 
            className={`text-3xl md:text-4xl font-black tracking-tight leading-none mb-1 bg-clip-text text-transparent bg-gradient-to-br ${stat.textGradient}`}
          >
            {displayValue}
          </motion.h3>
          <p className="text-[10px] md:text-xs font-bold text-slate-400 tracking-widest uppercase mt-1 group-hover:text-slate-700 transition-colors duration-300">
            {stat.label}
          </p>
        </div>
      </motion.div>

      {/* Desktop Dividers */}
      {!isLast && (
        <div className="hidden lg:block w-[1px] h-12 bg-gradient-to-b from-transparent via-slate-200 to-transparent rounded-full mx-2 self-center opacity-70" />
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
      icon: Landmark, 
      color: "text-blue-600", 
      gradient: "from-blue-400 to-cyan-400",
      textGradient: "from-slate-800 to-blue-600",
    },
    { 
      id: 2, 
      numValue: 1, 
      padZero: true, 
      suffix: "+", 
      label: "Years Experience", 
      icon: CalendarDays, 
      color: "text-emerald-600", 
      gradient: "from-emerald-400 to-teal-400",
      textGradient: "from-slate-800 to-emerald-600",
    },
    { 
      id: 3, 
      numValue: 100, 
      padZero: false, 
      suffix: "%", 
      label: "Visa Guarantee", 
      icon: ShieldCheck, 
      color: "text-indigo-600", 
      gradient: "from-indigo-400 to-violet-400",
      textGradient: "from-slate-800 to-indigo-600",
    },
    { 
      id: 4, 
      numValue: 100, 
      padZero: false, 
      suffix: "+", 
      label: "Success Stories", 
      icon: PlaneTakeoff, 
      color: "text-rose-600", 
      gradient: "from-rose-400 to-pink-400",
      textGradient: "from-slate-800 to-rose-600",
    },
  ];

  return (
    // Methana mt-12 md:mt-24 add kala mulu box ekama uda section eken pahalata thallu karanna
    <section className="relative w-full mt-24 md:mt-32 py-12 md:py-16 bg-gradient-to-b from-[#f0f4ff] to-[#f8faff] overflow-hidden flex justify-center z-20">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full flex justify-center">
        
        {/* Solid White Floating Card with Premium Soft Shadow */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-[95%] relative bg-white border border-slate-100 rounded-[2.5rem] md:rounded-[4rem] px-8 py-8 md:px-12 md:py-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex flex-col lg:flex-row items-center justify-between gap-8 z-20"
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