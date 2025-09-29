import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage = "/logo.png",
  ogType = "website",
  structuredData = null 
}) => {
  const siteName = "Carlson Masonry LLC";
  const siteUrl = "https://carlsonmasonryllc.net";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      <meta name="twitter:site" content="@carlsonmasonry" />
      <meta name="twitter:creator" content="@carlsonmasonry" />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content="Carlson Masonry LLC" />
      <meta name="publisher" content="Carlson Masonry LLC" />
      <meta name="copyright" content="Carlson Masonry LLC" />
      <meta name="language" content="en-US" />
      <meta name="geo.region" content="US-AR" />
      <meta name="geo.placename" content="Springdale, Arkansas" />
      <meta name="geo.position" content="36.1861;-94.1234" />
      <meta name="ICBM" content="36.1861, -94.1234" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1B2A41" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData, null, 2)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
