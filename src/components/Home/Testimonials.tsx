"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Testimonials() {
  // Bright Key (Education & Construction) Reviews 7k
  const testimonials = [
    {
      id: 1,
      name: "Kasun Perera",
      role: "Engineering Student",
      course: "MSc Data Science",
      location: "South Korea",
      content: "Bright Key Academy completely transformed my future. The visa process was seamless, and their guidance to get into my dream university was beyond expectation.",
      image: "https://i.pravatar.cc/150?img=11",
      rating: 5,
      division: "Education",
    },
    {
      id: 2,
      name: "Saman Kumara",
      role: "Project Manager",
      course: "BuildCorp Inc.",
      location: "Colombo",
      content: "We sourced Amano sheets and building materials for our warehouse project. The quality is unmatched, and delivery was exactly on time. Highly recommended!",
      image: "https://i.pravatar.cc/150?img=33",
      rating: 5,
      division: "Construction",
    },
    {
      id: 3,
      name: "Nethmi Fernando",
      role: "Graduate Student",
      course: "BSc Business",
      location: "South Korea",
      content: "From the TOPIK language preparation to the final university interview, the Bright Key team was there. They treat your dreams as their own.",
      image: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      division: "Education",
    },
    {
      id: 4,
      name: "Tharindu Silva",
      role: "Contractor",
      course: "Skyline Builders",
      location: "Gampaha",
      content: "The structural engineering advice and the premium roofing materials provided by Bright Key Construction saved us both time and money. A truly reliable partner.",
      image: "https://i.pravatar.cc/150?img=15",
      rating: 5,
      division: "Construction",
    },
    {
      id: 5,
      name: "Dinithi Jayasuriya",
      role: "Undergraduate",
      course: "BA Fashion Design",
      location: "Italy",
      content: "A truly remarkable team. They carefully reviewed my portfolio and matched me with the perfect design school. The post-arrival support is world-class.",
      image: "https://i.pravatar.cc/150?img=20",
      rating: 5,
      division: "Education",
    },
    {
      id: 6,
      name: "Amila Sandaruwan",
      role: "Home Owner",
      course: "Private Residence",
      location: "Kandy",
      content: "I used Bright Key for my home's Amano roofing. The finishing is flawless, and the team's professionalism during installation was impressive.",
      image: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      division: "Construction",
    },
    {
      id: 7,
      name: "Shenali Perera",
      role: "Nursing Student",
      course: "BSc Nursing",
      location: "Australia",
      content: "I was so stressed about the application process, but their personalized counseling and fast-track processing got me my offer letter in record time.",
      image: "https://i.pravatar.cc/150?img=9",
      rating: 5,
      division: "Education",
    },
  ];

  // Slider Logic State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isHovered, setIsHovered] = useState(false);

  // Responsive Items Per View Logic
  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1); // Mobile: 1 Item
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // Tablet: 2 Items
      } else {
        setItemsPerView(3); // Desktop: 3 Items
      }
    };
    
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const maxIndex = testimonials.length - itemsPerView;

  // Auto-Slide Logic (Slow & Smooth)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000); // 5 Seconds smooth auto-slide
    return () => clearInterval(interval);
  }, [maxIndex, isHovered]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    // Background bg-slate-50 eka standard gap ekka thiyenawa
    <section className="relative w-full py-20 md:py-32 bg-slate-50 overflow-hidden">
      
      {/* Background soft glowing elements */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-[100px] translate-x-1/2 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-blue-600 font-medium text-sm mb-6 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Success Stories
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            Trusted by <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Hundreds of Clients
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 text-base md:text-lg max-w-2xl leading-relaxed"
          >
            Don't just take our word for it. Hear from our clients and students who have experienced the Bright Key standard of excellence.
          </motion.p>
        </div>

        {/* Slider Container */}
        <div 
          className="relative w-full overflow-hidden pb-10" // pb-10 added for drop shadows
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slider Wrapper with Framer Motion */}
          <motion.div 
            className="flex gap-6 w-full cursor-grab active:cursor-grabbing items-center"
            animate={{ x: `calc(-${currentIndex} * (100% / ${itemsPerView} + ${24 / itemsPerView}px))` }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }} // Supiri smooth ease curve
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.3333%-16px)] py-4"
              >
                {/* Review Card - Premium Look */}
                <div className="group relative bg-white rounded-[2rem] p-8 sm:p-10 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(59,130,246,0.1)] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full overflow-hidden">
                  
                  {/* Huge Background Quote Watermark */}
                  <div className="absolute top-4 right-4 text-slate-50 group-hover:text-blue-50 transition-colors duration-500 pointer-events-none transform -scale-x-100">
                    <Quote className="w-32 h-32 opacity-50" />
                  </div>

                  {/* Top: Division Badge & Stars */}
                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <span className={`w-max text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${testimonial.division === 'Education' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'}`}>
                      {testimonial.division}
                    </span>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Middle: Review Content */}
                  <div className="relative z-10 flex-grow mb-8">
                    <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium italic">
                      "{testimonial.content}"
                    </p>
                  </div>

                  {/* Bottom: User Profile Info */}
                  <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-slate-100/80">
                    <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden ring-4 ring-white shadow-sm group-hover:ring-blue-50 transition-all duration-300 shrink-0">
                      <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-base group-hover:text-blue-600 transition-colors">
                        {testimonial.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <p className="text-[11px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">
                          {testimonial.role}
                        </p>
                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                        <p className="text-[11px] md:text-xs font-semibold text-blue-600 truncate">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Modern Line Indicators (Dots) */}
        <div className="flex items-center justify-center gap-2 mt-8 md:mt-12">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                currentIndex === index 
                  ? "w-12 bg-gradient-to-r from-blue-600 to-cyan-500 shadow-md shadow-blue-500/20" 
                  : "w-4 bg-slate-200 hover:bg-slate-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}