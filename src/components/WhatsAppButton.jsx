import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '4793475469'; // Número de teléfono de Carlson Masonry
  const message = 'Hello! I\'m interested in learning more about your masonry services.';
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/1${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      {/* Botón principal de WhatsApp */}
      <button
        onClick={handleWhatsAppClick}
        className="group relative bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
        
        {/* Tooltip */}
        <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-slate-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
            Chat with us!
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-slate-800"></div>
          </div>
        </div>
        
        {/* Efecto de ondas */}
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping"></div>
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-ping" style={{ animationDelay: '0.5s' }}></div>
      </button>
      
      {/* Indicador de "Disponible" */}
      <div className="absolute -top-1 -right-1 bg-green-400 text-white text-xs font-bold rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default WhatsAppButton;