import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Locations from "@/components/Locations";
import Testimonials from "@/components/Testimonials";

import DoctorHero from "@/components/doctors-pages/DoctorHero";
import DoctorAbout from "@/components/doctors-pages/DoctorAbout";
import DoctorSpecializations from "@/components/doctors-pages/DoctorSpecializations";

// Source of truth for Dr. M.S. Gowd
const doctorConfig = {
    glowColor: "bg-blue-600",
    gradient: "from-blue-500 to-teal-500",
    gradientBg: "from-blue-500/20 to-teal-500/20",
    accentText: "text-blue-400",

    role: "Prosthodontic Specialist",
    nameTitle: "Prof. Dr.",
    nameHighlight: "M.S. Gowd",

    bulletPoints: [
        "Fellow, American Academy of Cosmetic Dentistry",
        "First to introduce cosmetic and implant dentistry in Andhra Pradesh",
        "55+ Years of Experience",
        "President of the Indian Prosthodontic Society (First from AP)"
    ],

    images: [
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80"
    ],

    profileImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80",

    bio: "Prof. Dr. M.S. Gowd is a trailblazer in South Indian dentistry. Known for his compassion, passion, and credibility. With over 55+ years of experience, he specializes in restoring structural defects in teeth, palates, and jaws. As the founder of Dr. Gowd's Dental Clinics, he has set new benchmarks for dental care, transforming dentistry into a patient-focused experience.",

    education: [
        "American Dental Association",
        "International Association for Dental Research (USA)",
        "American Academy of Cosmetic Dentistry"
    ],

    specializations: [
        {
            title: "Advanced Dental Procedures",
            items: [
                "Cosmetic Dentistry",
                "Implantology",
                "Accelerated Orthodontics",
                "Invisalign and Painless Dentistry"
            ]
        },
        {
            title: "Credentials",
            items: [
                "BDS, Osmania University (1967)",
                "MDS, Bombay University (1971)"
            ]
        },
        {
            title: "Pioneer",
            items: [
                "Cosmetic and Implant Dentistry in Andhra Pradesh & Telangana"
            ]
        },
        {
            title: "Notable Roles",
            items: [
                "President, Indian Prosthodontic Society",
                "Official Dentist to the Governor (Consultant for 17 Years)"
            ]
        },
        {
            title: "Social Impact",
            items: [
                "Initiated community outreach programs to improve oral health in underserved areas.",
                "Authored educational resources for diverse communities."
            ]
        },
        {
            title: "Achievements and Contributions",
            items: [
                "First to introduce cosmetic and implant dentistry in Andhra Pradesh.",
                "Authored books like Smile, Designing Smile to Smile, and Muskaan, accessible in multiple languages.",
                "Mentor to his children, Prof. Dr. Snigdha Gowd and Prof. Dr. Vikas Gowd, continuing his legacy.",
                "Adopted villages to provide dental care and raise awareness about oral health."
            ]
        },
        {
            title: "Recognition and Awards",
            items: [
                "Recipient of the Vydyasiromani Award during the 2012 Doctors' Day Celebration (only Indian to receive this honor).",
                "Numerous accolades for contributions to dental innovation and community health."
            ]
        }
    ]
};

export default function DrMSGowdPage() {
    return (
        <main className="min-h-screen bg-[#030014] font-sans text-white overflow-x-hidden">
            <Header />

            <DoctorHero doctorData={doctorConfig} />
            <DoctorAbout doctorData={doctorConfig} />
            <DoctorSpecializations doctorData={doctorConfig} />

            <Testimonials />
            <Locations />
            <Footer />
        </main>
    );
}
