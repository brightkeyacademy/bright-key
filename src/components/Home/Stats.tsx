"use client";

import { motion, useInView, animate } from "framer-motion";
import { ShieldCheck, CalendarDays, Globe2, Layers } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Types for strict coding
interface StatProps {
  id: number;
  numValue: number | string;
  isString?: boolean;
  padZero?: boolean;
  suffix?: string;
  label: string;
  icon: any;
  color: string;
  bg: string;
  gradient: string;
}

const AnimatedStatItem = ({ stat, index, isLast }: { stat: StatProps; index: number; isLast: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Initial state setup (handles both numbers and text like "Global")
  const [displayValue, setDisplayValue] = useState(
    stat.isString ? stat.numValue : (stat.padZero ? "00" : "0") + (stat.suffix || "")
  );

  const triggerAnimation = () => {
    // String ekak nam (e.g. "Global") count wenne na, value eka ehemmai
    if (stat.isString) return;

    animate(0, stat.numValue as number, {
      duration: 1.5,
      ease: "easeOut",
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
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
        onMouseEnter={triggerAnimation} 
        // Cute & Compact Inline Style (100% responsive center/left alignment)
        className="group relative flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 md:gap-4 p-3 md:p-4 rounded-2xl hover:bg-slate-50 transition-colors duration-300 cursor-pointer w-full text-center md:text-left"
      >
        {/* Icon (Left side on desktop, Top on mobile) */}
        <div className={`relative flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center ${stat.bg} ${stat.color} group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 shadow-sm border border-white/80`}>
          <stat.icon className="w-6 h-6 md:w-7 md:h-7" />
        </div>
        
        {/* Text Container */}
        <div className="flex flex-col">
          {/* Animated Number / Text */}
          <h3 className={`text-3xl md:text-4xl font-extrabold tracking-tight leading-none mb-1 text-transparent bg-clip-text bg-gradient-to-br ${stat.gradient} drop-shadow-sm`}>
            {displayValue}
          </h3>
          
          {/* Label */}
          <p className="text-[10px] md:text-xs font-bold text-slate-500 tracking-wider uppercase group-hover:text-slate-800 transition-colors">
            {stat.label}
          </p>
        </div>
      </motion.div>

      {/* Desktop Divider Line (Hidden on mobile, doesn't show after last item) */}
      {!isLast && (
        <div className="hidden lg:block w-[1px] h-12 bg-slate-200/60 rounded-full mx-2"></div>
      )}
    </>
  );
};

export default function Stats() {
  const statsData: StatProps[] = [
    { 
      id: 1, 
      numValue: 100, 
      padZero: false, 
      suffix: "%", 
      label: "Client Satisfaction", 
      icon: ShieldCheck, 
      color: "text-emerald-600", 
      bg: "bg-emerald-100/50",
      gradient: "from-emerald-600 to-teal-400",
    },
    { 
      id: 2, 
      numValue: 1, 
      padZero: true, 
      suffix: "+", 
      label: "Total Experience", 
      icon: CalendarDays, 
      color: "text-blue-600", 
      bg: "bg-blue-100/50",
      gradient: "from-blue-600 to-cyan-500",
    },
    { 
      id: 3, 
      numValue: "Global", 
      isString: true, 
      label: "Industry Reach", 
      icon: Globe2, 
      color: "text-violet-600", 
      bg: "bg-violet-100/50",
      gradient: "from-violet-600 to-purple-500",
    },
    { 
      id: 4, 
      numValue: 2, 
      padZero: true, 
      suffix: "", 
      label: "Core Divisions", 
      icon: Layers, 
      color: "text-amber-600", 
      bg: "bg-amber-100/50",
      gradient: "from-amber-600 to-orange-400",
    },
  ];

  return (

    <section className="relative w-full py-12 md:py-20 bg-white overflow-hidden flex justify-center z-20">
      
      {/* Background soft glow Optional */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[150px] bg-blue-50/50 blur-[80px] -z-10 rounded-full pointer-events-none" />

      {/* Modern Glassmorphism Pill-shaped Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-[95%] xl:w-[90%] bg-slate-50/80 backdrop-blur-md border border-slate-100/80 rounded-[2rem] md:rounded-[3rem] px-4 py-8 md:px-10 md:py-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgb(0,0,0,0.06)] transition-all duration-500"
        >
          {/* Stats Grid - Mobile: 2x2, Desktop: 1x4 (Inline Row) */}
          <div className="grid grid-cols-2 lg:flex lg:flex-row items-center justify-between gap-8 lg:gap-2 w-full">
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