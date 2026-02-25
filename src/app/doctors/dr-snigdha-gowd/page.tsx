import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Locations from "@/components/Locations";
import Testimonials from "@/components/Testimonials";

import DoctorHero from "@/components/doctors-pages/DoctorHero";
import DoctorAbout from "@/components/doctors-pages/DoctorAbout";
import DoctorSpecializations from "@/components/doctors-pages/DoctorSpecializations";

// Source of truth for Dr. Snigdha Gowd
const doctorConfig = {
    glowColor: "bg-pink-600",
    gradient: "from-pink-500 to-purple-500",
    gradientBg: "from-pink-500/20 to-purple-500/20",
    accentText: "text-pink-400",

    role: "Orthodontic Specialist",
    nameTitle: "Prof. Dr.",
    nameHighlight: "Snigdha Gowd",

    bulletPoints: [
        "First Certified Invisalign Provider in India",
        "Specialization in Orthodontics (Switzerland)",
        "24+ Years of Experience",
        "Head of Orthodontics, Kalinga Institute of Dental Sciences"
    ],

    images: [
        "https://images.unsplash.com/photo-1594824436998-058b231b1494?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1606811841689-23dfddce3ee6?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80"
    ],

    profileImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",

    bio: "Prof. Dr. Snigdha Gowd is a leading orthodontic expert with over 24+ years of experience, specializing in transforming smiles with personalized care. As the CEO of Dr. Gowd's Dental Hospital in Hyderabad, she pioneers advanced treatments like Invisalign, Damon system braces, and 3D invisible aligners, ensuring patients receive world-class care.",

    education: [
        "World Federation of Orthodontics (WFO)",
        "American Association of Orthodontists (AAO)",
        "Indian Orthodontic Society (IOS)"
    ],

    specializations: [
        {
            title: "Advanced Orthodontic Treatments",
            items: [
                "Invisalign Clear Aligners",
                "Damon System",
                "Lingual Braces",
                "Traditional Braces"
            ]
        },
        {
            title: "Credentials",
            items: [
                "Specialization: Orthodontics & Dentofacial orthopedics (Switzerland)",
                "Head of Orthodontics, KIDS"
            ]
        },
        {
            title: "Pioneer",
            items: [
                "Adult Orthodontics",
                "3D Invisible Aligners"
            ]
        },
        {
            title: "Achievements and Contributions",
            items: [
                "First Certified Invisalign Provider in India",
                "Goldman Sachs Women Entrepreneurs Graduate (ISB Hyderabad)",
                "Published extensively in global journals",
                "Leader in dental and community health initiatives"
            ]
        },
        {
            title: "Social Impact",
            items: [
                "Launched the Safe-T Project to support rural women's hygiene and employment",
                "Educated 7,000+ tribal students on oral health",
                "Conducted free dental camps in collaboration with FICCI FLO and Heal-A-Child Foundation"
            ]
        }
    ]
};

export default function DrSnigdhaPage() {
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
