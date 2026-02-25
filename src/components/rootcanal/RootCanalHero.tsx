"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Star, Users, Check, ArrowUpRight } from "lucide-react";

export default function RootCanalHero() {
    const features = [
        { text: "15+ Endodontic Experts", icon: ShieldCheck },
        { text: "Painless procedures", icon: Star },
        { text: "Affordable, Best in class", icon: Check },
        { text: "Microscopic Root Canal", icon: Users },
    ];

    return (
        <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-screen text-center">

            {/* Dynamic Background Glowing Orbs */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[150px] -z-10 mix-blend-screen animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-pink-600/20 rounded-full blur-[150px] -z-10 mix-blend-screen" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8 shadow-2xl shadow-purple-500/20"
                >
                    <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping"></span>
                    <span className="text-xs font-bold text-gray-300 tracking-[0.2em] uppercase">Root Canal Treatment</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-6xl md:text-8xl lg:text-[7rem] font-black leading-[0.9] tracking-tighter text-white mb-10 max-w-5xl"
                >
                    Best Root Canal <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]">Dentists in</span> Hyderabad!
                </motion.h1>

                {/* Feature Bento Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
                >
                    {features.map((feature, i) => (
                        <div key={i} className="flex flex-col items-center justify-center p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl hover:bg-white/10 transition-colors group">
                            <feature.icon className="w-8 h-8 text-purple-500 mb-3 group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-bold text-gray-300 tracking-wide text-center">{feature.text}</span>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center gap-6"
                >
                    <button className="px-10 py-5 rounded-[2rem] bg-white text-black font-black text-lg tracking-widest uppercase flex items-center gap-3 hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                        Book Free Appointment <ArrowUpRight className="w-5 h-5 bg-black text-white rounded-full p-0.5" />
                    </button>

                    <button className="flex items-center justify-center w-16 h-16 rounded-[2rem] bg-[#25D366] text-white hover:bg-[#1ebe57] shadow-[0_0_40px_rgba(37,211,102,0.4)] transition-transform hover:scale-110" aria-label="WhatsApp">
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
