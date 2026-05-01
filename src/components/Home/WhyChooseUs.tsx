"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Globe2, Headset, Award } from "lucide-react";

export default function WhyChooseUs() {
  // Advanced Bento Grid Data Structure
  const reasons = [
    {
      id: "01",
      title: "Uncompromising Quality",
      description: "Whether it's premium construction materials or top-tier South Korean university placements, we never compromise on standard.",
      icon: <Award className="w-7 h-7 text-white" />,
      // Wide card layout for desktop
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
      bgClass: "bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden group",
      textClass: "text-blue-100",
      titleClass: "text-white",
      iconBg: "bg-white/20 border-white/20 backdrop-blur-md",
      pattern: true, // Show dots pattern
    },
    {
      id: "02",
      title: "Expert Guidance",
      description: "Industry veterans and seasoned counselors dedicated to your success.",
      icon: <ShieldCheck className="w-7 h-7 text-slate-700" />,
      colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
      bgClass: "bg-white border border-slate-100 shadow-sm hover:shadow-xl group",
      textClass: "text-slate-500",
      titleClass: "text-slate-900",
      iconBg: "bg-slate-50 border-slate-100",
      pattern: false,
    },
    {
      id: "03",
      title: "Global Standards",
      description: "Bringing world-class opportunities and modern engineering practices to you.",
      icon: <Globe2 className="w-7 h-7 text-slate-700" />,
      colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
      bgClass: "bg-white border border-slate-100 shadow-sm hover:shadow-xl group",
      textClass: "text-slate-500",
      titleClass: "text-slate-900",
      iconBg: "bg-slate-50 border-slate-100",
      pattern: false,
    },
    {
      id: "04",
      title: "End-to-End Support",
      description: "We hold your hand from the first blueprint to the final build, and from university application to final visa approval.",
      icon: <Headset className="w-7 h-7 text-white" />,
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
      bgClass: "bg-slate-900 relative overflow-hidden group",
      textClass: "text-slate-400",
      titleClass: "text-white",
      iconBg: "bg-white/10 border-white/10 backdrop-blur-md",
      pattern: false,
    }
  ];

  return (
    // Background white and Standard Spacing (pt-20 pb-20 md:pt-32 md:pb-32)
    <section className="relative w-full py-20 md:py-32 bg-white overflow-hidden">
      
      {/* Premium Ambient Background Glows */}
      <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container - Super Responsive Padding */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-600 font-bold text-xs uppercase tracking-widest mb-6 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            Why Choose Us
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            Experience The <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Bright Key Standard
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-500 text-base md:text-lg max-w-2xl leading-relaxed"
          >
            Innovation meets reliability. Whether you are building your dream project or building your future career, we provide the ultimate foundation for your success.
          </motion.p>
        </div>

        {/* The Advanced Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 0.99 }} // Premium push-and-lift hover effect
              className={`${reason.colSpan} ${reason.bgClass} rounded-[2rem] p-8 sm:p-10 flex flex-col justify-between transition-all duration-500`}
            >
              
              {/* Optional Dot Pattern for the Blue Card to make it look "Agency Level" */}
              {reason.pattern && (
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-700 group-hover:opacity-40"
                  style={{ 
                    backgroundImage: 'radial-gradient(white 2px, transparent 2px)', 
                    backgroundSize: '24px 24px' 
                  }} 
                />
              )}

              {/* Top Row: Icon & Badge */}
              <div className="relative z-10 flex justify-between items-start mb-12">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${reason.iconBg}`}>
                  {reason.icon}
                </div>
                <span className={`text-sm font-bold tracking-wider ${reason.textClass} opacity-60`}>
                  {reason.id}
                </span>
              </div>

              {/* Bottom Row: Content */}
              <div className="relative z-10 mt-auto">
                <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${reason.titleClass}`}>
                  {reason.title}
                </h3>
                <p className={`text-sm sm:text-base leading-relaxed ${reason.textClass} max-w-md`}>
                  {reason.description}
                </p>
              </div>

              {/* Decorative Glow inside dark/blue cards on hover */}
              {reason.pattern && (
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 blur-3xl rounded-full group-hover:bg-white/20 transition-colors duration-700 pointer-events-none" />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}