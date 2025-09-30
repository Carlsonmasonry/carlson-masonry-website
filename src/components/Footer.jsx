import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import logoImage from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const scrollToSection = (categoryId) => {
    const element = document.getElementById(`${categoryId}-section`);
    if (element) {
      const headerOffset = 100; // Offset para compensar el header fijo
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleServiceClick = (category) => {
    const categoryMap = {
      'Brick Masonry': 'brick',
      'Natural Stone Installation': 'stone',
      'Repairs & Restoration': 'repair',
      'Residential Projects': 'residential'
    };
    
    // Navegar a Gallery primero
    navigate('/gallery');
    
    // Esperar un momento para que la página cargue, luego hacer scroll
    setTimeout(() => {
      scrollToSection(categoryMap[category]);
    }, 100);
  };

  return (
    <footer className="bg-gray-900 text-white pt-4 pb-4 md:pt-12 md:pb-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-6">
        
        {/* Logo + Texto + Redes (Todo alineado a la izquierda) */}
        <div className="flex flex-col items-start text-left space-y-3">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logoImage} alt="Carlson Masonry Logo" className="w-24 h-24 md:w-32 md:h-32 object-contain" />
          </div>
          
          {/* Texto descriptivo */}
          <p className="text-xs text-gray-300 leading-snug max-w-[240px]">
            Building excellence in masonry with tradition, quality, and innovation.
          </p>
          
          {/* Redes sociales */}
          <div className="flex space-x-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
              <Facebook className="w-4 h-4 text-white" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
              <Instagram className="w-4 h-4 text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
              <Linkedin className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>

        {/* Quick Links (Alineado a la izquierda) */}
        <div className="text-left">
          <h4 className="text-sm md:text-md font-semibold mb-2" style={{ color: '#FFB400' }}>Quick Links</h4>
          <ul className="space-y-1 text-xs md:text-sm">
            <li><Link to="/" className="hover:text-yellow-400 block text-left">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400 block text-left">About</Link></li>
            <li><Link to="/services" className="hover:text-yellow-400 block text-left">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-yellow-400 block text-left">Gallery</Link></li>
            <li><Link to="/blog" className="hover:text-yellow-400 transition-colors duration-200 block text-left">Blog</Link></li>
            <li><Link to="/faq" className="hover:text-yellow-400 block text-left">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400 block text-left">Contact</Link></li>
          </ul>
        </div>

        {/* Our Services (Alineado a la izquierda) */}
        <div className="text-left">
          <h4 className="text-sm md:text-md font-semibold mb-2" style={{ color: '#FFB400' }}>Our Services</h4>
          <ul className="space-y-1 text-xs md:text-sm">
            <li><button onClick={() => handleServiceClick('Brick Masonry')} className="hover:text-yellow-400 text-left block">Brick Masonry</button></li>
            <li><button onClick={() => handleServiceClick('Natural Stone Installation')} className="hover:text-yellow-400 text-left block">Natural Stone Installation</button></li>
            <li><button onClick={() => handleServiceClick('Repairs & Restoration')} className="hover:text-yellow-400 text-left block">Repairs & Restoration</button></li>
            <li><button onClick={() => handleServiceClick('Residential Projects')} className="hover:text-yellow-400 text-left block">Residential Projects</button></li>
          </ul>
        </div>

        {/* Contact Info (Centrado) */}
        <div className="text-center">
          <h4 className="text-sm md:text-md font-semibold mb-2" style={{ color: '#FFB400' }}>Contact Us</h4>
          <p className="text-xs md:text-sm flex items-center justify-center gap-2 mb-1">
            <Phone className="w-4 h-4" /> (479) 347-5469
          </p>
          <p className="text-xs md:text-sm flex items-center justify-center gap-2 mb-1">
            <Mail className="w-4 h-4" /> info@carlsonmasonryllc.net
          </p>
          <p className="text-xs md:text-sm">Arkansas, USA</p>
        </div>
      </div>

      {/* Bottom bar con políticas */}
      <div className="mt-3 md:mt-6 border-t border-white/20 pt-2 md:pt-3">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-[11px] md:text-xs text-gray-400">
                © {currentYear} Carlson Masonry LLC. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-[11px] md:text-xs">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

