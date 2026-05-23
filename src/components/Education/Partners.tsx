"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Partners() {
  const partners = [
    { id: 1, name: "Daegu Arts University", logo: "/partners/logo-1.png" },
    { id: 2, name: "Seoul Tech Institute", logo: "/partners/logo-2.png" },
    { id: 3, name: "Korea Royal Academy", logo: "/partners/logo-3.png" },
  ];

  return (
    // Background eka soft blue gradient ekak kala. 
    // Hero eke black eken passe meka penne "Wow" kiyana widiyata.
    <section className="relative w-full py-14 md:py-24 pb-16 md:pb-18 bg-gradient-to-b from-[#f0f4ff] to-[#f8faff] flex justify-center z-20">
 
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 1] }}
        className="w-[90%] max-w-6xl bg-white/70 backdrop-blur-xl border border-white/80 rounded-[2rem] md:rounded-full px-6 py-8 md:px-12 md:py-6 shadow-[0_8px_30px_rgb(15,23,42,0.04)] hover:shadow-[0_15px_40px_rgb(37,99,235,0.08)] transition-all duration-500"
      >
       
       <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 relative z-10">
            
            {/* ================= Text Area (Left Side) ================= */}
            <div className="text-center md:text-left flex-shrink-0">
              <motion.p 
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-xs md:text-xs font-black tracking-[0.2em] text-blue-600 uppercase mb-1 drop-shadow-sm"
              >
                Trusted By
              </motion.p>
              <motion.h2 
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg sm:text-xl md:text-xl font-bold text-slate-800"
              >
                Top Universities in South Korea
              </motion.h2>
            </div>

            {/* ================= Divider Line ================= */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="w-16 h-[2px] md:w-[2px] md:h-12 bg-gradient-to-b from-transparent via-slate-300 to-transparent rounded-full my-2 md:my-0" 
            />

            {/* ================= Logos Grid (Right Side) ================= */}
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-8 sm:gap-10 md:gap-14 w-full">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.5 + (index * 0.15),
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  whileHover={{ scale: 1.1, y: -4 }} 
                  className="relative group/logo cursor-pointer flex items-center justify-center grayscale-[90%] opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-400"
                >
                  <div className="absolute inset-0 bg-blue-400/10 blur-xl rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity duration-400 -z-10" />

                  <div className="relative h-10 sm:h-12 w-28 sm:w-36 drop-shadow-sm group-hover/logo:drop-shadow-lg transition-all duration-400">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
      </motion.div>
    </section>
  );
}

