"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Target, Users } from "lucide-react";

export default function AboutValues() {
  const values = [
    {
      id: 1,
      title: "Uncompromising Quality",
      desc: "From premium Amano materials to 100% guaranteed visa success, quality is our baseline.",
      icon: ShieldCheck,
      color: "blue",
    },
    {
      id: 2,
      title: "Absolute Transparency",
      desc: "Clear communication, no hidden fees, and honest guidance in every project we undertake.",
      icon: Target,
      color: "cyan",
    },
    {
      id: 3,
      title: "Client-Centric Approach",
      desc: "Your vision is our blueprint. We tailor our expertise entirely around your ultimate success.",
      icon: Users,
      color: "indigo",
    }
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-slate-50 overflow-hidden flex justify-center z-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Pillars of <span className="text-blue-600">Our Success</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            // Desktop Stagger Effect
            const staggerClass = index === 1 ? "md:translate-y-8" : "";

            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`${staggerClass} bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group flex flex-col items-center text-center`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-${value.color}-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-${value.color}-100`}>
                  <Icon className={`w-6 h-6 text-${value.color}-600`} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  );
}