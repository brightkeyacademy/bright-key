"use client";

import { useState } from "react";
import { motion } from "framer-motion"; 
import Preloader from "@/components/Preloader";
import Hero from "@/components/Home/Hero";
import AboutSummary from "@/components/Home/AboutSummary"; 
import Services from "@/components/Home/Services";
import WhyChooseUs from "@/components/Home/WhyChooseUs"; 
import Testimonials from "@/components/Home/Testimonials";
import Stats from "@/components/Home/Stats";
import CTA from "@/components/Home/CTA";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; 

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen bg-white">
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Main Content - Framer motion walin supiriyata fade in wenawa */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        > 
          <Navbar />
          <Hero />
          <Stats />
          <AboutSummary />
          <Services />
          <WhyChooseUs />
          <Testimonials />
          <CTA/>
          <Footer />         
          
        </motion.div>
      )}
    </main>
  );
}