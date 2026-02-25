import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const doctors = [
    {
        id: "dr-ms-gowd",
        name: "Dr. M.S. Gowd",
        title: "M.D.S. (Orthodontics)",
        desc: "A pioneer in orthodontics, founder and chairman of Dr. Gowd's dental hospital with more than 50 years of clinical practice.",
        img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: "dr-snigdha-gowd",
        name: "Dr. Snigdha Gowd",
        title: "M.D.S. (Orthodontics & Dentofacial Orthopaedics)",
        desc: "Expert in aesthetics and digital orthodontics. Diamond provider of Invisalign with a passion for creating perfect smiles.",
        img: "https://images.unsplash.com/photo-1559839734-2b71f1e3c770?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: "dr-t-shankar",
        name: "Dr. T. Shankar",
        title: "M.D.S. (Oral & Maxillofacial Surgery)",
        desc: "Specialist in complex oral surgeries and dental implants. Dedicated to surgical precision and patient comfort.",
        img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400"
    }
];

const DoctorCards = () => {
    return (
        <section className="py-24 bg-[#fffdf5]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-2">Our Specialists</p>
                    <h2 className="text-4xl md:text-5xl font-black text-medical-purple italic italic underline decoration-medical-pink underline-offset-8">
                        Our Doctors
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {doctors.map((doc, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-[40px] p-8 shadow-xl border border-gray-100 flex flex-col items-center text-center group"
                        >
                            <div className="w-48 h-48 rounded-3xl overflow-hidden mb-8 border-4 border-medical-pink/10 group-hover:border-medical-pink transition-all">
                                <img src={doc.img} alt={doc.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100" />
                            </div>
                            <h3 className="text-2xl font-black text-medical-purple mb-1 italic">{doc.name}</h3>
                            <p className="text-medical-pink font-bold mb-4 text-xs uppercase tracking-[0.2em]">{doc.title}</p>
                            <p className="text-gray-500 mb-10 flex-grow font-medium leading-relaxed">"{doc.desc}"</p>

                            <div className="flex flex-col w-full gap-4">
                                <Link
                                    to={`/doctors/${doc.id}`}
                                    className="bg-medical-dark-purple text-white py-4 rounded-2xl font-black uppercase tracking-widest shadow-lg hover:shadow-purple-200 transition-all"
                                >
                                    View Profile
                                </Link>
                                <button className="border-2 border-gray-100 text-gray-400 py-4 rounded-2xl font-black uppercase tracking-widest hover:border-medical-pink hover:text-medical-pink transition-all">
                                    Book Now
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DoctorCards;
