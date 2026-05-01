"use client";

import { motion } from "framer-motion";
import { Building2, ArrowRight, Layers, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      id: "education",
      title: "Education & Guidance",
      subtitle: "Bright Key Academy",
      description: "Your bridge to world-class education. Complete university application support and visa guidance, specializing in South Korea intakes.",
      features: ["South Korea Intakes", "University Placements", "Visa & TOPIK Guidance"],
      logo: "/brightkeyedu.png",
      logoColor: "bg-white",
      image: "/services/education.jpg", 
      link: "/education",
      themeColor: "group-hover:shadow-blue-500/25",
      accent: "bg-blue-600",
    },
    {
      id: "construction",
      title: "Construction & Materials",
      subtitle: "Bright Key Construction",
      description: "Premium building materials and architectural solutions. We specialize in high-quality Amano sheets, roofing, and structural excellence.",
      features: ["Amano Roofing Sheets", "Structural Engineering", "Premium Materials"],
      icon: <Building2 className="w-6 h-6 text-white" />, 
      image: "/services/construction.jpg", 
      link: "/construction",
      themeColor: "group-hover:shadow-amber-500/25",
      accent: "bg-amber-500",
    },
  ];

  return (
    <section className="relative w-full pt-12 md:pt-16 pb-24 md:pb-32 bg-[#f8fafc] overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-blue-50/50 to-transparent rounded-full blur-[100px] opacity-70 pointer-events-none translate-x-1/3 -translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-blue-600 font-medium text-sm mb-6 shadow-sm"
          >
            <Layers className="w-4 h-4" />
            Bright Key Group of Companies
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            Excellence Across <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Multiple Industries
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed font-medium"
          >
            Our specialized divisions are built on a foundation of uncompromising quality and innovation, ensuring next-level success for every client.
          </motion.p>
        </div>

        {/* Services Grid - 100% Responsive Cute Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={service.link} className="block group">
                {/* Mobile වල card එක ටිකක් දික් කළා (h-[540px]), Desktop වල h-[560px] */}
                <div className={`relative w-full h-[540px] sm:h-[560px] rounded-[2.5rem] overflow-hidden bg-slate-900 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl ${service.themeColor} border border-slate-200/10`}>
                  
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 ease-out"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-95 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* මෙතන තමයි padding එක හැදුවේ (pb-12/sm:pb-14) button එක යටින් space එක තියන්න */}
                  <div className="absolute inset-0 px-6 pt-6 pb-12 sm:px-10 sm:pt-10 sm:pb-14 flex flex-col justify-end">
                    
                    {/* Floating Badge with Logo or Icon */}
                    <div className="absolute top-6 left-6 sm:top-10 sm:left-10">
                      <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl group-hover:bg-white/20 transition-all duration-500">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden 
                          ${service.id === 'education' ? 'bg-white' : service.accent} 
                          ${service.id === 'education' ? 'p-1' : 'p-2'}`}>
                          
                          {service.logo ? (
                            <Image 
                              src={service.logo} 
                              alt="Logo" 
                              width={60} 
                              height={60} 
                              className="object-contain w-full h-full scale-110" 
                            />
                          ) : (
                            service.icon
                          )}
                        </div>
                        
                        <span className="font-bold text-xs sm:text-sm tracking-wide uppercase">{service.subtitle}</span>
                      </div>
                    </div>

                    {/* Content Section - Animation translation එක adjust කළා mobile වලට ගැළපෙන්න */}
                    <div className="relative z-10 transform translate-y-4 sm:translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-[1.75rem] sm:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                        {service.title}
                      </h3>
                      
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                        {service.description}
                      </p>

                      {/* Cute Features List */}
                      <ul className="space-y-2.5 mb-6 sm:mb-8">
                        {service.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-2.5 text-white/90 text-sm font-semibold">
                            <div className={`p-0.5 rounded-full ${service.accent}`}>
                               <Check className="w-3 h-3 text-white" />
                            </div>
                            {feat}
                          </li>
                        ))}
                      </ul>
                      
                      {/* Interactive Explore Division - Button එකට යටින් දැන් ලස්සනට space තියෙනවා */}
                      <div className="flex items-center gap-2 text-white font-bold text-sm">
                        <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 group-hover:bg-white group-hover:text-slate-900 transition-all duration-300">
                          Explore Division
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}