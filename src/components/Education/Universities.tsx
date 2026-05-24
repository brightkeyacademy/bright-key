"use client";

import { motion, Variants } from "framer-motion";
import { Landmark, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Universities() {
  const universities = [
    {
      id: 1,
      name: "Chosun College of Science & Technology",
      location: "Gwangju, South Korea",
      tag: "Engineering & IT",
      description: "Specializing in advanced technical training and industry-collaborative education with high employment rates.",
      highlights: ["Practical Engineering", "IT & Nursing Focus", "Global Industry Ties"],
      image: "/education/chosun-bg.jpg", 
      logo: "/education/logo-3.png",
      delay: 0.1,
    },
    {
      id: 2,
      name: "Suseong University",
      location: "Daegu, South Korea",
      tag: "Vocational & Healthcare",
      description: "A premier institute focused on specialized vocational training, healthcare, beauty, and practical skills.",
      highlights: ["Healthcare Excellence", "Modern Facilities", "Specialized Training"],
      image: "/education/suseong-bg.jpg", 
      logo: "/education/logo-2.png",
      delay: 0.3,
    },
    {
      id: 3,
      name: "Daegu Arts University",
      location: "Chilgok/Daegu, South Korea",
      tag: "Arts & Design",
      description: "Dedicated to nurturing creative talents in fine arts, design, music, and the performing arts industry.",
      highlights: ["Creative Arts Focus", "Professional Studios", "Global Exhibitions"],
      image: "/education/daegu-bg.jpg",
      logo: "/education/logo-1.png",
      delay: 0.5,
    }
  ];

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.15, 
        duration: 0.8, 
        ease: [0.2, 0.65, 0.3, 1] as [number, number, number, number]
      },
    }),
  };

  return (
    <section className="relative w-full py-20 md:py-24 bg-white overflow-hidden z-20">
      
      {/* Subtle Premium Mesh Gradients */}
      <div className="absolute top-10 left-[-10%] w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-[500px] h-[500px] bg-cyan-50/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* ===================== HEADER SECTION ===================== */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-blue-600 font-bold text-[10px] sm:text-xs mb-6 shadow-sm uppercase tracking-widest"
          >
            <Landmark className="w-3.5 h-3.5" />
            Our Global Partners
          </motion.div>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-6"
          >
            Top Universities in <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              South Korea.
            </span>
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariants}
            className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium max-w-2xl"
          >
            We have established exclusive partnerships with highly respected institutions to provide you with the best educational environment and future career opportunities.
          </motion.p>
        </div>

        {/* ===================== PREMIUM MODERN LIST LAYOUT ===================== */}
        <div className="flex flex-col gap-5 md:gap-6">
          {universities.map((uni, index) => (
            <motion.div
              key={uni.id}
              custom={index + 2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariants}
              className="group relative w-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-[0_20px_40px_rgb(15,23,42,0.12)] hover:-translate-y-1 transition-all duration-500"
            >
              {/* Image Background */}
              <div className="absolute inset-0 w-full h-full">
                <Image 
                  src={uni.image} 
                  alt={uni.name} 
                  fill 
                  className="object-cover transform group-hover:scale-105 group-hover:rotate-1 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Advanced Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-900/30 transition-all duration-500 z-10" />

              {/* Content Container - Adjusted for height & beautiful centering */}
              <div className="relative z-20 flex flex-col md:flex-row items-start md:items-center justify-center md:justify-start gap-6 md:gap-8 px-6 py-8 md:px-10 md:py-10 w-full h-full min-h-[260px]">
                {/* 1. White Background Logo Section */}
                <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-[1.25rem] bg-white p-3 shadow-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="relative w-full h-full">
                    <Image src={uni.logo} alt="Logo" fill className="object-contain drop-shadow-sm" />
                  </div>
                </div>

                {/* 2. Text Content (Middle) */}
                <div className="flex-1 w-full text-left flex flex-col justify-center">
                  
                  {/* Title & Tag */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2.5">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200 group-hover:to-white transition-all duration-300 line-clamp-1">
                      {uni.name}
                    </h3>
                    <span className="w-max px-2.5 py-1 rounded-full bg-blue-500/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-blue-200 border border-blue-500/30 shadow-sm">
                      {uni.tag}
                    </span>
                  </div>
                  
                  {/* Location (Color Changed) */}
                  <div className="flex items-center gap-1.5 text-emerald-50 mb-3">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                    <p className="text-xs sm:text-sm font-medium tracking-wide">{uni.location}</p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300/90 text-xs sm:text-sm leading-relaxed mb-4 font-normal max-w-2xl line-clamp-2">
                    {uni.description}
                  </p>

                  {/* Highlights (Boxed Features) */}
                  <ul className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    {uni.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-white/20 transition-colors duration-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-300 shrink-0" />
                        <span className="text-[11px] sm:text-xs text-white font-medium tracking-wide">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Glass Action Button (Right) */}
                <div className="shrink-0 mt-4 md:mt-0 self-end md:self-center">
                  <Link href="/contact">
                    <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl text-white flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}