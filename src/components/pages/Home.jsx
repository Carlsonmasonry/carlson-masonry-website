import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, CheckCircle, Heart, Star, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

// Import images
import heroImage from '../../assets/home.webp';
import brickworkImage from '../../assets/ladrillo.webp';
import stoneworkImage from '../../assets/piedra.webp';
import image4 from '../../assets/repair.webp';

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.fade-in-up');
    cards.forEach((card) => {
      card.style.animationPlayState = 'paused';
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const coreValues = [
    {
      icon: Shield,
      title: "Responsibility",
      description: "Total commitment to on-time delivery within budget, taking full responsibility for each project."
    },
    {
      icon: Award,
      title: "Quality",
      description: "Superior craftsmanship with premium materials and meticulous attention to every construction detail."
    },
    {
      icon: CheckCircle,
      title: "Compliance",
      description: "Strict adherence to regulations, building codes and safety standards for your peace of mind."
    },
    {
      icon: Heart,
      title: "Dream Building",
      description: "We transform your visions into tangible realities, creating lasting spaces that exceed expectations."
    }
  ];

  const services = [
    {
      title: "Brick Masonry",
      description: "Expert brick installation for residential and commercial projects with impeccable finishes.",
      image: brickworkImage,
      features: ["New installation", "Repairs", "Historical restoration"]
    },
    {
      title: "Natural Stone Installation",
      description: "Beautiful natural stone solutions that add elegance and durability to any project.",
      image: stoneworkImage,
      features: ["Decorative stone", "Retaining walls", "Fireplaces"]
    },
    {
      title: "Repairs and Restoration",
      description: "Specialized repair services that restore the original beauty to your structures.",
      image: image4,
      features: ["Crack repair", "Rejointing", "Waterproofing"]
    }
  ];

  const testimonials = [
    {
      name: "Maria Gonzalez",
      location: "Springdale, AR",
      rating: 5,
      text: "Carlson Masonry completely transformed our backyard. Their attention to detail and professionalism were exceptional. I highly recommend their services.",
      project: "Natural Stone Patio"
    },
    {
      name: "Robert Silva",
      location: "Bentonville, AR",
      rating: 5,
      text: "The work on our fireplace exceeded all our expectations. The team was punctual, clean, and the final result is simply beautiful.",
      project: "Brick Fireplace"
    },
    {
      name: "Ana Martinez",
      location: "Fayetteville, AR",
      rating: 5,
      text: "Top-notch professionals. They met all promised deadlines and the quality of work is exceptional. We would definitely hire them again.",
      project: "Retaining Wall"
    }
  ];

  const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "500+", label: "Completed Projects" },
    { number: "100%", label: "Satisfied Clients" },
    { number: "24/7", label: "Customer Support" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="h-[100dvh] md:h-screen pt-[56px] md:pt-[72px] pb-0 md:pb-12 relative overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-70">
          <img 
            src={heroImage} 
            alt="Home Background"
            className="w-full h-full object-cover object-center md:object-top"
          />
        </div>
        {/* Elegant Gradient Overlay */}
        <div className="absolute inset-0" style={{ 
          background: 'linear-gradient(to top, rgba(0, 31, 63, 0.7) 0%, rgba(0, 31, 63, 0.4) 50%, transparent 100%)' 
        }}></div>
        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 opacity-40">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="container-custom text-center relative z-10 flex flex-col items-center justify-center h-full md:block md:h-auto md:pt-20">
          {/* Main Title */}
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6 leading-tight md:leading-tight" style={{
            color: '#FFFFFF',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: '700'
          }}>
            We Build Your Dreams
            <span className="block text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-[#FFD700] to-[#DAA520] bg-clip-text text-transparent drop-shadow-[1px_1px_4px_rgba(0,0,0,0.5)] leading-tight md:leading-tight">
              With Responsibility and Quality
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-sm md:text-xl max-w-[90%] md:max-w-4xl mx-auto leading-snug md:leading-relaxed mb-2 md:mb-8 px-6 md:px-0" style={{ 
            color: '#FFFFFF', 
            fontFamily: 'Inter, sans-serif',
            lineHeight: '1.4'
          }}>
            Over 10 years transforming visions into lasting realities across Northwest Arkansas. Specialists in masonry combining tradition, innovation and excellence. Proudly serving Rogers, Bentonville, Springdale, Fayetteville, and Siloam Springs with professional masonry services tailored to Arkansas's unique climate and architectural needs.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center items-center mb-3 md:mb-8">
            <Link to="/quote#quote-form">
              <Button 
                size="lg"
                className="transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-2 md:py-3 text-sm md:text-lg font-semibold"
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
                Request Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/gallery">
              <Button 
                className="text-sm md:text-lg px-8 py-2 md:py-4 transition-all duration-300 shadow-lg hover:shadow-xl"
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
          
          {/* Quick contact */}
          <div className="flex flex-col gap-0.5 justify-center items-center text-xs md:text-sm">
            <div className="flex flex-col md:flex-row items-center space-y-0.5 md:space-y-0 md:space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 md:w-4 md:h-4 text-white" />
                <span className="text-white">(479) 347-5469</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 md:w-4 md:h-4 text-white" />
                <span className="text-white">info@carlsonmasonryllc.net</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-0.5">
              <MapPin className="w-4 h-4 md:w-4 md:h-4 text-white" />
              <span className="text-white">5713 Dancing Rabbit Dr, Springdale, AR 72762</span>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full blur-lg"></div>
      </section>

      {/* Core Values Section */}
      <section className="py-8 md:py-16 bg-gradient-to-r from-[#0A2A66] to-[#1446A0]">
        <div className="max-w-6xl mx-auto text-center px-4">
          {/* Título */}
          <h2 className="text-xl md:text-3xl font-bold text-white mb-1 leading-snug">
            Our Core Values
          </h2>

          {/* Texto descriptivo */}
          <p className="text-sm md:text-lg text-white leading-normal mt-1 max-w-3xl mx-auto">
            The foundation that defines who we are and ensures your satisfaction.
          </p>

          {/* Grid de tarjetas */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mt-5 md:mt-8">
            {coreValues.map((value, index) => {
              const iconColors = ['#FFB703', '#1FA2FF', '#1B2A41', '#FFB703'];
              const bgColors = ['bg-yellow-100', 'bg-blue-100', 'bg-gray-100', 'bg-yellow-100'];
              const borderColors = ['#FFB703', '#1FA2FF', '#1B2A41', '#FFB703'];
              return (
                <div 
                  key={index} 
                  className="bg-white/95 shadow-xl rounded-lg p-2 md:p-4 backdrop-blur text-center aspect-square flex flex-col justify-center transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-4 hover:scale-105 hover:shadow-2xl"
                  style={{
                    borderColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = borderColors[index];
                    e.currentTarget.style.borderWidth = '4px';
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.borderWidth = '2px';
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                  }}
                >
                  <div className={`w-8 h-8 md:w-12 md:h-12 rounded-lg shadow-lg flex items-center justify-center mb-2 md:mb-3 mx-auto transition-all duration-300 ${bgColors[index]}`}>
                    <value.icon className={`w-4 h-4 md:w-6 md:h-6 transition-all duration-300`} style={{ color: iconColors[index] }} />
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-[#0A2A66] mb-1 transition-all duration-300">
                    {value.title}
                  </h3>
                  <p className="text-xs text-[#1446A0] leading-snug transition-all duration-300">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="container-custom">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-3xl font-bold mb-3" style={{ color: '#0A2A66' }}>
              Our Specialized Services
            </h2>
            <p className="text-sm md:text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#1446A0' }}>
              From traditional masonry to the most modern installations, 
              our team of experts is here to materialize your projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto px-4">
            {services.map((service, index) => (
              <Card key={index} className="card-hover overflow-hidden border-0 shadow-xl rounded-2xl bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-40 md:h-48 overflow-hidden m-3 rounded-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent"></div>
                </div>
                <CardContent className="p-4 pt-2">
                  <h3 className="text-base font-semibold mb-1" style={{ color: '#0A2A66' }}>{service.title}</h3>
                  <p className="text-xs mb-2 leading-snug line-clamp-3" style={{ color: '#1446A0' }}>{service.description}</p>
                  <ul className="space-y-1 mb-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs">
                        <CheckCircle className="w-3 h-3 mr-2 flex-shrink-0" style={{ color: '#1FA2FF' }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-center">
                  <Link to="/services#services-header">
                      <Button variant="outline" className="text-xs py-2 px-4 md:px-6 rounded-lg text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform hover:-translate-y-1"
                        style={{ background: 'linear-gradient(135deg, #1446A0 0%, #1FA2FF 100%)' }}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'linear-gradient(135deg, #0F3A7A 0%, #1A8FE6 100%)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'linear-gradient(135deg, #1446A0 0%, #1FA2FF 100%)';
                        }}>
                      More Information
                      <ArrowRight className="ml-2 w-3 h-3" />
                    </Button>
                  </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        className="pt-6 pb-10 md:section-padding" 
        style={{ background: 'linear-gradient(135deg, #0A2A66 0%, #1446A0 100%)' }}
      >
        <div className="container-custom">
          {/* Encabezado */}
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 leading-snug" style={{ color: '#FFFFFF' }}>
              Our Achievements in Numbers
            </h2>
            <p className="text-sm md:text-xl max-w-3xl mx-auto leading-snug" style={{ color: '#FFFFFF' }}>
              A proven record of excellence in every project
            </p>
          </div>

          {/* Grid de estadísticas */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-center mx-4 md:mx-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="space-y-1 md:space-y-2 p-4 md:p-6 rounded-lg shadow-xl aspect-square flex flex-col justify-center" 
                style={{ backgroundColor: '#0A2A66' }}
              >
                <div className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight" style={{ color: '#FFB703' }}>
                  {stat.number}
                </div>
                <div className="text-xs md:text-lg" style={{ color: '#FFFFFF' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Northwest Arkansas Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>
              Serving Northwest Arkansas Communities
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              From the bustling business districts of Rogers and Bentonville to the historic charm of Fayetteville, 
              we understand the unique masonry needs of each Northwest Arkansas community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-lg mb-3" style={{ color: '#1B2A41' }}>Rogers & Bentonville</h3>
              <p className="text-gray-600 text-sm">
                Commercial and residential masonry services for the growing business corridor, 
                including modern office buildings and luxury homes.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-lg mb-3" style={{ color: '#1B2A41' }}>Springdale</h3>
              <p className="text-gray-600 text-sm">
                Our home base! Comprehensive masonry solutions for residential and commercial 
                projects throughout the Springdale area.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-lg mb-3" style={{ color: '#1B2A41' }}>Fayetteville & Siloam Springs</h3>
              <p className="text-gray-600 text-sm">
                Historic restoration and new construction services, preserving the architectural 
                heritage while meeting modern needs.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              <strong>Arkansas Climate Expertise:</strong> Our masonry solutions are specifically designed 
              to withstand Arkansas's humid climate, temperature variations, and seasonal weather patterns.
            </p>
            <Link to="/contact#contact-form">
              <Button 
                className="transition-all duration-300 shadow-lg hover:shadow-xl"
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
                Get Local Service Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 relative overflow-hidden" style={{ backgroundColor: '#F5E6D3' }}>
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-200/20 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-200/20 to-transparent rounded-full translate-y-40 -translate-x-40"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-3xl font-bold mb-3" style={{ color: '#1B2A41' }}>
              What Our Clients Say
            </h2>
            <p className="text-sm md:text-lg max-w-3xl mx-auto leading-tight" style={{ color: '#3E4C61' }}>
              Our clients' satisfaction is our greatest achievement. 
              Discover why they trust us for their most important projects.
            </p>
          </div>
          
          {/* Grid mejor proporcionado */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto px-4">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="group testimonial-card card-hover rounded-xl border-0 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 h-full"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <CardContent className="p-4 flex flex-col h-[260px] justify-between">
                  {/* Reseña */}
                  <div>
                    <div className="flex items-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current mr-1" style={{ color: '#FFB703' }} />
                      ))}
                    </div>
                    <p className="text-sm italic leading-snug text-gray-700 mb-3 line-clamp-4">
                      "{testimonial.text}"
                    </p>
                  </div>
                  
                  {/* Datos del cliente */}
                  <div className="border-t pt-2" style={{ borderColor: '#E0E0E0' }}>
                    <div className="font-bold text-sm" style={{ color: '#1B2A41' }}>
                      {testimonial.name}
                    </div>
                    <div className="text-xs" style={{ color: '#3E4C61' }}>
                      {testimonial.location}
                    </div>
                    <div className="text-xs font-semibold" style={{ color: '#FFB400' }}>
                      {testimonial.project}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Botón ver más */}
          <div className="text-center mt-6">
            <Link to="/testimonials#testimonials-header">
              <Button className="rounded-xl text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 px-6 py-3 text-sm font-semibold"
                style={{ backgroundColor: '#1B2A41', border: '2px solid #1B2A41' }}>
                View More Testimonials
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:section-padding" style={{ background: 'linear-gradient(135deg, #FFB400 0%, #E76F51 100%)' }}>
        <div className="container-custom text-center">
          <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4" style={{ color: '#FFFFFF' }}>
            Ready to Build Your Dream?
          </h2>
          <p className="text-sm md:text-xl mb-4 md:mb-6 max-w-3xl mx-auto leading-relaxed" style={{ color: '#FFFFFF' }}>
            Contact us today for a free consultation. Our team of experts 
            is ready to transform your vision into a lasting and beautiful reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-[70%] sm:max-w-none mx-auto">
            <Link to="/quote#quote-form" className="w-full max-w-[280px] sm:w-auto sm:max-w-none">
              <Button className="w-full text-sm sm:text-base px-4 py-3 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform hover:-translate-y-1"
                style={{ backgroundColor: '#1B2A41', color: '#FFFFFF', border: 'none' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#0F1F2E';
                  e.target.style.transform = 'translateY(-2px) scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#1B2A41';
                  e.target.style.transform = 'translateY(0) scale(1)';
                }}>
                Request Free Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/contact#contact-form" className="w-full max-w-[280px] sm:w-auto sm:max-w-none">
              <Button variant="outline" className="w-full text-sm sm:text-base px-4 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform hover:-translate-y-1"
                style={{ backgroundColor: '#FFFFFF', color: '#1B2A41', border: '2px solid #1B2A41' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#F8F9FA';
                  e.target.style.transform = 'translateY(-2px) scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#FFFFFF';
                  e.target.style.transform = 'translateY(0) scale(1)';
                }}>
                Contact Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get quick answers to common questions about our masonry services in Arkansas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-3" style={{ color: '#1B2A41' }}>
                What areas do you serve?
              </h3>
              <p className="text-gray-600 text-sm">
                We serve Rogers, Bentonville, Springdale, Siloam Springs, and Fayetteville with professional masonry services.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-3" style={{ color: '#1B2A41' }}>
                Do you offer free estimates?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes, we provide free, detailed estimates for all masonry projects. Contact us to schedule your consultation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-3" style={{ color: '#1B2A41' }}>
                How long does a project take?
              </h3>
              <p className="text-gray-600 text-sm">
                Project timelines vary based on size and complexity. We provide detailed timelines in our estimates.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-3" style={{ color: '#1B2A41' }}>
                What services do you provide?
              </h3>
              <p className="text-gray-600 text-sm">
                Brick masonry, natural stone installation, repairs & restoration, and residential masonry projects.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/faq">
              <Button 
                className="transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{
                  backgroundColor: '#1B2A41',
                  color: '#FFFFFF',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '600',
                  borderRadius: '12px',
                  border: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(90deg, #1B2A41 0%, #1446A0 100%)';
                  e.target.style.color = '#FFFFFF';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#1B2A41';
                  e.target.style.color = '#FFFFFF';
                  e.target.style.transform = 'translateY(0px)';
                }}
              >
                View All FAQ
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
