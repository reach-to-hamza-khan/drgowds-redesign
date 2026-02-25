"use client";

import { motion } from "framer-motion";
import { Sparkles, Replace, SmilePlus, Activity } from "lucide-react";

export default function Benefits() {
    const services = [
        {
            title: "Cosmetic Dentistry",
            description: "Enhance your smile with our restorative and aesthetic treatments.",
            bg: "from-pink-500/20 to-purple-500/20",
            border: "border-pink-500/30",
            Icon: Sparkles
        },
        {
            title: "Dental Implants",
            description: "Permanent, natural-looking replacements for missing teeth.",
            bg: "from-blue-500/20 to-cyan-500/20",
            border: "border-blue-500/30",
            Icon: Replace
        },
        {
            title: "Invisalign",
            description: "Clear aligners for a healthy, straight smile without the hassle of metal braces.",
            bg: "from-emerald-500/20 to-teal-500/20",
            border: "border-emerald-500/30",
            Icon: SmilePlus
        },
        {
            title: "Full Mouth Rehabilitation",
            description: "Comprehensive treatment to restore the function and aesthetics of your smile.",
            bg: "from-amber-500/20 to-orange-500/20",
            border: "border-amber-500/30",
            Icon: Activity
        }
    ];

    return (
        <section className="py-24 bg-[#030014] relative overflow-hidden">

            {/* Background Orbs */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 border-b border-white/10 pb-8">
                    <div>
                        <p className="text-pink-500 font-bold tracking-[0.3em] uppercase text-sm mb-4">Our Services</p>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-6xl font-black text-white tracking-tighter"
                        >
                            A Full Range of <br /> Dental Services <span className="text-gray-500">Just for You</span>
                        </motion.h2>
                    </div>
                    <div className="hidden md:flex gap-2 mb-2">
                        <div className="w-16 h-2 bg-pink-500 rounded-full"></div>
                        <div className="w-4 h-2 bg-purple-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                </div>

                {/* Dynamic Flex Accordion Grid */}
                <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[450px]">
                    {services.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative overflow-hidden rounded-[2rem] border ${item.border} bg-white/[0.02] backdrop-blur-xl flex-[1] hover:flex-[2] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group cursor-pointer lg:min-w-[200px] p-8 flex flex-col justify-end min-h-[250px]`}
                        >
                            {/* Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${item.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            <div className="absolute top-8 left-8 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                <item.Icon className="w-6 h-6 text-white opacity-50 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <div className="relative z-10 w-full">
                                <span className="text-4xl font-black text-white/10 mb-2 block font-mono">0{i + 1}</span>
                                <h3 className="text-2xl font-black text-white mb-2 whitespace-nowrap overflow-hidden text-ellipsis">{item.title}</h3>
                                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500">
                                    <div className="overflow-hidden">
                                        <p className="text-sm font-medium text-gray-400 mt-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-sm">
                                            {item.description}
                                        </p>
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
