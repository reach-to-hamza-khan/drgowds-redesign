"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Navigation, ArrowRight, CornerDownRight } from "lucide-react";

const branches = [
    { id: "gachibowli", name: "Gachibowli", rating: 4.9, reviews: "1.2k+", phone: "+91 9030800000", cords: { top: "30%", left: "40%" } },
    { id: "madhapur", name: "Madhapur", rating: 4.8, reviews: "1.5k+", phone: "+91 9030800001", cords: { top: "50%", left: "55%" } },
    { id: "banjara", name: "Banjara Hills", rating: 4.9, reviews: "3k+", phone: "+91 9030800002", cords: { top: "60%", left: "65%" } },
    { id: "kphb", name: "KPHB", rating: 4.7, reviews: "1k+", phone: "+91 9030800003", cords: { top: "20%", left: "30%" } }
];

export default function Locations() {
    const [activeBranch, setActiveBranch] = useState(branches[0]);

    return (
        <section id="branches" className="py-32 bg-[#030014] relative overflow-hidden">

            {/* Dynamic Background */}
            <div className="absolute top-1/2 left-0 w-full h-1/2 bg-pink-600/5 -z-10 blur-[150px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16 lg:mb-24 relative z-10">
                    <p className="text-pink-500 font-bold uppercase tracking-[0.3em] text-sm mb-4">
                        Our Network
                    </p>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl lg:text-7xl font-black text-white tracking-tighter"
                    >
                        Find a Clinic <br />
                        <span className="text-gradient">Near You.</span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">

                    {/* Interactive "Map" Container */}
                    <div className="lg:col-span-7 bg-white/[0.02] border border-white/10 rounded-[3rem] aspect-square relative shadow-[0_0_50px_rgba(236,72,153,0.05)] overflow-hidden">
                        {/* Fake abstract topographic map SVG lines */}
                        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                            <defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" /></pattern></defs>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                            <path d="M 0 100 Q 150 200 300 150 T 600 250" fill="none" stroke="pink" strokeWidth="1" className="opacity-50" />
                            <path d="M 0 300 Q 200 100 400 350 T 600 450" fill="none" stroke="purple" strokeWidth="1" className="opacity-50" />
                        </svg>

                        {/* Branch Nodes */}
                        {branches.map(branch => (
                            <div
                                key={branch.id}
                                className={`absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer flex items-center justify-center transition-all duration-500 z-10 
                   ${activeBranch.id === branch.id ? 'scale-125' : 'hover:scale-110 opacity-70'}
                 `}
                                style={branch.cords}
                                onClick={() => setActiveBranch(branch)}
                            >
                                <div className={`absolute inset-0 rounded-full animate-ping opacity-50 ${activeBranch.id === branch.id ? 'bg-pink-500' : 'bg-gray-500'}`} />
                                <div className={`relative w-6 h-6 rounded-full flex items-center justify-center shadow-lg ${activeBranch.id === branch.id ? 'bg-pink-500 scale-125' : 'bg-white/20 backdrop-blur-md'}`}>
                                    <div className={`w-2 h-2 rounded-full ${activeBranch.id === branch.id ? 'bg-white' : 'bg-white/50'}`} />
                                </div>

                                {/* Node Label */}
                                <div className={`absolute top-full mt-3 px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-white/10 whitespace-nowrap transition-all
                   ${activeBranch.id === branch.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
                 `}>
                                    <span className="text-white font-bold text-xs tracking-widest uppercase">{branch.name}</span>
                                </div>
                            </div>
                        ))}

                        {/* Connection Line representation */}
                        <div className="absolute top-1/2 left-1/2 w-[80%] h-[80%] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-dashed border-white/5 pointer-events-none mix-blend-screen" />

                    </div>

                    {/* Branch Details Display */}
                    <div className="lg:col-span-5 flex flex-col justify-center h-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeBranch.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[3rem] p-10 lg:p-14 shadow-2xl relative"
                            >
                                {/* Glowing edge highlight */}
                                <div className="absolute top-0 left-8 w-24 h-[2px] bg-gradient-to-r from-pink-500 to-transparent"></div>

                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-12 h-12 bg-pink-500/20 text-pink-500 rounded-2xl flex items-center justify-center border border-pink-500/40 shadow-[0_0_15px_rgba(236,72,153,0.3)] shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-black text-3xl tracking-tight leading-none">{activeBranch.name}</h3>
                                        <p className="text-pink-400 font-bold text-xs tracking-[0.2em] uppercase mt-1">Premium Clinic</p>
                                    </div>
                                </div>

                                <div className="space-y-6 mb-10">
                                    <div className="flex items-center gap-4 group cursor-pointer">
                                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                            <Phone className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-0.5">Contact</p>
                                            <p className="text-white font-medium group-hover:text-pink-400 transition-colors">{activeBranch.phone}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 group cursor-pointer">
                                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                            <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-0.5">Google Rating</p>
                                            <p className="text-white font-medium">{activeBranch.rating} / 5.0 <span className="text-gray-500 ml-1">({activeBranch.reviews})</span></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <button className="w-full flex items-center justify-between px-6 py-4 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-gray-200 transition-colors group">
                                        Get Directions
                                        <Navigation className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                    <button className="w-full flex items-center justify-between px-6 py-4 bg-transparent border border-white/20 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-colors group">
                                        Book Appointment Here
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>

                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

            </div>
        </section>
    );
}
