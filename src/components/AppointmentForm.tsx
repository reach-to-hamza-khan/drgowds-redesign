"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function AppointmentForm() {
    return (
        <section className="py-32 bg-[#030014] relative overflow-hidden">

            {/* Dynamic Decor */}
            <div className="absolute inset-0 bg-pink-600/5 rotate-12 scale-150 blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="bg-white/[0.02] border border-white/10 rounded-[3rem] p-8 lg:p-20 shadow-2xl overflow-hidden relative group">
                    {/* Internal Animated Gradient */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-pink-500/30 to-purple-500/20 rounded-full blur-[100px] mix-blend-screen opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />

                    <div className="absolute top-0 right-10 w-32 h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent shadow-[0_0_20px_rgba(236,72,153,1)]" />
                    <div className="absolute bottom-0 left-10 w-32 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-[0_0_20px_rgba(168,85,247,1)]" />

                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">

                        {/* Form Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-7 space-y-10"
                        >
                            <div>
                                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-4">
                                    Ready for a <br />
                                    <span className="text-gradient drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]">New Smile?</span>
                                </h2>
                                <p className="text-gray-400 font-medium text-lg lg:text-xl">Book your free consultation today.</p>
                            </div>

                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="relative group/input">
                                        <input type="text" id="name" required className="peer w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-6 text-white placeholder-transparent focus:outline-none focus:border-pink-500 focus:bg-white/10 transition-all font-medium text-lg" placeholder="Full Name" />
                                        <label htmlFor="name" className="absolute left-6 top-6 text-gray-500 text-sm font-bold uppercase tracking-widest transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-pink-500 peer-focus:bg-[#030014] peer-focus:px-2 peer-valid:-top-3 peer-valid:text-xs peer-valid:text-pink-500 peer-valid:bg-[#030014] peer-valid:px-2">
                                            Full Name
                                        </label>
                                    </div>

                                    <div className="relative group/input">
                                        <input type="tel" id="phone" required className="peer w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-6 text-white placeholder-transparent focus:outline-none focus:border-pink-500 focus:bg-white/10 transition-all font-medium text-lg" placeholder="Phone Number" />
                                        <label htmlFor="phone" className="absolute left-6 top-6 text-gray-500 text-sm font-bold uppercase tracking-widest transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-pink-500 peer-focus:bg-[#030014] peer-focus:px-2 peer-valid:-top-3 peer-valid:text-xs peer-valid:text-pink-500 peer-valid:bg-[#030014] peer-valid:px-2">
                                            Phone Number
                                        </label>
                                    </div>
                                </div>

                                <div className="relative group/input">
                                    <select required className="peer w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-6 text-white appearance-none focus:outline-none focus:border-pink-500 focus:bg-white/10 transition-all font-medium text-lg cursor-pointer">
                                        <option value="" disabled selected className="bg-[#030014] text-gray-500">Select Preferred Branch</option>
                                        <option value="gachibowli" className="bg-[#030014] text-white">Gachibowli</option>
                                        <option value="madhapur" className="bg-[#030014] text-white">Madhapur</option>
                                        <option value="banjara" className="bg-[#030014] text-white">Banjara Hills</option>
                                        <option value="kphb" className="bg-[#030014] text-white">KPHB</option>
                                    </select>
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </div>
                                </div>

                                <button className="w-full bg-white text-[#030014] py-6 rounded-2xl font-black text-lg tracking-widest uppercase hover:bg-pink-500 hover:text-white hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all flex items-center justify-center gap-4 group/btn mt-4">
                                    Confirm Appointment
                                    <ArrowUpRight className="w-6 h-6 group-hover/btn:rotate-45 transition-transform" />
                                </button>
                            </form>
                        </motion.div>

                        {/* Huge typography/Image overlay Side */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="hidden lg:flex lg:col-span-5 flex-col items-center justify-center relative"
                        >
                            {/* Decorative 3D like container */}
                            <div className="w-full aspect-[3/4] rounded-[2.5rem] bg-gradient-to-tr from-pink-500/20 to-purple-500/10 border border-white/20 p-4 shadow-inner relative overflow-hidden backdrop-blur-3xl group-hover:border-pink-500/50 transition-colors duration-700">
                                <div className="absolute inset-0 bg-[#030014]/40" />
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-screen" />

                                <div className="relative z-10 w-full h-full border border-dashed border-white/20 rounded-[2rem] flex flex-col items-center justify-center text-center p-8">
                                    <div className="w-24 h-24 rounded-full bg-pink-500/20 border border-pink-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(236,72,153,0.3)] mb-8">
                                        <span className="text-3xl font-black text-pink-500">DG</span>
                                    </div>
                                    <h3 className="text-3xl font-black text-white mb-2 tracking-tight">Premium Care.</h3>
                                    <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Excellence Awaits</p>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    );
}
