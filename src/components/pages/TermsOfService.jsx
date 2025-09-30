import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Scale, AlertTriangle, Shield, Users, Gavel } from 'lucide-react';
import SEOHead from '../SEOHead';

const TermsOfService = () => {
  const seo = {
    title: "Terms of Service | Carlson Masonry LLC",
    description: "Read our terms of service for masonry services provided by Carlson Masonry LLC in Northwest Arkansas. Understanding our policies and customer agreements.",
    keywords: "terms of service, service agreement, Carlson Masonry terms, masonry contract terms",
    canonical: "/terms-of-service",
    ogImage: "/logo.png"
  };

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
            <h1 className="text-xl font-bold text-gray-900">Terms of Service</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-8">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="w-8 h-8 text-primary" />
              <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
            </div>
            
            <p className="text-gray-600 mb-4">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              These Terms of Service ("Terms") govern your use of the Carlson Masonry LLC website 
              (carlsonmasonryllc.net) and our masonry services. By accessing our website or using 
              our services, you agree to be bound by these Terms.
            </p>
          </div>

          {/* Acceptance of Terms */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <Scale className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900">Acceptance of Terms</h2>
            </div>
            
            <p className="text-gray-600 mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>
            
            <p className="text-gray-600">
              These Terms constitute a legally binding agreement between you and Carlson Masonry LLC. 
              We reserve the right to modify these Terms at any time without prior notice.
            </p>
          </div>

          {/* Services Description */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Services Description</h2>
            
            <p className="text-gray-600 mb-4">
              Carlson Masonry LLC provides professional masonry services including but not limited to:
            </p>
            
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Brick masonry installation and repair</li>
              <li>Natural stone installation</li>
              <li>Masonry restoration and repair</li>
              <li>Residential and commercial masonry projects</li>
              <li>Consultation and project planning</li>
            </ul>
            
            <p className="text-gray-600 mt-4">
              All services are provided in accordance with industry standards and applicable 
              building codes in Arkansas.
            </p>
          </div>

          {/* User Responsibilities */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <Users className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900">User Responsibilities</h2>
            </div>
            
            <p className="text-gray-600 mb-4">
              When using our website and services, you agree to:
            </p>
            
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Provide accurate and complete information when requesting quotes or services</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not use our services for any unlawful or prohibited purpose</li>
              <li>Respect the intellectual property rights of Carlson Masonry LLC</li>
              <li>Not interfere with or disrupt our website or services</li>
              <li>Maintain the confidentiality of any account information</li>
            </ul>
          </div>

          {/* Service Terms */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Terms and Conditions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Quotes and Estimates</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>All quotes are valid for 30 days from the date of issue</li>
                  <li>Final pricing may vary based on actual project requirements</li>
                  <li>Additional work not included in original quote will be charged separately</li>
                  <li>Payment terms will be specified in individual service agreements</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Project Execution</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Work will be performed in accordance with agreed specifications</li>
                  <li>Timeline estimates are approximate and subject to weather and other factors</li>
                  <li>Client must provide access to work areas as needed</li>
                  <li>Changes to project scope must be approved in writing</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Payment Terms</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Payment schedules will be outlined in individual contracts</li>
                  <li>Late payments may incur additional charges</li>
                  <li>Work may be suspended for non-payment</li>
                  <li>All prices are subject to applicable taxes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Warranties and Disclaimers */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900">Warranties and Disclaimers</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Workmanship Warranty</h3>
                <p className="text-gray-600">
                  Carlson Masonry LLC provides a 5-year warranty on workmanship for all completed projects. 
                  This warranty covers defects in workmanship but does not cover damage caused by:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mt-3">
                  <li>Normal wear and tear</li>
                  <li>Extreme weather conditions</li>
                  <li>Structural movement or settling</li>
                  <li>Damage caused by third parties</li>
                  <li>Lack of proper maintenance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Material Warranties</h3>
                <p className="text-gray-600">
                  Material warranties are provided by manufacturers and suppliers. 
                  Carlson Masonry LLC will assist with warranty claims but is not responsible 
                  for manufacturer defects.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Limitation of Liability</h3>
                <p className="text-gray-600">
                  To the maximum extent permitted by law, Carlson Masonry LLC's liability 
                  is limited to the cost of the services provided. We are not liable for 
                  indirect, incidental, or consequential damages.
                </p>
              </div>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
            
            <p className="text-gray-600 mb-4">
              All content on this website, including text, graphics, logos, images, and software, 
              is the property of Carlson Masonry LLC and is protected by copyright and other 
              intellectual property laws.
            </p>
            
            <p className="text-gray-600">
              You may not reproduce, distribute, or create derivative works from our content 
              without written permission. Project photos and testimonials may be used for 
              marketing purposes with client consent.
            </p>
          </div>

          {/* Privacy */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy</h2>
            
            <p className="text-gray-600">
              Your privacy is important to us. Please review our Privacy Policy, which also 
              governs your use of our website and services. By using our services, you consent 
              to the collection and use of information as described in our Privacy Policy.
            </p>
          </div>

          {/* Termination */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Termination</h2>
            
            <p className="text-gray-600 mb-4">
              We may terminate or suspend your access to our services immediately, without prior 
              notice, for any reason, including breach of these Terms.
            </p>
            
            <p className="text-gray-600">
              Upon termination, your right to use our services will cease immediately. 
              Provisions of these Terms that by their nature should survive termination 
              will remain in effect.
            </p>
          </div>

          {/* Governing Law */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <Gavel className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900">Governing Law</h2>
            </div>
            
            <p className="text-gray-600 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of 
              the State of Arkansas, without regard to conflict of law principles.
            </p>
            
            <p className="text-gray-600">
              Any disputes arising from these Terms or our services shall be resolved in the 
              courts of Washington County, Arkansas.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
            
            <p className="text-gray-600">
              We reserve the right to modify these Terms at any time. Changes will be effective 
              immediately upon posting on our website. Your continued use of our services after 
              changes are posted constitutes acceptance of the modified Terms.
            </p>
          </div>

          {/* Severability */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Severability</h2>
            
            <p className="text-gray-600">
              If any provision of these Terms is found to be unenforceable or invalid, 
              the remaining provisions will remain in full force and effect.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-primary/5 rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
            </div>
            
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            
            <div className="space-y-2 text-gray-600">
              <p><strong>Carlson Masonry LLC</strong></p>
              <p>5713 Dancing Rabbit Dr</p>
              <p>Springdale, AR 72762</p>
              <p>Phone: (479) 347-5469</p>
              <p>Email: info@carlsonmasonryllc.net</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
