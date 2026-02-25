import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ComparisonTable from "@/components/ComparisonTable";
import ServiceInfo from "@/components/ServiceInfo";
import Doctors from "@/components/Doctors";
import Benefits from "@/components/Benefits";
import Locations from "@/components/Locations";
import Testimonials from "@/components/Testimonials";
import Timeline from "@/components/Timeline";
import NewsLogos from "@/components/NewsLogos";
import AppointmentForm from "@/components/AppointmentForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-[#D4AF37]/30 selection:text-slate-900 overflow-x-hidden">
      <Header />
      <Hero />
      <ComparisonTable />
      <Doctors />
      <ServiceInfo />
      <Benefits />
      <Locations />
      <Testimonials />
      <Timeline />
      <NewsLogos />
      <AppointmentForm />
      <FAQ />
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="#"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(37,211,102,0.4)] hover:bg-[#1ebe57] transition-all transform hover:-translate-y-2 hover:scale-110 border-2 border-white"
        aria-label="Chat on WhatsApp"
      >
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M12.002 2.052c-5.503 0-9.974 4.471-9.974 9.974 0 1.762.463 3.483 1.341 4.998L2.053 22.5l5.592-1.464c1.474.792 3.12 1.211 4.82 1.211h.005c5.503 0 9.974-4.471 9.974-9.974 0-5.503-4.471-9.974-9.974-9.974h-.068zm0 18.064c-1.503 0-2.983-.404-4.28-1.168l-.307-.182-3.18.832.846-3.1-.198-.316c-.84-1.34-1.282-2.887-1.282-4.48 0-4.664 3.794-8.458 8.458-8.458h.061c4.664 0 8.458 3.794 8.458 8.458 0 4.664-3.794 8.458-8.458 8.458h-.056z" fillRule="evenodd" clipRule="evenodd"></path>
          <path d="M16.963 14.155c-.272-.136-1.609-.796-1.859-.886-.25-.091-.432-.136-.614.136-.182.272-.705.886-.864 1.068-.159.182-.318.204-.591.068-.272-.136-1.15-.424-2.193-1.353-.812-.722-1.36-1.614-1.518-1.886-.159-.272-.017-.419.119-.556.123-.124.272-.318.409-.477.136-.159.182-.272.272-.454.091-.182.045-.341-.023-.477-.068-.136-.614-1.477-.84-2.022-.221-.534-.445-.461-.614-.469-.159-.008-.341-.011-.523-.011-.182 0-.477.068-.727.341-.25.272-.955.932-.955 2.272 0 1.341.977 2.636 1.114 2.818.136.182 1.921 2.932 4.654 4.113.65.281 1.157.449 1.551.575.653.208 1.248.178 1.714.108.52-.08 1.609-.658 1.836-1.294.227-.636.227-1.181.159-1.294-.068-.114-.25-.182-.523-.318z"></path>
        </svg>
      </a>
    </main>
  );
}
