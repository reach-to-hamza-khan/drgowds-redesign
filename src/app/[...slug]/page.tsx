import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PageProps {
    params: Promise<{ slug: string[] }>;
}

export function generateStaticParams() {
    return [
        { slug: ['services'] },
        { slug: ['doctors'] },
        { slug: ['news'] },
        { slug: ['contact'] }
    ];
}

export default async function GenericPage({ params }: PageProps) {
    const { slug } = await params;
    // Format the slug simply to display a nice title
    const rawPath = slug.join(' / ');
    const titlePath = slug[slug.length - 1];

    const title = titlePath.split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');

    return (
        <main className="min-h-screen bg-[#030014] font-sans text-white overflow-x-hidden pt-20">
            <Header />

            {/* Dynamic Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10 flex flex-col items-center justify-center min-h-[60vh] text-center">

                <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-pointer group">
                    <ArrowLeft className="w-4 h-4 text-pink-500 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-xs font-bold text-gray-300 tracking-widest uppercase">Back to Home</span>
                </Link>

                <p className="text-pink-500 font-bold tracking-[0.3em] uppercase text-sm mb-4">
                    Navigation Hub
                </p>

                <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">
                    {title}
                </h1>

                <p className="text-gray-400 font-medium text-lg lg:text-xl max-w-2xl leading-relaxed">
                    Welcome to the `{rawPath}` page. This is a dynamically generated navigation route to handle everything requested for the new structure. You can customize this page later with specific content models!
                </p>

            </div>

            <Footer />
        </main>
    );
}
