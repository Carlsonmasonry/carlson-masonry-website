import React from 'react';

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://carlsonmasonryllc.net/#organization",
    "name": "Carlson Masonry LLC",
    "alternateName": "Carlson Masonry",
    "description": "Professional masonry services in Arkansas. Specialists in brick installation, natural stone, and masonry repairs with over 10 years of experience.",
    "url": "https://carlsonmasonryllc.net",
    "logo": "https://carlsonmasonryllc.net/logo.png",
    "image": "https://carlsonmasonryllc.net/logo.png",
    "telephone": "(479) 347-5469",
    "email": "info@carlsonmasonryllc.net",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5713 Dancing Rabbit Dr",
      "addressLocality": "Springdale",
      "addressRegion": "AR",
      "postalCode": "72762",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.1861",
      "longitude": "-94.1234"
    },
    "openingHours": "Mo-Fr 07:00-18:00",
    "priceRange": "$$",
    "paymentAccepted": "Cash, Check, Credit Card",
    "currenciesAccepted": "USD",
    "areaServed": [
      {
        "@type": "City",
        "name": "Springdale",
        "containedInPlace": {
          "@type": "State",
          "name": "Arkansas"
        }
      },
      {
        "@type": "City", 
        "name": "Rogers",
        "containedInPlace": {
          "@type": "State",
          "name": "Arkansas"
        }
      },
      {
        "@type": "City",
        "name": "Bentonville", 
        "containedInPlace": {
          "@type": "State",
          "name": "Arkansas"
        }
      },
      {
        "@type": "City",
        "name": "Fayetteville",
        "containedInPlace": {
          "@type": "State", 
          "name": "Arkansas"
        }
      },
      {
        "@type": "City",
        "name": "Siloam Springs",
        "containedInPlace": {
          "@type": "State",
          "name": "Arkansas"
        }
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "36.1861",
        "longitude": "-94.1234"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Masonry Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brick Masonry Installation",
            "description": "Professional brick installation for residential and commercial projects"
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
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Masonry Projects", 
            "description": "Custom residential masonry solutions"
          }
        }
      ]
    },
    "foundingDate": "2010",
    "numberOfEmployees": "5-10",
    "slogan": "We Build Your Dreams With Responsibility and Quality",
    "sameAs": [
      "https://facebook.com/carlsonmasonryllc",
      "https://instagram.com/carlsonmasonryllc", 
      "https://linkedin.com/company/carlsonmasonryllc"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://carlsonmasonryllc.net/#website",
    "url": "https://carlsonmasonryllc.net",
    "name": "Carlson Masonry LLC",
    "description": "Professional masonry services in Arkansas",
    "publisher": {
      "@id": "https://carlsonmasonryllc.net/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://carlsonmasonryllc.net/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema, null, 2)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema, null, 2)
        }}
      />
    </>
  );
};

export default StructuredData;
