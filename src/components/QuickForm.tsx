const QuickForm = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-extrabold mb-4 text-medical-purple leading-tight">
                    Book Your <span className="text-medical-pink">Free Appointment</span> Now!
                </h2>
                <p className="text-gray-500 mb-12">Just enter your details and our team will call you back within 15 minutes.</p>

                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-medical-pink/20 transition-all text-gray-800"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-medical-pink/20 transition-all text-gray-800"
                    />
                    <select className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-medical-pink/20 transition-all text-gray-800 appearance-none">
                        <option>Select Branch for Appointment</option>
                        <option>Gachibowli</option>
                        <option>Madhapur</option>
                        <option>Manikonda</option>
                        <option>Banjara Hills</option>
                    </select>
                    <button className="w-full bg-pink-purple-gradient text-white font-bold py-5 rounded-2xl uppercase tracking-[0.2em] shadow-xl hover:shadow-pink-500/20 transform hover:-translate-y-1 transition-all mt-4">
                        Next
                    </button>
                </form>
            </div>
        </section>
    );
};

export default QuickForm;
