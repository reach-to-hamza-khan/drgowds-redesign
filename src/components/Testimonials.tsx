import React from 'react';
import { Play } from 'lucide-react';

const testimonials = [
    "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1471864190281-ad5f9f81ce4c?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400"
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-medical-purple mb-4">What People Say About <span className="text-medical-pink">Us</span></h2>
                    <p className="text-gray-500">Over 5 Million smiles delivered with love and clinical excellence</p>
                </div>

                <div className="flex space-x-6 overflow-x-auto pb-8 scrollbar-hide">
                    {testimonials.map((img, i) => (
                        <div key={i} className="flex-shrink-0 w-72 h-[450px] relative rounded-[32px] overflow-hidden group shadow-2xl">
                            <img src={img} alt="Testimonial" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 transform group-hover:scale-110 transition-transform">
                                    <Play size={40} className="text-white fill-white" />
                                </div>
                            </div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="font-bold text-lg">Patient Story</p>
                                <p className="text-sm opacity-80">Dental Implants</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
