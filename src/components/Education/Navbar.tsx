"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AcademyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Universities", href: "#universities" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Floating Wrapper - z-[40] ensures it stays below the open mobile menu */}
      <div className="fixed top-4 sm:top-6 inset-x-0 z-[40] flex justify-center px-4 sm:px-6 pointer-events-none">
        
        {/* Main Floating Nav - Always White Glassmorphism with Super Smooth Slide Down */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          // Apple-like super smooth custom ease transition, zero lag
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
          className={`pointer-events-auto w-full max-w-5xl rounded-2xl sm:rounded-[2rem] bg-white/95 backdrop-blur-xl border border-white/80 transition-shadow duration-500 flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-2.5 transform-gpu ${
            isScrolled 
              ? "shadow-[0_8px_30px_rgba(0,0,0,0.08)]" 
              : "shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
          }`}
        >
          {/* Logo Section */}
          <Link href="/" className="relative z-10 flex items-center group overflow-visible">
            <div className="relative h-12 w-[160px] sm:h-14 sm:w-[180px] md:h-[60px] md:w-[220px] transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/brightkeyedu.png" 
                alt="BrightKey Academy" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Links with Sliding Magic Pill */}
          <div 
            className="hidden md:flex items-center gap-1 relative z-10" 
            onMouseLeave={() => setHoveredLink(null)}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                className={`relative px-5 py-2.5 rounded-full text-[15px] font-bold transition-colors duration-300 ${
                  hoveredLink === link.name ? "text-blue-700" : "text-slate-600"
                }`}
              >
                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full -z-10 bg-blue-100/60"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-3 z-10">
            {/* Desktop Button */}
            <div className="hidden md:block">
              <Link href="#contact">
                <button className="group relative px-7 py-3 bg-slate-900 text-white rounded-full text-sm font-bold overflow-hidden shadow-lg transition-all duration-300 active:scale-95 transform-gpu">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative flex items-center gap-2">
                    Apply Now
                    <ArrowRight className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </span>
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button - Always styled for white background */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 rounded-full bg-slate-100/80 text-slate-800 hover:bg-blue-100 hover:text-blue-600 backdrop-blur-md transition-colors duration-300"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Modern Mobile Side-Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur - z-[60] to cover everything including the floating nav */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden transform-gpu"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Drawer from Right - z-[70] to be the topmost element */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[320px] bg-white z-[70] md:hidden shadow-[0_0_40px_rgba(0,0,0,0.3)] flex flex-col transform-gpu"
            >
              {/* Drawer Header with Close Button */}
              <div className="flex justify-end items-center p-6 pb-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-slate-100 text-slate-800 rounded-full hover:bg-slate-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    key={link.name}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-2xl font-bold text-slate-800 hover:text-blue-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + navLinks.length * 0.1 }}
                  className="mt-auto pt-8 pb-8 border-t border-slate-100"
                >
                  <Link href="#contact" onClick={() => setIsOpen(false)}>
                    <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-2xl text-lg font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all active:scale-95 transform-gpu">
                      Apply Now
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}