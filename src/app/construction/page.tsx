"use client";

import { motion, Variants } from "framer-motion"; // Added 'Variants' type
import { HardHat, ArrowLeft, MapPin, Phone, Mail, Hammer } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; 

// Custom Social Icons
const FacebookIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const TwitterIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const InstagramIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const LinkedinIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function ConstructionComingSoon() {
  // Added the strict 'Variants' type and cast the ease array
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 1] as [number, number, number, number], // Strict 4-value array cast
      },
    }),
  };

  const socialLinks = [
    { icon: FacebookIcon, href: "#" },
    { icon: TwitterIcon, href: "#" },
    { icon: InstagramIcon, href: "#" },
    { icon: LinkedinIcon, href: "#" },
  ];

  return (
    // Flex-col and min-h-screen guarantee the Footer stays at the very bottom
    <div className="flex flex-col min-h-screen bg-[#fafcff]">
      
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Main Content - flex-grow makes it take up remaining space.
          pt-32 md:pt-40 fixes the Navbar overlap. pb-24 fixes Footer gap. */}
      <main className="relative w-full flex-grow flex items-center justify-center overflow-hidden pt-32 md:pt-40 pb-24 md:pb-32 px-4 sm:px-6">
        
        {/* Animated Soft Glowing Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-blue-400/10 rounded-full blur-[80px] md:blur-[120px]" 
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-cyan-400/10 rounded-full blur-[80px] md:blur-[120px]" 
          />
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
          
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200/60 shadow-sm text-slate-600 font-medium text-xs sm:text-sm mb-8 md:mb-10 backdrop-blur-sm"
          >
            <HardHat className="w-4 h-4 text-blue-500" />
            <span className="tracking-widest uppercase text-[10px] sm:text-xs font-bold">Under Construction</span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.02em] text-slate-900 mb-6 leading-[1.15] md:leading-[1.1]"
          >
            We're Building Something <br className="hidden sm:block" />
            <span className="relative inline-block mt-2 sm:mt-0">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500">
                Extraordinary.
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-blue-400/20 blur-md rounded-full"></span>
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="text-base sm:text-lg md:text-xl text-slate-500/90 mb-12 max-w-2xl mx-auto leading-relaxed font-medium px-4 sm:px-0"
          >
            The Bright Key Construction division is currently laying the foundation for a brand new digital experience. Stay tuned for premium Amano and architectural solutions.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 w-full max-w-3xl mb-12"
          >
            <div className="group flex flex-col items-center justify-center gap-3 p-6 rounded-3xl bg-white/60 backdrop-blur-md border border-white/40 shadow-xl shadow-blue-900/5 hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <p className="text-slate-800 text-sm font-bold">+94 77 133 7989</p>
            </div>

            <div className="group flex flex-col items-center justify-center gap-3 p-6 rounded-3xl bg-white/60 backdrop-blur-md border border-white/40 shadow-xl shadow-blue-900/5 hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 mb-2 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <p className="text-slate-800 text-sm font-bold">info@brightkey.lk</p>
            </div>

            <div className="group flex flex-col items-center justify-center gap-3 p-6 rounded-3xl bg-white/60 backdrop-blur-md border border-white/40 shadow-xl shadow-blue-900/5 hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1 sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <p className="text-slate-800 text-xs sm:text-sm font-bold text-center leading-tight">Colombo 03, <br />Sri Lanka</p>
            </div>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="flex flex-col items-center gap-8 w-full"
          >
            <Link href="/">
              <button className="group relative px-8 py-4 bg-slate-900 text-white rounded-full font-semibold flex items-center justify-center gap-2 overflow-hidden shadow-[0_8px_30px_rgb(15,23,42,0.2)] hover:shadow-[0_8px_30px_rgb(37,99,235,0.3)] transition-all duration-300 hover:-translate-y-0.5 active:scale-95">
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="relative z-10 text-sm sm:text-base">Back to Home</span>
              </button>
            </Link>

            <div className="flex items-center gap-4 pt-6 border-t border-slate-200/80 w-full max-w-xs justify-center">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={idx} 
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </motion.div>

        </div>
        
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [-5, 5, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-10 md:bottom-20 md:left-20 text-blue-500/10 z-0 pointer-events-none drop-shadow-sm hidden sm:block"
        >
          <HardHat className="w-32 h-32 md:w-48 md:h-48" />
        </motion.div>

        <motion.div 
          animate={{ y: [0, 15, 0], rotate: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-20 right-10 md:top-32 md:right-20 text-cyan-500/10 z-0 pointer-events-none drop-shadow-sm hidden sm:block"
        >
          <Hammer className="w-24 h-24 md:w-40 md:h-40" />
        </motion.div>
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}