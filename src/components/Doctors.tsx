"use client";

import { motion } from "framer-motion";
import { User, ChevronRight, GraduationCap } from "lucide-react";

export default function Doctors() {
    const doctors = [
        {
            name: "Dr. Vikas Gowd",
            role: "Managing Director",
            qualifications: "BDS, MDS (Prosthodontics)",
            description: "Over 20 years of experience. Pioneer in immediate loading basal implants and Zygomatic implants in Telangana & AP.",
            bg: "bg-gradient-to-tr from-[#1E1B4B] to-[#312E81]"
        },
        {
            name: "Dr. (Mrs) Shilpa Gowd",
            role: "CEO & Director",
            qualifications: "BDS, MDS (Endodontics)",
            description: "Over 20 years of experience. Expertise in minimal invasive dentistry, smile designing and aesthetic dentistry. First in AP & TS.",
            bg: "bg-gradient-to-tr from-[#4C1D95] to-[#7C3AED]"
        },
        {
            name: "Dr. K.S.V. Gowd",
            role: "Founder & Chairman",
            qualifications: "BDS (Osmania)",
            description: "Over 50 years of experience. First dentist from AP to establish a legacy of unmatched premium dental care.",
            bg: "bg-gradient-to-tr from-[#831843] to-[#BE185D]"
        }
    ];

    return (
        <section id="doctors" className="py-32 bg-[#030014] relative overflow-visible">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                    {/* Sticky Left Heading */}
                    <div className="lg:col-span-4 lg:sticky lg:top-40 relative z-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 backdrop-blur-md mb-8 shadow-inner"
                        >
                            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
                            <span className="text-xs font-bold text-pink-500 tracking-[0.2em] uppercase">The Best Hands</span>
                        </motion.div>
                        <h2 className="text-5xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-[0.9]">
                            Expert Minds. <br /> <span className="text-gradient drop-shadow-[0_0_20px_rgba(236,72,153,0.3)]">Skilled Hands.</span>
                        </h2>
                        <p className="text-gray-400 font-medium mb-10 leading-relaxed max-w-sm">
                            Meet our legacy of doctors who bring decades of specialized expertise to provide you with the world's most premium dental treatments.
                        </p>
                    </div>

                    {/* Right Side Stacked Cards */}
                    <div className="lg:col-span-8 flex flex-col gap-10 lg:gap-32">
                        {doctors.map((doctor, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`relative ${doctor.bg} rounded-[3rem] p-10 lg:p-14 overflow-hidden shadow-2xl sticky top-20 border border-white/20`}
                                style={{ top: `calc(10vh + ${i * 3}rem)` }}
                            >
                                {/* Internal Gradient Map overlay */}
                                <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />

                                <div className="relative z-10 flex flex-col md:flex-row gap-8 lg:gap-14 items-start">

                                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-[2.5rem] bg-white/10 backdrop-blur-xl flex items-center justify-center shrink-0 border border-white/20 shadow-inner overflow-hidden mb-4 md:mb-0 group cursor-pointer hover:bg-white/20 transition-all">
                                        <User className="w-16 h-16 text-white/50 group-hover:scale-110 group-hover:text-white transition-all duration-500" />
                                    </div>

                                    <div className="flex flex-col justify-center text-white space-y-4">
                                        <div>
                                            <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">{doctor.role}</span>
                                            <h3 className="text-4xl md:text-5xl font-black tracking-tight">{doctor.name}</h3>
                                        </div>

                                        <div className="flex items-center gap-2 border-t border-white/20 pt-4 mb-4">
                                            <GraduationCap className="w-5 h-5 text-pink-300" />
                                            <p className="text-sm font-bold tracking-widest text-pink-200 uppercase">{doctor.qualifications}</p>
                                        </div>

                                        <p className="text-gray-300 font-medium leading-relaxed max-w-sm">{doctor.description}</p>
                                    </div>

                                </div>

                                <button className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all">
                                    <ChevronRight className="w-8 h-8 opacity-60 ml-1" />
                                </button>

                            </motion.div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
