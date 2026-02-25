"use client";

import { motion } from "framer-motion";
import { Info, Check } from "lucide-react";

export default function DoctorAbout({ doctorData }: { doctorData: any }) {
    return (
        <section className="py-24 bg-[#05051e] relative overflow-hidden">

            {/* Dynamic Background Banner */}
            <div className={`absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b ${doctorData.gradientBg} opacity-20 -z-10`} />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 lg:p-16 backdrop-blur-2xl shadow-2xl relative overflow-hidden">

                    {/* Glow Layer */}
                    <div className={`absolute top-0 right-0 w-[400px] h-[400px] ${doctorData.glowColor} opacity-30 blur-[150px] -z-10`} />

                    <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-5"
                        >
                            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                                <img src={doctorData.profileImage} alt="Doctor Portrait" className="w-full h-full object-cover object-top filter contrast-125 saturate-110" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-7 space-y-8"
                        >
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-black/20 backdrop-blur-md mb-6 shadow-xl">
                                    <Info className={`w-4 h-4 ${doctorData.accentText}`} />
                                    <span className="text-xs font-bold text-gray-300 tracking-[0.2em] uppercase">Biography</span>
                                </div>

                                <h2 className="text-4xl lg:text-[3.5rem] font-black leading-[1.1] tracking-tighter text-white mb-6">
                                    About <span className={`text-transparent bg-clip-text bg-gradient-to-r ${doctorData.gradient}`}>{doctorData.nameHighlight}</span>
                                </h2>

                                <p className="text-gray-400 font-medium leading-relaxed text-lg mb-8">
                                    {doctorData.bio}
                                </p>
                            </div>

                            <div className="pt-8 border-t border-white/10">
                                <h3 className="text-sm font-black text-gray-200 tracking-[0.3em] uppercase mb-6">Educational Background / Memberships</h3>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {doctorData.education.map((item: string, i: number) => (
                                        <li key={i} className="flex items-start gap-3 bg-white/[0.02] p-4 rounded-2xl border border-white/5 hover:bg-white/5 transition-colors">
                                            <Check className={`w-5 h-5 ${doctorData.accentText} mt-0.5 shrink-0`} />
                                            <span className="text-gray-300 text-sm font-medium leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
