import AcademyHero from "@/components/Education/Hero";
import AcademyNavbar from "@/components/Education/Navbar";
import Footer from "@/components/Footer"; 
import Partners from "@/components/Education/Partners";
import AboutAcademy from "@/components/Education/AboutAcademy";
import AcademyFeatures from "@/components/Education/AcademyFeatures";
import VisionMission from "@/components/Education/VisionMission";
import WhyTrustUs from "@/components/Education/WhyTrustUs";
import Universities from "@/components/Education/Universities";
import AcademyStats from "@/components/Education/AcademyStats";
import AcademyCTA from "@/components/Education/AcademyCTA";
import Testimonials from "@/components/Education/Testimonials";


export default function EducationPage() {
  return (
    <main className="min-h-screen bg-white">
      <AcademyNavbar />
      <AcademyHero />
      <Partners />
      <AboutAcademy />
      <AcademyFeatures />
      <Universities />
      <VisionMission />
      <WhyTrustUs />
      <AcademyStats />
      <Testimonials />
      <AcademyCTA />
      <Footer />
    </main>
  );
}