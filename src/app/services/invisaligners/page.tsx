import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Doctors from "@/components/Doctors";
import Locations from "@/components/Locations";
import Testimonials from "@/components/Testimonials";
import Timeline from "@/components/Timeline";
import NewsLogos from "@/components/NewsLogos";
import AppointmentForm from "@/components/AppointmentForm";

import InvisalignHero from "@/components/invisalign/InvisalignHero";
import InvisalignComparison from "@/components/invisalign/InvisalignComparison";
import InvisalignSolution from "@/components/invisalign/InvisalignSolution";
import InvisalignBenefits from "@/components/invisalign/InvisalignBenefits";
import InvisalignFAQ from "@/components/invisalign/InvisalignFAQ";

export default function InvisalignersPage() {
    return (
        <main className="min-h-screen bg-[#030014] font-sans text-white overflow-x-hidden">
            <Header />

            <InvisalignHero />
            <InvisalignComparison />
            <Doctors />
            <InvisalignSolution />
            <InvisalignBenefits />
            <Locations />
            <Testimonials />
            <Timeline />
            <NewsLogos />
            <AppointmentForm />
            <InvisalignFAQ />

            <Footer />

            {/* Floating Appointment Button */}
            <a
                href="https://wa.me/918065295050"
                target="_blank"
                rel="noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all flex items-center gap-3 cursor-pointer group"
            >
                <span className="hidden md:block font-bold pl-2 max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap">Chat with us</span>
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8"><path d="M12.002 2.052c-5.503 0-9.974 4.471-9.974 9.974 0 1.762.463 3.483 1.341 4.998L2.053 22.5l5.592-1.464c1.474.792 3.12 1.211 4.82 1.211h.005c5.503 0 9.974-4.471 9.974-9.974 0-5.503-4.471-9.974-9.974-9.974h-.068zm0 18.064c-1.503 0-2.983-.404-4.28-1.168l-.307-.182-3.18.832.846-3.1-.198-.316c-.84-1.34-1.282-2.887-1.282-4.48 0-4.664 3.794-8.458 8.458-8.458h.061c4.664 0 8.458 3.794 8.458 8.458 0 4.664-3.794 8.458-8.458 8.458h-.056z" fillRule="evenodd" clipRule="evenodd"></path><path d="M16.963 14.155c-.272-.136-1.609-.796-1.859-.886-.25-.091-.432-.136-.614.136-.182.272-.705.886-.864 1.068-.159.182-.318.204-.591.068-.272-.136-1.15-.424-2.193-1.353-.812-.722-1.36-1.614-1.518-1.886-.159-.272-.017-.419.119-.556.123-.124.272-.318.409-.477.136-.159.182-.272.272-.454.091-.182.045-.341-.023-.477-.068-.136-.614-1.477-.84-2.022-.221-.534-.445-.461-.614-.469-.159-.008-.341-.011-.523-.011-.182 0-.477.068-.727.341-.25.272-.955.932-.955 2.272 0 1.341.977 2.636 1.114 2.818.136.182 1.921 2.932 4.654 4.113.65.281 1.157.449 1.551.575.653.208 1.248.178 1.714.108.52-.08 1.609-.658 1.836-1.294.227-.636.227-1.181.159-1.294-.068-.114-.25-.182-.523-.318z"></path></svg>
            </a>
        </main>
    );
}
