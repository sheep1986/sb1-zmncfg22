import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import BookingPopup from './components/BookingPopup';
import ScrollToTop from './components/ScrollToTop';
import PaygLeads from './pages/PaygLeads';
import Footer from './components/Footer';
import CompanyLogos from './components/CompanyLogos';
import VideoPresentation from './components/VideoPresentation';
import MetaAds from './pages/MetaAds';
import ArtificialApex from './pages/ArtificialApex';
import TikTokMarketing from './pages/TikTokMarketing';
import ShopifyDevelopment from './pages/ShopifyDevelopment';
import GoogleAds from './pages/GoogleAds';
import WebDevelopment from './pages/WebDevelopment';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-900 flex flex-col">
        <Navbar />
        <BookingPopup />
        <Chatbot />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <CompanyLogos />
                <About />
                <VideoPresentation />
                <Contact />
              </>
            } />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/payg-leads" element={<PaygLeads />} />
            <Route path="/meta-ads" element={<MetaAds />} />
            <Route path="/artificial-apex" element={<ArtificialApex />} />
            <Route path="/tiktok-marketing" element={<TikTokMarketing />} />
            <Route path="/shopify-development" element={<ShopifyDevelopment />} />
            <Route path="/google-ads" element={<GoogleAds />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}