import { motion } from 'framer-motion';

const timelineEvents = [
    { year: "1960", text: "Dr. M.S. Gowd started his first clinic in Hyderabad." },
    { year: "2000", text: "Dr. Vikas Gowd joined and expanded the services." },
    { year: "2011", text: "New branch at Gachibowli was established." },
    { year: "2014", text: "Expanded into Madhapur with modern facilities." },
    { year: "2019", text: "Advanced implant center launched in Manikonda." },
    { year: "2021", text: "5 Million smiles benchmark reached across clinics." },
];

const Timeline = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-32">
                    <p className="text-gray-400 font-bold tracking-[0.3em] uppercase mb-4 text-xs">Our Legacy</p>
                    <h2 className="text-4xl md:text-6xl font-black text-medical-purple italic italic underline decoration-medical-pink underline-offset-12">
                        Dr. Gowd's Journey
                    </h2>
                </div>

                <div className="relative">
                    {/* Horizontal line with gradient */}
                    <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-gradient-to-r from-medical-pink/10 via-medical-purple/20 to-medical-pink/10 -translate-y-1/2 hidden md:block rounded-full"></div>

                    <div className="grid grid-cols-1 md:grid-cols-6 gap- y-32 md:gap-8 relative">
                        {timelineEvents.map((event, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className={`flex flex-col items-center group ${i % 2 === 0 ? 'md:flex-col' : 'md:flex-col-reverse'}`}
                            >
                                {/* Content Box */}
                                <div className={`relative ${i % 2 === 0 ? 'mb-16' : 'mt-16'} w-full`}>
                                    <div className="bg-pink-purple-gradient p-8 rounded-[32px] text-white text-center shadow-2xl transform group-hover:scale-105 transition-transform duration-500 relative z-10">
                                        <span className="text-3xl font-black block mb-3 italic tracking-tighter">{event.year}</span>
                                        <p className="text-sm font-bold leading-relaxed opacity-90">{event.text}</p>
                                    </div>

                                    {/* Detailed Arrow */}
                                    <div className={`absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-pink-purple-gradient rotate-45 z-0 ${i % 2 === 0 ? '-bottom-3' : '-top-3'}`}></div>
                                </div>

                                {/* Modern Connection Point */}
                                <div className="relative flex items-center justify-center">
                                    <div className="w-10 h-10 rounded-full bg-white border-2 border-medical-purple/20 flex items-center justify-center relative z-10 shadow-lg">
                                        <div className="w-4 h-4 rounded-full bg-medical-purple group-hover:bg-medical-pink transition-colors animate-pulse"></div>
                                    </div>
                                    {/* Pulse effect */}
                                    <div className="absolute w-20 h-20 rounded-full bg-medical-purple/5 animate-ping"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
