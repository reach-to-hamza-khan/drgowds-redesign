"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function RehabFAQ() {
    const faqs = [
        { q: "Is full mouth rehabilitation right for me?", a: "If you have multiple missing teeth, severe wear, TMJ issues, or complex dental problems, FMR is likely the best comprehensive solution." },
        { q: "What is full mouth rehabilitation (FMR)?", a: "FMR involves rebuilding or replacing all teeth in a patient's mouth to improve function, health, and aesthetics." },
        { q: "What conditions require FMR?", a: "Conditions like severe tooth decay, advanced gum disease, trauma, acid erosion, and bite misalignment often require FMR." },
        { q: "How long does the FMR process take?", a: "It varies greatly depending on the required procedures, ranging from a few weeks to several months." },
        { q: "Is the procedure painful?", a: "We use advanced anesthesia and sedation techniques to ensure you are comfortable and pain-free throughout the procedures." },
        { q: "How much does FMR cost?", a: "Because every treatment plan is highly customized, costs vary. We provide a detailed estimate after a comprehensive consultation." },
        { q: "Are the results permanent?", a: "With proper oral hygiene and regular dental checkups, the results of FMR can be long-lasting and even permanent." },
        { q: "How long is the recovery period after FMR?", a: "Recovery depends on the specific procedures performed, but most patients return to normal activities within a few days to a few weeks." }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-32 bg-[#030014] relative overflow-hidden">

            {/* Background Decor */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">

                    {/* Left Sticky Heading */}
                    <div className="lg:col-span-5 lg:sticky lg:top-40 relative">
                        <p className="text-red-500 font-bold uppercase tracking-[0.3em] text-sm mb-4">
                            Knowledge Base
                        </p>
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl lg:text-[5rem] font-black text-white tracking-tighter leading-[0.9] mb-8"
                        >
                            Frequently <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-indigo-500">Asked</span> <br className="hidden lg:block" />
                            Questions
                        </motion.h2>
                        <p className="text-gray-400 font-medium leading-relaxed max-w-sm mb-12">
                            Find answers to your questions about our comprehensive Full Mouth Rehabilitation process.
                        </p>

                        <div className="hidden lg:flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center animate-spin-slow">
                                <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,1)] absolute top-[-6px]" />
                            </div>
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Scroll to explore</span>
                        </div>
                    </div>

                    {/* Right Accordions */}
                    <div className="lg:col-span-7">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                onClick={() => toggleFAQ(i)}
                                className={`group border-b border-white/10 cursor-pointer transition-colors duration-500 ${openIndex === i ? 'bg-white/[0.03]' : 'hover:bg-white/[0.01]'}`}
                            >
                                <div className="w-full text-left p-6 lg:p-10 flex items-center justify-between outline-none">
                                    <h3 className={`font-black pr-8 text-2xl md:text-3xl leading-snug tracking-tighter transition-colors duration-300 ${openIndex === i ? 'text-white' : 'text-white/40 group-hover:text-white/70'}`}>
                                        0{i + 1}. {faq.q}
                                    </h3>
                                    <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${openIndex === i ? 'bg-red-500 border-red-500 rotate-180 shadow-[0_0_20px_rgba(239,68,68,0.3)]' : 'bg-transparent border-white/20 group-hover:border-white/50'}`}>
                                        {openIndex === i ?
                                            <Minus className="w-6 h-6 text-white" strokeWidth={3} /> :
                                            <Plus className="w-6 h-6 text-white" strokeWidth={2.5} />
                                        }
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 lg:px-10 pb-10 pt-0">
                                                <div className="pl-4 border-l-2 border-red-500 max-w-2xl">
                                                    <p className="text-gray-300 font-medium text-lg leading-relaxed">
                                                        {faq.a}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
