import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/Contact/ContactHero";
import ContactFormInfo from "@/components/Contact/ContactFormInfo";
import ContactMap from "@/components/Contact/ContactMap";

export const metadata = {
  title: "Contact Us | Bright Key",
  description: "Get in touch with Bright Key for premium Construction and Education services.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* 1. Clean Premium Hero */}
      <ContactHero />
      
      {/* 2. Asymmetric Form & Info */}
      <ContactFormInfo />
      
      {/* 3. Interactive Map */}
      <ContactMap />
      
      <Footer />
    </main>
  );
}