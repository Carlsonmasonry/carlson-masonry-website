import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp, HelpCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import SEOHead from '../SEOHead';

const FAQ = () => {
  const seo = {
    title: "Masonry FAQ Arkansas | Carlson Masonry",
    description: "Answers to masonry questions about services, pricing & timelines. Expert advice from Carlson Masonry serving NW Arkansas. Free consultation.",
    keywords: "masonry FAQ Arkansas, masonry questions, brick masonry answers, stone work FAQ, masonry pricing questions, masonry timeline Arkansas, masonry contractors FAQ",
    canonical: "/faq",
    ogImage: "/logo.webp"
  };

  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What areas do you serve in Arkansas?",
          answer: "We provide professional masonry services throughout Northwest Arkansas, including Rogers, Bentonville, Springdale, Siloam Springs, and Fayetteville. Our team is experienced with local building codes and weather conditions in these areas."
        },
        {
          question: "How long has Carlson Masonry LLC been in business?",
          answer: "Carlson Masonry LLC has been serving Arkansas communities for over 10 years, since 2010. We have built a strong reputation for quality workmanship and reliable service across Northwest Arkansas."
        },
        {
          question: "Do you offer free estimates?",
          answer: "Yes, we provide free, detailed estimates for all masonry projects. Our team will visit your property to assess the work needed and provide you with a comprehensive quote that includes materials, labor, and timeline."
        },
        {
          question: "What types of masonry services do you provide?",
          answer: "We specialize in brick masonry installation, natural stone installation, masonry repairs and restoration, and residential masonry projects. Our services include new construction, repairs, and complete restoration work."
        }
      ]
    },
    {
      category: "Local Services by City",
      questions: [
        {
          question: "Do you provide masonry services in Rogers, Arkansas?",
          answer: "Yes, we regularly serve Rogers and the surrounding areas. Our team is familiar with Rogers' building requirements and has completed numerous residential and commercial masonry projects in the city."
        },
        {
          question: "Can you work on masonry projects in Bentonville?",
          answer: "Absolutely! We provide comprehensive masonry services in Bentonville, including brick installation, stone work, and repairs. We understand the local architectural styles and building codes in Bentonville."
        },
        {
          question: "Do you serve Springdale, Arkansas?",
          answer: "Yes, Springdale is our home base! Our main office is located in Springdale, and we have extensive experience with masonry projects throughout the city and surrounding areas."
        },
        {
          question: "Are you available for projects in Siloam Springs?",
          answer: "Yes, we provide masonry services in Siloam Springs and the surrounding areas. Our team can handle both residential and commercial masonry projects in Siloam Springs."
        },
        {
          question: "Do you work in Fayetteville, Arkansas?",
          answer: "Yes, we regularly serve Fayetteville and the University of Arkansas area. Our team is experienced with the diverse architectural styles found in Fayetteville and can handle both historic restoration and new construction projects."
        }
      ]
    },
    {
      category: "Pricing & Quotes",
      questions: [
        {
          question: "How much does brick masonry cost in Arkansas?",
          answer: "Brick masonry costs vary depending on the project size, materials, and complexity. For accurate pricing, we recommend scheduling a free estimate. We provide competitive rates for Northwest Arkansas and work within various budget ranges."
        },
        {
          question: "What factors affect masonry project pricing?",
          answer: "Pricing depends on several factors including project size, material selection, site accessibility, weather conditions, and project complexity. We provide detailed quotes that break down all costs transparently."
        },
        {
          question: "Do you offer payment plans?",
          answer: "We accept various payment methods including cash, check, and credit cards. For larger projects, we can discuss payment schedules that work with your budget. Contact us to discuss payment options for your specific project."
        }
      ]
    },
    {
      category: "Process & Timeline",
      questions: [
        {
          question: "How long does a typical masonry project take?",
          answer: "Project timelines vary based on size and complexity. Small repairs may take a few days, while larger installations can take several weeks. We provide detailed timelines in our estimates and keep you updated throughout the process."
        },
        {
          question: "What is your masonry installation process?",
          answer: "Our process includes: 1) Initial consultation and site evaluation, 2) Custom design and material selection, 3) Work area preparation, 4) Professional installation with traditional techniques, 5) Quality inspection and final finishes, 6) Complete cleanup and project delivery."
        },
        {
          question: "Do you work in all weather conditions?",
          answer: "We work in most weather conditions but may need to adjust schedules for extreme weather. We prioritize safety and quality, so some work may be delayed during severe weather conditions to ensure the best results."
        }
      ]
    },
    {
      category: "Materials & Quality",
      questions: [
        {
          question: "What types of brick and stone do you work with?",
          answer: "We work with a wide variety of materials including traditional brick, natural stone, manufactured stone, and specialty masonry products. We can help you select the best materials for your project and budget."
        },
        {
          question: "Do you provide warranties on your work?",
          answer: "Yes, we provide a 5-year warranty on our workmanship for all completed projects. This warranty covers defects in workmanship but does not cover damage caused by normal wear and tear, extreme weather, or structural movement."
        },
        {
          question: "Can you match existing brick or stone work?",
          answer: "Yes, we specialize in matching existing masonry work for repairs and additions. We can help source matching materials and use techniques to blend new work seamlessly with existing structures."
        }
      ]
    },
    {
      category: "Emergency & Repairs",
      questions: [
        {
          question: "Do you provide emergency masonry repair services?",
          answer: "Yes, we offer emergency repair services for existing clients. For urgent masonry issues that could affect safety or cause further damage, we can provide prompt response and temporary solutions."
        },
        {
          question: "What types of masonry repairs do you handle?",
          answer: "We handle all types of masonry repairs including tuckpointing, brick replacement, stone repair, mortar replacement, and structural masonry repairs. We can assess damage and provide comprehensive repair solutions."
        },
        {
          question: "How do I know if my masonry needs repair?",
          answer: "Signs that masonry may need repair include cracked or loose bricks, deteriorating mortar, water damage, or structural movement. If you notice any of these issues, contact us for a professional assessment."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead {...seo} />
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Frequently Asked Questions</h1>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-blue-800">
        <div className="container-custom">
          <div className="text-center text-white">
            <div className="flex items-center justify-center mb-6">
              <HelpCircle className="w-12 h-12 text-yellow-400" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8" style={{ fontFamily: 'Lato, sans-serif' }}>
              Find answers to common questions about our masonry services in Arkansas. 
              We serve Rogers, Bentonville, Springdale, Siloam Springs, and Fayetteville.
            </p>
            
            {/* Quick Contact */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(479) 347-5469</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@carlsonmasonryllc.net</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Springdale, AR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold mb-6" style={{ 
                  color: '#1B2A41', 
                  fontFamily: 'Montserrat, sans-serif',
                  borderBottom: '3px solid #FFB400',
                  paddingBottom: '8px'
                }}>
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((item, itemIndex) => {
                    const globalIndex = `${categoryIndex}-${itemIndex}`;
                    const isOpen = openItems[globalIndex];
                    
                    return (
                      <Card key={itemIndex} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                        <CardContent className="p-0">
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                          >
                            <h3 className="text-lg font-semibold text-gray-800 pr-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              {item.question}
                            </h3>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                            )}
                          </button>
                          
                          {isOpen && (
                            <div className="px-6 pb-4">
                              <div className="border-t border-gray-200 pt-4">
                                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                                  {item.answer}
                                </p>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary/5">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help with any questions 
              about masonry services in Arkansas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact#contact-form">
                <Button 
                  size="lg"
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
                  Contact Us
                </Button>
              </Link>
              
              <Link to="/quote#quote-form">
                <Button 
                  size="lg"
                  variant="outline"
                  className="transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{
                    borderColor: '#1B2A41',
                    color: '#1B2A41',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: '600',
                    borderRadius: '12px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#1B2A41';
                    e.target.style.color = '#FFFFFF';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#1B2A41';
                    e.target.style.transform = 'translateY(0px)';
                  }}
                >
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
