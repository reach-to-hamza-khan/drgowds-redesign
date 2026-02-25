"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function Testimonials() {
    const videos = [1, 2, 3, 4];

    return (
        <section className="py-32 bg-[#030014] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-8">
                    <div className="max-w-xl">
                        <p className="text-pink-500 font-bold uppercase tracking-[0.3em] text-sm mb-4">Patient Stories</p>
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl lg:text-7xl font-black text-white tracking-tighter"
                        >
                            Hear It From <br className="hidden lg:block" />
                            <span className="text-gradient drop-shadow-[0_0_20px_rgba(236,72,153,0.3)]">Our Patients.</span>
                        </motion.h2>
                    </div>

                    <p className="text-gray-400 font-medium leading-relaxed max-w-sm">
                        Real stories of life-changing smile transformations powered by our premium dental care.
                    </p>
                </div>

                {/* 2x2 Stacked Grid */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {videos.map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className={`relative aspect-[4/5] md:aspect-square bg-white/[0.03] rounded-[3rem] p-4 lg:p-6 overflow-hidden shadow-2xl group border border-white/10 ${i % 2 === 1 ? 'md:mt-32' : ''}`}
                        >
                            {/* Background glow behind video container */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-purple-500/10 blur-[50px] mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            {/* Simulated Video Thumbnail Container */}
                            <div className="w-full h-full rounded-[2rem] bg-gray-900 border border-white/20 relative overflow-hidden group-hover:border-pink-500/40 transition-colors duration-500 overflow-hidden">
                                <div className={`absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-screen opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-700`} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                {/* Play Button */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className="w-20 h-20 rounded-full border border-pink-500/50 bg-pink-500/20 backdrop-blur-xl flex items-center justify-center cursor-pointer shadow-[0_0_30px_rgba(236,72,153,0.5)] hover:scale-110 active:scale-95 transition-transform group/btn">
                                        <Play className="w-8 h-8 fill-pink-500 text-pink-500 ml-1 group-hover/btn:drop-shadow-[0_0_10px_rgba(236,72,153,1)]" />
                                    </div>
                                </div>

                                {/* Patient Info Overlay */}
                                <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-xl border border-white/30 bg-white/10 shadow-inner flex items-center justify-center backdrop-blur-md">
                                            <span className="text-white font-black text-xl">P{i + 1}</span>
                                        </div>
                                        <div>
                                            <p className="text-white font-black text-2xl tracking-tighter">Patient {i + 1}</p>
                                            <p className="text-pink-400 font-bold text-xs uppercase tracking-widest mt-1">Video Review</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
