import { ChevronRight } from 'lucide-react';

const faqs = [
    "Which dental clinic is best in Hyderabad?",
    "What is the cost of dental implants at Dr. Gowds?",
    "Which doctor is best for invisalign in hyderabad?",
    "Does Dr.Gowds Dental Clinic provide free consultation?",
    "How long dental implants treatment procedure takes?"
];

const FAQ = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-medical-pink font-bold uppercase tracking-[0.3em] text-xs mb-4">Common Queries</p>
                    <h2 className="text-4xl md:text-6xl font-black text-medical-purple italic leading-tight">
                        Frequently Asked <span className="text-medical-pink">Questions</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    {faqs.map((q, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow">
                            <span className="font-bold text-gray-700">{q}</span>
                            <ChevronRight className="text-medical-pink" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
