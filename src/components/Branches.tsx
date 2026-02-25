import { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const branches = [
    {
        name: "Gachibowli",
        address: "3rd Floor, SLN Terminus, Gachibowli, Hyderabad - 500032",
        phone: "+91 85994 48599",
        hours: "10:00 AM - 08:30 PM",
        rating: "4.9 (1,240 Reviews)",
        mapUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=600",
        color: "from-green-500 to-emerald-600"
    },
    {
        name: "Madhapur",
        address: "Hitech City Rd, Opposite Cyber Towers, Madhapur, Hyderabad - 500081",
        phone: "+91 85994 48598",
        hours: "09:30 AM - 09:00 PM",
        rating: "4.8 (980 Reviews)",
        mapUrl: "https://images.unsplash.com/photo-1471864190281-ad5f9f81ce4c?auto=format&fit=crop&q=80&w=600",
        color: "from-pink-500 to-rose-600"
    },
    {
        name: "Manikonda",
        address: "Main Road, Near Lanco Hills, Manikonda, Hyderabad - 500089",
        phone: "+91 85994 48597",
        hours: "10:00 AM - 08:00 PM",
        rating: "4.9 (750 Reviews)",
        mapUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600",
        color: "from-purple-500 to-indigo-600"
    },
    {
        name: "Panjagutta",
        address: "Metro Station, Panjagutta, Hyderabad - 500082",
        phone: "+91 85994 48596",
        hours: "09:00 AM - 09:00 PM",
        rating: "5.0 (1,500 Reviews)",
        mapUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600",
        color: "from-blue-500 to-cyan-600"
    }
];

const Branches = () => {
    const [selectedBranch, setSelectedBranch] = useState(branches[0]);

    return (
        <section className="py-24 bg-white overflow-hidden" id="branches">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-mt-24">
                <h2 className="text-4xl md:text-6xl font-black text-medical-purple mb-6 italic underline decoration-medical-pink underline-offset-12">
                    Our Branches
                </h2>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-16">Select a location to see details</p>

                {/* Branch Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-20">
                    {branches.map((branch) => (
                        <button
                            key={branch.name}
                            onClick={() => setSelectedBranch(branch)}
                            className={`px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm transition-all border-2 ${selectedBranch.name === branch.name
                                    ? 'bg-medical-purple text-white border-medical-purple shadow-xl shadow-purple-200 -translate-y-1'
                                    : 'bg-white text-gray-400 border-gray-100 hover:border-medical-pink hover:text-medical-pink'
                                }`}
                        >
                            {branch.name}
                        </button>
                    ))}
                </div>

                {/* Interactive Content */}
                <div className="grid lg:grid-cols-5 gap-0 rounded-[50px] overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
                    {/* Left: Location Details & Map */}
                    <div className="lg:col-span-3 h-[600px] lg:h-auto relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedBranch.name}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                <img
                                    src={selectedBranch.mapUrl}
                                    alt={`${selectedBranch.name} location`}
                                    className="w-full h-full object-cover grayscale opacity-20"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-white via-white/40 to-transparent p-12 text-left">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="space-y-8 h-full flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className={`w-20 h-2 bg-gradient-to-r ${selectedBranch.color} rounded-full mb-6`}></div>
                                            <h3 className="text-5xl font-black text-medical-purple italic mb-4">{selectedBranch.name}</h3>
                                            <p className="text-xl font-bold text-gray-600 mb-10 max-w-sm">{selectedBranch.address}</p>

                                            <div className="space-y-6">
                                                <div className="flex items-center gap-4 text-gray-700">
                                                    <div className="bg-medical-pink/10 p-3 rounded-xl text-medical-pink"><Phone size={24} /></div>
                                                    <div>
                                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone Number</p>
                                                        <p className="text-xl font-black">{selectedBranch.phone}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4 text-gray-700">
                                                    <div className="bg-medical-purple/10 p-3 rounded-xl text-medical-purple"><Clock size={24} /></div>
                                                    <div>
                                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Working Hours</p>
                                                        <p className="text-xl font-black">{selectedBranch.hours}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <button className="flex items-center gap-3 text-medical-pink font-black text-lg group">
                                            <Navigation size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            GET DIRECTIONS ON GOOGLE MAPS
                                        </button>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right: Booking Form */}
                    <div className="lg:col-span-2 bg-medical-dark-purple p-12 text-white text-left flex flex-col justify-center">
                        <h4 className="text-3xl font-black mb-2 italic">Book Appointment</h4>
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-10">Direct booking for {selectedBranch.name}</p>

                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-medical-pink outline-none transition-all placeholder:text-white/20 font-bold"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Mobile Number</label>
                                <input
                                    type="tel"
                                    placeholder="+91 00000 00000"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-medical-pink outline-none transition-all placeholder:text-white/20 font-bold"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Type of Treatment</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-medical-pink outline-none transition-all font-bold appearance-none">
                                    <option className="bg-medical-dark-purple italic">Dental Implants</option>
                                    <option className="bg-medical-dark-purple italic">Invisalign</option>
                                    <option className="bg-medical-dark-purple italic">Root Canal</option>
                                </select>
                            </div>

                            <button className="w-full bg-pink-purple-gradient py-6 rounded-2xl font-black uppercase tracking-[0.2em] shadow-2xl hover:scale-105 transition-transform mt-6">
                                Confirm Booking
                            </button>

                            <div className="flex items-center justify-center gap-2 pt-6 opacity-40">
                                <CheckCircle2 size={16} />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Safe & Secure Clinical Booking</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Branches;
