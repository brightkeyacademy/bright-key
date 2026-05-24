"use client";

import { motion, Variants } from "framer-motion";
import { BookOpen, MapPin, ShieldCheck, Languages } from "lucide-react";
import Image from "next/image";

export default function AcademyFeatures() {
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  // Center image floating animation
  const floatImageVariants: Variants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const,
      }
    }
  };

  // Content එකට තව වචන එකතු කරලා පැහැදිලි කළා
  const features = [
    { id: 1, icon: MapPin, title: "Exclusive Network", desc: "Direct partnerships with top South Korean universities to ensure priority processing and guaranteed placement for our students.", color: "text-blue-600", bg: "bg-blue-50/80", borderColor: "border-blue-100" },
    { id: 2, icon: ShieldCheck, title: "100% Visa Success", desc: "A proven track record with highly transparent documentation, expert handling, and absolute peace of mind for you and your family.", color: "text-emerald-600", bg: "bg-emerald-50/80", borderColor: "border-emerald-100" },
    { id: 3, icon: Languages, title: "TOPIK Mastery", desc: "Comprehensive, interactive Korean language prep programs designed specifically for quick proficiency and university readiness.", color: "text-violet-600", bg: "bg-violet-50/80", borderColor: "border-violet-100" },
    { id: 4, icon: BookOpen, title: "Expert Mentorship", desc: "End-to-end dedicated guidance starting from your ideal university selection all the way to safely landing and settling in South Korea.", color: "text-cyan-600", bg: "bg-cyan-50/80", borderColor: "border-cyan-100" }
  ];

  const featuresLeft = [features[0], features[2]];
  const featuresRight = [features[1], features[3]];

  return (
    <section className="relative w-full py-12 md:py-20 bg-white overflow-hidden flex justify-center">
      <div className="w-[95%] max-w-6xl relative z-10">
        
        {/* Main Layout Container */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-4">
          
          {/* ===================== MOBILE GRID (Mobile වලදී උඩින්ම පෙන්වන්න මේක උඩට ගත්තා) ===================== */}
          <div className="lg:hidden grid grid-cols-2 gap-4 w-full px-2 sm:px-0">
            {features.map((feature, i) => (
              <motion.div key={feature.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariants} className={`bg-white border ${feature.borderColor} p-4 rounded-2xl shadow-sm flex flex-col items-center text-center`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${feature.bg} ${feature.color}`}>
                  <feature.icon className="w-5 h-5" />
                </div>
                <h4 className="text-[13px] font-bold text-slate-900 mb-1">{feature.title}</h4>
                <p className="text-[10px] text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* ===================== LEFT CARDS (Desktop Only - Center Aligned & Cute Size) ===================== */}
          <div className="hidden lg:flex flex-col gap-6 w-[30%] z-10">
            {featuresLeft.map((feature, i) => (
              <motion.div key={feature.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariants} className={`bg-white border ${feature.borderColor} p-5 rounded-2xl shadow-sm hover:shadow-lg transition-all w-full flex flex-col items-center text-center`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${feature.bg} ${feature.color}`}>
                  <feature.icon className="w-5 h-5" />
                </div>
                <h4 className="text-[15px] font-bold text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* ===================== CENTER IMAGE (Always visible with floating rings) ===================== */}
          <div className="relative flex justify-center items-center w-full lg:w-[40%] z-20">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] rounded-full border-[1.5px] border-dashed border-blue-300/60 pointer-events-none" />
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] rounded-full border border-violet-200/50 pointer-events-none" />
            
            <motion.div variants={floatImageVariants} animate="animate" className="relative w-[60%] lg:w-[75%] max-w-[320px] aspect-[4/5] drop-shadow-[0_20px_40px_rgba(37,99,235,0.15)]">
              <Image src="/education/about-tall.png" alt="Student success" fill className="object-contain" priority />
            </motion.div>
          </div>

          {/* ===================== RIGHT CARDS (Desktop Only - Center Aligned & Cute Size) ===================== */}
          <div className="hidden lg:flex flex-col gap-6 w-[30%] z-10">
            {featuresRight.map((feature, i) => (
              <motion.div key={feature.id} custom={i + 2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariants} className={`bg-white border ${feature.borderColor} p-5 rounded-2xl shadow-sm hover:shadow-lg transition-all w-full flex flex-col items-center text-center`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${feature.bg} ${feature.color}`}>
                  <feature.icon className="w-5 h-5" />
                </div>
                <h4 className="text-[15px] font-bold text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}