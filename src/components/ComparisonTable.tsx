import { motion } from 'framer-motion';

const comparisonData = [
    { feature: "Professional Doctors Team", drGowds: "Best Advanced Dental Doctors with Year of experience", localDentist: "Freshly with Less experience" },
    { feature: "Dental Implants", drGowds: "High quality implants with Lifetime warranty and support", localDentist: "No Warranty and guarantee on dental implants" },
    { feature: "Specialised Services", drGowds: "All Dental Treatments under one roof including invisalign", localDentist: "They don't have all aesthetic services surgery" },
    { feature: "Digital X-Ray facilities", drGowds: "High quality and less radiation with digital x-ray", localDentist: "Standard X-ray might cause side effects" },
    { feature: "24/7 Support and Care", drGowds: "Best after treatment support and followup with every patient", localDentist: "Doctors might not be available after clinic hours" },
];

const ComparisonTable = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-medical-pink/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                <p className="text-gray-400 font-bold tracking-[0.3em] uppercase mb-4 text-xs">The Excellence Factor</p>
                <h2 className="text-4xl md:text-6xl font-black text-medical-purple mb-20 italic">
                    Why Choose <span className="text-medical-pink underline decoration-medical-purple underline-offset-8">Dr. Gowd's Dental Hospital?</span>
                </h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="overflow-x-auto rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.08)] border border-gray-100"
                >
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="bg-pink-purple-gradient text-white">
                                <th className="p-8 font-black text-xl uppercase tracking-widest first:rounded-tl-[40px] italic">Dental Services</th>
                                <th className="p-8 font-black text-xl uppercase tracking-widest italic text-center">Dr. Gowd's Dental Clinic</th>
                                <th className="p-8 font-black text-xl uppercase tracking-widest last:rounded-tr-[40px] italic text-center">Other Dental Hospitals</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((row, index) => (
                                <tr key={index} className={`group transition-colors ${index % 2 === 0 ? 'bg-pink-50/50' : 'bg-white'}`}>
                                    <td className="p-8 font-black text-medical-purple text-lg italic border-b border-pink-100/50">{row.feature}</td>
                                    <td className="p-8 text-gray-700 font-bold text-center border-b border-pink-100/50 group-hover:bg-medical-pink/5 transition-all">
                                        <div className="flex flex-col items-center">
                                            <span className="text-medical-pink text-xs font-black uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Best Choice</span>
                                            {row.drGowds}
                                        </div>
                                    </td>
                                    <td className="p-8 text-gray-400 italic text-center border-b border-pink-100/50">
                                        {row.localDentist}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>

                <div className="mt-16 flex justify-center gap-8">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-medical-pink"></div>
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Medical Grade Excellence</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
