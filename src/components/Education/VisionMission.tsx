"use client";

import { motion } from "framer-motion";
import { Target, Globe2, ArrowRight } from "lucide-react";

export default function VisionMission() {
  const cards = [
    {
      id: "mission",
      title: "Our Mission",
      content:
        "To unlock limitless potential through a future-focused education, empowering students with the character and critical thinking to achieve greatness.",
      icon: Target,
      theme: "blue",
      gradientText: "from-blue-600 to-indigo-600",
      glowBg: "bg-blue-500/5",
      borderHover: "group-hover:border-blue-500/30",
      shadowHover: "group-hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)]",
      iconColors: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
      delay: 0.1,
    },
    {
      id: "vision",
      title: "Our Vision",
      content:
        "To cultivate globally-minded leaders who navigate a changing world with empathy, innovation, and a drive for progress.",
      icon: Globe2,
      theme: "cyan",
      gradientText: "from-cyan-600 to-blue-500",
      glowBg: "bg-cyan-500/5",
      borderHover: "group-hover:border-cyan-500/30",
      shadowHover: "group-hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.15)]",
      iconColors: "bg-cyan-100 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white",
      delay: 0.3,
    },
  ];

  return (
    <section className="relative w-full pt-12 md:pt-16 pb-20 md:pb-32 bg-white overflow-hidden flex justify-center z-20">
      
      <div className="max-w-7xl mx-auto px-6 py-6 sm:px-10 lg:px-16 w-full relative z-10">
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: card.delay, ease: [0.21, 1.11, 0.81, 0.99] }}
                className={`group relative bg-white/70 backdrop-blur-xl rounded-[1.5rem] sm:rounded-[2rem] p-7 sm:px-8 sm:py-10 min-h-[220px] border border-slate-100 shadow-sm transition-all duration-500 overflow-hidden flex flex-col sm:flex-row gap-6 sm:gap-8 items-start hover:-translate-y-1 ${card.borderHover} ${card.shadowHover}`}
              >
                
                {/* Subtle Background Fill on Hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${card.glowBg} pointer-events-none -z-10`} />

                {/* Animated Top Gradient Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-100">
                  <div className={`h-full w-0 group-hover:w-full bg-gradient-to-r ${card.gradientText} transition-all duration-700 ease-out`} />
                </div>

                {/* Left Side: Icon Section */}
                <div className="flex-shrink-0 mt-1">
                  <div className={`relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-sm ${card.iconColors}`}>
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>

                {/* Right Side: Typography & Content */}
                <div className="flex flex-col flex-1 relative z-10 w-full">
                  <div className="flex items-center justify-between w-full mb-4">
                    
                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
                      <span className={`bg-clip-text text-transparent bg-gradient-to-r ${card.gradientText} bg-[length:200%_auto] bg-left group-hover:bg-right transition-all duration-700`}>
                        {card.title}
                      </span>
                    </h3>
                    
                    {/* Decorative Arrow */}
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 border border-slate-100">
                      <ArrowRight className={`w-4 h-4 text-${card.theme}-500`} />
                    </div>

                  </div>

                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
                    {card.content}
                  </p>
                </div>
                
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}