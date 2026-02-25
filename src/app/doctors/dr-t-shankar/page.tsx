import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Locations from "@/components/Locations";
import Testimonials from "@/components/Testimonials";

import DoctorHero from "@/components/doctors-pages/DoctorHero";
import DoctorAbout from "@/components/doctors-pages/DoctorAbout";
import DoctorSpecializations from "@/components/doctors-pages/DoctorSpecializations";

// This will act as the source of truth for Dr. T Shankar based on User Screenshot
const doctorConfig = {
    glowColor: "bg-indigo-600",
    gradient: "from-indigo-500 to-purple-500",
    gradientBg: "from-indigo-500/20 to-purple-500/20",
    accentText: "text-indigo-400",

    role: "Chief Cosmetic Dental Implantologist",
    nameTitle: "Prof. Dr.",
    nameHighlight: "T. Shankar",

    bulletPoints: [
        "M.D.S. (Osmania University)",
        "F.I.C.D. (USA) | FICOI | DICOI",
        "Founder Member & Director, School of Dental Implants",
        "30+ Years of Experience"
    ],

    images: [
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1606265752439-d0554cc450c2?auto=format&fit=crop&q=80"
    ],

    profileImage: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80",

    bio: "Calm, composed, and credible - Prof. Dr. T. Shankar is a trusted name in south India's dental implantology. With over 30+ years of experience, he specializes in full-mouth rehabilitations, complex implant procedures, and oral prosthetics. His dedication to patient comfort and care makes every treatment journey seamless and informed, earning him the trust of celebrities and everyday patients alike.",

    education: [
        "M.D.S., Osmania University",
        "F.I.C.D., Fellow, International College of Dentists (USA)",
        "FICOI & DICOI, International Congress of Oral Implantologists",
        "Advanced Sinus Lift Procedures Doctorate (Germany)",
        "Specialized Implant Training: Switzerland, Germany, and USA",
        "Advanced Implantology & Grafting Certification: European Association of Dental Implantologists (BDIZ EDI), University of Cologne"
    ],

    specializations: [
        {
            title: "Key Roles",
            items: [
                "Chief Cosmetic Dental Implantologist at Dr. Gowd's Dental Clinics",
                "Founder & Director, School of Dental Implants",
                "HOD, KIDS (Kalinga Institute of Dental Sciences)"
            ]
        },
        {
            title: "Specializations",
            items: [
                "Full Mouth Rehabilitation (with and without implants)",
                "Oral and Maxillofacial Prosthodontics",
                "Advanced Cosmetic Dentistry",
                "His chair-side precision and patient-first approach ensure both functional and aesthetic excellence for every patient."
            ]
        },
        {
            title: "Expertise",
            items: [
                "Dental Implant & Full-Mouth Rehab Expert.",
                "Sinus Lifts & Complex Surgeries Specialist.",
                "Cosmetic & Restorative Dentistry Leader.",
                "Founder & Director, School of Dental Implants at Dr. Gowd's Dental Hospitals."
            ]
        },
        {
            title: "Contributions",
            items: [
                "Regular speaker at national and international conferences",
                "Advocate for practical, experience-based dental education"
            ]
        },
        {
            title: "Commitment to Patient Care",
            items: [
                "Dr. Shankar emphasizes the importance of oral health as a key part of overall well-being. Through preventive care and early intervention, he helps patients achieve confident, healthy smiles."
            ]
        }
    ]
};

export default function DrTShankarPage() {
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
