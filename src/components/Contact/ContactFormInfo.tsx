"use client";

import { motion } from "framer-motion";
import { MapPin, PhoneCall, Mail, Send, ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ContactFormInfo() {
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isPrivacyAccepted) return;
    alert("Message sent successfully!");
  };

  return (
    <section className="py-16 md:py-24 bg-white relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* 12-Column Grid Layout: 5 Cols for Info, 7 Cols for Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ================= LEFT: CONTACT INFO (Col Span 5) ================= */}
          <div className="lg:col-span-5 space-y-6">
            
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">Reach Out Direct</h2>
              <p className="text-sm text-slate-500 font-medium mb-8 leading-relaxed max-w-sm">
                We believe in human-to-human connections. Contact us directly or drop a message via the form.
              </p>
            </motion.div>

            {/* Info Cards (Cute & Compact) */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              className="p-5 sm:p-6 rounded-3xl bg-slate-50 border border-slate-100 flex gap-4 group hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 text-blue-500">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Head Office</h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">123 Bright Key Tower,<br />Colombo 03,<br />Sri Lanka.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
              className="p-5 sm:p-6 rounded-3xl bg-slate-50 border border-slate-100 flex gap-4 group hover:bg-white hover:shadow-xl hover:border-cyan-100 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 text-cyan-500">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Direct Lines</h4>
                <a href="tel:+94771337989" className="text-xs sm:text-sm text-slate-500 font-medium hover:text-cyan-600 transition-colors block">+94 77 133 7989</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
              className="p-5 sm:p-6 rounded-3xl bg-slate-50 border border-slate-100 flex gap-4 group hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 text-blue-500">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Email Us</h4>
                <a href="mailto:info@brightkey.lk" className="text-xs sm:text-sm text-slate-500 font-medium hover:text-blue-600 transition-colors block">info@brightkey.lk</a>
              </div>
            </motion.div>

          </div>

          {/* ================= RIGHT: CONTACT FORM (Col Span 7) ================= */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-white border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(37,99,235,0.08)] transition-all duration-500 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-10 relative overflow-hidden"
          >
            {/* Top Decorative Line */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400" />
            
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-6">Send a Message</h3>
            
            <form className="space-y-5" onSubmit={handleSubmit}>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wide ml-1">Full Name *</label>
                  <input type="text" required placeholder="John Doe" className="w-full px-4 py-3 sm:py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wide ml-1">Email Address *</label>
                  <input type="email" required placeholder="john@example.com" className="w-full px-4 py-3 sm:py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wide ml-1">Phone Number</label>
                  <input type="tel" placeholder="+94 7X XXX XXXX" className="w-full px-4 py-3 sm:py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400" />
                </div>
                {/* Division Selector */}
                <div className="space-y-1.5 relative">
                  <label className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wide ml-1">Inquiry Type *</label>
                  <div className="relative">
                    <select required className="w-full px-4 py-3 sm:py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none cursor-pointer">
                      <option value="" disabled selected>Select Division...</option>
                      <option value="construction">Construction Services</option>
                      <option value="education">Academy & Education</option>
                      <option value="general">General Inquiry</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wide ml-1">Your Message *</label>
                <textarea rows={4} required placeholder="How can we help you?" className="w-full px-4 py-3 sm:py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none placeholder:text-slate-400"></textarea>
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-start gap-3 mt-2">
                <div className="flex items-center h-5 mt-0.5">
                  <input 
                    id="privacy" type="checkbox" required checked={isPrivacyAccepted} onChange={(e) => setIsPrivacyAccepted(e.target.checked)}
                    className="w-4 h-4 border-slate-300 rounded text-blue-600 focus:ring-blue-500 cursor-pointer accent-blue-600" 
                  />
                </div>
                <label htmlFor="privacy" className="text-xs sm:text-sm text-slate-500 font-medium cursor-pointer leading-snug">
                  I agree to the <Link href="/privacy" className="text-blue-600 font-bold hover:underline">Privacy Policy</Link> regarding the handling of my data.
                </label>
              </div>

              {/* Submit Button (Cute & Responsive) */}
              <button 
                type="submit" disabled={!isPrivacyAccepted}
                className={`w-full sm:w-auto mt-4 group relative px-8 py-3.5 sm:py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 overflow-hidden
                  ${isPrivacyAccepted 
                    ? "bg-slate-900 text-white shadow-[0_8px_20px_rgba(15,23,42,0.2)] hover:shadow-[0_15px_25px_rgba(37,99,235,0.3)] hover:bg-blue-600 hover:-translate-y-0.5 cursor-pointer" 
                    : "bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed"
                  }
                `}
              >
                <span className="relative z-10">Send Message</span>
                <Send className={`w-3.5 h-3.5 sm:w-4 sm:h-4 relative z-10 transition-transform duration-300 ${isPrivacyAccepted ? "group-hover:translate-x-1 group-hover:-translate-y-1" : ""}`} />
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}