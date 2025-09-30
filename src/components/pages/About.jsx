import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, Award, Shield, CheckCircle, Heart, Target, Eye, Zap, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import SEOHead from '../SEOHead';
import imaabout from '../../assets/imaabout.webp';

// Import images
import projectImage from '../../assets/C1YKTpWsG2qG.jpg';

const About = () => {

  const teamValues = [
    {
      icon: Target,
      title: "Our Mission",
      description: "Transform our clients' visions into lasting and beautiful realities, using traditional masonry techniques combined with modern innovation, always with the highest level of responsibility and quality."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the most respected and trusted masonry company in Arkansas, recognized for our excellence in building dreams and our unwavering commitment to customer satisfaction."
    },
    {
      icon: Zap,
      title: "Our Principles",
      description: "Integrity in every project, transparency in every communication, excellence in every detail, and total commitment to building lasting relationships based on mutual trust."
    }
  ];


  const stats = [
    { icon: Calendar, number: "10+", label: "Years of Experience" },
    { icon: Users, number: "500+", label: "Completed Projects" },
    { icon: Award, number: "100%", label: "Satisfied Clients" },
    { icon: Shield, number: "0", label: "Workplace Accidents" }
  ];

  const seo = {
    title: "About Us - Professional Masonry Contractors in Northwest Arkansas",
    description: "Learn about Carlson Masonry LLC: Over 10 years of excellence in brick and stone masonry services across Northwest Arkansas. Meet our expert team serving Springdale, Rogers, Bentonville, Fayetteville, and Siloam Springs.",
    keywords: "about Carlson Masonry, masonry company Arkansas, professional masonry contractors, brick masonry experts Springdale, stone masonry team Rogers, masonry experience Arkansas, Northwest Arkansas contractors",
    canonical: "/about",
    ogImage: "/logo.png"
  };

  // FAQ Schema for About page
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long has Carlson Masonry been in business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Carlson Masonry LLC has been providing professional masonry services in Northwest Arkansas for over 10 years since 2010. We have completed over 500 projects across Springdale, Rogers, Bentonville, Fayetteville, and Siloam Springs."
        }
      },
      {
        "@type": "Question",
        "name": "What areas does Carlson Masonry serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We proudly serve all of Northwest Arkansas, including Springdale, Rogers, Bentonville, Fayetteville, Siloam Springs, and surrounding communities. Our team is familiar with local building codes and Arkansas's unique climate requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Is Carlson Masonry licensed and insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Carlson Masonry LLC is fully licensed, bonded, and insured. We maintain all necessary certifications and insurance coverage to protect our clients and ensure professional service delivery throughout Northwest Arkansas."
        }
      },
      {
        "@type": "Question",
        "name": "What types of masonry services does Carlson Masonry offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in brick masonry installation, natural stone work, masonry repairs and restoration, chimney construction and repair, retaining walls, patios, fireplaces, and both residential and commercial masonry projects across Arkansas."
        }
      },
      {
        "@type": "Question",
        "name": "Does Carlson Masonry offer warranties on their work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we stand behind our work with comprehensive warranties. All our masonry projects come with workmanship guarantees, and we use only high-quality materials designed to withstand Arkansas's weather conditions for decades."
        }
      }
    ]
  };

  return (
    <div>
      <SEOHead {...seo} />
      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      {/* Hero Section */}
      <section className="h-[100dvh] md:h-screen pt-[56px] md:pt-[72px] pb-0 md:pb-12 relative overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-60">
          <img 
            src={imaabout} 
            alt="About Carlson Masonry LLC - Professional masonry contractor in Northwest Arkansas"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Elegant Gradient Overlay */}
        <div className="absolute inset-0" style={{ 
          background: 'linear-gradient(to top, rgba(0, 31, 63, 0.7) 0%, rgba(0, 31, 63, 0.4) 50%, transparent 100%)' 
        }}></div>
        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="container-custom text-center relative z-10 flex flex-col items-center justify-center h-full md:block md:h-auto md:pt-20">
          {/* Main Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight md:leading-tight" style={{ 
            color: '#FFFFFF', 
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: '700'
          }}>
            Over 10 Years Building
            <span className="block text-xl md:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-[#FFD700] to-[#DAA520] bg-clip-text text-transparent drop-shadow-[1px_1px_4px_rgba(0,0,0,0.5)] leading-tight md:leading-tight">
              Dreams in Arkansas
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl max-w-[90%] md:max-w-3xl mx-auto leading-relaxed md:leading-snug mb-6 md:mb-4 px-6 md:px-0" style={{ 
            color: '#FFFFFF', 
            fontFamily: 'Inter, sans-serif',
            lineHeight: '1.6'
          }}>
            Building dreams and creating legacies since 2010. We combine traditional craftsmanship with modern masonry techniques to forge lasting relationships with every client. Our experienced team delivers exceptional quality in every brick, stone, and project across Northwest Arkansas.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center items-center mb-3 md:mb-3">
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
                Work with Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
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
                Our Story
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
          
          {/* Quick contact */}
          <div className="flex flex-col gap-0.5 justify-center items-center text-xs md:text-sm">
            <div className="flex flex-col sm:flex-row gap-0.5 sm:gap-4 items-center">
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

      {/* Stats Section */}
      <section className="py-12 px-4 md:px-8" style={{ backgroundColor: '#F5E6D3' }}>
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-responsive-lg font-bold mb-3" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}>
              Our Achievements
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#6E7C7C', fontFamily: 'Lato, sans-serif' }}>
              Over a decade delivering excellence, safety, and trust.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mx-4 md:mx-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg card-hover transition-all duration-300 hover:scale-105 aspect-square flex items-center justify-center" style={{ backgroundColor: '#FFFFFF', borderRadius: '16px' }}>
                <CardContent className="p-4 md:p-6 flex flex-col items-center justify-center h-full">
                  <div className="service-icon mb-4">
                    <stat.icon className="w-8 h-8 transition-colors duration-300" style={{ color: '#FFB400' }} />
                  </div>
                  <div className="text-3xl font-bold mb-2" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>{stat.number}</div>
                  <div className="font-medium text-sm" style={{ color: '#6E7C7C', fontFamily: 'Lato, sans-serif' }}>{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-8 px-4 md:px-8" style={{ backgroundColor: '#F9F9F9' }}>
        <div className="container-custom">
          <div className="text-center mb-4">
            <h2 className="text-responsive-lg font-bold mb-2" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}>
              Our Business Philosophy
            </h2>
            <p className="text-base max-w-3xl mx-auto" style={{ color: '#6E7C7C', fontFamily: 'Lato, sans-serif' }}>
              These are the fundamental principles that guide every decision, every project 
              and every interaction with our valued clients.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 max-w-6xl mx-auto">
            {teamValues.map((value, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg transition-all duration-300 hover:scale-105 w-full lg:w-80 h-80" style={{ backgroundColor: '#FFFFFF', borderRadius: '12px' }}>
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <div className="service-icon mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-md mx-auto transition-colors duration-300" style={{ backgroundColor: '#1B2A41' }}>
                      <value.icon className="w-6 h-6 text-white drop-shadow-sm" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>{value.title}</h3>
                  <p className="leading-tight flex-grow text-sm" style={{ color: '#6E7C7C', fontFamily: 'Lato, sans-serif' }}>{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* About Us Section */}
      <section className="py-8 md:py-12 px-4 md:px-8 text-white" style={{ background: 'linear-gradient(135deg, #1B2A41 0%, #3E4C61 100%)' }}>
        <div className="container-custom">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-3xl font-bold mb-3" style={{ color: '#FFB400', fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}>
              More About Us
            </h2>
            <p className="text-base md:text-lg font-bold mb-4" style={{ color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif' }}>
              Dedicated craftsmanship in masonry services since 2010
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
              <div className="space-y-3 text-sm md:text-base leading-relaxed mb-4">
                <p className="text-white/95" style={{ fontFamily: 'Lato, sans-serif' }}>
                  At Carlson Masonry LLC, we take pride in offering first-class masonry services to residential and commercial clients in Arkansas and surrounding areas. Our experienced team is committed to quality craftsmanship, ensuring that your projects meet the highest standards of durability and aesthetics.
                </p>
                
                <p className="text-white/95" style={{ fontFamily: 'Lato, sans-serif' }}>
                  Since our founding in 2010, we have built a reputation based on reliability, attention to detail, and customer satisfaction. We strive to exceed our clients' expectations on every project we undertake.
                </p>
                
                <p className="text-white/95" style={{ fontFamily: 'Lato, sans-serif' }}>
                  <strong>Services in Northwest Arkansas:</strong> Based in Springdale, we actively serve the communities of Rogers, Bentonville, Fayetteville, and Siloam Springs. Our deep knowledge of Arkansas's climate conditions, local building codes, and regional architectural styles allows us to offer masonry solutions that stand the test of time and perfectly complement the state's natural landscape.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/quote">
                  <Button 
                    className="w-full sm:w-auto font-semibold px-6 py-3 transition-all duration-300 hover:scale-105"
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
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '#FFB400';
                      e.target.style.color = '#1B2A41';
                    }}
                  >
                    Solicitar Cotización Gratuita
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    className="w-full sm:w-auto px-6 py-3 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    style={{
                      backgroundColor: '#FFFFFF',
                      color: '#1B2A41',
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: '600',
                      borderRadius: '12px',
                      border: '2px solid #1B2A41'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#F5E6D3';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#FFFFFF';
                    }}
                  >
                    Contáctanos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-8 px-4 md:px-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img 
                src={projectImage} 
                alt="High-quality brick and stone masonry project by Carlson Masonry in Arkansas"
                loading="lazy"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-accent/10 rounded-lg"></div>
            </div>
            <div className="space-y-4">
              <h2 className="text-responsive-lg font-bold" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}>
                Why Choose Carlson Masonry LLC?
              </h2>
              
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#FFB400' }}>
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-0.5 text-sm" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>Total Responsibility</h3>
                    <p className="leading-tight text-xs" style={{ color: '#6E7C7C', fontFamily: 'Lato, sans-serif' }}>We take full responsibility for every aspect of your project, from planning to final delivery.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#8AA679' }}>
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-0.5 text-sm" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>Unmatched Quality</h3>
                    <p className="leading-tight text-xs" style={{ color: '#6E7C7C', fontFamily: 'Lato, sans-serif' }}>We use only premium materials and proven techniques to ensure lasting results.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#1B2A41' }}>
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-0.5 text-sm" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>Guaranteed Compliance</h3>
                    <p className="leading-tight text-xs" style={{ color: '#6E7C7C', fontFamily: 'Lato, sans-serif' }}>We strictly comply with all regulations and codes, ensuring your complete peace of mind.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#8AA679' }}>
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-0.5 text-sm" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>Dream Building</h3>
                    <p className="leading-tight text-xs" style={{ color: '#6E7C7C', fontFamily: 'Lato, sans-serif' }}>We don't just build structures; we materialize your dreams and most ambitious visions.</p>
                  </div>
                </div>
              </div>
              
              <Link to="/contact#contact-form">
                <Button 
                  className="transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform hover:-translate-y-1"
                  style={{
                    backgroundColor: '#1B2A41',
                    color: '#FFFFFF',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: '600',
                    borderRadius: '12px',
                    border: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(90deg, #1B2A41 0%, #3E4C61 100%)';
                    e.target.style.transform = 'translateY(-2px) scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = '#1B2A41';
                    e.target.style.transform = 'translateY(0px) scale(1)';
                  }}
                >
                  Contact Our Team
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #FFB400 0%, #E76F51 100%)' }}>
        <div className="container-custom text-center">
          <h2 className="text-responsive-lg font-bold mb-4" style={{ color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}>
            Ready to Make Your Project a Reality?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: '#FFFFFF', fontFamily: 'Lato, sans-serif' }}>
            With over 10 years of experience and hundreds of successful projects, 
            we're ready to turn your vision into a beautiful and lasting reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote#quote-form">
              <Button 
                className="text-lg px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{
                  backgroundColor: '#1B2A41',
                  color: '#FFFFFF',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '600',
                  borderRadius: '12px',
                  border: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(90deg, #1B2A41 0%, #3E4C61 100%)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#1B2A41';
                  e.target.style.transform = 'translateY(0px)';
                }}
              >
                Request Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/gallery">
              <Button 
                className="text-lg px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#1B2A41',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '600',
                  borderRadius: '12px',
                  border: '2px solid #1B2A41'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#F5E6D3';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#FFFFFF';
                  e.target.style.transform = 'translateY(0px)';
                }}
              >
                View Our Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

