import { CheckCircle, MessageCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section className="pt-32 pb-16 bg-gradient-to-br from-white to-pink-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-medical-pink leading-tight">
                            Best Dental Doctors in <span className="text-medical-purple italic">Hyderabad!</span>
                        </h1>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="text-medical-purple w-5 h-5" />
                                <span className="text-gray-700 font-medium font-semibold italic">125+ Years of combined experience</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="text-medical-purple w-5 h-5" />
                                <span className="text-gray-700 font-medium font-semibold italic">5 Millions + Smiles delivered</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="text-medical-purple w-5 h-5" />
                                <span className="text-gray-700 font-medium font-semibold italic">200+ Professional Dental Doctors</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="text-medical-purple w-5 h-5" />
                                <span className="text-gray-700 font-medium font-semibold italic">15+ Advanced Dental Hospitals</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="bg-medical-pink text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-pink-600 transition-all">
                                Call: +91 85994 48599
                            </button>
                            <button className="bg-medical-green text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all">
                                <MessageCircle size={32} fill="white" />
                            </button>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                                alt="Our Doctors"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Small floating images as seen in the screenshot */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg border-2 border-white shadow-lg overflow-hidden hidden lg:block">
                            <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=200" alt="Clinic" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
