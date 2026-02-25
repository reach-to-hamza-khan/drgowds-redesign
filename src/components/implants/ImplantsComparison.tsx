"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export default function ImplantsComparison() {
    const comparisons = [
        {
            feature: "Approach",
            others: "General dentists treatment approach.",
            drGowds: "FMR Team approach."
        },
        {
            feature: "Proficiency",
            others: "Standard Implants.",
            drGowds: "Advanced technology."
        },
        {
            feature: "Clinical success",
            others: "Without guarantee.",
            drGowds: "Life time guarantee."
        },
        {
            feature: "Post treatment care",
            others: "Unpredictable.",
            drGowds: "Fully predictable."
        },
        {
            feature: "Implant choice",
            others: "Unknown quality.",
            drGowds: "Top tier globally accepted brands."
        },
        {
            feature: "Types of implants",
            others: "Only conventional implants.",
            drGowds: "Zygoma / Basal / All on 4/6 / Pterygoid."
        }
    ];

    return (
        <section className="py-32 bg-[#030014] relative overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 w-full h-[600px] bg-sky-900/10 -z-10 -skew-y-12" />

            <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
                    <div className="max-w-xl">
                        <p className="text-pink-500 font-bold uppercase tracking-[0.3em] text-sm mb-4">Compare To The Rest</p>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-7xl font-black text-white mb-4 tracking-tighter leading-none"
                        >
                            Why Choose <br className="hidden lg:block" />
                            <span className="text-gradient drop-shadow-[0_0_20px_rgba(236,72,153,0.3)]">Dr. Gowd's ?</span>
                        </motion.h2>
                    </div>
                    <p className="text-gray-400 font-medium max-w-sm mb-2 leading-relaxed">
                        Experience the absolute premium standard in implantology. See how our specialized approach compares to others.
                    </p>
                </div>

                <div className="space-y-6 lg:space-y-8">
                    {comparisons.map((row, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative grid grid-cols-1 md:grid-cols-2 rounded-[2.5rem] overflow-hidden border border-white/10 group"
                        >
                            {/* Mobile floating feature label */}
                            <div className="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-xl">
                                <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">{row.feature}</span>
                            </div>

                            {/* Left Side: Others */}
                            <div className="bg-white/[0.02] p-8 lg:p-12 pt-16 lg:pt-20 flex flex-col justify-end min-h-[200px] border-b md:border-b-0 md:border-r border-white/5 transition-colors group-hover:bg-red-500/5">
                                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mb-6 border border-red-500/20">
                                    <X className="w-5 h-5 text-red-500" />
                                </div>
                                <h4 className="text-white/40 font-black text-xl mb-2">General Clinics</h4>
                                <p className="text-gray-500 font-medium leading-relaxed">{row.others}</p>
                            </div>

                            {/* Right Side: Dr Gowd's */}
                            <div className="bg-white/5 p-8 lg:p-12 pt-16 lg:pt-20 flex flex-col justify-end min-h-[200px] relative overflow-hidden group-hover:bg-white/10 transition-colors">
                                {/* Glowing internal border */}
                                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-pink-500 via-purple-500 to-transparent opacity-50 block shadow-[0_0_15px_rgba(236,72,153,1)]" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative z-10">
                                    <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center mb-6 border border-pink-500/50 shadow-[0_0_15px_rgba(236,72,153,0.4)]">
                                        <Check className="w-5 h-5 text-pink-500" />
                                    </div>
                                    <h4 className="text-white font-black text-xl mb-2 flex items-center gap-2">
                                        <span className="text-gradient">Dr. Gowd's</span>
                                    </h4>
                                    <p className="text-white font-semibold leading-relaxed drop-shadow-md">{row.drGowds}</p>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
