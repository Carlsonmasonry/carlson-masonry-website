import React, { useState, useEffect } from 'react'; 
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import logoImage from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(window.innerWidth >= 768); // 👈 En desktop arranca compacto
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        // En móvil puede iniciar alto, en desktop siempre compacto
        setIsScrolled(window.innerWidth >= 768 ? true : false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      {/* Top bar SOLO visible en desktop */}
      <div className="hidden md:block bg-primary text-primary-foreground py-1 px-4 text-xs">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Phone className="w-3 h-3" />
              <span>(479) 347-5469</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-3 h-3" />
              <span>info@carlsonmasonryllc.net</span>
            </div>
          </div>
          <div className="hidden lg:block">
            <span className="text-xs">Over 10 years building dreams in Arkansas</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="h-12 md:h-16 px-3 md:px-4"> {/* 👈 altura controlada */}
        <div className="container-custom flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center h-full py-1">
            <img
              src={logoImage}
              alt="Carlson Masonry Logo"
              className="h-10 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  location.pathname === item.path ? 'text-primary border-b-2 border-primary' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center space-x-2">
            <Link to="/quote" className="hidden md:block">
              <Button className="btn-secondary">Request Quote</Button>
            </Link>

            <button
              onClick={toggleMenu}
              className="lg:hidden p-1 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 max-h-[calc(100vh-60px)] overflow-y-auto">
            <div className="container-custom py-2">
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`py-2 px-3 text-base font-medium border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      location.pathname === item.path ? 'text-primary bg-blue-50' : 'text-gray-700'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-2 pb-1 px-3 border-t border-gray-200 mt-1">
                  <Link to="/quote" onClick={() => setIsMenuOpen(false)}>
                    <Button className="btn-secondary w-full text-sm py-2 px-4">Request Quote</Button>
                  </Link>
                </div>
                <div className="px-3 py-2 border-t border-gray-200 bg-gray-50">
                  <div className="flex items-center space-x-2 mb-1">
                    <Phone className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">(479) 347-5469</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-sm">info@carlsonmasonryllc.net</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
