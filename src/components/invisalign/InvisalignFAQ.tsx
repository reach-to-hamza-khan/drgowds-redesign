"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function InvisalignFAQ() {
    const faqs = [
        { q: "What is Invisalign?", a: "Invisalign is a modern orthodontic treatment that uses clear, custom-made aligners to gradually straighten your teeth without metal brackets or wires." },
        { q: "Is Invisalign treatment painful?", a: "Some people may experience temporary, minor discomfort for a few days when a new aligner is inserted. This is typically described as a feeling of pressure and is a sign the aligners are working." },
        { q: "How long does Invisalign treatment take?", a: "The duration varies depending on your specific needs, but the average treatment time is 12 to 18 months, though some can see results in a matter of weeks." },
        { q: "Can I eat with Invisalign aligners in?", a: "No, you should remove your aligners before eating or drinking anything besides water. This prevents damage and staining to the aligners." },
        { q: "How often should I wear the aligners?", a: "For the best results, you should wear your Invisalign aligners for 20 to 22 hours a day, removing them only to eat, drink, brush, and floss." },
        { q: "What happens if I lose an aligner?", a: "If you lose an aligner, contact us right away. We may advise you to wear the previous set or move on to the next one depending on your progress." },
        { q: "How do I clean my Invisalign aligners?", a: "You can clean your aligners by brushing them gently with a soft toothbrush and rinsing them in lukewarm water. Avoid hot water as it can warp the plastic." },
        { q: "Will Invisalign affect my speech?", a: "Like all orthodontic treatments, aligners may temporarily affect the speech of some people, causing a slight lisp. Most people adapt quickly." }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-32 bg-[#030014] relative overflow-hidden">

            {/* Background Decor */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">

                    {/* Left Sticky Heading */}
                    <div className="lg:col-span-5 lg:sticky lg:top-40 relative">
                        <p className="text-teal-400 font-bold uppercase tracking-[0.3em] text-sm mb-4">
                            Knowledge Base
                        </p>
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl lg:text-[5rem] font-black text-white tracking-tighter leading-[0.9] mb-8"
                        >
                            Frequently <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Asked</span> <br className="hidden lg:block" />
                            Questions
                        </motion.h2>
                        <p className="text-gray-400 font-medium leading-relaxed max-w-sm mb-12">
                            Find answers to your most pressing questions about Invisalign and our clear aligner treatments.
                        </p>

                        <div className="hidden lg:flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center animate-spin-slow">
                                <div className="w-3 h-3 rounded-full bg-teal-400 shadow-[0_0_15px_rgba(45,212,191,1)] absolute top-[-6px]" />
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
                                    <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${openIndex === i ? 'bg-teal-500 border-teal-500 rotate-180 shadow-[0_0_20px_rgba(45,212,191,0.3)]' : 'bg-transparent border-white/20 group-hover:border-white/50'}`}>
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
                                                <div className="pl-4 border-l-2 border-teal-400 max-w-2xl">
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
