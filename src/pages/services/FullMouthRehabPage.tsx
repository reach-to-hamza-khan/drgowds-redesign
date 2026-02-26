import { CheckCircle, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from '../../components/WhatsAppIcon';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useBooking } from '../../context/BookingContext';
import DoctorCards from '../../components/DoctorCards';
import Branches from '../../components/Branches';
import Testimonials from '../../components/Testimonials';
import Timeline from '../../components/Timeline';
import MediaNews from '../../components/MediaNews';
import QuickForm from '../../components/QuickForm';
import FAQ from '../../components/FAQ';

const FullMouthRehabTable = () => {
    const comparisonData = [
        { feature: "Expertise", drGowds: "Experienced Prothodontist & Maxillofacial Surgeons", other: "General Dentists who are not specialised" },
        { feature: "Treatment Plan", drGowds: "Comprehensive, Customised & Multidisciplinary", other: "Standard treatments missing holistic approach" },
        { feature: "Technology used", drGowds: "Advanced 3D Scanners, CBCT, & CAD/CAM", other: "Basic or outdated workflow methods" },
        { feature: "Treatment Time", drGowds: "Faster, more efficient treatments within a few sessions", other: "Can take months due to lack of technology" },
        { feature: "Aftercare", drGowds: "Comprehensive aftercare and follow-ups with lifetime warranty", other: "Minimal follow-ups and lack guarantees" },
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-medical-pink/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                <h2 className="text-4xl md:text-5xl font-black text-medical-pink mb-16">
                    Why Choose <span className="text-medical-purple italic">Dr. Gowd's ?</span>
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
                                <th className="p-8 font-black text-xl uppercase tracking-widest first:rounded-tl-[40px] italic">Feature</th>
                                <th className="p-8 font-black text-xl uppercase tracking-widest italic text-center">Dr. Gowd's Dental Hospital</th>
                                <th className="p-8 font-black text-xl uppercase tracking-widest last:rounded-tr-[40px] italic text-center text-pink-200">Other Dental Hospitals</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((row, index) => (
                                <tr key={index} className={`group transition-colors ${index % 2 === 0 ? 'bg-pink-50/50' : 'bg-white'}`}>
                                    <td className="p-8 font-black text-medical-purple text-lg italic border-b border-pink-100/50">{row.feature}</td>
                                    <td className="p-8 text-gray-700 font-bold text-center border-b border-pink-100/50 group-hover:bg-medical-pink/5 transition-all">
                                        <div className="flex flex-col items-center">
                                            {row.drGowds}
                                        </div>
                                    </td>
                                    <td className="p-8 text-gray-400 italic text-center border-b border-pink-100/50 group-hover:bg-gray-50/50 transition-all">
                                        {row.other}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </section>
    );
};

const FullMouthRehabPage = () => {
    const { openModal } = useBooking();
    // Scroll to top on mount
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* HERO SECTION */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-white to-pink-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-medical-pink leading-tight">
                                Rebuild Your <span className="text-medical-purple italic">Smile</span>, <br />
                                Restore Your <span className="text-medical-purple italic">Confidence</span>
                            </h1>

                            <div className="flex gap-6 items-start">
                                <div className="hidden sm:flex self-start mt-2">
                                    <div className="bg-white p-4 rounded-3xl shadow-xl border-2 border-pink-100 flex items-center justify-center relative">
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-medical-pink">
                                            <path d="M12 21c-1.33 0-2.61-.314-3.52-1.012-.897-.687-1.48-1.748-1.48-3.138v-3.793l-1.928.964A2 2 0 0 1 2.293 13.13l.056-.112a10 10 0 0 1 1.258-2.673c1.196-1.84 2.846-3.082 4.606-3.693 1.056-.367 2.05-.28 2.825.106.772-.387 1.765-.473 2.825-.106 1.76.611 3.41 1.853 4.605 3.693a10 10 0 0 1 1.259 2.673l.056.113a2 2 0 0 1-2.78 2.891l-1.927-.964v3.793c0 1.39-.583 2.451-1.48 3.138C14.61 20.686 13.33 21 12 21Z" />
                                            <path d="M12 21v-4" />
                                            <path d="M7 14v4" />
                                            <path d="M17 14v4" />
                                        </svg>
                                        <div className="absolute -top-3 -right-3 bg-medical-purple p-1 rounded-full shadow-md">
                                            <span className="text-white text-[10px] font-bold px-1">FMR</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4 pt-2">
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="text-medical-purple w-5 h-5" />
                                        <span className="text-gray-700 font-bold text-sm uppercase tracking-wider">20+ Years Of Clinical Excellence</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="text-medical-purple w-5 h-5" />
                                        <span className="text-gray-700 font-bold text-sm uppercase tracking-wider">Pioneers In Full Mouth Rehab</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="text-medical-purple w-5 h-5" />
                                        <span className="text-gray-700 font-bold text-sm uppercase tracking-wider">10K+ Successful Rehab Cases</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="text-medical-purple w-5 h-5" />
                                        <span className="text-gray-700 font-bold text-sm uppercase tracking-wider">Lifetime Warranty</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-6">
                                <button
                                    onClick={openModal}
                                    className="bg-pink-purple-gradient text-white px-8 py-4 rounded-full font-black uppercase tracking-widest shadow-xl hover:shadow-pink-500/30 hover:-translate-y-1 transition-all"
                                >
                                    Book Free Appointment
                                </button>
                                <a
                                    href="https://wa.me/918065295050"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-500 border-2 border-green-500 text-white p-3 rounded-full shadow-xl hover:bg-green-600 transition-all flex items-center justify-center w-14 h-14"
                                >
                                    <WhatsAppIcon size={32} />
                                </a>
                            </div>
                        </div>

                        {/* Image Content */}
                        <div className="relative">
                            <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-white bg-white p-2">
                                <img
                                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                                    alt="Dental Expert Team"
                                    className="w-full h-[400px] object-cover rounded-[30px]"
                                />
                            </div>
                            <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-2xl border-4 border-white shadow-2xl overflow-hidden hidden lg:block">
                                <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=300" alt="Clinic Equipment" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute top-10 -right-8 w-32 h-32 rounded-full border-4 border-white shadow-2xl overflow-hidden hidden lg:block bg-white p-2">
                                <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=200" alt="Dental Tech" className="w-full h-full object-cover rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CUSTOM TABLE */}
            <FullMouthRehabTable />

            {/* YOUR JOURNEY TO A PERFECT SMILE */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-2">Full Mouth Rehabilitation</p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-medical-pink leading-tight">
                            Your Journey to a <br />
                            <span className="text-medical-purple italic">Perfect Smile</span> Starts Here
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="flex items-center space-x-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                <div className="bg-white p-2 rounded-full shadow-sm text-medical-pink">
                                    <CheckCircle2 size={32} />
                                </div>
                                <span className="text-xl font-bold text-gray-700">What is it?</span>
                            </div>
                            <div className="flex items-center space-x-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                <div className="bg-white p-2 rounded-full shadow-sm text-medical-pink">
                                    <CheckCircle2 size={32} />
                                </div>
                                <span className="text-xl font-bold text-gray-700">Is it in for me?</span>
                            </div>
                            <div className="flex items-center space-x-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                <div className="bg-white p-2 rounded-full shadow-sm text-medical-pink">
                                    <CheckCircle2 size={32} />
                                </div>
                                <span className="text-xl font-bold text-gray-700">What is the process?</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white bg-gray-100"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
                                alt="Dental Model showing full mouth rehabilitation"
                                className="w-full h-[400px] object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* OUR DOCTORS */}
            <DoctorCards />

            {/* EXPERIENCE SMILE TRANSFORMATIONS */}
            <section className="py-24 bg-[#faf9fc]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-2">Benefits of Full Mouth Rehabilitation</p>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-medical-pink leading-tight mb-16">
                        Experience Smile Transformations <br />
                        <span className="text-medical-purple italic">That Last a Lifetime</span>
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        <div className="bg-pink-50 border border-pink-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center min-h-[200px] text-center gap-4">
                            <div className="w-12 h-12 bg-pink-200 rounded-full flex-shrink-0"></div>
                            <h3 className="text-medical-purple font-black text-xl leading-tight">Confident, Beautiful <br /> Smiles</h3>
                            <p className="text-sm text-gray-600 font-medium">Rebuild your appearance and chewing ability for a refreshed, natural look.</p>
                        </div>
                        <div className="bg-blue-50 border border-blue-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center min-h-[200px] text-center gap-4">
                            <div className="w-12 h-12 bg-blue-200 rounded-full flex-shrink-0"></div>
                            <h3 className="text-medical-purple font-black text-xl leading-tight">Relieving Discomfort <br /> Effectively</h3>
                            <p className="text-sm text-gray-600 font-medium">Alleviate jaw pain, worn teeth, and difficulty speaking or eating.</p>
                        </div>
                        <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center min-h-[200px] text-center gap-4">
                            <div className="w-12 h-12 bg-emerald-200 rounded-full flex-shrink-0"></div>
                            <h3 className="text-medical-purple font-black text-xl leading-tight">Lasting Results <br /> Dental Care</h3>
                            <p className="text-sm text-gray-600 font-medium">Enjoy a long-term solution through comprehensive reconstructive dental treatments.</p>
                        </div>
                        <div className="bg-amber-50 border border-amber-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center min-h-[200px] text-center gap-4">
                            <div className="w-12 h-12 bg-amber-200 rounded-full flex-shrink-0"></div>
                            <h3 className="text-medical-purple font-black text-xl leading-tight">Optimal Oral <br /> Wellness</h3>
                            <p className="text-sm text-gray-600 font-medium">Restore fully functional harmony within your mouth and boost self-esteem.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* REMAINING SECTIONS */}
            <Branches />
            <Testimonials />
            <Timeline />
            <MediaNews />
            <QuickForm />
            <FAQ />
        </div>
    );
};

export default FullMouthRehabPage;
