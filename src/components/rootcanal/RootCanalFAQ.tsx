"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function RootCanalFAQ() {
    const faqs = [
        { q: "What is a root canal?", a: "A root canal is a dental procedure to remove inflamed or infected pulp on the inside of the tooth, which is then carefully cleaned, filled, and sealed." },
        { q: "Why would I need a root canal?", a: "You may need a root canal if you have a deep cavity, a cracked tooth, or issues from a previous filling. Typical symptoms include severe pain while chewing or sensitivity to hot and cold." },
        { q: "Is the procedure painful?", a: "With modern techniques and anesthetics, most patients report that they are comfortable during the procedure and it feels similar to having a filling placed." },
        { q: "How long does the treatment take?", a: "Many root canals can be completed in a single visit lasting 1 to 2 hours, but more severe cases might require a second appointment." },
        { q: "What should I expect after a root canal?", a: "You may experience some mild discomfort or sensitivity for a few days following the treatment. Over-the-counter pain medication is usually sufficient." },
        { q: "Will I need a crown after a root canal?", a: "Yes, in most cases, a tooth that has had a root canal will become more fragile over time and requires a crown to protect it and restore its full function." },
        { q: "Are there alternatives to a root canal?", a: "The only alternative to a root canal procedure is having the tooth extracted and replaced with a bridge, implant, or removable partial denture to restore chewing function." },
        { q: "How long does a root canal last?", a: "With proper care and good oral hygiene, a restored tooth that has undergone a root canal can last a lifetime." }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-32 bg-[#030014] relative overflow-hidden">

            {/* Background Decor */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">

                    {/* Left Sticky Heading */}
                    <div className="lg:col-span-5 lg:sticky lg:top-40 relative">
                        <p className="text-purple-500 font-bold uppercase tracking-[0.3em] text-sm mb-4">
                            Knowledge Base
                        </p>
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl lg:text-[5rem] font-black text-white tracking-tighter leading-[0.9] mb-8"
                        >
                            Frequently <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Asked</span> <br className="hidden lg:block" />
                            Questions
                        </motion.h2>
                        <p className="text-gray-400 font-medium leading-relaxed max-w-sm mb-12">
                            Find answers to your questions about our advanced root canal treatments.
                        </p>

                        <div className="hidden lg:flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center animate-spin-slow">
                                <div className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,1)] absolute top-[-6px]" />
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
                                    <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${openIndex === i ? 'bg-purple-500 border-purple-500 rotate-180 shadow-[0_0_20px_rgba(168,85,247,0.3)]' : 'bg-transparent border-white/20 group-hover:border-white/50'}`}>
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
                                                <div className="pl-4 border-l-2 border-purple-500 max-w-2xl">
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
