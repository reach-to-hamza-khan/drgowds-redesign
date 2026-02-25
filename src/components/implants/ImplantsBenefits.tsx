"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

export default function ImplantsBenefits() {
    const services = [
        {
            title: "Missing a single tooth?",
            description: "Opt for a single implant!",
            bg: "from-pink-500/20 to-purple-500/20",
            border: "border-pink-500/30",
        },
        {
            title: "Multiple missing teeth?",
            description: "Choose implant bridges!",
            bg: "from-blue-500/20 to-cyan-500/20",
            border: "border-blue-500/30",
        },
        {
            title: "Looking for a full mouth solution?",
            description: "Get All-on-4 implants!",
            bg: "from-emerald-500/20 to-teal-500/20",
            border: "border-emerald-500/30",
        },
        {
            title: "Want stable dentures?",
            description: "Try implant-supported overdentures!",
            bg: "from-amber-500/20 to-orange-500/20",
            border: "border-amber-500/30",
        }
    ];

    return (
        <section className="py-24 bg-[#030014] relative overflow-hidden">

            {/* Background Orbs */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 border-b border-white/10 pb-8">
                    <div>
                        <p className="text-pink-500 font-bold tracking-[0.3em] uppercase text-sm mb-4">Benefits of Dental Implants</p>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-6xl font-black text-white tracking-tighter"
                        >
                            Experience Lasting Comfort <br />
                            <span className="text-gradient drop-shadow-[0_0_20px_rgba(236,72,153,0.3)]">and Confidence</span> <span className="text-gray-500">with Implants</span>
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
                                <MoveRight className="w-6 h-6 text-white opacity-50 group-hover:opacity-100 transition-opacity" />
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
