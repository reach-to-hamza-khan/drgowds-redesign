import React from 'react';

const newsLogos = [
    { name: "TV9", color: "text-red-600" },
    { name: "NTV", color: "text-blue-900" },
    { name: "ETV", color: "text-orange-500" },
    { name: "TV5", color: "text-red-700" }
];

const MediaNews = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-medical-purple mb-16">Dr. Gowd's In News</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {newsLogos.map((logo, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all border border-gray-100">
                            <span className={`text-4xl font-black italic tracking-tighter ${logo.color}`}>{logo.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MediaNews;
