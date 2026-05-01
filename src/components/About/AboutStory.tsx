"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden flex justify-center z-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
        
        {/* Editorial 3-Column Layout (Text in Center, Images on sides) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Image Column (Hidden on mobile for clean look, visible on Desktop) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="hidden lg:flex lg:col-span-3 flex-col gap-6"
          >
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl">
              <Image src="/about/about-1.jpg" alt="Construction Work" fill className="object-cover" />
            </div>
            <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-xl lg:-translate-x-6">
              <Image src="/about/about-2.jpg" alt="Education Services" fill className="object-cover" />
            </div>
          </motion.div>

          {/* Center Text Column (Col Span 6) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-center text-center px-0 sm:px-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
              More than just a service provider. <br className="hidden sm:block" />
              <span className="text-blue-600">We are your partners in growth.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium mb-6">
              At Bright Key, we understand that whether you are laying the foundation for a new commercial building or planning your higher education journey in South Korea, the goal is the same: building a secure and successful future.
            </p>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium mb-8">
              Our unique position operating across both the Construction and Education sectors allows us to bring a distinct level of precision, project management, and unwavering dedication to everything we do. We don't just build structures and process visas; we architect dreams.
            </p>

            {/* Mobile Only Image (Replaces side images for mobile) */}
            <div className="lg:hidden w-full aspect-video relative rounded-[2rem] overflow-hidden shadow-lg mt-4">
              <Image src="/about/about-1.jpg" alt="Bright Key Team" fill className="object-cover" />
            </div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="hidden lg:flex lg:col-span-3 flex-col gap-6"
          >
            <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-xl lg:translate-x-6">
              <Image src="/about/about-3.jpg" alt="South Korea Education" fill className="object-cover" />
            </div>
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl">
              <Image src="/about/about-4.jpg" alt="Modern Architecture" fill className="object-cover" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}