"use client";

import { motion } from "framer-motion";
import { CornerRightDown } from "lucide-react";

export default function Timeline() {
    const milestones = [
        { year: "1967", text: "Founded first clinic with a vision for premium dental care." },
        { year: "1994", text: "Expanded services to introduce advanced implants." },
        { year: "2005", text: "Launched dedicated full mouth rehabilitation wing." },
        { year: "2008", text: "Recognized as Best Dental Hospital in state." },
        { year: "2015", text: "Started international patient care program." },
        { year: "2023", text: "Opened ultra-modern 4th branch in Hyderabad." }
    ];

    return (
        <section className="py-32 bg-[#030014] relative overflow-hidden">

            {/* Dynamic Decor */}
            <div className="absolute top-0 right-0 w-[400px] h-full bg-pink-600/5 -skew-x-[30deg] pointer-events-none blur-[100px]" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-xl">
                        <p className="text-pink-500 font-bold uppercase tracking-[0.3em] text-sm mb-4">Legacy & Trust</p>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl lg:text-7xl font-black text-white tracking-tighter"
                        >
                            Dr. Gowd's <br /> <span className="text-gradient">Journey.</span>
                        </motion.h2>
                    </div>

                    <div className="hidden md:flex items-center gap-4 group">
                        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                            <CornerRightDown className="w-6 h-6 text-pink-500 animate-bounce" />
                        </div>
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-xs max-w-[150px]">
                            Tracing five decades of excellence.
                        </p>
                    </div>
                </div>

                {/* Vertical Glowing Beam Timeline */}
                <div className="relative pt-10 pb-20">
                    {/* Center Light Beam */}
                    <div className="absolute top-0 bottom-0 left-8 md:left-1/2 md:-translate-x-1/2 w-1 bg-gradient-to-b from-transparent via-pink-500/50 to-transparent flex items-center justify-center" />
                    <div className="absolute top-0 bottom-0 left-8 md:left-1/2 md:-translate-x-1/2 w-20 bg-pink-500/10 blur-[30px] -z-10" />

                    <div className="space-y-16 md:space-y-32">
                        {milestones.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`relative w-full flex flex-col md:flex-row items-center gap-8 md:gap-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                            >

                                {/* Empty grid space for centering */}
                                <div className="hidden md:block w-1/2"></div>

                                {/* Timeline Dot Component */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#030014] border-[4px] border-pink-500 z-20 shadow-[0_0_20px_rgba(236,72,153,1)]">
                                    <div className="w-full h-full bg-pink-500 rounded-full animate-ping opacity-50 absolute inset-0 -z-10" />
                                </div>

                                {/* Timeline Content Card */}
                                <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${i % 2 === 0 ? "md:pr-10 md:text-right flex flex-col items-start md:items-end" : "md:pl-10 flex flex-col items-start"}`}>
                                    <div className="inline-block px-5 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 backdrop-blur-md mb-6 shadow-inner relative group cursor-pointer hover:bg-pink-500/20 transition-colors">
                                        <span className="text-3xl font-black text-white mix-blend-screen tracking-tighter">{item.year}</span>
                                    </div>
                                    <div className={`p-8 lg:p-10 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:borderColor-pink-500/30 transition-all text-left`}>
                                        {/* Background glow hover effect */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-pink-500/10 group-hover:to-purple-500/10 transition-colors duration-500 pointer-events-none" />
                                        <h4 className="text-xl md:text-2xl font-bold text-gray-300 leading-relaxed font-sans">{item.text}</h4>
                                    </div>
                                </div>

                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
