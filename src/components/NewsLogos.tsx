"use client";

import { Newspaper } from "lucide-react";

export default function NewsLogos() {
    const newsItems = [
        { id: "tv9", name: "TV9" },
        { id: "abn", name: "ABN AndhraJyothy" },
        { id: "etv", name: "ETV News" },
        { id: "v6", name: "V6 News" },
        { id: "sakshi", name: "Sakshi TV" },
        { id: "hmtv", name: "HMTV" }
    ];

    return (
        <section className="py-16 bg-[#030014] relative overflow-hidden border-y border-white/5">

            <div className="flex items-center absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-[#030014] pr-8 pl-4 py-2 border-r border-white/10 rounded-r-3xl">
                <Newspaper className="w-5 h-5 text-pink-500 mr-2" />
                <span className="text-white font-black uppercase tracking-widest text-xs whitespace-nowrap">As seen in</span>
            </div>

            <div className="relative flex overflow-x-hidden ml-32 md:ml-48 group">

                {/* Marquee Gradient Hiders */}
                <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#030014] to-transparent z-10" />
                <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#030014] to-transparent z-10" />

                <div className="py-4 animate-marquee whitespace-nowrap flex items-center gap-16 group-hover:[animation-play-state:paused] pr-16 bg-[#030014]">
                    {[...newsItems, ...newsItems].map((news, i) => (
                        <span
                            key={i}
                            className="text-4xl lg:text-5xl font-black text-white/10 opacity-50 hover:opacity-100 hover:text-white transition-all cursor-pointer inline-block transform hover:scale-110"
                        >
                            {news.name}
                        </span>
                    ))}
                </div>
            </div>

        </section>
    );
}
