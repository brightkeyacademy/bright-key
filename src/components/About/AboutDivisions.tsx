"use client";

import { motion } from "framer-motion";
import { Building2, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutDivisions() {
  const divisions = [
    {
      id: "construction",
      title: "Bright Key Construction",
      desc: "Delivering premium Amano roofing and cutting-edge architectural solutions with structural integrity and modern aesthetics.",
      icon: Building2,
      link: "/construction",
      theme: "from-slate-800 to-slate-900",
      iconColor: "text-slate-300",
      btnTheme: "bg-white/10 hover:bg-white text-white hover:text-slate-900"
    },
    {
      id: "academy",
      title: "Bright Key Academy",
      desc: "Guiding ambitious students to top-tier universities in South Korea with a 100% transparent visa and placement process.",
      icon: GraduationCap,
      link: "/education",
      theme: "from-blue-600 to-cyan-500",
      iconColor: "text-cyan-100",
      btnTheme: "bg-white/10 hover:bg-white text-white hover:text-blue-600"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-slate-50 relative overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Two Pillars of <span className="text-blue-600">Strength</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {divisions.map((div, i) => {
            const Icon = div.icon;
            return (
              <motion.div
                key={div.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`relative p-8 sm:p-10 md:p-12 rounded-[2.5rem] bg-gradient-to-br ${div.theme} overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group flex flex-col h-full`}
              >
                {/* Background Watermark */}
                <Icon className={`absolute -right-10 -bottom-10 w-64 h-64 opacity-5 group-hover:scale-110 transition-transform duration-700 ${div.iconColor}`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6 shadow-inner ${div.iconColor}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                    {div.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed font-medium mb-8 max-w-sm">
                    {div.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-auto pt-6">
                  <Link href={div.link}>
                    <button className={`px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 transition-all duration-300 shadow-sm ${div.btnTheme}`}>
                      Explore Division
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  );
}