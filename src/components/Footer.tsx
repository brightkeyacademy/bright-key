"use client";

import { motion } from "framer-motion";
import { Building2, GraduationCap, MapPin, Phone, Mail, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Image component added

// ==============================================================
// Custom Social Icons (TikTok added, Twitter removed)
// ==============================================================
const FacebookIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const InstagramIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const TiktokIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /><path d="M15 8a4 4 0 1 0-4-4" /></svg>
);
const LinkedinIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Premium White/Light Background
    <footer className="relative bg-white pt-20 pb-10 overflow-hidden border-t border-slate-100">
      
      {/* Decorative Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        
        {/* Main Footer Grid - Text LEFT ALIGNED for mobile & desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 text-left">
          
          {/* 1. Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start lg:col-span-4 lg:pr-8"
          >
            {/* Enlarged Logo Only */}
            <Link href="/" className="flex items-center mb-8 group">
              <div className="relative flex-shrink-0">
                <Image 
                  src="/brightkey.png" 
                  alt="Bright Key Logo" 
                  width={400} 
                  height={150} 
                  priority
                  className="h-24 sm:h-32 w-auto object-contain rounded-md transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>
            
            <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-sm">
              Delivering unparalleled excellence across cutting-edge Construction solutions and world-class Education services. Your future, our foundation.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[FacebookIcon, InstagramIcon, TiktokIcon, LinkedinIcon].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* 2. Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-start lg:col-span-2"
          >
            <h3 className="text-slate-900 font-extrabold mb-6 uppercase tracking-wider text-xs">Quick Links</h3>
            <ul className="space-y-4 w-full">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about-us' },
                { name: 'Contact Us', path: '/contact' },
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Terms of Service', path: '/terms' }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.path} className="group flex items-center text-sm text-slate-500 hover:text-blue-600 transition-colors font-medium">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-500" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 3. Core Divisions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-start lg:col-span-3"
          >
            <h3 className="text-slate-900 font-extrabold mb-6 uppercase tracking-wider text-xs">Core Divisions</h3>
            <div className="space-y-4 w-full max-w-sm">
              
              <Link href="/construction" className="group flex items-start gap-4 p-3 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-md border border-transparent hover:border-blue-100 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-slate-900 text-sm font-bold mb-0.5 group-hover:text-blue-600 transition-colors">Construction</h4>
                  <p className="text-xs text-slate-500 font-medium">Premium Amano & Materials</p>
                </div>
              </Link>

              <Link href="/education" className="group flex items-start gap-4 p-3 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-md border border-transparent hover:border-cyan-100 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-50 group-hover:text-cyan-600 transition-colors shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-slate-900 text-sm font-bold mb-0.5 group-hover:text-cyan-600 transition-colors">Academy</h4>
                  <p className="text-xs text-slate-500 font-medium">South Korea Intakes & Visa</p>
                </div>
              </Link>

            </div>
          </motion.div>

          {/* 4. Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-start lg:col-span-3"
          >
            <h3 className="text-slate-900 font-extrabold mb-6 uppercase tracking-wider text-xs">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-sm text-slate-500 font-medium">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>
                  123 Bright Key Tower, <br />Colombo 03, Sri Lanka.
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="tel:+94771337989" className="hover:text-blue-600 transition-colors">+94 77 133 7989</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="mailto:info@brightkey.lk" className="hover:text-blue-600 transition-colors">info@brightkey.lk</a>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center md:items-start lg:items-center justify-between gap-6 text-center md:text-left"
        >
          {/* Copyright */}
          <p className="text-[11px] sm:text-xs font-medium text-slate-500">
            © {currentYear} Bright Key Group. All rights reserved.
          </p>

          {/* DEVELOPER CREDIT */}
          <p className="text-gray-500 text-xs sm:text-sm font-medium flex items-center justify-center md:justify-end gap-1.5 w-full md:w-auto">
            Designed & Developed by 
            <a 
              href="https://padumainduwara.me" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-900 hover:text-blue-600 font-bold inline-flex items-center gap-1 transition-all duration-300 group"
            >
              Paduma Induwara 
              <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
            </a>
          </p>
        </motion.div>

      </div>
    </footer>
  );
}