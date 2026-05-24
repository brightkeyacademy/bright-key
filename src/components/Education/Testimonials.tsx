"use client";

import { motion, Variants } from "framer-motion";
import { MessageCircle, Quote, Star } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Dr. Saman Weerasinghe",
    role: "University Vice-Chancellor",
    review: "The entire process was orchestrated flawlessly. The attention to detail and professional execution exceeded our highest expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Corporate Director",
    role: "Leading Tech Firm",
    review: "Their multimedia setups and technical coordination transformed our product launch. A team that truly delivers extraordinary digital experiences.",
    rating: 5,
  },
  {
    id: 3,
    name: "Head of Administration",
    role: "Private Institute",
    review: "100% commitment to a transparent and stress-free process. The management and arrangements were a massive hit among our students.",
    rating: 5,
  },
  {
    id: 4,
    name: "Event Partner",
    role: "Vendor Network",
    review: "Working with them is a breeze. Their strong partnerships, modern layouts, and precise execution make them the top choice in the industry.",
    rating: 5,
  },
  {
    id: 5,
    name: "Sarah Perera",
    role: "Brand Manager",
    review: "An absolute delight to work with. They handled our corporate requirements with such elegance and creativity. Highly recommended!",
    rating: 5,
  },
  {
    id: 6,
    name: "Director of Operations",
    role: "Global Logistics Ltd",
    review: "The coordination and visual aesthetic were world-class. They are our go-to partner for all professional projects. They never disappoint.",
    rating: 5,
  },
  {
    id: 7,
    name: "Ruwani Fernando",
    role: "School Principal",
    review: "They managed our annual program seamlessly. The modern designs and overall flow were loved by everyone involved.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(4);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = testimonials.length - visibleCards;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= maxIndex ? 0 : prevIndex + 1
      );
    }, 4500);

    return () => clearInterval(timer);
  }, [maxIndex]);

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
    <section className="relative w-full py-24 md:py-32 bg-white overflow-hidden z-20">
      
      {/* Background Gradients */}
      <div className="absolute top-10 left-[-10%] w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none transform-gpu will-change-transform" />
      <div className="absolute bottom-10 right-[-10%] w-[500px] h-[500px] bg-cyan-50/40 rounded-full blur-[100px] pointer-events-none transform-gpu will-change-transform" />

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
            <MessageCircle className="w-3.5 h-3.5" />
            Client Stories
          </motion.div>

          {/* Heading - Changed to single line without breaking */}
          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-6"
          >
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Visionaries.</span>
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariants}
            className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium max-w-2xl"
          >
            Hear from the people who have experienced our commitment to excellence, transparent processes, and world-class service delivery.
          </motion.p>
        </div>

        {/* ===================== SLIDER SECTION ===================== */}
        <div className="w-full overflow-hidden">
          <motion.div 
            className="flex transform-gpu will-change-transform py-4"
            animate={{ x: `calc(-${currentIndex * (100 / visibleCards)}%)` }}
            transition={{ 
              type: "tween", 
              ease: [0.16, 1, 0.3, 1], 
              duration: 0.8 
            }}
          >
            {testimonials.map((item) => (
              <div 
                key={item.id} 
                className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-3"
              >
                {/* Unique Card Layout */}
                <div className="relative h-full w-full p-8 rounded-[2rem] bg-white border border-slate-100 shadow-[0_8px_30px_rgb(15,23,42,0.04)] hover:shadow-[0_20px_40px_rgb(37,99,235,0.08)] hover:-translate-y-2 transition-all duration-500 group flex flex-col overflow-hidden transform-gpu">
                  
                  {/* Subtle left accent border on hover */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Watermark Quote Icon (Bottom Right) */}
                  <div className="absolute -bottom-4 -right-4 text-slate-50 transform group-hover:scale-110 group-hover:-rotate-12 group-hover:text-blue-50/50 transition-all duration-700 pointer-events-none z-0">
                    <Quote size={120} strokeWidth={1} />
                  </div>
                  
                  {/* 1. Header of Card: Avatar, Name, Role & Stars */}
                  <div className="relative z-10 flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0">
                        {item.name.charAt(0)}
                      </div>
                      <div className="flex flex-col">
                        <h4 className="text-slate-900 font-bold text-sm sm:text-base group-hover:text-blue-600 transition-colors line-clamp-1">
                          {item.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500 line-clamp-1">{item.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Rating Stars shifted up */}
                  <div className="relative z-10 flex gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* 2. Review Content (Bottom) */}
                  <div className="relative z-10 flex-grow">
                    <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                      "{item.review}"
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ===================== MODERN DOTS INDICATOR ===================== */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <motion.button
              key={`dot-${idx}`}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full cursor-pointer transform-gpu transition-colors duration-300 ${
                currentIndex === idx ? "bg-blue-600" : "bg-slate-200 hover:bg-slate-300"
              }`}
              animate={{ width: currentIndex === idx ? 32 : 8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}