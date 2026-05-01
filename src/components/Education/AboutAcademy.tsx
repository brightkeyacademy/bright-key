"use client";

import { motion, Variants } from "framer-motion"; // Make sure Variants is imported
import { Compass, BookOpen, MapPin, ArrowRight, ShieldCheck, Languages } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AcademyAbout() {
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 1] as [number, number, number, number], 
      },
    }),
  };

  // FIX: Added 'Variants' type and 'as const' to the ease string
  const floatVariants: Variants = {
    animate: (i: number) => ({
      y: [0, i % 2 === 0 ? -12 : 12, 0],
      transition: {
        duration: 4 + i,
        repeat: Infinity,
        ease: "easeInOut" as const, // Strict type cast to fix the error
      }
    })
  };

  // Content for the 4 floating cards
  const features = [
    {
      id: 1,
      icon: MapPin,
      title: "Exclusive Network",
      desc: "Direct partnerships with top-tier South Korean universities.",
      color: "text-blue-600",
      bg: "bg-blue-100/50",
      position: "top-[5%] left-[-10%]", // Desktop position
    },
    {
      id: 2,
      icon: ShieldCheck,
      title: "100% Visa Success",
      desc: "Proven track record with transparent documentation.",
      color: "text-emerald-600",
      bg: "bg-emerald-100/50",
      position: "top-[15%] right-[-15%]", // Desktop position
    },
    {
      id: 3,
      icon: Languages,
      title: "TOPIK Mastery",
      desc: "Comprehensive Korean language preparation.",
      color: "text-violet-600",
      bg: "bg-violet-100/50",
      position: "bottom-[20%] left-[-15%]", // Desktop position
    },
    {
      id: 4,
      icon: BookOpen,
      title: "Expert Mentorship",
      desc: "End-to-end guidance from application to landing.",
      color: "text-cyan-600",
      bg: "bg-cyan-100/50",
      position: "bottom-[5%] right-[-10%]", // Desktop position
    }
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-white overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-cyan-50/40 rounded-full blur-[100px] translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* =========================================================
            2-COLUMN SPLIT LAYOUT
            ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* 1. LEFT COLUMN: Text Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-1">
            
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-blue-600 font-bold text-[10px] sm:text-xs mb-6 shadow-sm uppercase tracking-widest"
            >
              <Compass className="w-3.5 h-3.5" />
              Who We Are
            </motion.div>

            {/* Powerful Heading */}
            <motion.h2
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.15]"
            >
              Unlock Your Future. <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                We Architect Success.
              </span>
            </motion.h2>

            <motion.p
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariants}
              className="text-sm sm:text-base text-slate-500 mb-10 leading-relaxed font-medium max-w-lg"
            >
              Bright Key Academy is Sri Lanka’s premier educational consultancy specializing in South Korean university placements. We eliminate the confusion of studying abroad, providing a transparent, end-to-end pathway for ambitious students.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariants}
            >
              <Link href="/contact" className="group inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full text-sm font-bold shadow-lg shadow-slate-900/20 hover:bg-blue-600 hover:shadow-blue-600/30 transition-all duration-300 active:scale-95">
                Start your journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* 2. RIGHT COLUMN: Visuals (Image + Floating Cards) */}
          <div className="relative flex flex-col items-center justify-center order-2 w-full mt-10 lg:mt-0">
            
            {/* The Main Transparent Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              // drop-shadow eken transparent image eka lassanata pop wela penawa
              className="relative w-[80%] max-w-[350px] aspect-[3/4] sm:aspect-[4/5] z-10 drop-shadow-[0_20px_50px_rgba(37,99,235,0.15)]"
            >
              <Image 
                src="/education/about-tall.png" 
                alt="Student success" 
                fill 
                className="object-contain"
              />
            </motion.div>

            {/* =========================================================
                DESKTOP FLOATING CARDS (Hidden on Mobile)
                ========================================================= */}
            <div className="hidden lg:block absolute inset-0 w-full h-full z-20 pointer-events-none">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.id}
                  custom={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  variants={floatVariants}
                  animate="animate"
                  className={`absolute ${feature.position} bg-white/70 backdrop-blur-xl border border-white/80 p-4 rounded-2xl shadow-xl shadow-blue-900/5 w-[220px] pointer-events-auto hover:bg-white hover:scale-105 transition-all duration-300 cursor-default`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${feature.bg} ${feature.color}`}>
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 mb-0.5 leading-tight">{feature.title}</h4>
                      <p className="text-[10px] text-slate-500 font-medium leading-snug">{feature.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* =========================================================
                MOBILE GRID (Hidden on Desktop)
                ========================================================= */}
            <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-8 relative z-20">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-50 border border-slate-100 p-4 rounded-2xl flex items-center gap-4 shadow-sm"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${feature.bg} ${feature.color}`}>
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-slate-900 mb-0.5">{feature.title}</h4>
                    <p className="text-[11px] text-slate-500 font-medium leading-tight">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}