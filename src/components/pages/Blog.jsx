import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import SEOHead from '../SEOHead';
import StructuredData from '../StructuredData';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Arkansas Construction Boom 2024: What Homeowners Need to Know",
      excerpt: "Northwest Arkansas is experiencing unprecedented growth in construction. Learn how this affects your masonry projects and what opportunities are available for homeowners.",
      content: "Northwest Arkansas continues to be one of the fastest-growing regions in the United States, with major companies like Walmart, Tyson Foods, and J.B. Hunt driving economic expansion. This growth has created a construction boom that affects every aspect of home improvement, including masonry work.\n\nFor homeowners in Springdale, Rogers, Bentonville, Fayetteville, and Siloam Springs, this means both opportunities and challenges. The increased demand for construction services has led to:\n\n• Higher material costs due to supply chain pressures\n• Increased competition for skilled masonry contractors\n• New building codes and regulations\n• More innovative materials and techniques\n\nAt Carlson Masonry LLC, we've adapted to these changes by investing in advanced training for our team and establishing relationships with reliable suppliers. We recommend that homeowners planning masonry projects in 2024:\n\n1. **Plan Early**: Book consultations 2-3 months in advance\n2. **Budget for Premium Materials**: Quality materials are worth the investment\n3. **Consider Energy Efficiency**: New masonry techniques can improve home insulation\n4. **Stay Informed**: Follow local building code updates\n\nOur team stays current with all Arkansas building regulations and can help you navigate the permitting process for your masonry project.",
      author: "Carlson Masonry Team",
      date: "2024-09-29",
      category: "Construction News",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&crop=center",
      tags: ["Arkansas", "Construction", "Building Codes", "Northwest Arkansas"]
    },
    {
      id: 2,
      title: "Arkansas Home Buying Programs: Your Guide to Affordable Housing",
      excerpt: "Discover the latest home buying assistance programs available in Arkansas, including first-time buyer incentives and rural development loans.",
      content: "Arkansas offers several programs to help residents achieve homeownership, especially in rural areas and for first-time buyers. Here's what you need to know about current opportunities:\n\n## USDA Rural Development Loans\n\nFor residents in qualifying rural areas (including parts of Northwest Arkansas), the USDA offers:\n\n• **Direct Loans**: For low-income families (0% down payment)\n• **Guaranteed Loans**: For moderate-income families (0% down payment)\n• **Repair Loans and Grants**: For existing homeowners\n\n## Arkansas Development Finance Authority (ADFA)\n\nADFA provides several programs:\n\n• **First-time Homebuyer Program**: Down payment assistance up to $10,000\n• **Move-Up Program**: For current homeowners\n• **Rural Development Program**: Special rates for rural areas\n\n## Local City Programs\n\nMany cities in our service area offer additional assistance:\n\n• **Springdale**: Homebuyer assistance program\n• **Rogers**: First-time buyer incentives\n• **Bentonville**: Workforce housing programs\n• **Fayetteville**: Affordable housing initiatives\n\n## How This Affects Your Masonry Project\n\nWhen purchasing a home with these programs, consider the condition of existing masonry work. Our team can provide:\n\n• Pre-purchase masonry inspections\n• Repair estimates for loan applications\n• Energy-efficient masonry upgrades\n• Compliance with program requirements\n\nContact Carlson Masonry LLC for a consultation on how masonry improvements can enhance your new home's value and energy efficiency.",
      author: "Carlson Masonry Team",
      date: "2024-09-28",
      category: "Home Buying",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&crop=center",
      tags: ["Home Buying", "Arkansas", "USDA Loans", "First-time Buyers"]
    },
    {
      id: 3,
      title: "Arkansas Climate and Masonry: Building for the Long Term",
      excerpt: "Learn how Arkansas's unique climate affects masonry work and what materials and techniques work best for lasting results.",
      content: "Arkansas's climate presents unique challenges for masonry work. With hot, humid summers and cold winters, plus the occasional severe weather, choosing the right materials and techniques is crucial for long-lasting results.\n\n## Climate Challenges in Arkansas\n\n• **High Humidity**: Can cause efflorescence and moisture problems\n• **Temperature Fluctuations**: Expansion and contraction stress\n• **Severe Weather**: Tornadoes, hail, and high winds\n• **Freeze-Thaw Cycles**: Can damage improperly installed masonry\n\n## Best Materials for Arkansas Climate\n\n### Brick\n• **Clay Brick**: Excellent for Arkansas climate\n• **Concrete Brick**: Cost-effective, requires proper sealing\n• **Fire Brick**: Best for fireplaces and high-heat areas\n\n### Natural Stone\n• **Limestone**: Popular in Arkansas, weathers well\n• **Sandstone**: Good for decorative elements\n• **Granite**: Most durable, best for high-traffic areas\n\n## Installation Best Practices\n\n1. **Proper Drainage**: Essential for preventing water damage\n2. **Expansion Joints**: Allow for thermal movement\n3. **Quality Mortar**: Use appropriate mix for climate\n4. **Sealing**: Protect against moisture penetration\n\n## Maintenance Tips\n\n• **Annual Inspection**: Check for cracks and loose stones\n• **Cleaning**: Remove dirt and organic growth\n• **Sealing**: Reapply sealant every 2-3 years\n• **Repairs**: Address issues promptly to prevent further damage\n\nAt Carlson Masonry LLC, we understand Arkansas's climate challenges and use proven techniques to ensure your masonry work stands the test of time. Our 10+ years of experience in Northwest Arkansas means we know what works in our specific climate conditions.",
      author: "Carlson Masonry Team",
      date: "2024-09-27",
      category: "Masonry Tips",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&crop=center",
      tags: ["Climate", "Arkansas", "Masonry", "Materials", "Maintenance"]
    },
    {
      id: 4,
      title: "New Arkansas Building Codes 2024: What Masonry Contractors Need to Know",
      excerpt: "Stay updated on the latest building code changes in Arkansas and how they affect masonry construction projects.",
      content: "Arkansas has updated its building codes for 2024, incorporating new standards that affect masonry construction. Here's what homeowners and contractors need to know:\n\n## Key Changes for 2024\n\n### Energy Efficiency Requirements\n• **Insulation Standards**: Higher R-values required\n• **Air Sealing**: Stricter requirements for masonry walls\n• **Thermal Bridging**: New requirements for reducing heat loss\n\n### Safety Improvements\n• **Seismic Considerations**: Enhanced requirements for earthquake resistance\n• **Wind Resistance**: Updated standards for severe weather\n• **Fire Safety**: New requirements for fire-resistant materials\n\n### Accessibility Updates\n• **ADA Compliance**: Updated requirements for public buildings\n• **Residential Accessibility**: New standards for accessible design\n\n## Impact on Masonry Projects\n\n### Residential Construction\n• **Foundation Requirements**: Stricter standards for below-grade masonry\n• **Wall Construction**: New requirements for structural masonry\n• **Chimney Safety**: Enhanced standards for fireplace construction\n\n### Commercial Projects\n• **Load-Bearing Walls**: Updated structural requirements\n• **Fire Separation**: New standards for fire walls\n• **Energy Performance**: Requirements for thermal efficiency\n\n## Compliance Tips\n\n1. **Permit Requirements**: Ensure all projects have proper permits\n2. **Inspections**: Schedule required inspections on time\n3. **Documentation**: Keep detailed records of materials and methods\n4. **Professional Installation**: Use licensed contractors\n\n## How Carlson Masonry LLC Stays Compliant\n\nOur team:\n\n• **Regular Training**: Attends code update seminars\n• **Licensed Professionals**: All work meets state requirements\n• **Quality Materials**: Use only code-compliant materials\n• **Proper Documentation**: Maintain detailed project records\n\nContact us for a consultation on how these code changes might affect your planned masonry project. We'll ensure your project meets all current requirements while delivering the quality results you expect.",
      author: "Carlson Masonry Team",
      date: "2024-09-26",
      category: "Building Codes",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&crop=center",
      tags: ["Building Codes", "Arkansas", "Compliance", "Safety", "Energy Efficiency"]
    },
    {
      id: 5,
      title: "Masonry Maintenance: Protecting Your Investment in Arkansas",
      excerpt: "Learn essential maintenance tips to protect your masonry investment and extend its lifespan in Arkansas's challenging climate.",
      content: "Proper maintenance is crucial for protecting your masonry investment, especially in Arkansas's challenging climate. Here's your comprehensive guide to masonry maintenance:\n\n## Seasonal Maintenance Schedule\n\n### Spring (March-May)\n• **Inspection**: Check for winter damage\n• **Cleaning**: Remove dirt and organic growth\n• **Repairs**: Address any cracks or loose stones\n• **Sealing**: Apply protective sealant if needed\n\n### Summer (June-August)\n• **Monitoring**: Watch for efflorescence\n• **Cleaning**: Regular cleaning to prevent staining\n• **Ventilation**: Ensure proper airflow around masonry\n• **Watering**: Keep plants away from masonry walls\n\n### Fall (September-November)\n• **Preparation**: Prepare for winter weather\n• **Gutter Cleaning**: Ensure proper drainage\n• **Sealing**: Apply winter protection\n• **Inspection**: Final check before winter\n\n### Winter (December-February)\n• **Monitoring**: Watch for ice damage\n• **Snow Removal**: Clear snow from masonry surfaces\n• **Heating**: Avoid rapid temperature changes\n• **Emergency Repairs**: Address urgent issues promptly\n\n## Common Problems and Solutions\n\n### Efflorescence (White Powder)\n• **Cause**: Moisture bringing salts to surface\n• **Solution**: Improve drainage, clean regularly\n• **Prevention**: Proper installation and sealing\n\n### Cracking\n• **Cause**: Settlement, thermal movement, or poor installation\n• **Solution**: Professional repair with matching materials\n• **Prevention**: Proper foundation and expansion joints\n\n### Spalling (Surface Flaking)\n• **Cause**: Freeze-thaw cycles, poor quality materials\n• **Solution**: Replace damaged stones or bricks\n• **Prevention**: Quality materials and proper installation\n\n## DIY vs. Professional Maintenance\n\n### DIY Tasks\n• **Regular Cleaning**: Use appropriate cleaners\n• **Visual Inspection**: Check for obvious problems\n• **Basic Repairs**: Small cracks and loose stones\n• **Sealing**: Apply protective coatings\n\n### Professional Services\n• **Structural Repairs**: Major cracks or movement\n• **Material Replacement**: Damaged stones or bricks\n• **Complex Cleaning**: Stubborn stains or damage\n• **Specialized Treatments**: Historic or decorative masonry\n\n## Cost-Effective Maintenance Tips\n\n1. **Regular Inspection**: Catch problems early\n2. **Proper Cleaning**: Use appropriate methods and products\n3. **Timely Repairs**: Don't let small issues become big problems\n4. **Professional Consultation**: Get expert advice for complex issues\n\n## Carlson Masonry LLC Maintenance Services\n\nWe offer comprehensive maintenance services:\n\n• **Annual Inspections**: Detailed assessment of your masonry\n• **Preventive Maintenance**: Regular cleaning and sealing\n• **Repair Services**: Professional repairs with matching materials\n• **Emergency Services**: Quick response for urgent issues\n\nContact us to schedule a maintenance consultation and protect your masonry investment for years to come.",
      author: "Carlson Masonry Team",
      date: "2024-09-25",
      category: "Maintenance",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&crop=center",
      tags: ["Maintenance", "Arkansas", "Climate", "Protection", "Investment"]
    },
    {
      id: 6,
      title: "Northwest Arkansas Real Estate Trends: How Masonry Adds Value",
      excerpt: "Discover how quality masonry work can increase your home's value in Northwest Arkansas's competitive real estate market.",
      content: "Northwest Arkansas's real estate market continues to show strong growth, with home values increasing steadily across all our service areas. Quality masonry work can significantly impact your home's value and marketability.\n\n## Current Market Trends\n\n### Springdale\n• **Median Home Value**: $285,000 (up 8% from 2023)\n• **New Construction**: 15% increase in permits\n• **Masonry Features**: High demand for brick exteriors\n\n### Rogers\n• **Median Home Value**: $320,000 (up 10% from 2023)\n• **Luxury Market**: Growing demand for premium finishes\n• **Masonry Features**: Stone accents and fireplaces popular\n\n### Bentonville\n• **Median Home Value**: $450,000 (up 12% from 2023)\n• **Corporate Relocations**: Walmart and suppliers driving demand\n• **Masonry Features**: High-end stone work in demand\n\n### Fayetteville\n• **Median Home Value**: $315,000 (up 9% from 2023)\n• **University Market**: Steady demand from faculty and staff\n• **Masonry Features**: Restoration and modern updates\n\n### Siloam Springs\n• **Median Home Value**: $275,000 (up 7% from 2023)\n• **Rural Appeal**: Growing interest in country living\n• **Masonry Features**: Natural stone and brick popular\n\n## How Masonry Adds Value\n\n### Curb Appeal\n• **First Impressions**: Quality masonry creates immediate impact\n• **Architectural Interest**: Adds character and style\n• **Neighborhood Standards**: Meets buyer expectations\n\n### Durability\n• **Long-term Investment**: Masonry lasts for generations\n• **Low Maintenance**: Requires minimal upkeep\n• **Weather Resistance**: Stands up to Arkansas climate\n\n### Energy Efficiency\n• **Thermal Mass**: Helps regulate indoor temperature\n• **Insulation**: Reduces heating and cooling costs\n• **Air Sealing**: Improves overall energy performance\n\n## ROI of Masonry Improvements\n\n### Exterior Brick Work\n• **Cost**: $15-25 per square foot\n• **ROI**: 70-80% at resale\n• **Market Impact**: Increases buyer interest\n\n### Stone Accents\n• **Cost**: $20-35 per square foot\n• **ROI**: 60-70% at resale\n• **Market Impact**: Creates luxury appeal\n\n### Fireplace Installation\n• **Cost**: $3,000-8,000\n• **ROI**: 80-90% at resale\n• **Market Impact**: Major selling point\n\n### Patio and Walkways\n• **Cost**: $10-20 per square foot\n• **ROI**: 65-75% at resale\n• **Market Impact**: Enhances outdoor living\n\n## Market-Specific Recommendations\n\n### For Sellers\n• **Pre-listing Improvements**: Invest in masonry updates\n• **Professional Staging**: Highlight masonry features\n• **Documentation**: Keep records of recent work\n• **Marketing**: Emphasize quality construction\n\n### For Buyers\n• **Inspection**: Have masonry professionally evaluated\n• **Negotiation**: Use condition in price discussions\n• **Future Planning**: Consider upgrade potential\n• **Investment**: Factor in maintenance costs\n\n## Carlson Masonry LLC Market Expertise\n\nOur team understands the Northwest Arkansas market:\n\n• **Local Trends**: Stay current with market conditions\n• **Value Engineering**: Maximize ROI on improvements\n• **Quality Standards**: Meet buyer expectations\n• **Professional Network**: Connect with real estate professionals\n\nContact us for a consultation on how masonry improvements can enhance your home's value in today's competitive market.",
      author: "Carlson Masonry Team",
      date: "2024-09-24",
      category: "Real Estate",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&crop=center",
      tags: ["Real Estate", "Northwest Arkansas", "Home Value", "ROI", "Market Trends"]
    }
  ];

  const categories = ['all', 'Construction News', 'Home Buying', 'Masonry Tips', 'Building Codes', 'Maintenance', 'Real Estate'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const seo = {
    title: "Masonry Blog Arkansas | Carlson Masonry Tips & News",
    description: "Arkansas masonry tips, construction trends & building codes. Expert advice from Carlson Masonry serving Northwest Arkansas.",
    keywords: "Arkansas masonry blog, construction news, home buying programs, building codes, masonry tips, Northwest Arkansas construction",
    ogUrl: "https://carlsonmasonryllc.net/blog",
    ogImage: "https://carlsonmasonryllc.net/logo.webp",
    twitterCard: "summary_large_image"
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Carlson Masonry LLC Blog",
    "description": seo.description,
    "url": seo.ogUrl,
    "publisher": {
      "@type": "LocalBusiness",
      "name": "Carlson Masonry LLC",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5713 Dancing Rabbit Dr",
        "addressLocality": "Springdale",
        "addressRegion": "AR",
        "postalCode": "72762",
        "addressCountry": "US"
      },
      "telephone": "(479) 347-5469",
      "email": "info@carlsonmasonryllc.net"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Organization",
        "name": post.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Carlson Masonry LLC"
      }
    }))
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead {...seo} />
      <StructuredData data={structuredData} />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#1B2A41] to-[#002d5b] text-white">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Masonry Blog
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto" style={{ fontFamily: 'Lato, sans-serif' }}>
            Stay informed about Arkansas construction trends, masonry tips, home buying programs, and building codes. 
            Expert advice from Carlson Masonry LLC serving Northwest Arkansas.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category === 'all' ? 'All Posts' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Tag className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-sm text-gray-600">Masonry Article</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold mb-3 text-gray-900 hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="outline" size="sm" className="group">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Masonry Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact Carlson Masonry LLC for professional masonry services in Northwest Arkansas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
