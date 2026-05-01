"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Sparkles, CheckCircle2, Building2, Globe2, GraduationCap } from "lucide-react";
import Link from "next/link"; // Link eka import kala pages walata yanna

export default function CTA() {
  const benefits = [
    "Free Initial Consultation",
    "Custom Construction Quotes",
    "Free University Assessment",
    "Dedicated Expert Support"
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden flex justify-center z-20 px-4 sm:px-6 lg:px-16">
      
      {/* The Premium Dark Card Container */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full max-w-7xl bg-slate-900 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/20 border border-slate-800"
      >
        {/* ================= Animated Background Glow Blobs ================= */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px]" />
          <div className="absolute -bottom-[20%] -right-[10%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px]" />
        </div>

        {/* ================= Floating Cute Icons (POSITION FIXED) ================= */}
        {/* Construction Icon - Text ekata uda, madata wenna */}
        <motion.div 
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-6 left-1/2 md:top-10 md:left-[45%] text-blue-400/20 hidden md:block z-0 pointer-events-none"
        >
          <Building2 className="w-16 h-16" />
        </motion.div>
        
        {/* Education Icon - Text ekata eha paththe madata wenna (his ida) */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3], rotate: [12, 15, 12] }} 
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-1/3 right-[30%] lg:top-1/4 lg:right-1/3 text-cyan-400/20 hidden xl:block z-0 pointer-events-none"
        >
          <GraduationCap className="w-20 h-20" />
        </motion.div>

        {/* Global/Reach Icon - Button walata yatin dakunu kelaware */}
        <motion.div 
          animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-6 right-10 md:bottom-10 md:right-16 text-violet-400/20 hidden lg:block z-0 pointer-events-none"
        >
          <Globe2 className="w-14 h-14" />
        </motion.div>

        {/* ================= Content Container ================= */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 sm:p-12 md:p-16 lg:p-20 gap-12 lg:gap-8 text-center lg:text-left">
          
          {/* LEFT SIDE: Text & Cute Pills */}
          <div className="flex flex-col items-center lg:items-start max-w-2xl">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-blue-300 font-medium text-xs md:text-sm mb-6 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Let's Build Your Future
            </motion.div>

            {/* Elegant Font Size (Responsive) */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              Ready to take the <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Next Step with us?
              </span>
            </h2>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Whether you are laying the foundation for a new construction project or planning your higher education journey abroad, our experts are ready to guide you.
            </p>

            {/* Cute 4 Points - Grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg mx-auto lg:mx-0">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1), duration: 0.4 }}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 text-slate-200 text-xs md:text-sm font-medium hover:bg-white/10 transition-colors cursor-default"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  {benefit}
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Action Buttons with Next/Link */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center justify-center gap-4 w-full lg:w-auto shrink-0 z-10"
          >
            {/* Primary Button -> Link to /about-us */}
            <Link href="/about-us" className="w-full sm:w-auto lg:w-full xl:w-auto block">
              <button className="group flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-bold text-sm md:text-base hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:scale-105 transition-all duration-300 w-full">
                Explore Bright Key
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            
            {/* Secondary Button -> Link to /contact */}
            <Link href="/contact" className="w-full sm:w-auto lg:w-full xl:w-auto block">
              <button className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-sm md:text-base hover:bg-white/20 hover:scale-105 transition-all duration-300 w-full">
                <PhoneCall className="w-5 h-5" />
                Contact Us
              </button>
            </Link>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}