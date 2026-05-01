import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/About/AboutHero";
import AboutStory from "@/components/About/AboutStory";
import AboutValues from "@/components/About/AboutValues";
import CTA from "@/components/Home/CTA";

export const metadata = {
  title: "About Us | Bright Key",
  description: "Building Foundations. Empowering Minds. Discover the story behind Bright Key Group.",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* 1. Hero Section */}
      <AboutHero />
      
      {/* 2. Unique Editorial Story Layout */}
      <AboutStory />
      
      {/* 3. Core Values Staggered Grid */}
      <AboutValues />
      
      {/* 4. Shared Call to Action */}
      <CTA />
      
      <Footer />
    </main>
  );
}