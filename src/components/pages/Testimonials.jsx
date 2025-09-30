import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Quote, MapPin, Calendar, Phone, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import SEOHead from '../SEOHead';
import imaheadergallery from '../../assets/testimonail.webp';

const Testimonials = () => {
  const seo = {
    title: "Customer Reviews & Testimonials - Carlson Masonry Arkansas",
    description: "Read real testimonials from satisfied customers in Northwest Arkansas. See why homeowners and businesses trust Carlson Masonry LLC for brick and stone masonry services in Springdale, Rogers, Bentonville, Fayetteville, and Siloam Springs.",
    keywords: "masonry reviews Arkansas, Carlson Masonry testimonials, customer reviews Springdale, brick masonry testimonials Rogers, stone work reviews Bentonville, masonry contractor ratings Arkansas",
    canonical: "/testimonials",
    ogImage: "/logo.png"
  };

  useEffect(() => {
    // Scroll to testimonials header if hash is present, otherwise scroll to top
    if (window.location.hash === '#testimonials-header') {
      setTimeout(() => {
        const element = document.getElementById('testimonials-header');
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
    } else {
      // If no hash, scroll to top of page (hero section)
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Maria Gonzalez",
      location: "Springdale, AR",
      date: "March 2024",
      rating: 5,
      project: "Natural Stone Patio",
      text: "Carlson Masonry completely transformed our backyard. Their attention to detail and professionalism were exceptional. The team arrived punctually every day, kept the work area clean, and the final result exceeded all our expectations. The natural stone they selected is beautiful and integrates perfectly with the existing landscape.",
      highlight: "Exceeded all our expectations"
    },
    {
      id: 2,
      name: "Robert Silva",
      location: "Bentonville, AR",
      date: "January 2024",
      rating: 5,
      project: "Brick Fireplace",
      text: "The work on our fireplace was simply spectacular. From the initial consultation to project completion, the Carlson Masonry team demonstrated a level of craftsmanship rarely seen today. The fireplace is not only functional but has become the focal point of our living room. I highly recommend their services.",
      highlight: "Level of craftsmanship rarely seen"
    },
    {
      id: 3,
      name: "Anna Martinez",
      location: "Fayetteville, AR",
      date: "February 2024",
      rating: 5,
      project: "Retaining Wall",
      text: "Top-tier professionals. They met all promised deadlines and the quality of work is exceptional. Our retaining wall not only solved the erosion problem we had but added a beautiful aesthetic element to our garden. Communication throughout the project was excellent.",
      highlight: "Met all promised deadlines"
    },
    {
      id: 4,
      name: "Carlos Rodriguez",
      location: "Rogers, AR",
      date: "December 2023",
      rating: 5,
      project: "Commercial Facade",
      text: "We hired Carlson Masonry for the facade of our new commercial building. The project was complex and required coordination with other contractors, but they handled everything with exceptional professionalism. The result is a modern and elegant facade that has received numerous compliments from our clients and the community.",
      highlight: "Exceptional professionalism"
    },
    {
      id: 5,
      name: "Laura Fernandez",
      location: "Siloam Springs, AR",
      date: "November 2023",
      rating: 5,
      project: "Entry Restoration",
      text: "The restoration of the brick entryway of our home was delicate work requiring specialized experience. Carlson Masonry not only restored the original beauty but also reinforced the structure to last many more years. Their knowledge of traditional techniques is impressive.",
      highlight: "Impressive knowledge of traditional techniques"
    },
    {
      id: 6,
      name: "Michael Torres",
      location: "Springdale, AR",
      date: "October 2023",
      rating: 5,
      project: "Patio and Walkway",
      text: "From day one, the Carlson Masonry team demonstrated why they are the best in their field. Our natural stone patio and walkway have completely transformed our outdoor space. The quality of materials and precision in installation are evident in every detail. We would definitely hire them again.",
      highlight: "The best in their field"
    },
    {
      id: 7,
      name: "Patricia Morales",
      location: "Rogers, AR",
      date: "September 2023",
      rating: 5,
      project: "Wall Repair",
      text: "We had a perimeter wall with serious structural problems. Carlson Masonry not only repaired the existing damage but implemented preventive solutions to avoid future problems. Their comprehensive approach and honesty in recommendations gave us complete confidence in their work.",
      highlight: "Comprehensive approach and honesty"
    },
    {
      id: 8,
      name: "Jose Ramirez",
      location: "Fayetteville, AR",
      date: "August 2023",
      rating: 5,
      project: "Outdoor Fireplace",
      text: "The outdoor fireplace they built has become the heart of our family gatherings. The attention to architectural details and construction quality is evident. The project was completed on time and within the agreed budget. Excellent communication throughout the process.",
      highlight: "Completed on time and within budget"
    },
    {
      id: 9,
      name: "Carmen Vasquez",
      location: "Bentonville, AR",
      date: "July 2023",
      rating: 5,
      project: "Main Entryway",
      text: "The new natural stone entryway has completely transformed the appearance of our home. The custom design they created integrates perfectly with the existing architecture. Their experience in material selection and installation techniques is evident in the final result. Exceptional work.",
      highlight: "Perfectly integrated custom design"
    }
  ];

  const stats = [
    { number: "500+", label: "Satisfied Clients" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "100%", label: "Projects Completed" },
    { number: "10+", label: "Years of Experience" }
  ];

  // Review Schema with AggregateRating
  const reviewSchemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Carlson Masonry LLC",
    "image": "https://carlsonmasonryllc.net/logo.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": testimonials.length.toString(),
      "bestRating": "5",
      "worstRating": "5"
    },
    "review": testimonials.slice(0, 5).map(testimonial => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": testimonial.name
      },
      "datePublished": "2024-01-01",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating.toString(),
        "bestRating": "5"
      },
      "reviewBody": testimonial.text,
      "itemReviewed": {
        "@type": "Service",
        "name": testimonial.project
      }
    }))
  };

  return (
    <div>
      <SEOHead {...seo} />
      {/* Review Schema */}
      <script type="application/ld+json">
        {JSON.stringify(reviewSchemaData)}
      </script>
      {/* Hero Section */}
      <section id="testimonials-header" className="h-[100dvh] md:h-screen pt-[56px] md:pt-[72px] pb-0 md:pb-12 relative overflow-hidden flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1B2A41 0%, #3E4C61 100%)' }}>
        {/* Background Image */}
        <div className="absolute inset-0 opacity-40">
          <img 
            src={imaheadergallery} 
            alt="Customer testimonials Carlson Masonry Arkansas - Client reviews for masonry services"
            className="w-full h-full object-cover object-center"
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
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
            What Our Clients Say
            <span className="block text-xl md:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-[#FFD700] to-[#DAA520] bg-clip-text text-transparent drop-shadow-[1px_1px_4px_rgba(0,0,0,0.5)] leading-tight md:leading-tight">
              Discover Why They Trust Us
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-[90%] md:max-w-3xl mx-auto leading-relaxed md:leading-snug mb-6 md:mb-4 px-6 md:px-0" style={{ 
            color: '#FFFFFF', 
            fontFamily: 'Lato, sans-serif',
            lineHeight: '1.6'
          }}>
            Our clients' satisfaction is our greatest achievement. Each testimonial 
            represents a story of trust, quality, and dreams made reality across Northwest Arkansas. 
            Discover why we are the preferred choice for masonry projects in Rogers, Bentonville, 
            Springdale, Fayetteville, and Siloam Springs.
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
      </section>

      {/* Stats Section */}
      <section className="pt-4 pb-8" style={{ backgroundColor: '#F5E6D3' }}>
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}>{stat.number}</div>
                <div className="text-lg" style={{ color: '#3E4C61', fontFamily: 'Lato, sans-serif' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding" style={{ backgroundColor: '#3E4C61' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: '#FFFFFF', borderRadius: '14px' }}>
                <CardContent className="p-5">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-3">
                    <Quote className="w-6 h-6" style={{ color: '#8AA679' }} />
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3" style={{ color: '#FFB400' }} fill="currentColor" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-sm leading-relaxed mb-4 line-clamp-4" style={{ color: '#3E4C61', fontFamily: 'Lato, sans-serif' }}>
                      "{testimonial.text}"
                    </p>

                  {/* Highlight */}
                  <div className="p-3 mb-4 rounded-r" style={{ backgroundColor: '#F5E6D3', borderLeft: '4px solid #FFB400' }}>
                    <p className="text-sm font-medium" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>
                      "{testimonial.highlight}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-sm" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>{testimonial.name}</h4>
                      <div className="flex items-center space-x-3 text-xs" style={{ color: '#3E4C61', fontFamily: 'Lato, sans-serif' }}>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>{testimonial.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{testimonial.date}</span>
                        </div>
                      </div>
                    </div>
                    <span className="px-2 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#8AA679', color: '#FFFFFF', fontFamily: 'Lato, sans-serif' }}>
                      {testimonial.project}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="section-padding" style={{ backgroundColor: '#1B2A41' }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-16 h-16 mx-auto mb-6" style={{ color: '#FFB400' }} />
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8" style={{ color: '#FFFFFF', fontFamily: 'Lato, sans-serif' }}>
              "Carlson Masonry doesn't just build exceptional structures, they build lasting 
              relationships based on trust, quality, and commitment. Their work speaks for itself."
            </blockquote>
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" style={{ color: '#FFB400' }} />
              ))}
            </div>
            <cite className="text-lg" style={{ color: '#FFFFFF', fontFamily: 'Lato, sans-serif' }}>
              - Average rating from our clients
            </cite>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12" style={{ backgroundColor: '#F5E6D3' }}>
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}>
              Our Commitment to Satisfaction
            </h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#3E4C61', fontFamily: 'Lato, sans-serif' }}>
              Every positive testimonial is the result of our meticulous process 
              and our unwavering commitment to excellence in every project.
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Personalized Consultation",
                description: "We carefully listen to your needs and vision to create customized solutions."
              },
              {
                title: "Transparent Communication",
                description: "We maintain constant communication throughout the project, with no surprises."
              },
              {
                title: "Guaranteed Quality",
                description: "We use only premium materials and proven techniques for lasting results."
              },
              {
                title: "Post-Project Follow-up",
                description: "Our commitment continues after delivery with support and maintenance."
              }
            ].map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg card-hover h-64 flex flex-col" style={{ backgroundColor: '#FFFFFF', borderRadius: '14px' }}>
                <CardContent className="p-6 flex flex-col justify-center h-full">
                  <div className="text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4" style={{ backgroundColor: '#FFB400', color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#3E4C61', fontFamily: 'Lato, sans-serif' }}>{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Testimonial Wall */}
      <section className="section-padding" style={{ backgroundColor: '#3E4C61' }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#FFB400', fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}>
                Experience Wall
            </h2>
              <p className="text-lg" style={{ color: '#FFFFFF', fontFamily: 'Lato, sans-serif' }}>
                Share your experience with Carlson Masonry and help other clients learn about our work
              </p>
            </div>

            {/* Testimonial Form */}
            <Card className="mb-8 border-0 shadow-lg" style={{ backgroundColor: '#FFFFFF', borderRadius: '14px' }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>Leave Your Comment</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="">Select your city</option>
                        <option value="Springdale">Springdale</option>
                        <option value="Bentonville">Bentonville</option>
                        <option value="Fayetteville">Fayetteville</option>
                        <option value="Rogers">Rogers</option>
                        <option value="Siloam Springs">Siloam Springs</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ex: Stone patio, Brick fireplace, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-6 h-6 text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors" />
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Experience</label>
                    <textarea 
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your experience with Carlson Masonry..."
                    ></textarea>
                  </div>

                  <Button 
                    className="w-full py-3 transition-all duration-300 shadow-lg hover:shadow-xl"
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
                    Share My Experience
                <Star className="ml-2 w-4 h-4" />
              </Button>
                </form>
              </CardContent>
            </Card>

            {/* Recent Comments */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#FFB400', fontFamily: 'Montserrat, sans-serif' }}>Recent Comments</h3>
              
              {/* Sample Recent Comments */}
              <Card className="border-0 shadow-md" style={{ backgroundColor: '#FFFFFF', borderRadius: '12px' }}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>Sarah Johnson</h4>
                      <p className="text-sm" style={{ color: '#3E4C61', fontFamily: 'Lato, sans-serif' }}>Fayetteville, AR • Brick Fireplace</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#FFB400' }} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#3E4C61', fontFamily: 'Lato, sans-serif' }}>
                    "Incredible work on our fireplace. The team was very professional and the result exceeded our expectations. I definitely recommend them."
                  </p>
                  <p className="text-xs mt-2" style={{ color: '#8AA679', fontFamily: 'Lato, sans-serif' }}>2 days ago</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md" style={{ backgroundColor: '#FFFFFF', borderRadius: '12px' }}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>Mike Rodriguez</h4>
                      <p className="text-sm" style={{ color: '#3E4C61', fontFamily: 'Lato, sans-serif' }}>Bentonville, AR • Stone Patio</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#FFB400' }} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#3E4C61', fontFamily: 'Lato, sans-serif' }}>
                    "Excellent service from initial consultation to completion. Our patio looks spectacular and the quality of work is exceptional."
                  </p>
                  <p className="text-xs mt-2" style={{ color: '#8AA679', fontFamily: 'Lato, sans-serif' }}>1 week ago</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ backgroundColor: '#1B2A41' }}>
        <div className="container-custom text-center">
          <h2 className="text-responsive-lg font-bold mb-4" style={{ color: '#FFFFFF', fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}>
            Ready to Be Our Next Satisfied Client?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: '#FFFFFF', fontFamily: 'Lato, sans-serif' }}>
            Join the hundreds of clients who have trusted us to bring their 
            dreams to life. Your project could be our next success story.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                Request Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact#contact-form">
              <Button 
                className="text-lg px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform hover:-translate-y-1"
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
                  e.target.style.transform = 'translateY(-2px) scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#8AA679';
                  e.target.style.transform = 'translateY(0px) scale(1)';
                }}
              >
                Contact Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

