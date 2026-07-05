import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EmergencyBar from './components/EmergencyBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LiveChatWidget from './components/LiveChatWidget';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Doctors from './pages/Doctors';
import Services from './pages/Services';
import BookAppointment from './pages/BookAppointment';
import PatientPortal from './pages/PatientPortal';
import LabReports from './pages/LabReports';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import FAQ from './pages/FAQ';
import Pharmacy from './pages/Pharmacy';

export default function App() {
  return (
    <>
      <EmergencyBar />
      <Navbar />
      
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book" element={<BookAppointment />} />
          <Route path="/portal" element={<PatientPortal />} />
          <Route path="/lab-reports" element={<LabReports />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/privacy" element={<Legal />} />
          <Route path="/terms" element={<Legal />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>

      <Footer />
      <LiveChatWidget />
    </>
  );
}
