import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Upload, Calculator, Clock, Shield, FileText, PenTool, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import SEOHead from '../SEOHead';
import imaheaderservice from '../../assets/quote.webp';

const Quote = () => {
  const seo = {
    title: "Free Masonry Quote Arkansas | Carlson Masonry",
    description: "Get free masonry estimates in NW Arkansas. Fast quotes for brick, stone & repairs. Serving Springdale, Rogers, Bentonville. (479) 347-5469",
    keywords: "free masonry quote Arkansas, brick masonry estimate, stone work quote Springdale, masonry cost Rogers, get masonry quote Bentonville, free masonry consultation Fayetteville, masonry pricing Arkansas",
    canonical: "/quote",
    ogImage: "/logo.webp"
  };

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Contact Info
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    
    // Step 2: Project Details
    projectType: '',
    projectSize: '',
    timeline: '',
    budget: '',
    description: '',
    
    // Step 3: Specific Requirements
    materials: [],
    style: '',
    accessibility: '',
    permits: '',
    additionalServices: [],
    
    // Step 4: Final Details
    preferredContact: '',
    bestTime: '',
    additionalInfo: '',
    photos: []
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const scrollToForm = () => {
      const element = document.getElementById('quote-form');
      if (element) {
        // Scroll to the form with offset to account for fixed header
        const headerOffset = 120; // Account for fixed header height
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    const handleScroll = () => {
      // Scroll to form section if hash is present, otherwise scroll to top
      if (window.location.hash === '#quote-form') {
        // Try multiple times with different delays to ensure it works
        setTimeout(scrollToForm, 100);
        setTimeout(scrollToForm, 500);
        setTimeout(scrollToForm, 1000);
      } else {
        // If no hash, scroll to top of page (hero section)
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      }
    };

    // Handle initial load
    handleScroll();

    // Listen for hash changes
    const handleHashChange = () => {
      handleScroll();
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'materials' || name === 'additionalServices') {
        setFormData(prev => ({
          ...prev,
          [name]: checked 
            ? [...prev[name], value]
            : prev[name].filter(item => item !== value)
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: checked
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quote request submitted:', formData);
    setIsSubmitted(true);
  };

  const steps = [
    { number: 1, title: "Contact Information", icon: CheckCircle },
    { number: 2, title: "Project Details", icon: Calculator },
    { number: 3, title: "Specific Requirements", icon: Upload },
    { number: 4, title: "Complete Request", icon: Clock }
  ];

  const projectTypes = [
    "Brick Masonry",
    "Natural Stone Installation",
    "Repairs and Restoration",
    "Fireplace (Indoor/Outdoor)",
    "Patio or Walkway",
    "Retaining Wall",
    "Commercial Facade",
    "Complete Residential Project",
    "Other (specify in description)"
  ];

  const materials = [
    "Traditional brick",
    "Modern brick",
    "Local natural stone",
    "Imported natural stone",
    "Artificial stone",
    "Decorative concrete",
    "Specialized mortar",
    "Recycled materials"
  ];

  const additionalServices = [
    "Architectural design",
    "Permits and licenses",
    "Excavation and preparation",
    "Sealing",
    "Post-construction cleanup",
    "Scheduled maintenance",
    "Extended warranty",
    "Specialized consulting"
  ];

  if (isSubmitted) {
    return (
      <div className="pt-32">
        <section className="section-padding">
          <div className="container-custom">
            <Card className="max-w-2xl mx-auto border-0 shadow-2xl bg-green-50 border-green-200">
              <CardContent className="p-12 text-center">
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                <h1 className="text-3xl font-bold text-green-800 mb-4">
                  Quote Request Sent!
                </h1>
                <p className="text-lg text-green-700 mb-6 leading-relaxed">
                  Thank you for trusting Carlson Masonry LLC. We have received your quote request 
                  and our team of experts is reviewing it.
                </p>
                
                <div className="bg-white rounded-lg p-6 mb-6 text-left">
                  <h3 className="font-semibold text-primary mb-3">Next Steps:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Review of your request (24 hours)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Initial contact to clarify details (48 hours)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Site visit if necessary (3-5 days)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Delivery of detailed quote (5-7 days)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/">
                    <Button className="btn-primary">
                      Back to Home
                    </Button>
                  </Link>
                  <Link to="/gallery">
                    <Button className="bg-white text-black hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                      View Our Projects
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <SEOHead {...seo} />
      {/* Hero Section */}
      <section className="h-[100dvh] md:h-screen pt-[56px] md:pt-[72px] pb-0 md:pb-12 relative overflow-hidden flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1B2A41 0%, #3E4C61 100%)' }}>
        {/* Background Image */}
        <div className="absolute inset-0 opacity-60">
          <img 
            src={imaheaderservice} 
            alt="Get free masonry quote in Arkansas - Brick and stone work estimates Springdale Rogers"
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
          {/* Main Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
            Request Your Quote Now
            <span className="block text-xl md:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-[#FFD700] to-[#DAA520] bg-clip-text text-transparent drop-shadow-[1px_1px_4px_rgba(0,0,0,0.5)] leading-tight md:leading-tight">
              Where Your Dreams Begin
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl max-w-[90%] md:max-w-3xl mx-auto leading-relaxed md:leading-snug mb-6 md:mb-4 px-6 md:px-0" style={{ 
            color: '#FFFFFF', 
            fontFamily: 'Lato, sans-serif',
            lineHeight: '1.6'
          }}>
            Get a detailed and personalized quote for your <Link to="/services" className="text-white underline hover:text-yellow-400 transition-colors">masonry project</Link> in Northwest Arkansas. 
            Our step-by-step process helps us understand exactly what you need 
            to provide you with the most accurate estimate possible for projects in Rogers, 
            Bentonville, Springdale, Fayetteville, and Siloam Springs. <Link to="/gallery" className="text-white underline hover:text-yellow-400 transition-colors">View our portfolio</Link>.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center">
            <Link to="#quote-form">
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
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full blur-lg"></div>
      </section>

      {/* Progress Indicator */}
      <section className="py-8" style={{ backgroundColor: '#FFB400' }}>
        <div className="container-custom">
          <div className="flex justify-center">
            <div className="flex items-center space-x-4 md:space-x-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`flex items-center space-x-2 ${
                    currentStep >= step.number ? 'text-primary' : 'text-muted-foreground'
                  }`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                      currentStep === step.number 
                        ? 'shadow-lg animate-pulse' 
                        : currentStep > step.number 
                          ? 'shadow-md' 
                          : 'shadow-sm'
                    }`} style={{
                      background: currentStep >= step.number 
                        ? 'linear-gradient(135deg, #002d5b 0%, #007bff 100%)' 
                        : '#e9ecef',
                      color: currentStep >= step.number ? '#FFFFFF' : '#6c757d',
                      boxShadow: currentStep === step.number 
                        ? '0 0 20px rgba(0, 123, 255, 0.4)' 
                        : currentStep > step.number 
                          ? '0 4px 12px rgba(0, 123, 255, 0.2)' 
                          : '0 2px 6px rgba(0, 0, 0, 0.1)'
                    }}>
                      {currentStep > step.number ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        step.number
                      )}
                    </div>
                    <span className="hidden md:block font-medium" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500', color: '#1B2A41' }}>{step.title}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-8 md:w-16 h-0.5 mx-2 md:mx-4 transition-all duration-300`} style={{
                      background: currentStep > step.number 
                        ? 'linear-gradient(90deg, #002d5b 0%, #007bff 100%)' 
                        : '#e9ecef'
                    }}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="quote-form" className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container-custom max-w-4xl mx-auto">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Contact Information */}
            {currentStep === 1 && (
              <Card className="border-0 shadow-lg" style={{ borderRadius: '12px', boxShadow: '0px 4px 20px rgba(0,0,0,0.05)' }}>
                <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6" style={{ color: '#0A2A66', fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>
                      Get Your Quote
                    </h2>
                  <p className="mb-8" style={{ color: '#6c757d', fontFamily: 'Open Sans, sans-serif', fontWeight: '300' }}>
                    Let's start with your basic information so we can contact you with the quote.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#002d5b', fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}>
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                        className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                        style={{ 
                          borderRadius: '12px', 
                          boxShadow: '0px 4px 10px rgba(0,0,0,0.05)',
                          border: '1px solid #e9ecef',
                          padding: '12px 16px'
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#002d5b', fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}>
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                        className="transition-all duration-300 focus:ring-2 focus:ring-blue-500"
                        style={{ 
                          borderRadius: '12px', 
                          boxShadow: '0px 4px 10px rgba(0,0,0,0.05)',
                          border: '1px solid #e9ecef',
                          padding: '12px 16px'
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#002d5b', fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}>
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="(479) 347-5469"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#002d5b', fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}>
                        City *
                      </label>
                      <Input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        placeholder="Springdale"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2" style={{ color: '#002d5b', fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}>
                        Project Address *
                      </label>
                      <Input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        placeholder="Complete address where the project will be performed"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#002d5b', fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}>
                        Zip Code
                      </label>
                      <Input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        placeholder="72764"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Project Details */}
            {currentStep === 2 && (
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6" style={{ color: '#1B2A41', fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>
                    Project Details
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Cuéntanos sobre tu proyecto para poder preparar una cotización precisa.
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#002d5b', fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}>
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#002d5b', fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}>
                          Approximate Project Size
                        </label>
                        <select
                          name="projectSize"
                          value={formData.projectSize}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select size</option>
                          <option value="small">Small (less than 100 sq ft)</option>
                          <option value="medium">Medium (100-500 sq ft)</option>
                          <option value="large">Large (500-1000 sq ft)</option>
                          <option value="xlarge">Very Large (more than 1000 sq ft)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#002d5b', fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}>
                          Desired Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select timeline</option>
                          <option value="asap">As soon as possible</option>
                          <option value="1month">Within 1 month</option>
                          <option value="3months">1-3 months</option>
                          <option value="6months">3-6 months</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#002d5b', fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}>
                        Estimated Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        <option value="under5k">Less than $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="over50k">More than $50,000</option>
                        <option value="discuss">I prefer to discuss it</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#002d5b', fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}>
                        Project Description *
                      </label>
                      <Textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Describe your project in detail: what you want to build, repair or improve, preferred style, any special requirements, etc."
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Specific Requirements */}
            {currentStep === 3 && (
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6" style={{ color: '#1B2A41', fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>
                    Specific Requirements
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Ayúdanos a entender mejor tus preferencias y necesidades específicas.
                  </p>
                  
                  <div className="space-y-8">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-4">
                        Preferred Materials (select all that apply)
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {materials.map((material, index) => (
                          <label key={index} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              name="materials"
                              value={material}
                              checked={formData.materials.includes(material)}
                              onChange={handleInputChange}
                              className="rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <span className="text-sm">{material}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#002d5b', fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}>
                          Preferred Style
                        </label>
                        <select
                          name="style"
                          value={formData.style}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select style</option>
                          <option value="traditional">Traditional</option>
                          <option value="modern">Modern</option>
                          <option value="rustic">Rustic</option>
                          <option value="contemporary">Contemporary</option>
                          <option value="historic">Historic/Classic</option>
                          <option value="custom">Custom</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#002d5b', fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}>
                          Are Permits Needed?
                        </label>
                        <select
                          name="permits"
                          value={formData.permits}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">I'm not sure</option>
                          <option value="yes">Yes, I need help with permits</option>
                          <option value="no">No permits needed</option>
                          <option value="have">I already have the permits</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-primary mb-4">
                        Additional Services (select all you need)
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {additionalServices.map((service, index) => (
                          <label key={index} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              name="additionalServices"
                              value={service}
                              checked={formData.additionalServices.includes(service)}
                              onChange={handleInputChange}
                              className="rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <span className="text-sm">{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Final Details */}
            {currentStep === 4 && (
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6" style={{ color: '#1B2A41', fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>
                    Complete Request
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Últimos detalles para completar tu solicitud de cotización.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#002d5b', fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}>
                          Preferred Contact Method
                        </label>
                        <select
                          name="preferredContact"
                          value={formData.preferredContact}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select method</option>
                          <option value="phone">Phone</option>
                          <option value="email">Email</option>
                          <option value="text">Text message</option>
                          <option value="any">Any method</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#002d5b', fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}>
                          Best Time to Contact You
                        </label>
                        <select
                          name="bestTime"
                          value={formData.bestTime}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select time</option>
                          <option value="morning">Morning (8AM - 12PM)</option>
                          <option value="afternoon">Afternoon (12PM - 5PM)</option>
                          <option value="evening">Evening (5PM - 8PM)</option>
                          <option value="anytime">Any time</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#002d5b', fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}>
                        Additional Information
                      </label>
                      <Textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Is there anything else we should know about your project? Access restrictions, special considerations, specific questions, etc."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#002d5b', fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}>
                        Site Photos (Optional)
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground mb-2">
                          Upload photos of the area where the project will be performed
                        </p>
                        <p className="text-xs text-muted-foreground">
                          JPG, PNG or PDF up to 10MB each
                        </p>
                        <input
                          type="file"
                          multiple
                          accept="image/*,.pdf"
                          className="hidden"
                          id="photos"
                        />
                        <label htmlFor="photos" className="mt-2 inline-block">
                          <Button type="button" className="bg-white text-black hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer">
                            Select Files
                          </Button>
                        </label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <div>
                {currentStep > 1 && (
                  <Button 
                    type="button" 
                    className="hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" 
                    onClick={prevStep}
                    style={{
                      backgroundColor: '#FFFFFF',
                      color: '#002d5b',
                      border: '2px solid #007bff',
                      borderRadius: '12px',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: '600',
                      padding: '12px 24px'
                    }}
                  >
                    Previous
                  </Button>
                )}
              </div>
              <div>
                {currentStep < 4 ? (
                  <Button 
                    type="button" 
                    onClick={nextStep} 
                    className="hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    style={{
                      background: 'linear-gradient(135deg, #004aad 0%, #007bff 100%)',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '12px',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: '600',
                      padding: '12px 24px'
                    }}
                  >
                    Next
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                ) : (
                  <Button 
                    type="submit" 
                    className="hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    style={{
                      background: 'linear-gradient(135deg, #004aad 0%, #007bff 100%)',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '12px',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: '600',
                      padding: '12px 24px'
                    }}
                  >
                    Submit Request
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Why Choose Our Quote Process */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-responsive-lg font-bold mb-4">
              Why Is Our Quote Process Different?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our detailed process allows us to provide you with the most accurate 
              and complete quote in the market, with no surprises or hidden costs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Calculator,
                title: "Accurate Quote",
                description: "Detailed analysis of all factors for an exact estimate."
              },
              {
                icon: Clock,
                title: "Fast Response",
                description: "Complete quote delivered within maximum 7 business days."
              },
              {
                icon: Shield,
                title: "No Commitment",
                description: "Completely free quote with no obligation to hire."
              },
              {
                icon: CheckCircle,
                title: "Total Transparency",
                description: "Complete cost breakdown with no surprises or hidden fees."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm opacity-90">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>
              Need Immediate Assistance?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact Carlson Masonry LLC directly for immediate assistance with your masonry project. 
              We're here to help with professional services across Northwest Arkansas.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm md:text-base">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-700 font-medium">(479) 347-5469</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-700 font-medium">info@carlsonmasonryllc.net</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-gray-700 font-medium">5713 Dancing Rabbit Dr, Springdale, AR 72762</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;

