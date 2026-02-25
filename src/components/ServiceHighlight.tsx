import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const highlights = [
    { title: "Dental Implants", id: "dental-implants" },
    { title: "Invisaligners", id: "invisaligners" },
    { title: "Full Mouth Rehabilitation", id: "full-mouth-rehabilitation" }
];

const ServiceHighlight = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <p className="text-gray-400 font-bold tracking-[0.3em] uppercase mb-4 text-xs">Transformations</p>
                    <h2 className="text-4xl md:text-6xl font-black gradient-text italic">
                        Creating Confident Smiles<br />with Expert Care
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div className="space-y-6 order-2 md:order-1">
                        {highlights.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Link
                                    to={`/services/${item.id}`}
                                    className="flex items-center space-x-6 bg-gray-50 p-8 rounded-[32px] border border-gray-100 group hover:bg-medical-pink hover:border-medical-pink transition-all duration-300"
                                >
                                    <div className="bg-medical-pink p-3 rounded-2xl text-white group-hover:bg-white group-hover:text-medical-pink transition-colors">
                                        <Check size={24} strokeWidth={4} />
                                    </div>
                                    <span className="text-2xl font-black text-medical-purple italic group-hover:text-white transition-colors">{item.title}</span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
                        viewport={{ once: true }}
                        className="relative order-1 md:order-2"
                    >
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-medical-pink/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-medical-purple/10 rounded-full blur-3xl"></div>

                        <div className="rounded-[60px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] border-8 border-white transform hover:rotate-0 transition-all duration-700">
                            <img
                                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                                alt="Smiling patient"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServiceHighlight;
