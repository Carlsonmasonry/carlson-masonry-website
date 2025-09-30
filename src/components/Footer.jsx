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
        
        {/* Logo + Redes - MÓVIL: izquierda, DESKTOP: centrado */}
        <div className="flex flex-col items-start md:items-center text-left md:text-center space-y-1 md:space-y-3">
          <div className="flex items-center space-x-2">
            <img src={logoImage} alt="Carlson Masonry Logo" className="w-24 h-24 md:w-30 md:h-30 object-contain -mt-0 md:-mt-8" />
          </div>
          <p className="text-xs text-gray-300 leading-snug max-w-[220px] md:-mt-4">
            Building excellence in masonry with tradition, quality, and innovation.
          </p>
          {/* Redes sociales */}
          <div className="flex space-x-3 md:-mt-3">
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

        {/* Quick Links + Our Services en paralelo - MÓVIL: grid 2 columnas, DESKTOP: centrado */}
        <div className="col-span-1 md:col-span-2 grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6 text-left md:text-center">
          {/* Quick Links */}
          <div>
            <h4 className="text-sm md:text-md font-semibold mb-1 md:mb-2" style={{ color: '#FFB400' }}>Quick Links</h4>
            <ul className="space-y-0.5 md:space-y-1 text-xs md:text-sm">
              <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
              <li><Link to="/services" className="hover:text-yellow-400">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-yellow-400">Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-yellow-400 transition-colors duration-200">Blog</Link></li>
              <li><Link to="/faq" className="hover:text-yellow-400">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-sm md:text-md font-semibold mb-1 md:mb-2" style={{ color: '#FFB400' }}>Our Services</h4>
            <ul className="space-y-0.5 md:space-y-1 text-xs md:text-sm">
              <li><button onClick={() => handleServiceClick('Brick Masonry')} className="hover:text-yellow-400 text-left md:text-center w-full">Brick Masonry</button></li>
              <li><button onClick={() => handleServiceClick('Natural Stone Installation')} className="hover:text-yellow-400 text-left md:text-center w-full">Natural Stone Installation</button></li>
              <li><button onClick={() => handleServiceClick('Repairs & Restoration')} className="hover:text-yellow-400 text-left md:text-center w-full">Repairs & Restoration</button></li>
              <li><button onClick={() => handleServiceClick('Residential Projects')} className="hover:text-yellow-400 text-left md:text-center w-full">Residential Projects</button></li>
            </ul>
          </div>
        </div>

        {/* Contact Info - Siempre centrado */}
        <div className="text-center md:text-left">
          <h4 className="text-sm md:text-md font-semibold mb-1 md:mb-2" style={{ color: '#FFB400' }}>Contact Us</h4>
          <p className="text-xs md:text-sm flex items-center justify-center md:justify-start gap-2 mb-0.5 md:mb-1">
            <Phone className="w-4 h-4" /> (479) 347-5469
          </p>
          <p className="text-xs md:text-sm flex items-center justify-center md:justify-start gap-2 mb-0.5 md:mb-1">
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

