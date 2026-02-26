import { CheckCircle, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from '../../components/WhatsAppIcon';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useBooking } from '../../context/BookingContext';
import ComparisonTable from '../../components/ComparisonTable';
import DoctorCards from '../../components/DoctorCards';
import Branches from '../../components/Branches';
import Testimonials from '../../components/Testimonials';
import Timeline from '../../components/Timeline';
import MediaNews from '../../components/MediaNews';
import QuickForm from '../../components/QuickForm';
import FAQ from '../../components/FAQ';

const DentalImplantsPage = () => {
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
                                Best <span className="text-medical-purple italic">Dental Implants</span> Doctors in Hyderabad!
                            </h1>

                            <div className="flex gap-6 items-start">
                                <div className="hidden sm:flex self-start mt-2">
                                    {/* Mocking the tooth layout from the design */}
                                    <div className="bg-white p-4 rounded-3xl shadow-xl border-2 border-pink-100 flex items-center justify-center relative">
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-medical-pink">
                                            <path d="M12 21c-1.33 0-2.61-.314-3.52-1.012-.897-.687-1.48-1.748-1.48-3.138v-3.793l-1.928.964A2 2 0 0 1 2.293 13.13l.056-.112a10 10 0 0 1 1.258-2.673c1.196-1.84 2.846-3.082 4.606-3.693 1.056-.367 2.05-.28 2.825.106.772-.387 1.765-.473 2.825-.106 1.76.611 3.41 1.853 4.605 3.693a10 10 0 0 1 1.259 2.673l.056.113a2 2 0 0 1-2.78 2.891l-1.927-.964v3.793c0 1.39-.583 2.451-1.48 3.138C14.61 20.686 13.33 21 12 21Z" />
                                            <path d="M12 21v-4" />
                                            <path d="M7 14v4" />
                                            <path d="M17 14v4" />
                                        </svg>
                                        <div className="absolute -top-3 -right-3 bg-yellow-400 p-1 rounded-full shadow-md">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
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
                                        <span className="text-gray-700 font-bold text-sm uppercase tracking-wider">Pioneers In Dental Implants</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="text-medical-purple w-5 h-5" />
                                        <span className="text-gray-700 font-bold text-sm uppercase tracking-wider">10K+ Successful Implant Cases</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <CheckCircle className="text-medical-purple w-5 h-5" />
                                        <span className="text-gray-700 font-bold text-sm uppercase tracking-wider">Lifetime Implant Warranty</span>
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
                                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
                                    alt="Dental Implant Team"
                                    className="w-full h-[400px] object-cover rounded-[30px]"
                                />
                            </div>
                            <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-2xl border-4 border-white shadow-2xl overflow-hidden hidden lg:block">
                                <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=300" alt="Clinic Interior" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute top-10 -right-8 w-32 h-32 rounded-full border-4 border-white shadow-2xl overflow-hidden hidden lg:block bg-white p-2">
                                <img src="https://images.unsplash.com/photo-1593054941142-554b17f3d676?auto=format&fit=crop&q=80&w=200" alt="Dental Care" className="w-full h-full object-cover rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMPARISON TABLE */}
            <ComparisonTable />

            {/* OUR DOCTORS */}
            <DoctorCards />

            {/* THE ULTIMATE SOLUTION */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-2">Dental Implants</p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-medical-pink leading-tight">
                            The Ultimate <span className="text-medical-purple italic">Solution</span> <br />
                            for Missing Teeth Problems
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
                                <span className="text-xl font-bold text-gray-700">No Food Restrictions</span>
                            </div>
                            <div className="flex items-center space-x-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                <div className="bg-white p-2 rounded-full shadow-sm text-medical-pink">
                                    <CheckCircle2 size={32} />
                                </div>
                                <span className="text-xl font-bold text-gray-700">No Slip, Slide Or Fall Out</span>
                            </div>
                            <div className="flex items-center space-x-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                <div className="bg-white p-2 rounded-full shadow-sm text-medical-pink">
                                    <CheckCircle2 size={32} />
                                </div>
                                <span className="text-xl font-bold text-gray-700">Protects Jawbone From Shrinking</span>
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
                                alt="Dental Implant Model"
                                className="w-full h-[400px] object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* BENEFITS OF DENTAL IMPLANTS */}
            <section className="py-24 bg-[#faf9fc]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-2">Benefits of Dental Implants</p>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-medical-pink leading-tight mb-16">
                        Experience Lasting <span className="text-medical-purple italic">Comfort</span> <br />
                        and Confidence with Implants
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        <div className="bg-pink-50 border border-pink-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all flex items-center justify-center min-h-[120px]">
                            <p className="text-medical-pink font-bold text-lg leading-snug">Improves your facial structure & appearance</p>
                        </div>
                        <div className="bg-blue-50 border border-blue-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all flex items-center justify-center min-h-[120px]">
                            <p className="text-blue-600 font-bold text-lg leading-snug">Protects jaw bone from shrinking</p>
                        </div>
                        <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all flex items-center justify-center min-h-[120px]">
                            <p className="text-emerald-700 font-bold text-lg leading-snug">Restores your ability to chew & speak normally</p>
                        </div>
                        <div className="bg-amber-50 border border-amber-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all flex items-center justify-center min-h-[120px]">
                            <p className="text-amber-700 font-bold text-lg leading-snug">A permanent fixed root for your missing teeth</p>
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

export default DentalImplantsPage;
