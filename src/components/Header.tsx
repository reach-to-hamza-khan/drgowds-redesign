"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Home", href: "/" },
    {
        name: "Services",
        href: "/services",
        dropdown: [
            { name: "Dental Implants", href: "/services/dental-implants" },
            { name: "Invisaligners", href: "/services/invisaligners" },
            { name: "Full Mouth Rehabilitation", href: "/services/full-mouth-rehabilitation" },
            { name: "Root Canal", href: "/services/root-canal" }
        ]
    },
    {
        name: "Doctors",
        href: "/doctors",
        dropdown: [
            { name: "Dr. M.S. Gowd", href: "/doctors/dr-ms-gowd" },
            { name: "Dr. Snigdha Gowd", href: "/doctors/dr-snigdha-gowd" },
            { name: "Dr. T. Shankar", href: "/doctors/dr-t-shankar" }
        ]
    },
    { name: "News", href: "/news" },
    { name: "Contact Us", href: "/contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const { scrollY } = useScroll();
    const width = useTransform(scrollY, [0, 100], ["100%", "90%"]);
    const y = useTransform(scrollY, [0, 100], ["0px", "16px"]);
    const br = useTransform(scrollY, [0, 100], ["0px", "32px"]);

    const pathname = usePathname();

    return (
        <motion.header
            style={{ width, y, borderRadius: br }}
            className="fixed left-0 right-0 mx-auto z-50 glass-nav transition-colors duration-300 bg-[#030014]/40"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-2xl bg-gradient-to-tr from-pink-500 to-purple-500 shadow-lg shadow-pink-500/20`}>
                            DG
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-xl tracking-tight text-white leading-none">Dr. Gowd's</span>
                            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-pink-400 mt-1">Dental Hospital</span>
                        </div>
                    </Link>

                    {/* Desktop Nav - Floating Pill Style */}
                    <nav className="hidden md:flex items-center gap-2 p-1.5 rounded-full bg-white/5 border border-white/10 relative">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative"
                                onMouseEnter={() => setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={link.href}
                                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-1
                    ${pathname === link.href ? 'bg-white/10 text-white' : 'text-gray-300 hover:text-white hover:bg-white/10'}
                  `}
                                >
                                    {link.name}
                                    {link.dropdown && <ChevronDown className="w-4 h-4 opacity-50" />}
                                </Link>

                                {/* Dropdown Menu */}
                                {link.dropdown && (
                                    <AnimatePresence>
                                        {activeDropdown === link.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-2 w-64 bg-[#110B29]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden"
                                            >
                                                <div className="py-2">
                                                    {link.dropdown.map((subLink) => (
                                                        <Link
                                                            key={subLink.name}
                                                            href={subLink.href}
                                                            className="block px-5 py-3 text-sm text-gray-300 hover:text-pink-400 hover:bg-white/5 transition-colors font-medium"
                                                        >
                                                            {subLink.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center gap-4">
                        <a href="tel:08065295050" className="px-6 py-2.5 rounded-full font-bold text-white bg-[#25D366]/20 border border-[#25D366]/50 hover:bg-[#25D366] hover:text-white transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(37,211,102,0.2)]">
                            <Phone className="w-4 h-4 text-[#25D366] group-hover:text-white transition-colors" />
                            08065295050
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, height: 0 }}
                        className="absolute top-24 left-4 right-4 md:hidden glass-nav rounded-2xl p-6 border border-white/10 shadow-2xl overflow-y-auto max-h-[70vh]"
                    >
                        <div className="space-y-2">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="flex items-center justify-between text-lg font-bold text-gray-300 py-3 border-b border-white/5 hover:text-pink-400"
                                        onClick={() => !link.dropdown && setIsOpen(false)}
                                    >
                                        {link.name}
                                        {link.dropdown && <ChevronDown className="w-5 h-5 opacity-50" />}
                                    </Link>

                                    {/* Mobile Dropdown items inline */}
                                    {link.dropdown && (
                                        <div className="pl-4 border-l-2 border-white/10 mt-2 space-y-1 mb-4">
                                            {link.dropdown.map((subLink) => (
                                                <Link
                                                    key={subLink.name}
                                                    href={subLink.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="block px-4 py-2 text-gray-400 hover:text-white text-sm font-medium"
                                                >
                                                    {subLink.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <a href="tel:08065295050" className="w-full mt-6 bg-[#25D366] text-white px-6 py-4 rounded-xl font-bold flex justify-center items-center gap-2 shadow-lg shadow-[#25D366]/20">
                            <Phone className="w-5 h-5" />
                            08065295050
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
