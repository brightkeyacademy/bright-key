"use client";

import { motion, Variants } from "framer-motion"; // Added 'Variants' import
import { Landmark, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Universities() {
  // Scraped & Analyzed Data from the 3 Universities
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
      themeColor: "blue",
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
      themeColor: "emerald",
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
      themeColor: "violet",
      delay: 0.5,
    }
  ];

  // Added strict Variants type and cast the ease array
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.15, 
        duration: 0.8, 
        ease: [0.2, 0.65, 0.3, 1] as [number, number, number, number] // Strict 4-value array cast
      },
    }),
  };

  return (
    // Clean White Background to contrast with previous Slate-50 section
    <section className="relative w-full py-20 md:py-32 bg-white overflow-hidden z-20">
      
      {/* Subtle Premium Mesh Gradients */}
      <div className="absolute top-10 left-[-10%] w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-[500px] h-[500px] bg-cyan-50/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* ===================== HEADER SECTION ===================== */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-24">
          
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

        {/* ===================== CARDS GRID (PODIUM LAYOUT) ===================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {universities.map((uni, index) => {
            // Podium Effect: Desktop var madhli card (index 1) thodi var ahe, bajuche don cards thode khali ahet.
            const podiumClass = index === 1 ? "md:-translate-y-6" : "md:translate-y-6";

            return (
              <motion.div
                key={uni.id}
                custom={index + 2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUpVariants}
                className={`${podiumClass} group relative bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(15,23,42,0.04)] border border-slate-100 hover:shadow-[0_20px_50px_rgb(37,99,235,0.08)] transition-all duration-500 flex flex-col overflow-hidden hover:-translate-y-2`}
              >
                {/* 1. Top Image Section */}
                <div className="relative w-full h-48 sm:h-52 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors z-10" />
                  <Image 
                    src={uni.image} 
                    alt={uni.name} 
                    fill 
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Subject Tag Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
                    <p className={`text-[10px] font-bold uppercase tracking-wider text-${uni.themeColor}-600`}>
                      {uni.tag}
                    </p>
                  </div>
                </div>

                {/* 2. Floating University Logo */}
                <div className="relative z-20 flex justify-center -mt-10 mb-4 px-6">
                  <div className="w-20 h-20 rounded-2xl bg-white p-2 shadow-lg border border-slate-100 flex items-center justify-center transform group-hover:-translate-y-1 transition-transform duration-300">
                    <div className="relative w-full h-full">
                      {/* Logo Images (Transparent PNGs recommended) */}
                      <Image src={uni.logo} alt="Logo" fill className="object-contain" />
                    </div>
                  </div>
                </div>

                {/* 3. Content Section */}
                <div className="flex flex-col flex-grow px-6 pb-8 text-center sm:text-left">
                  
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {uni.name}
                  </h3>
                  
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 text-slate-500 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <p className="text-xs font-medium">{uni.location}</p>
                  </div>

                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 flex-grow font-medium">
                    {uni.description}
                  </p>

                  {/* Highlights List */}
                  <ul className="space-y-2.5 mb-8 text-left">
                    {uni.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-4 h-4 text-${uni.themeColor}-500 shrink-0`} />
                        <span className="text-[11px] sm:text-xs text-slate-600 font-semibold">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Explore Button (Elegant & Cute) */}
                  <Link href="/contact" className="w-full mt-auto">
                    <button className="w-full py-3 px-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 text-sm font-bold flex items-center justify-center gap-2 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      Explore Programs
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                  
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}