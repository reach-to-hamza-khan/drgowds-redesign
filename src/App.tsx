import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppIcon from './components/WhatsAppIcon';

// Pages
import HomePage from './pages/HomePage';
import ServiceDetail from './pages/services/ServiceDetail';
import DoctorDetail from './pages/doctors/DoctorDetail';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-medical-pink selection:text-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/doctors/:id" element={<DoctorDetail />} />
          {/* Catch all to home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918065295050"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] bg-medical-green text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center group"
      >
        <WhatsAppIcon size={32} />
        <span className="absolute right-full mr-4 bg-white text-medical-purple px-4 py-2 rounded-xl shadow-xl font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-gray-100">
          Chat with us
        </span>
      </a>
    </div>
  );
}

export default App;
