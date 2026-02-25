import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 pt-20 pb-10 text-white relative border-t-4 border-[#D4AF37]">

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-gold opacity-5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-16">

                    {/* Logo & Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center text-slate-900 font-extrabold text-2xl shadow-lg border border-white/20">
                                DG
                            </div>
                            <div className="flex flex-col">
                                <span className="font-black text-2xl tracking-tighter text-white leading-none">Dr. Gowd's</span>
                                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#D4AF37] mt-1 drop-shadow-sm">Dental Hospital</span>
                            </div>
                        </div>
                        <p className="text-slate-400 font-medium leading-relaxed max-w-sm">
                            Over 55 years of unmatched excellence in premium dental care, transforming smiles and building confidence worldwide with state-of-the-art technology.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-sm font-bold mb-8 text-white uppercase tracking-[0.2em] relative inline-block">
                            Contact Info
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#D4AF37] rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]"></span>
                        </h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
                                    <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                                </div>
                                <span className="text-slate-300 hover:text-white hover:text-[#D4AF37] transition-colors cursor-pointer mt-1 font-medium">+91 9030800000</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
                                    <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                                </div>
                                <span className="text-slate-300 hover:text-white hover:text-[#D4AF37] transition-colors cursor-pointer mt-1 font-medium">appointments@drgowds.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Our Branches */}
                    <div>
                        <h4 className="text-sm font-bold mb-8 text-white uppercase tracking-[0.2em] relative inline-block">
                            Our Branches
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#D4AF37] rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]"></span>
                        </h4>
                        <ul className="grid grid-cols-2 gap-y-5 gap-x-4 text-slate-300">
                            <li className="flex items-center gap-3 hover:text-[#D4AF37] transition-colors cursor-pointer font-medium group"><MapPin className="w-4 h-4 text-slate-500 group-hover:text-[#D4AF37] transition-colors" /> Gachibowli</li>
                            <li className="flex items-center gap-3 hover:text-[#D4AF37] transition-colors cursor-pointer font-medium group"><MapPin className="w-4 h-4 text-slate-500 group-hover:text-[#D4AF37] transition-colors" /> Madhapur</li>
                            <li className="flex items-center gap-3 hover:text-[#D4AF37] transition-colors cursor-pointer font-medium group"><MapPin className="w-4 h-4 text-slate-500 group-hover:text-[#D4AF37] transition-colors" /> Banjara Hills</li>
                            <li className="flex items-center gap-3 hover:text-[#D4AF37] transition-colors cursor-pointer font-medium group"><MapPin className="w-4 h-4 text-slate-500 group-hover:text-[#D4AF37] transition-colors" /> KPHB</li>
                        </ul>
                    </div>

                </div>

                {/* Legal & Copyright */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm font-medium">
                    <p>&copy; {new Date().getFullYear()} Dr. Gowd's Dental Hospital. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
