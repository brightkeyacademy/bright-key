"use client";

import { motion } from "framer-motion";

export default function ContactMap() {
  return (
    <section className="py-10 pb-20 md:pb-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full h-[350px] md:h-[450px] rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 relative group"
        >
          <div className="absolute inset-0 bg-slate-100 animate-pulse -z-10" />
          {/* Map pointing to Colombo 03 */}
          <iframe 
            src="https://maps.google.com/maps?q=Colombo%2003%2C%20Sri%2C%20Lanka&t=&z=14&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full relative z-10 filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}