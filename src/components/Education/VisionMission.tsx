"use client";

import { motion } from "framer-motion";
import { Target, Globe2 } from "lucide-react";

export default function VisionMission() {
  const cards = [
    {
      id: "mission",
      title: "Our Mission",
      content: "To unlock limitless potential through a future-focused education, empowering students with the character and critical thinking to achieve greatness.",
      icon: Target,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      gradientLine: "from-blue-600 to-blue-400",
      hoverBorder: "hover:border-blue-100",
      hoverShadow: "hover:shadow-blue-900/5",
      delay: 0.1,
    },
    {
      id: "vision",
      title: "Our Vision",
      content: "To cultivate globally-minded leaders who navigate a changing world with empathy, innovation, and a drive for progress.",
      icon: Globe2,
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-600",
      gradientLine: "from-cyan-500 to-blue-500",
      hoverBorder: "hover:border-cyan-100",
      hoverShadow: "hover:shadow-cyan-900/5",
      delay: 0.3,
    }
  ];

  return (
    // pt-10 md:pt-16 ensures it connects perfectly with the About section above it without too much empty space
    <section className="relative w-full pt-10 md:pt-12 pb-20 md:pb-32 bg-white overflow-hidden flex justify-center z-20">
      
      {/* Centered, Responsive Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-10">
        
        {/* 2-Column Grid for Cards - perfectly balanced on all screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: card.delay, ease: "easeOut" }}
                // Premium Minimalist Card Design (No extra clutter)
                className={`group relative bg-white rounded-[2rem] p-8 sm:p-10 lg:p-12 border border-slate-100 shadow-[0_8px_30px_rgb(15,23,42,0.03)] transition-all duration-500 overflow-hidden flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-xl ${card.hoverBorder} ${card.hoverShadow}`}
              >
                
                {/* Decorative Top Line - Gives that "Stripe/Apple" elegant premium feel */}
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r opacity-80 group-hover:opacity-100 transition-opacity duration-300 ${card.gradientLine}`} />

                {/* Cute Icon Container */}
                <div className={`relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${card.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-white`}>
                  <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${card.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-xl sm:text-2xl font-extrabold mb-4 text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                  {card.title}
                </h3>

                {/* Content - Elegant reading size, perfect line height */}
                <p className="relative z-10 text-slate-500 text-sm sm:text-base leading-relaxed font-medium max-w-sm">
                  {card.content}
                </p>

                {/* Very subtle glow behind the text on hover (instead of huge watermark) */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b from-transparent to-${card.iconBg.split('-')[1]}-50/30 z-0 pointer-events-none`} />
                
              </motion.div>
            )
          })}

        </div>
      </div>
    </section>
  );
}