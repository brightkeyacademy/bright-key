"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSummary() {
  const features = [
    "Premium Construction & Architectural Solutions",
    "Comprehensive Educational Programs & Guidance",
    "Unwavering Commitment to Quality & Innovation",
    "Expert Teams Dedicated to Your Success",
  ];

  const bentoItems = [
    { id: 1, type: "logo", src: "/brightkey.png", alt: "Bright Key Logo", style: "col-span-2 md:col-span-2 row-span-1 bg-white" },
    { id: 2, type: "image", src: "/about/about-2.jpg", alt: "Construction Project", style: "col-span-1 md:col-span-1 row-span-1" },
    { id: 3, type: "image", src: "/about/about-3.jpg", alt: "Education & Learning", style: "col-span-1 md:col-span-1 row-span-1" },
    { id: 4, type: "image", src: "/about/about-1.jpg", alt: "Bright Key Professional Team", style: "col-span-2 md:col-span-2 row-span-2" },
    { id: 5, type: "image", src: "/about/about-4.jpg", alt: "Modern Architecture & Study", style: "col-span-2 md:col-span-1 row-span-1" },
  ];

  return (
   <section className="relative w-full pt-12 md:pt-10 pb-20 md:pb-32 bg-white overflow-hidden">
      
      {/* Background Decorative Blur */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/60 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      {/* Container - 100% Responsive Left/Right/Up/Down */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* ===================== LEFT COLUMN: Content ===================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-slate-600 font-medium text-sm mb-6 w-max shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Who We Are
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
              Building Excellence, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Empowering Futures
              </span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              At Bright Key, we deliver unparalleled excellence across two core divisions: cutting-edge Construction solutions and world-class Education services. We are dedicated to building a stronger, smarter future for our clients.
            </p>

            <ul className="space-y-4 mb-10 max-w-xl">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1), duration: 0.4 }}
                  className="flex items-start gap-3 text-slate-700 font-medium bg-slate-50/50 p-3 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-colors"
                >
                  <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Link href="/about-us" className="w-full sm:w-max">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex w-full sm:w-max items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 border border-slate-700"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>


          {/* ===================== RIGHT COLUMN: Bento Grid Images ===================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-full h-[550px] md:h-[600px] lg:h-[650px]"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-4 md:grid-rows-3 gap-3 md:gap-4 w-full h-full grid-flow-row-dense">
              {bentoItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                  className={`group relative overflow-hidden rounded-[2rem] shadow-sm border border-slate-100 flex items-center justify-center ${item.style} ${item.type === 'image' ? 'bg-slate-100' : 'bg-white p-6 shadow-md'}`}
                >
                  {item.type === 'image' ? (
                    <>
                      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                      />
                    </>
                  ) : (
                    <div className="relative w-full h-full flex items-center justify-center grayscale-[20%] group-hover:grayscale-0 transition-all duration-500">
                       <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-contain p-4 drop-shadow-sm"
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-blue-500/10 blur-[90px] -z-10 rounded-full" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}