import { Routes, Route, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
    </div>
  );
}

export default App;
