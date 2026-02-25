"use client";

import { motion } from "framer-motion";
import { Sparkles, Briefcase, Award, Globe, HeartHandshake } from "lucide-react";

export default function DoctorSpecializations({ doctorData }: { doctorData: any }) {
    const categories = doctorData.specializations;

    return (
        <section className="py-24 bg-[#030014] relative overflow-hidden">

            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none mix-blend-overlay" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16 relative z-10">
                    <p className={`font-bold uppercase tracking-[0.3em] text-sm mb-4 ${doctorData.accentText}`}>Expertise</p>
                    <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter mb-4">
                        Specializations and <span className={`text-transparent bg-clip-text bg-gradient-to-r ${doctorData.gradient}`}>Services</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
                    {categories.map((cat: any, i: number) => {
                        // Map an icon to the title dynamically based on the category name
                        let Icon = Sparkles;
                        if (cat.title.toLowerCase().includes("role")) Icon = Briefcase;
                        if (cat.title.toLowerCase().includes("credential") || cat.title.toLowerCase().includes("achievement")) Icon = Award;
                        if (cat.title.toLowerCase().includes("impact") || cat.title.toLowerCase().includes("contribution")) Icon = Globe;
                        if (cat.title.toLowerCase().includes("care") || cat.title.toLowerCase().includes("pioneer")) Icon = HeartHandshake;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 backdrop-blur-md shadow-2xl relative overflow-hidden group hover:bg-white/[0.05] transition-colors"
                            >
                                {/* Hover Glow Background */}
                                <div className={`absolute inset-0 bg-gradient-to-tr ${doctorData.gradientBg} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                        <Icon className={`w-6 h-6 ${doctorData.accentText}`} />
                                    </div>
                                    <h3 className="text-xl font-black text-white tracking-tight">{cat.title}</h3>
                                </div>

                                <ul className="space-y-4">
                                    {cat.items.map((item: string, j: number) => (
                                        <li key={j} className="flex items-start gap-3">
                                            <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-gradient-to-r ${doctorData.gradient}`} />
                                            <span className="text-gray-400 font-medium text-sm leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )
                    })}
                </div>

            </div>
        </section>
    );
}
