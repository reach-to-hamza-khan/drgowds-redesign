import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { useBooking } from '../context/BookingContext';

const Footer = () => {
    const { openModal } = useBooking();
    return (
        <footer className="bg-medical-dark-purple text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex flex-col">
                            <img src="/logo.webp" alt="Dr. Gowd's Dental Hospital" className="h-16 md:h-20 w-auto object-contain brightness-0 invert" />
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed font-medium">
                            Over 50 years of clinical excellence in dental care. Providing world-class treatments with advanced technology.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://wa.me/918065295050" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-medical-pink transition-colors cursor-pointer">
                                <WhatsAppIcon size={18} />
                            </a>
                            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-medical-pink transition-colors cursor-pointer">
                                <Facebook size={18} />
                            </div>
                            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-medical-pink transition-colors cursor-pointer">
                                <Instagram size={18} />
                            </div>
                            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-medical-pink transition-colors cursor-pointer">
                                <Twitter size={18} />
                            </div>
                            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-medical-pink transition-colors cursor-pointer">
                                <Youtube size={18} />
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-bold mb-8 text-medical-pink">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-4 text-sm text-gray-300">
                                <Phone size={18} className="text-medical-pink" />
                                <span>+91 85994 48599</span>
                            </li>
                            <li className="flex items-center space-x-4 text-sm text-gray-300">
                                <Mail size={18} className="text-medical-pink" />
                                <span>support@drgowd.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Our Branches */}
                    <div>
                        <h4 className="text-xl font-bold mb-8 text-medical-pink">Our Branches</h4>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex items-center space-x-4"><MapPin size={16} className="text-medical-pink" /> <span>Gachibowli</span></li>
                            <li className="flex items-center space-x-4"><MapPin size={16} className="text-medical-pink" /> <span>Madhapur</span></li>
                            <li className="flex items-center space-x-4"><MapPin size={16} className="text-medical-pink" /> <span>Manikonda</span></li>
                            <li className="flex items-center space-x-4"><MapPin size={16} className="text-medical-pink" /> <span>Banjara Hills</span></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-8 text-medical-pink">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="hover:text-medical-pink cursor-pointer">Home</li>
                            <li className="hover:text-medical-pink cursor-pointer">Our Doctors</li>
                            <li className="hover:text-medical-pink cursor-pointer">Treatments</li>
                            <li
                                onClick={openModal}
                                className="hover:text-medical-pink cursor-pointer"
                            >
                                Book Appointment
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/10 text-center text-sm text-gray-500 font-medium">
                    <p>© 2024 Dr. Gowd's Dental Hospital. All Rights Reserved. Designed with ❤️</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
