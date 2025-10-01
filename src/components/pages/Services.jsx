import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Clock, Shield, Award, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import SEOHead from '../SEOHead';
import imaheaderservice from '../../assets/ladrillo.webp';

// Import images
import brickworkImage from '../../assets/68CPjQfi43Ek.webp';
import stoneworkImage from '../../assets/BjlXGtMw0xC2.webp';
import repairImage from '../../assets/C1YKTpWsG2qG.jpg';

const Services = () => {
  useEffect(() => {
    // Scroll to services header if hash is present
    if (window.location.hash === '#services-header') {
      setTimeout(() => {
        const element = document.getElementById('services-header');
        if (element) {
          // Scroll to the top of the header with offset to account for fixed header
          const headerOffset = 120; // Account for fixed header height
          const elementPosition = element.offsetTop;
          const offsetPosition = elementPosition - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 200);
    }
  }, []);

  const seo = {
    title: "Brick, Stone & Repair Services Arkansas | Carlson Masonry",
    description: "Brick installation, stone work & repairs in Northwest Arkansas. Serving Springdale, Rogers, Bentonville. Free quotes. (479) 347-5469",
    keywords: "masonry services Arkansas, brick masonry Springdale, stone installation Rogers, masonry contractor Bentonville, brick repair Fayetteville, stone work Siloam Springs, residential masonry, commercial masonry Arkansas",
    canonical: "/services",
    ogImage: "/logo.webp"
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Masonry Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Carlson Masonry LLC",
      "image": "https://carlsonmasonryllc.net/logo.webp",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5713 Dancing Rabbit Dr",
        "addressLocality": "Springdale",
        "addressRegion": "AR",
        "postalCode": "72762",
        "addressCountry": "US"
      },
      "telephone": "(479) 347-5469"
    },
    "areaServed": [
      {"@type": "City", "name": "Springdale, AR"},
      {"@type": "City", "name": "Rogers, AR"},
      {"@type": "City", "name": "Bentonville, AR"},
      {"@type": "City", "name": "Fayetteville, AR"},
      {"@type": "City", "name": "Siloam Springs, AR"}
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Masonry Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brick Masonry",
            "description": "Expert brick installation for residential and commercial projects"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Natural Stone Installation",
            "description": "Beautiful natural stone solutions for any architectural project"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Masonry Repairs and Restoration",
            "description": "Expert masonry repair and restoration services"
          }
        }
      ]
    }
  };

  // FAQ Schema for Services
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What masonry services does Carlson Masonry offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer comprehensive masonry services including brick installation, natural stone work, masonry repairs and restoration, chimney construction and repair, retaining walls, patios, walkways, fireplaces, and both residential and commercial projects throughout Northwest Arkansas."
        }
      },
      {
        "@type": "Question",
        "name": "How much does masonry work cost in Arkansas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Masonry costs vary based on project size, materials, and complexity. Brick installation typically ranges from $15-30 per square foot, while natural stone can range from $25-50 per square foot. We offer free quotes to provide accurate estimates for your specific project in Springdale, Rogers, Bentonville, Fayetteville, or Siloam Springs."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a typical masonry project take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Project timelines vary: a simple brick patio might take 3-5 days, while a complete home facade could take 2-4 weeks. We provide detailed timelines during our free consultation and always strive to complete projects on schedule while maintaining our high-quality standards."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer free estimates for masonry work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Carlson Masonry LLC offers free, no-obligation consultations and quotes for all masonry projects in Northwest Arkansas. Contact us at (479) 347-5469 or through our website to schedule your free estimate."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best time of year for masonry work in Arkansas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While we work year-round, spring and fall offer ideal conditions for masonry work in Arkansas with moderate temperatures. However, we can successfully complete projects in summer and winter with proper techniques. We'll advise on the best timing for your specific project."
        }
      }
    ]
  };

  const services = [
    {
      title: "Brick Masonry",
      description: "Expert brick installation for residential and commercial projects with impeccable finishes and guaranteed durability.",
      image: brickworkImage,
      alt: "Professional brick masonry services in Bentonville and Rogers Arkansas - Expert brickwork installation",
      features: [
        "New brick installation",
        "Existing structure repairs",
        "Historic building restoration",
        "Brick fireplaces and patios",
        "Decorative and functional walls",
        "Custom finishes"
      ],
      benefits: [
        "Superior durability over 50 years",
        "Resistance to extreme weather conditions",
        "Low maintenance required",
        "Increased property value"
      ],
      process: [
        "Initial consultation and site evaluation",
        "Custom design and material selection",
        "Work area preparation",
        "Professional installation with traditional techniques",
        "Quality inspection and final finishes",
        "Complete cleanup and project delivery"
      ]
    },
    {
      title: "Natural Stone Installation",
      description: "Beautiful natural stone solutions that add elegance, durability and value to any architectural project.",
      image: stoneworkImage,
      alt: "Natural stone masonry installation in Fayetteville Arkansas - Stone walls and fireplaces",
      features: [
        "Decorative stone for facades",
        "Retaining walls and landscaping",
        "Natural stone fireplaces",
        "Stone patios and walkways",
        "Unique architectural elements",
        "Historic stone restoration"
      ],
      benefits: [
        "Unique and unrepeatable natural beauty",
        "Exceptional wear resistance",
        "Sustainability and environmental respect",
        "Versatility in designs and applications"
      ],
      process: [
        "Custom natural stone selection",
        "Detailed project planning",
        "Specialized substrate preparation",
        "Artisanal installation with advanced techniques",
        "Stone sealing and protection",
        "Initial maintenance and recommendations"
      ]
    },
    {
      title: "Repairs and Restoration",
      description: "Specialized repair services that restore the original beauty and structural integrity to your constructions.",
      image: repairImage,
      alt: "Masonry repair and restoration in Springdale Arkansas - Brick and stone restoration services",
      features: [
        "Crack and fissure repair",
        "Mortar repointing and replacement",
        "Structure waterproofing",
        "Historic building restoration",
        "Specialized structural reinforcement",
        "Preventive maintenance"
      ],
      benefits: [
        "Significant extension of service life",
        "Prevention of major damage",
        "Heritage value conservation",
        "Cost-effective solutions"
      ],
      process: [
        "Comprehensive damage diagnosis",
        "Structural and material analysis",
        "Custom restoration plan",
        "Execution with specialized techniques",
        "Quality and resistance testing",
        "Future maintenance program"
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Total Warranty",
      description: "All our work includes complete warranty on materials and labor for 5 years."
    },
    {
      icon: Award,
      title: "Proven Experience",
      description: "Over 10 years of experience and hundreds of successful projects back us up."
    },
    {
      icon: Clock,
      title: "Guaranteed Punctuality",
      description: "We religiously meet agreed deadlines, respecting your time and budget."
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "We use only first-class materials and time-tested techniques."
    }
  ];

  return (
    <div>
      <SEOHead {...seo} />
      {/* Service Schema */}
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      {/* Hero Section */}
      <section className="h-[100dvh] md:h-screen pt-[56px] md:pt-[72px] pb-0 md:pb-12 relative overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-80">
          <img 
            src={imaheaderservice} 
            alt="Masonry services in Northwest Arkansas - Brick stone and chimney work Springdale Rogers"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Elegant Gradient Overlay */}
        <div className="absolute inset-0" style={{ 
          background: 'linear-gradient(to top, rgba(0, 31, 63, 0.7) 0%, rgba(0, 31, 63, 0.4) 50%, transparent 100%)' 
        }}></div>
        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 opacity-60">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="container-custom text-center relative z-10 flex flex-col items-center justify-center h-full md:block md:h-auto md:pt-20">
          {/* Main Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
            Specialized
            <span className="block text-xl md:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-[#FFD700] to-[#DAA520] bg-clip-text text-transparent drop-shadow-[1px_1px_4px_rgba(0,0,0,0.5)] leading-tight md:leading-tight">
              Masonry Services
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl max-w-[90%] md:max-w-3xl mx-auto leading-relaxed md:leading-snug mb-6 md:mb-4 px-6 md:px-0" style={{ 
            color: '#FFFFFF', 
            fontFamily: 'Lato, sans-serif',
            lineHeight: '1.6'
          }}>
            From traditional <Link to="/services" className="text-white underline hover:text-yellow-400 transition-colors">brick installation</Link> to the most sophisticated <Link to="/services" className="text-white underline hover:text-yellow-400 transition-colors">natural stone techniques</Link>, 
            our team of expert craftsmen is ready to materialize any architectural vision 
            with the highest quality and professionalism. Serving Rogers, Bentonville, Springdale, 
            Fayetteville, and Siloam Springs with specialized masonry solutions designed for 
            Arkansas's unique climate and architectural heritage. <Link to="/gallery" className="text-white underline hover:text-yellow-400 transition-colors">View our completed projects</Link>.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center mb-3 md:mb-3">
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
                Request Quote
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
                View Gallery
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

      {/* Services Detail Section */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container-custom">
          <div className="space-y-10">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-6 items-center p-8 shadow-lg ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`} style={{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F5E6D3', borderRadius: '12px' }}>
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={service.image} 
                    alt={service.alt || service.title}
                    loading="lazy"
                    className="rounded-lg shadow-2xl w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
                </div>

                {/* Content */}
                <div className={`space-y-3 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <h2 className="text-responsive-lg font-bold mb-2" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}>
                      {service.title}
                    </h2>
                    <p className="text-lg leading-tight mb-3" style={{ color: '#3E4C61', fontFamily: 'Lato, sans-serif' }}>
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-base font-semibold mb-2" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>Services Included:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#FFB400' }} />
                          <span className="text-xs" style={{ color: '#3E4C61', fontFamily: 'Lato, sans-serif' }}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-base font-semibold mb-2" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>Key Benefits:</h3>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Star className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#FFB400' }} />
                          <span className="text-xs leading-tight" style={{ color: '#3E4C61', fontFamily: 'Lato, sans-serif' }}>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/quote#quote-form">
                    <Button className="text-white shadow-lg hover:shadow-xl transition-all duration-300" style={{ backgroundColor: '#1B2A41' }}>
                      Request Quote
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding" style={{ backgroundColor: '#F9F9F9' }}>
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-responsive-lg font-bold mb-3" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}>
              Our Work Process
            </h2>
            <p className="text-base max-w-3xl mx-auto leading-tight" style={{ color: '#3E4C61', fontFamily: 'Lato, sans-serif' }}>
              We follow a meticulous and proven process that guarantees exceptional results 
              in every project, regardless of its complexity or size.
            </p>
          </div>

          {/* Timeline Horizontal */}
          <div className="relative">
            {/* Línea horizontal de conexión */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, #1B2A41 0%, #00AEEF 100%)' }}></div>
            
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-4">
              {services[0].process.map((step, index) => (
                <div key={index} className="relative">
                  {/* Círculo con número */}
                  <div className="relative z-10 w-12 h-12 lg:w-16 lg:h-16 text-white rounded-full flex items-center justify-center text-sm lg:text-lg font-bold mx-auto mb-3 lg:mb-4 shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer group" style={{ background: 'linear-gradient(135deg, #1B2A41 0%, #00AEEF 100%)' }}>
                    <span className="group-hover:scale-110 transition-transform duration-300">{index + 1}</span>
                  </div>
                  
                  {/* Contenido del paso */}
                  <div className="text-center">
                    <div className="bg-white rounded-lg shadow-lg p-2 lg:p-3 border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group" style={{ borderColor: '#E0E0E0' }}>
                      <p className="text-xs lg:text-sm leading-snug font-medium transition-colors duration-300" style={{ color: '#3E4C61', fontFamily: 'Lato, sans-serif' }}>{step}</p>
                    </div>
                  </div>
                  
                  {/* Flecha de conexión (solo en desktop) */}
                  {index < services[0].process.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-4 h-4 transform -translate-y-2">
                      <div className="w-0 h-0 border-l-4 border-l-blue-400 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding" style={{ backgroundColor: '#F5E6D3' }}>
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-responsive-lg font-bold mb-3" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}>
              Why Choose Our Services?
            </h2>
            <p className="text-base max-w-3xl mx-auto leading-tight" style={{ color: '#3E4C61', fontFamily: 'Lato, sans-serif' }}>
              Our commitment to excellence and customer satisfaction distinguishes us 
              as the preferred choice for masonry projects in Arkansas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg text-center rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300">
                <CardContent className="p-4">
                  <div className="service-icon mb-2">
                    <item.icon className="w-6 h-6" style={{ color: '#FFB400' }} />
                  </div>
                  <h3 className="text-base font-semibold mb-1.5" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>{item.title}</h3>
                  <p className="text-xs leading-tight" style={{ color: '#3E4C61', fontFamily: 'Lato, sans-serif' }}>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #1B2A41 0%, #3E4C61 50%, #1B2A41 100%)' }}>
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-responsive-lg font-bold mb-3" style={{ color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}>
              Service Areas in Arkansas
            </h2>
            <p className="text-lg max-w-3xl mx-auto leading-tight" style={{ color: '#FFFFFF', fontFamily: 'Lato, sans-serif' }}>
              We provide our specialized services throughout Northwest Arkansas, 
              bringing quality and professionalism to your door.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* First row - 3 cards */}
            <div className="rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-2" style={{ backgroundColor: 'rgba(27, 42, 65, 0.8)', borderColor: 'transparent', backdropFilter: 'blur(10px)' }} onMouseEnter={(e) => e.target.style.borderColor = '#FFB400'} onMouseLeave={(e) => e.target.style.borderColor = 'transparent'}>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif' }}>Rogers</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#FFFFFF', fontFamily: 'Lato, sans-serif' }}>Historic downtown charm meets modern development in this thriving NWA city, known for its excellent schools and growing business district.</p>
            </div>
            <div className="rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-2" style={{ backgroundColor: 'rgba(27, 42, 65, 0.8)', borderColor: 'transparent', backdropFilter: 'blur(10px)' }} onMouseEnter={(e) => e.target.style.borderColor = '#FFB400'} onMouseLeave={(e) => e.target.style.borderColor = 'transparent'}>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif' }}>Bentonville</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#FFFFFF', fontFamily: 'Lato, sans-serif' }}>Home to Walmart headquarters and Crystal Bridges Museum, this cultural hub combines corporate excellence with world-class art and recreation.</p>
            </div>
            <div className="rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-2" style={{ backgroundColor: 'rgba(27, 42, 65, 0.8)', borderColor: 'transparent', backdropFilter: 'blur(10px)' }} onMouseEnter={(e) => e.target.style.borderColor = '#FFB400'} onMouseLeave={(e) => e.target.style.borderColor = 'transparent'}>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif' }}>Springdale</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#FFFFFF', fontFamily: 'Lato, sans-serif' }}>The heart of NWA with rich agricultural heritage, diverse community, and proximity to the University of Arkansas, offering vibrant city life.</p>
            </div>
            
            {/* Second row - 2 cards centered */}
            <div className="rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-2 lg:col-start-1 lg:col-end-2" style={{ backgroundColor: 'rgba(27, 42, 65, 0.8)', borderColor: 'transparent', backdropFilter: 'blur(10px)' }} onMouseEnter={(e) => e.target.style.borderColor = '#FFB400'} onMouseLeave={(e) => e.target.style.borderColor = 'transparent'}>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif' }}>Siloam Springs</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#FFFFFF', fontFamily: 'Lato, sans-serif' }}>A picturesque college town with natural springs, charming historic district, and strong community values perfect for family living.</p>
            </div>
            <div className="rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-2 lg:col-start-2 lg:col-end-3" style={{ backgroundColor: 'rgba(27, 42, 65, 0.8)', borderColor: 'transparent', backdropFilter: 'blur(10px)' }} onMouseEnter={(e) => e.target.style.borderColor = '#FFB400'} onMouseLeave={(e) => e.target.style.borderColor = 'transparent'}>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif' }}>Fayetteville</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#FFFFFF', fontFamily: 'Lato, sans-serif' }}>Home to the University of Arkansas, this dynamic city offers college-town energy, cultural events, and beautiful Ozark Mountain views.</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg" style={{ color: '#FFFFFF', fontFamily: 'Lato, sans-serif' }}>
              Don't see your city? <Link to="/contact#contact-form" className="hover:underline font-semibold" style={{ color: '#FFB400' }}>Contact us</Link> to check availability in your area.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #FFB400 0%, #E76F51 100%)' }}>
        <div className="container-custom text-center">
          <h2 className="text-responsive-lg font-bold mb-3" style={{ color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}>
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto leading-tight" style={{ color: '#FFFFFF', fontFamily: 'Lato, sans-serif' }}>
            Our team of experts is ready to transform your vision into a beautiful and lasting reality. 
            Request your free quote today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button className="text-lg px-8 py-4 text-white shadow-lg hover:shadow-xl transition-all duration-300" style={{ backgroundColor: '#1B2A41' }}>
                Request Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact#contact-form">
              <Button className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1" style={{ backgroundColor: '#FFFFFF', color: '#1B2A41', border: '2px solid #1B2A41' }}
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
    </div>
  );
};

export default Services;

