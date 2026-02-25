"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Stethoscope } from "lucide-react";

export default function ServiceInfo() {
    const features = [
        { text: "LIMITED TIME OFFER", icon: <Check className="w-5 h-5 text-white" /> },
        { text: "FREE CBCT", icon: <ShieldCheck className="w-5 h-5 text-white" /> },
        { text: "FULL MOUTH REHABILITATION", icon: <Stethoscope className="w-5 h-5 text-white" /> }
    ];

    return (
        <section id="treatments" className="py-32 relative overflow-hidden bg-[#030014]">

            {/* Massive Parallax Background text */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden flex items-center justify-center opacity-[0.03] pointer-events-none select-none z-0">
                <h2 className="text-[20vw] font-black uppercase text-white whitespace-nowrap leading-none tracking-tighter mix-blend-overlay">
                    CONFIDENCE
                </h2>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-6 space-y-10"
                    >
                        <div>
                            <p className="text-pink-500 font-bold uppercase tracking-[0.3em] text-sm mb-6 flex items-center gap-3">
                                <span className="w-12 h-[1px] bg-pink-500"></span>
                                Our Services
                            </p>
                            <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[1.05]">
                                Creating <span className="text-gradient">Confident</span> <br />
                                Smiles with <br className="hidden lg:block" /> Expert Care
                            </h2>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-white/10">
                            {features.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    className="flex items-center gap-6 group cursor-pointer"
                                >
                                    <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 shadow-lg border border-white/10 group-hover:bg-pink-500 group-hover:border-pink-500 transition-colors">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-black text-gray-300 tracking-widest uppercase group-hover:text-white transition-colors">{item.text}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-6 relative"
                    >
                        {/* 3D Glass Image Container */}
                        <div className="aspect-square max-w-lg mx-auto rounded-full p-2 border border-white/10 bg-white/5 backdrop-blur-3xl shadow-[0_0_100px_rgba(236,72,153,0.15)] relative animate-[spin_60s_linear_infinite]">
                            <div className="w-full h-full rounded-full border border-dashed border-white/20 animate-[spin_40s_linear_infinite_reverse] p-4">
                                <div className="w-full h-full rounded-full bg-[url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60 mix-blend-screen" />
                            </div>
                        </div>

                        {/* Floating Information Badge */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-2xl p-8 rounded-3xl border border-white/20 text-center shadow-2xl">
                            <Stethoscope className="w-16 h-16 text-pink-500 mb-4 mx-auto drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]" />
                            <p className="text-white font-bold tracking-widest uppercase text-sm">Dental Model Placeholder</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
