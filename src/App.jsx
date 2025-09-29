import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Gallery from './components/pages/Gallery';
import Testimonials from './components/pages/Testimonials';
import Contact from './components/pages/Contact';
import Quote from './components/pages/Quote';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsOfService from './components/pages/TermsOfService';
import FAQ from './components/pages/FAQ';
import Blog from './components/pages/Blog';
import BlogPost from './components/pages/BlogPost';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
                     <Route path="/quote" element={<Quote />} />
                     <Route path="/faq" element={<FAQ />} />
                     <Route path="/blog" element={<Blog />} />
                     <Route path="/blog/:id" element={<BlogPost />} />
                     <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                     <Route path="/terms-of-service" element={<TermsOfService />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;

