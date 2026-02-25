import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, BookOpen, Clock } from 'lucide-react';

const doctorData: Record<string, any> = {
    'dr-ms-gowd': {
        name: "Dr. M.S. Gowd",
        title: "M.D.S. (Orthodontics)",
        experience: "50+ Years",
        desc: "A pioneer in orthodontics and the founder of Dr. Gowd's Dental Hospital.",
        fullDesc: "Dr. M.S. Gowd is one of the most respected figures in Indian dentistry. He has served as the official dentist to various world leaders and has been a mentor to thousands of dentists worldwide. His vision of accessible high-quality dental care remains the cornerstone of our hospital.",
        specializations: ["Orthodontics", "Complex Bite Correction", "Geriatric Dentistry"],
        img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400"
    },
    'dr-snigdha-gowd': {
        name: "Dr. Snigdha Gowd",
        title: "M.D.S. (Orthodontics & Dentofacial Orthopaedics)",
        experience: "15+ Years",
        desc: "Expert in aesthetics and digital orthodontics including Invisalign.",
        fullDesc: "Dr. Snigdha brings modern technological advancements to the clinical practice. As a Diamond Provider for Invisalign and an expert in clear aligners, she has transformed hundreds of smiles using digital technology and minimally invasive techniques.",
        specializations: ["Clear Aligners", "Invisalign", "Smile Designing"],
        img: "https://images.unsplash.com/photo-1559839734-2b71f1e3c770?auto=format&fit=crop&q=80&w=400"
    },
    'dr-t-shankar': {
        name: "Dr. T. Shankar",
        title: "M.D.S. (Oral & Maxillofacial Surgery)",
        experience: "20+ Years",
        desc: "Specialist in complex surgeries and dental implants.",
        fullDesc: "Dr. Shankar is renowned for his expertise in complex oral surgeries, including zygomatic implants and full mouth rehabilitation. His surgical precision and dedication to patient comfort make him a leader in the field of dental surgery.",
        specializations: ["Oral Surgery", "Dental Implants", "Facial Trauma Reconstruction"],
        img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400"
    }
};

const DoctorDetail = () => {
    const { id } = useParams();
    const doctor = doctorData[id || ''];

    if (!doctor) return <div className="pt-32 text-center font-bold">Doctor not found.</div>;

    return (
        <div className="pt-24 min-h-screen bg-gray-50 pb-20">
            <div className="bg-gradient-to-r from-medical-purple to-medical-pink py-24 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/" className="flex items-center text-white/80 hover:text-white mb-8 group transition-colors font-bold uppercase tracking-widest text-sm">
                        <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
                        Back to Home
                    </Link>
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-48 h-48 md:w-64 md:h-64 rounded-[40px] overflow-hidden border-8 border-white/20 shadow-2xl shrink-0"
                        >
                            <img src={doctor.img} alt={doctor.name} className="w-full h-full object-cover" />
                        </motion.div>
                        <div className="text-center md:text-left">
                            <motion.h1
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-4xl md:text-6xl font-black mb-4"
                            >
                                {doctor.name}
                            </motion.h1>
                            <p className="text-xl md:text-2xl font-bold text-white/90 mb-6 italic">{doctor.title}</p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                <span className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full flex items-center gap-2 border border-white/20 font-bold">
                                    <Clock size={16} /> {doctor.experience} Exp.
                                </span>
                                <span className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full flex items-center gap-2 border border-white/20 font-bold">
                                    <Award size={16} /> Top Specialist
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:col-span-2 bg-white rounded-[40px] p-10 md:p-16 shadow-xl space-y-8"
                    >
                        <h2 className="text-3xl font-black text-medical-purple italic flex items-center gap-3">
                            <BookOpen className="text-medical-pink" />
                            Biography
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium">
                            {doctor.fullDesc}
                        </p>

                        <div className="pt-8">
                            <h3 className="text-xl font-black text-medical-purple mb-6 uppercase tracking-widest border-b border-gray-100 pb-4">Key Specializations</h3>
                            <div className="flex flex-wrap gap-3">
                                {doctor.specializations.map((spec: string) => (
                                    <span key={spec} className="bg-gray-50 text-gray-700 px-6 py-3 rounded-2xl font-bold border border-gray-100 hover:border-medical-pink hover:text-medical-pink transition-colors">
                                        {spec}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-medical-dark-purple rounded-[40px] p-10 text-white shadow-2xl"
                        >
                            <h3 className="text-2xl font-black mb-6 italic">Book Appointment</h3>
                            <p className="text-gray-400 mb-8 font-medium">Select a slot to consult with {doctor.name} at our primary clinics.</p>
                            <button className="w-full bg-medical-green text-white py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-transform">
                                Consult Now
                            </button>
                        </motion.div>

                        <div className="bg-white rounded-[40px] p-10 shadow-lg border border-gray-50 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1 text-xs">Patient Rating</p>
                                <p className="text-3xl font-black text-medical-purple italic">4.9/5.0</p>
                            </div>
                            <div className="flex text-yellow-400">
                                {'⭐⭐⭐⭐⭐'.split('').map((s, i) => <span key={i}>{s}</span>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetail;
