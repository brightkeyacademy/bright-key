import AcademyHero from "@/components/Education/Hero";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; 
import Partners from "@/components/Education/Partners";
import AboutAcademy from "@/components/Education/AboutAcademy";
import VisionMission from "@/components/Education/VisionMission";
import WhyTrustUs from "@/components/Education/WhyTrustUs";
import Universities from "@/components/Education/Universities";
import AcademyStats from "@/components/Education/AcademyStats";
import AcademyCTA from "@/components/Education/AcademyCTA";


export default function EducationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AcademyHero />
      <Partners />
      <AboutAcademy />
      <VisionMission />
      <AcademyStats />
      <WhyTrustUs />
      <Universities />
      <AcademyCTA />
      <Footer />

    </main>
  );
}