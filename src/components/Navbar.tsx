"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll detection for glassy effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    { name: "Academy", path: "/education" },
    { name: "Construction", path: "/construction" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? "py-3 bg-white/80 backdrop-blur-lg border-b border-slate-200/50 shadow-sm" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        
        {/* 1. Logo (Text removed, Image enlarged while maintaining navbar height) */}
        <Link href="/" className="relative z-[110] flex items-center">
          <Image 
            src="/brightkey.jpg" 
            alt="Bright Key Logo" 
            width={300} 
            height={100} 
            priority
            className="h-18 md:h-18 w-auto object-contain rounded-md"
          />
        </Link>

        {/* 2. Desktop Links (Cute & Compact) */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-8 px-6 py-2.5 rounded-full bg-slate-50/50 border border-slate-100 shadow-sm">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path}
                className={`text-[13px] font-bold tracking-wide uppercase transition-colors hover:text-blue-600 ${
                  pathname === link.path ? "text-blue-600" : "text-slate-500"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact CTA */}
          <Link href="/contact">
            <button className="group flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300">
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* 3. Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-4 relative z-[110]">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl bg-slate-900 text-white shadow-md transition-all active:scale-90"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 4. Mobile Menu Overlay (Advanced Animation) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 h-screen bg-white z-[105] lg:hidden flex flex-col p-8 pt-32"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-4xl font-black tracking-tight ${
                      pathname === link.path ? "text-blue-600" : "text-slate-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 pt-8 border-t border-slate-100"
              >
                <Link 
                  href="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between w-full p-6 rounded-[2rem] bg-blue-600 text-white"
                >
                  <span className="text-xl font-bold">Contact Us</span>
                  <div className="p-2 bg-white/20 rounded-full">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </Link>
              </motion.div>
            </div>

            {/* Bottom Credits in Mobile Menu */}
            <div className="mt-auto">
              <p className="text-slate-400 text-sm font-medium flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-500" />
                Bright Key Group
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}