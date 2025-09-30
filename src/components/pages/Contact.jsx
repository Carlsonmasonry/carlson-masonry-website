import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import SEOHead from '../SEOHead';
import contactImage from '../../assets/contac.webp';

const Contact = () => {
  const seo = {
    title: "Contact Us - Professional Masonry Contractors in Arkansas | Carlson Masonry",
    description: "Contact Carlson Masonry LLC for expert brick and stone masonry services in Northwest Arkansas. Call (479) 347-5469 or email info@carlsonmasonryllc.net. Serving Springdale, Rogers, Bentonville, Fayetteville, and Siloam Springs.",
    keywords: "contact masonry contractor Arkansas, Carlson Masonry phone, masonry services contact Springdale, get masonry quote Rogers, brick masonry contact Bentonville, stone work inquiry Fayetteville",
    canonical: "/contact",
    ogImage: "/logo.png"
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    projectType: '',
    timeline: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Scroll automático al formulario cuando se carga la página con hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#contact-form') {
      setTimeout(() => {
        const element = document.getElementById('contact-form');
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        projectType: '',
        timeline: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
              details: "(479) 347-5469",
      description: "Monday to Friday: 7:00 AM - 6:00 PM"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@carlsonmasonryllc.net",
      description: "Guaranteed response within 24 hours\nFree quotes available"
    },
    {
      icon: MapPin,
      title: "Oficina Principal",
      details: "5713 Dancing rabbit Dr\nSpringdale At, AR 72762",
      description: "Visits by appointment\nMaterial showroom available"
    },
    {
      icon: Clock,
      title: "Service Hours",
      details: "Monday - Friday: 7:00 AM - 6:00 PM",
      description: "Emergency services available\n24/7 for existing clients"
    }
  ];

  const serviceAreas = [
    "Rogers", "Bentonville", "Springdale", "Siloam Springs", "Fayetteville"
  ];

  const projectTypes = [
    "Brick Masonry",
    "Natural Stone Installation",
    "Repairs and Restoration",
    "Commercial Project",
    "Residential Project",
    "Fireplace",
    "Patio or Walkway",
    "Retaining Wall",
    "Other"
  ];

  const timelines = [
    "As soon as possible",
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "More than 6 months",
    "Just exploring options"
  ];

  return (
    <div>
      <SEOHead {...seo} />
      {/* Hero Section */}
      <section className="h-[100dvh] md:h-screen pt-[56px] md:pt-[72px] pb-0 md:pb-12 relative overflow-hidden flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1B2A41 0%, #3E4C61 100%)' }}>
        {/* Background Image */}
        <div className="absolute inset-0 opacity-40">
          <img 
            src={contactImage} 
            alt="Contact Carlson Masonry LLC - Professional masonry contractor in Northwest Arkansas"
            className="w-full h-full object-cover object-center md:object-top"
          />
        </div>
        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="container-custom text-center relative z-10 flex flex-col items-center justify-center h-full md:block md:h-auto md:pt-20">
          {/* Main Title */}
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif', fontWeight: '700', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
            Contact Us Now
            <span className="block text-xl md:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-[#FFD700] to-[#DAA520] bg-clip-text text-transparent drop-shadow-[1px_1px_4px_rgba(0,0,0,0.5)] leading-tight md:leading-tight">
            And Start Building Your Dreams
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-base md:text-xl max-w-[90%] md:max-w-4xl mx-auto leading-relaxed mb-3 md:mb-8 px-6 md:px-0" style={{ 
            color: '#FFFFFF', 
            fontFamily: 'Lato, sans-serif',
            lineHeight: '1.5'
          }}>
            We are here to help you materialize your masonry project. 
            Contact us today for a free consultation and discover how we can 
            transform your vision into a beautiful and lasting reality.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/quote#quote-form">
              <Button 
                size="lg"
                className="transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-3 text-lg font-semibold"
                style={{
                  backgroundColor: '#FFB400',
                  color: '#1B2A41',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '600',
                  borderRadius: '12px',
                  border: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(90deg, #FFB400 0%, #E09B00 100%)';
                  e.target.style.color = '#FFFFFF';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#FFB400';
                  e.target.style.color = '#1B2A41';
                  e.target.style.transform = 'translateY(0px)';
                }}
              >
                Request Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/gallery">
              <Button 
                className="text-lg px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{
                  backgroundColor: '#8AA679',
                  color: '#FFFFFF',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '600',
                  borderRadius: '12px',
                  border: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#7A9669';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#8AA679';
                  e.target.style.transform = 'translateY(0px)';
                }}
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pt-4 pb-12" style={{ backgroundColor: '#F5E6D3' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-0 shadow-lg card-hover transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #6E7C7C' }}>
                <CardContent className="p-4">
                  <div className="service-icon mb-3">
                    <info.icon className="w-8 h-8 transition-colors duration-300 hover:text-yellow-500" style={{ color: '#8AA679' }} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>{info.title}</h3>
                  <p className="font-medium mb-2 whitespace-pre-line" style={{ color: '#3E4C61', fontFamily: 'Lato, sans-serif' }}>
                    {info.details}
                  </p>
                  <p className="text-sm whitespace-pre-line" style={{ color: '#6E7C7C', fontFamily: 'Lato, sans-serif' }}>
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section id="contact-form" className="py-12" style={{ backgroundColor: '#F2F2F2' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-responsive-lg font-bold mb-6" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>
                Send Us a Message
              </h2>
              <p className="mb-8 leading-relaxed" style={{ color: '#3E4C61', fontFamily: 'Lato, sans-serif' }}>
                Completa el formulario a continuación y nos pondremos en contacto contigo 
                within 24 hours. For urgent inquiries, don't hesitate to call us directly.
              </p>

              {isSubmitted ? (
                <Card className="border-0 shadow-lg" style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #6E7C7C' }}>
                  <CardContent className="p-8 text-center">
                    <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: '#8AA679' }} />
                    <h3 className="text-xl font-semibold mb-2" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>
                      Message Sent Successfully!
                    </h3>
                    <p style={{ color: '#3E4C61', fontFamily: 'Lato, sans-serif' }}>
                      Gracias por contactarnos. Nos pondremos en contacto contigo dentro de 24 horas.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-0 shadow-lg" style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #6E7C7C' }}>
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>
                            Full Name *
                          </label>
                          <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full"
                            placeholder="Tu nombre completo"
                            style={{ backgroundColor: '#F7F7F7', borderRadius: '10px', border: '1px solid #6E7C7C' }}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full"
                            placeholder="tu@email.com"
                            style={{ backgroundColor: '#F7F7F7', borderRadius: '10px', border: '1px solid #6E7C7C' }}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>
                            Phone
                          </label>
                          <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full"
                            placeholder="(479) 347-5469"
                            style={{ backgroundColor: '#F7F7F7', borderRadius: '10px', border: '1px solid #6E7C7C' }}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>
                            Project Type
                          </label>
                          <select
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                            style={{ backgroundColor: '#F7F7F7', borderRadius: '10px', border: '1px solid #6E7C7C' }}
                          >
                            <option value="">Select project type</option>
                            {projectTypes.map((type, index) => (
                              <option key={index} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>
                            Subject
                          </label>
                          <Input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="w-full"
                            placeholder="Subject of your inquiry"
                            style={{ backgroundColor: '#F7F7F7', borderRadius: '10px', border: '1px solid #6E7C7C' }}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>
                            Desired Timeline
                          </label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                            style={{ backgroundColor: '#F7F7F7', borderRadius: '10px', border: '1px solid #6E7C7C' }}
                          >
                            <option value="">Select timeline</option>
                            {timelines.map((timeline, index) => (
                              <option key={index} value={timeline}>{timeline}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>
                          Message *
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full"
                          placeholder="Describe your project, including details about location, size, preferred materials, estimated budget and any other relevant information..."
                          style={{ backgroundColor: '#F7F7F7', borderRadius: '10px', border: '1px solid #6E7C7C' }}
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full transition-all duration-300 shadow-lg hover:shadow-xl"
                        style={{
                          backgroundColor: '#FFB400',
                          color: '#1B2A41',
                          fontFamily: 'Montserrat, sans-serif',
                          fontWeight: '600',
                          borderRadius: '12px',
                          border: 'none'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'linear-gradient(90deg, #FFB400 0%, #E09B00 100%)';
                          e.target.style.color = '#FFFFFF';
                          e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = '#FFB400';
                          e.target.style.color = '#1B2A41';
                          e.target.style.transform = 'translateY(0px)';
                        }}
                      >
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-responsive-lg font-bold mb-6" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>
                  Our Location
                </h2>
                
                {/* Interactive Map */}
                <Card className="border-0 shadow-lg mb-6 overflow-hidden" style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #6E7C7C' }}>
                  <CardContent className="p-0">
                    <div className="w-full h-96">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3180.1234567890!2d-94.1234567!3d36.1861234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDExJzEwLjAiTiA5NMKwMDcnMjQuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Carlson Masonry LLC Location"
                        className="rounded-lg"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>

                <p className="leading-relaxed" style={{ color: '#3E4C61', fontFamily: 'Lato, sans-serif' }}>
                  Nuestra oficina principal está convenientemente ubicada en Springdale, Arkansas, 
                  en el corazón de Northwest Arkansas, con fácil acceso desde todas las áreas 
                  de servicio. Contamos con un showroom donde puedes ver muestras de nuestros 
                  materiales y proyectos anteriores.
                </p>
              </div>

              {/* Service Areas */}
              <div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>
                  Áreas de Servicio
                </h3>
                <p className="mb-4" style={{ color: '#3E4C61', fontFamily: 'Lato, sans-serif' }}>
                  Brindamos servicios especializados en Northwest Arkansas y las siguientes ciudades:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#F5E6D3' }}>
                      <CheckCircle className="w-5 h-5 flex-shrink-0 transition-colors duration-300 hover:text-yellow-500" style={{ color: '#8AA679' }} />
                      <span className="text-sm font-medium" style={{ color: '#1B2A41', fontFamily: 'Lato, sans-serif' }}>{area}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm mt-4" style={{ color: '#6E7C7C', fontFamily: 'Lato, sans-serif' }}>
                  Don't see your city? Contact us to check availability in your area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12" style={{ backgroundColor: '#1B2A41' }}>
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-responsive-lg font-bold mb-4" style={{ color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}>
              Need Urgent Assistance?
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#FFFFFF', fontFamily: 'Lato, sans-serif' }}>
              For structural emergencies or urgent inquiries, our team is available 
              24/7 for existing clients. For new clients, we offer quick response 
              during business hours.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-2 transition-colors duration-300 hover:text-yellow-400" style={{ color: '#FFB400' }} />
              <p className="text-lg font-semibold" style={{ color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif' }}>Llamada Directa</p>
              <p className="text-2xl font-bold" style={{ color: '#FFB400', fontFamily: 'Montserrat, sans-serif' }}>(479) 347-5469</p>
            </div>
            <div className="hidden sm:block w-px h-16" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-2 transition-colors duration-300 hover:text-yellow-400" style={{ color: '#FFB400' }} />
              <p className="text-lg font-semibold" style={{ color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif' }}>Urgent Email</p>
              <p className="text-lg" style={{ color: '#FFB400', fontFamily: 'Lato, sans-serif' }}>emergency@carlsonmasonryllc.net</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12" style={{ backgroundColor: '#F5E6D3' }}>
        <div className="container-custom text-center">
          <h2 className="text-responsive-lg font-bold mb-4" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}>
            Prefer a Detailed Quote?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: '#3E4C61', fontFamily: 'Lato, sans-serif' }}>
            If you already have specific details about your project, use our specialized 
            quote form to get a more accurate and faster estimate.
          </p>
          
          <Link to="/quote#quote-form">
            <Button 
              className="text-lg px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{
                backgroundColor: '#FFB400',
                color: '#1B2A41',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '600',
                borderRadius: '12px',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(90deg, #FFB400 0%, #E09B00 100%)';
                e.target.style.color = '#FFFFFF';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#FFB400';
                e.target.style.color = '#1B2A41';
                e.target.style.transform = 'translateY(0px)';
              }}
            >
              Request Detailed Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;

