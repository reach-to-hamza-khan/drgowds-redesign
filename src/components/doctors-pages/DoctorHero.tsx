"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Calendar, Verified } from "lucide-react";

export default function DoctorHero({ doctorData }: { doctorData: any }) {
    return (
        <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden flex flex-col items-center justify-center text-left">

            {/* Dynamic Background Glowing Orbs based on doctor config */}
            <div className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] ${doctorData.glowColor} rounded-full blur-[150px] -z-10 mix-blend-screen animate-pulse opacity-50`} />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-slate-800/40 rounded-full blur-[150px] -z-10 mix-blend-screen" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="lg:col-span-6 space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md shadow-2xl">
                            <Verified className={`w-4 h-4 ${doctorData.accentText}`} />
                            <span className="text-xs font-bold text-gray-300 tracking-[0.2em] uppercase">{doctorData.role}</span>
                        </div>

                        <h1 className="text-5xl lg:text-[4.5rem] font-black leading-[1] tracking-tighter text-white">
                            {doctorData.nameTitle} <br />
                            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${doctorData.gradient}`}>
                                {doctorData.nameHighlight}
                            </span>
                        </h1>

                        <ul className="space-y-4 border-t border-white/10 pt-6">
                            {doctorData.bulletPoints.map((point: string, i: number) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle2 className={`w-5 h-5 ${doctorData.accentText} mt-0.5 shrink-0`} />
                                    <span className="text-gray-300 font-medium">{point}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
                            <button className="w-full sm:w-auto px-8 py-4 rounded-[2rem] bg-white text-black font-black tracking-widest uppercase hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                                Book Appointment!
                            </button>
                            <div className="flex gap-4">
                                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                                    <Award className="w-6 h-6 text-gray-300" />
                                </div>
                                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                                    <Calendar className="w-6 h-6 text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Masonry Images */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="lg:col-span-6 grid grid-cols-2 gap-4"
                    >
                        <div className="col-span-1 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl h-[300px] lg:h-[500px] relative group">
                            <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url(${doctorData.images[0]})` }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        </div>
                        <div className="col-span-1 grid grid-rows-2 gap-4 h-[300px] lg:h-[500px]">
                            <div className="row-span-1 rounded-[2rem] overflow-hidden border border-white/10 shadow-xl relative group">
                                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url(${doctorData.images[1]})` }} />
                            </div>
                            <div className="row-span-1 rounded-[2rem] overflow-hidden border border-white/10 shadow-xl relative group">
                                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url(${doctorData.images[2]})` }} />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
