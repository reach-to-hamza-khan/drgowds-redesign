"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Star, Users, Check, ArrowUpRight } from "lucide-react";

export default function ImplantsHero() {
    const features = [
        { text: "55+ Years of Clinical Excellence", icon: ShieldCheck },
        { text: "1M+ Happy Smiles Restored", icon: Star },
        { text: "100+ Exclusive Dental Clinics", icon: Check },
        { text: "60+ Years Of Experience", icon: Users },
    ];

    return (
        <section id="hero-implants" className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-screen text-center">

            {/* Dynamic Background Glowing Orbs */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-pink-600/30 rounded-full blur-[150px] -z-10 mix-blend-screen animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px] -z-10 mix-blend-screen" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8 shadow-2xl shadow-purple-500/20"
                >
                    <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping"></span>
                    <span className="text-xs font-bold text-gray-300 tracking-[0.2em] uppercase">Dental Implants</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-6xl md:text-8xl lg:text-[7rem] font-black leading-[0.9] tracking-tighter text-white mb-10 max-w-5xl"
                >
                    Best Dental Implants <br className="hidden md:block" />
                    <span className="text-gradient">Doctors in</span> Hyderabad!
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
                            <feature.icon className="w-8 h-8 text-pink-500 mb-3 group-hover:scale-110 transition-transform" />
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
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8"><path d="M12.002 2.052c-5.503 0-9.974 4.471-9.974 9.974 0 1.762.463 3.483 1.341 4.998L2.053 22.5l5.592-1.464c1.474.792 3.12 1.211 4.82 1.211h.005c5.503 0 9.974-4.471 9.974-9.974 0-5.503-4.471-9.974-9.974-9.974h-.068zm0 18.064c-1.503 0-2.983-.404-4.28-1.168l-.307-.182-3.18.832.846-3.1-.198-.316c-.84-1.34-1.282-2.887-1.282-4.48 0-4.664 3.794-8.458 8.458-8.458h.061c4.664 0 8.458 3.794 8.458 8.458 0 4.664-3.794 8.458-8.458 8.458h-.056z" fillRule="evenodd" clipRule="evenodd"></path><path d="M16.963 14.155c-.272-.136-1.609-.796-1.859-.886-.25-.091-.432-.136-.614.136-.182.272-.705.886-.864 1.068-.159.182-.318.204-.591.068-.272-.136-1.15-.424-2.193-1.353-.812-.722-1.36-1.614-1.518-1.886-.159-.272-.017-.419.119-.556.123-.124.272-.318.409-.477.136-.159.182-.272.272-.454.091-.182.045-.341-.023-.477-.068-.136-.614-1.477-.84-2.022-.221-.534-.445-.461-.614-.469-.159-.008-.341-.011-.523-.011-.182 0-.477.068-.727.341-.25.272-.955.932-.955 2.272 0 1.341.977 2.636 1.114 2.818.136.182 1.921 2.932 4.654 4.113.65.281 1.157.449 1.551.575.653.208 1.248.178 1.714.108.52-.08 1.609-.658 1.836-1.294.227-.636.227-1.181.159-1.294-.068-.114-.25-.182-.523-.318z"></path></svg>
                    </button>
                </motion.div>

            </div>
        </section>
    );
}
