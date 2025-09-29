import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, X, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

// Import images
import project1 from '../../assets/C1YKTpWsG2qG.jpg';
import project2 from '../../assets/68CPjQfi43Ek.jpg';
import project7 from '../../assets/chimeneapiedra.webp';
import project3 from '../../assets/casafachadapiedra.webp';
import project4 from '../../assets/casaladrillo.webp';
import project5 from '../../assets/paredladrillo.webp';
import project6 from '../../assets/paredpatioladrillo.webp';
// Residential projects
import residencial1 from '../../assets/residencial1.webp';
import residencial2 from '../../assets/residencial2.webp';
import residencial3 from '../../assets/residencial3.webp';
import residencial4 from '../../assets/residencial4.webp';
import residencial5 from '../../assets/residencial5.webp';
import residencial6 from '../../assets/residencial6.webp';
import imaheadergallery from '../../assets/imaheadergallery.webp';

const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);


  const projects = [
    {
      id: 1,
      title: "Natural Stone Facade Cladding",
      category: "stone",
      type: "commercial",
      location: "Springdale, AR",
      year: "2024",
      description: "Modern facade with natural stone cladding in beige, sand and brown tones that provides elegant rustic texture.",
      image: project3,
      details: "Construction project that stands out for excellence in natural stone cladding. The lower and central part of the wall is covered with rectangular stones in beige, sand and brown tones, creating an elegant rustic texture. In combination, light brick is used in the upper part, achieving a harmonious contrast between materials. The main entrance is also framed in stone, highlighting the solidity of the design. The gabled roof with gray tiles perfectly frames the stone and brick walls, while the large front windows with interior shutters complement the facade and allow optimal natural lighting."
    },
    {
      id: 2,
      title: "Decorative Retaining Wall",
      category: "stone",
      type: "commercial",
      location: "Rogers, AR",
      year: "2024",
      description: "Natural stone retaining wall with integrated decorative elements.",
      image: project1,
      details: "Functional and aesthetic solution for a pronounced slope in the terrain. We combine structural engineering with landscape design to create an element that is both functional and beautiful."
    },
    {
      id: 3,
      title: "Main Facade with Brick and Stone",
      category: "brick",
      type: "commercial",
      location: "Rogers, AR",
      year: "2024",
      description: "Modern main facade that combines brown brick with light stone cladding in gray and beige tones.",
      image: project4,
      details: "Construction project that demonstrates excellence in masonry combining brick and natural stone. The main entrance is framed by two brick columns that support a gabled roof with exposed wooden beams. The light gray main door with upper rectangular window is complemented by exterior lantern-style lights in black finish. The design stands out for the elegant combination of brown brick with light stone cladding in gray and beige tones, creating a sophisticated visual contrast. The tall windows with white frames and interior shutters, along with the sloped gray tile roof and recessed lights under the eaves, complete a facade of maximum architectural quality."
    },
    {
      id: 4,
      title: "Artisan Slate Stone Fireplace",
      category: "stone",
      type: "commercial",
      location: "Bentonville, AR",
      year: "2024",
      description: "Fireplace clad with stacked slate stone in natural gray tones, creating an imposing and elegant focal point.",
      image: project7,
      details: "Fireplace project that stands out for its excellence in slate stone cladding. The fireplace is completely clad with stacked slate stone in natural gray tones, which provide texture and a modern rustic style to the environment. Its design extends from floor to ceiling, becoming an imposing and elegant focal point within the room. At the top, a rustic wooden beam with natural finish functions as a decorative shelf, highlighting the contrast between the warmth of wood and the solidity of stone. The base includes a functional space for storing firewood, reinforcing its cozy and practical style, while the front features a hearth framed in black iron with glass doors, combining durability with contemporary design."
    },
    {
      id: 5,
      title: "Perimeter Wall Repair",
      category: "repair",
      type: "commercial",
      location: "Springdale, AR",
      year: "2023",
      description: "Structural and aesthetic repair of old brick perimeter wall.",
      image: project2,
      details: "Repair project that involved structural reinforcement of a perimeter wall over 50 years old. Specialized repair techniques that extended its useful life for additional decades."
    },
    {
      id: 6,
      title: "Side Facade with Garage",
      category: "brick",
      type: "commercial",
      location: "Bentonville, AR",
      year: "2024",
      description: "House side facade with two-door garage and brown brick finishes with tone variations.",
      image: project5,
      details: "Construction project that stands out for excellence in brick masonry. The side facade features brown bricks with natural tone variations, creating a rich and authentic texture. The garage has two white doors with upper arched windows and decorative black handles. The integration of black exterior lights with frosted glass perfectly complements the design, while the sloped gray tile roof and white gutter complete the structure with impeccable finishes."
    },
    {
      id: 7,
      title: "Covered Patio with Brick Walls",
      category: "brick",
      type: "commercial",
      location: "Fayetteville, AR",
      year: "2024",
      description: "Covered patio with light brown brick walls and recessed lighting system.",
      image: project6,
      details: "Covered patio project that demonstrates excellence in brick wall construction. The walls are built with light brown bricks that create a uniform and elegant texture. The dark roof with circular recessed lights provides perfect ambient lighting. The space is designed for outdoor entertainment, complemented by light wood furniture with white cushions and decorative elements such as tasseled poufs. The integration of windows with gray frames and garland-style hanging lights completes a cozy and functional environment."
    },
    // New Residential Projects
    {
      id: 8,
      title: "Brick and White Stone Facade",
      category: "residential",
      type: "residential",
      location: "Rogers, AR",
      year: "2024",
      description: "Single-story house with brown-toned brick facade and light stone details at the entrance and columns.",
      image: residencial6,
      details: "Single-story house with brown-toned brick facade and light stone details at the entrance and columns. The arched windows and well-maintained garden with shrubs reinforce a cozy and elegant style."
    },
    {
      id: 9,
      title: "Classic Red Brick Design",
      category: "residential",
      type: "residential",
      location: "Bentonville, AR",
      year: "2024",
      description: "Spacious single-story residence with red brick facade and light gray stone base.",
      image: residencial5,
      details: "Spacious single-story residence with red brick facade and light gray stone base. The covered entrance with columns and symmetrical front with large windows that allow abundant natural light stand out."
    },
    {
      id: 10,
      title: "Imposing Two-Story Residence",
      category: "residential",
      type: "residential",
      location: "Springdale, AR",
      year: "2024",
      description: "Sophisticated style house with beige stone facade combined with painted white brick.",
      image: residencial4,
      details: "Sophisticated style house with beige stone facade combined with painted white brick. The main entrance with wooden double door and black lanterns conveys elegance and presence."
    },
    {
      id: 11,
      title: "Modern Style with Dark Contrasts",
      category: "residential",
      type: "residential",
      location: "Siloam Springs, AR",
      year: "2024",
      description: "Residencia de dos plantas con fachada en ladrillo blanco pintado y detalles en madera natural y metal oscuro.",
      image: residencial3,
      details: "Residencia de dos plantas con fachada en ladrillo blanco pintado y detalles en madera natural y metal oscuro. El pórtico de entrada con columnas negras contrasta con el diseño claro, logrando un aspecto contemporáneo."
    },
    {
      id: 12,
      title: "Tradición en Ladrillo y Piedra",
      category: "residential",
      type: "residential",
      location: "Fayetteville, AR",
      year: "2024",
      description: "Casa de una planta con fachada en ladrillo rústico combinado con piedra clara.",
      image: residencial2,
      details: "Casa de una planta con fachada en ladrillo rústico combinado con piedra clara. La entrada arqueada en piedra resalta la puerta principal, mientras que los ventanales con arcos refuerzan un estilo clásico."
    },
    {
      id: 13,
      title: "Modernidad en Blanco y Negro",
      category: "residential",
      type: "residential",
      location: "Rogers, AR",
      year: "2024",
      description: "Residencia de dos plantas con fachada en ladrillo pintado en blanco y secciones superiores en paneles oscuros verticales.",
      image: residencial1,
      details: "Residencia de dos plantas con fachada en ladrillo pintado en blanco y secciones superiores en paneles oscuros verticales. Las puertas y ventanas enmarcadas en negro le dan un aire moderno y elegante."
    }
  ];


  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const scrollToSection = (categoryId) => {
    const element = document.getElementById(`${categoryId}-section`);
    if (element) {
      const headerOffset = 100; // Offset para compensar el header fijo
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleCategoryClick = (category) => {
    const categoryMap = {
      'Brick Masonry': 'brick',
      'Natural Stone': 'stone',
      'Repairs': 'repair',
      'Residential Projects': 'residential'
    };
    scrollToSection(categoryMap[category]);
  };



  return (
    <div>
      {/* Hero Section */}
      <section className="h-[100dvh] md:h-screen pt-[56px] md:pt-[72px] pb-0 md:pb-16 relative overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-80">
          <img 
            src={imaheadergallery} 
            alt="Gallery Background"
            className="w-full h-full object-cover object-[center_70%]"
          />
        </div>
        {/* Overlay Azul Marino */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(27, 42, 65, 0.6)' }}></div>
        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="container-custom text-center relative z-10 flex flex-col items-center justify-center h-full md:block md:h-auto md:pt-20">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-6 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
            Project Gallery
            <span className="block bg-gradient-to-r from-[#FFB400] to-[#E09B00] bg-clip-text text-transparent text-lg md:text-5xl lg:text-6xl">
              Every Project, A Story of Excellence
            </span>
          </h1>
          <p className="text-sm md:text-xl max-w-[90%] md:max-w-4xl mx-auto leading-snug md:leading-relaxed mb-2 md:mb-8 px-6 md:px-0" style={{ 
            color: '#FFFFFF', 
            fontFamily: 'Lato, sans-serif',
            lineHeight: '1.4'
          }}>
            Explore our collection of completed projects across Northwest Arkansas that demonstrate our commitment 
            to excellence, quality, and building dreams. Each project tells a unique 
            story of transformation and superior craftsmanship in Rogers, Bentonville, 
            Springdale, Fayetteville, and Siloam Springs.
          </p>
          
          {/* Category Buttons - Mobile (2x2 grid) */}
          <div className="grid grid-cols-2 gap-2 md:hidden max-w-md mx-auto">
            {['Brick Masonry', 'Natural Stone', 'Repairs', 'Residential Projects'].map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className="font-semibold text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 w-full"
                style={{
                  backgroundColor: '#FFB400',
                  color: '#1B2A41',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '600',
                  fontSize: '12px',
                  padding: '8px 12px',
                  borderRadius: '12px',
                  border: 'none',
                  boxShadow: '0px 4px 12px rgba(27, 42, 65, 0.15)'
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
                {category}
              </button>
            ))}
          </div>

          {/* Category Buttons - Desktop (single line) */}
          <div className="hidden md:flex flex-wrap justify-center items-center gap-4">
            {['Brick Masonry', 'Natural Stone', 'Repairs', 'Residential Projects'].map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className="font-semibold text-sm transition-all duration-300 transform hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: '#FFB400',
                  color: '#1B2A41',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '600',
                  fontSize: '16px',
                  padding: '16px 28px',
                  borderRadius: '12px',
                  border: 'none',
                  boxShadow: '0px 4px 12px rgba(27, 42, 65, 0.15)'
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
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>


      {/* Projects Grid */}
      <section className="pt-4 pb-16" style={{ backgroundColor: '#3E4C61' }}>
        <div className="container-custom px-4">
          {/* Brick Masonry Section */}
          <div id="brick-section" className="mb-16 mt-8">
            <h2 className="text-3xl font-bold text-center mb-4" style={{ color: '#FFB400', fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}>Brick Masonry</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(project => project.category === 'brick').map((project) => (
                <Card 
                  key={project.id} 
                  className="gallery-item card-hover border-0 shadow-lg cursor-pointer"
                  onClick={() => openModal(project)}
                  style={{ backgroundColor: '#FFFFFF', borderRadius: '14px' }}
                >
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="gallery-overlay">
                      <div className="text-center text-white">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-sm opacity-90">Click to view details</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="pt-2 pb-2 px-3">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-sm font-semibold" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}>{project.title}</h3>
                      <span className="text-xs font-medium" style={{ color: '#8AA679', fontFamily: 'Lato, sans-serif' }}>{project.year}</span>
                    </div>
                    <p className="text-sm mb-1 leading-tight" style={{ color: '#3E4C61', fontFamily: 'Lato, sans-serif' }}>
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center text-xs mt-1">
                      <span style={{ color: '#3E4C61', fontFamily: 'Lato, sans-serif' }}>{project.location}</span>
                      <span className="px-1.5 py-0.5 rounded-full text-xs font-medium" style={{ backgroundColor: '#F5E6D3', color: '#1B2A41', fontFamily: 'Lato, sans-serif' }}>
                        {project.type === 'residential' ? 'Residential' : 'Commercial'}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Natural Stone Section */}
          <div id="stone-section" className="mb-16 mt-4">
            <h2 className="text-3xl font-bold text-center mb-4" style={{ color: '#FFB400', fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}>Natural Stone</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(project => project.category === 'stone').map((project) => (
                <Card 
                  key={project.id} 
                  className="gallery-item card-hover border-0 shadow-lg cursor-pointer"
                  onClick={() => openModal(project)}
                  style={{ backgroundColor: '#FFFFFF', borderRadius: '14px' }}
                >
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="gallery-overlay">
                      <div className="text-center text-white">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-sm opacity-90">Click to view details</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="pt-2 pb-2 px-3">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-sm font-semibold" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}>{project.title}</h3>
                      <span className="text-xs font-medium" style={{ color: '#8AA679', fontFamily: 'Lato, sans-serif' }}>{project.year}</span>
                    </div>
                    <p className="text-sm mb-1 leading-tight" style={{ color: '#3E4C61', fontFamily: 'Lato, sans-serif' }}>
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center text-xs mt-1">
                      <span style={{ color: '#3E4C61', fontFamily: 'Lato, sans-serif' }}>{project.location}</span>
                      <span className="px-1.5 py-0.5 rounded-full text-xs font-medium" style={{ backgroundColor: '#F5E6D3', color: '#1B2A41', fontFamily: 'Lato, sans-serif' }}>
                        {project.type === 'residential' ? 'Residential' : 'Commercial'}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Repairs Section */}
          <div id="repair-section" className="mb-16 mt-4">
            <h2 className="text-3xl font-bold text-center mb-4" style={{ color: '#FFB400', fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}>Repairs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(project => project.category === 'repair').map((project) => (
                <Card 
                  key={project.id} 
                  className="gallery-item card-hover border-0 shadow-lg cursor-pointer"
                  onClick={() => openModal(project)}
                  style={{ backgroundColor: '#FFFFFF', borderRadius: '14px' }}
                >
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="gallery-overlay">
                      <div className="text-center text-white">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-sm opacity-90">Click to view details</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="pt-2 pb-2 px-3">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-sm font-semibold" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}>{project.title}</h3>
                      <span className="text-xs font-medium" style={{ color: '#8AA679', fontFamily: 'Lato, sans-serif' }}>{project.year}</span>
                    </div>
                    <p className="text-sm mb-1 leading-tight" style={{ color: '#3E4C61', fontFamily: 'Lato, sans-serif' }}>
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center text-xs mt-1">
                      <span style={{ color: '#3E4C61', fontFamily: 'Lato, sans-serif' }}>{project.location}</span>
                      <span className="px-1.5 py-0.5 rounded-full text-xs font-medium" style={{ backgroundColor: '#F5E6D3', color: '#1B2A41', fontFamily: 'Lato, sans-serif' }}>
                        {project.type === 'residential' ? 'Residential' : 'Commercial'}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Residential Projects Section */}
          <div id="residential-section" className="mb-16 mt-4">
            <h2 className="text-3xl font-bold text-center mb-4" style={{ color: '#FFB400', fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}>Residential Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(project => project.type === 'residential').map((project) => (
                <Card 
                  key={project.id} 
                  className="gallery-item card-hover border-0 shadow-lg cursor-pointer"
                  onClick={() => openModal(project)}
                  style={{ backgroundColor: '#FFFFFF', borderRadius: '14px' }}
                >
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="gallery-overlay">
                      <div className="text-center text-white">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-sm opacity-90">Click to view details</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="pt-2 pb-2 px-3">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-sm font-semibold" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}>{project.title}</h3>
                      <span className="text-xs font-medium" style={{ color: '#8AA679', fontFamily: 'Lato, sans-serif' }}>{project.year}</span>
                    </div>
                    <p className="text-sm mb-1 leading-tight" style={{ color: '#3E4C61', fontFamily: 'Lato, sans-serif' }}>
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center text-xs mt-1">
                      <span style={{ color: '#3E4C61', fontFamily: 'Lato, sans-serif' }}>{project.location}</span>
                      <span className="px-1.5 py-0.5 rounded-full text-xs font-medium" style={{ backgroundColor: '#F5E6D3', color: '#1B2A41', fontFamily: 'Lato, sans-serif' }}>
                        {project.type === 'residential' ? 'Residential' : 'Commercial'}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding" style={{ backgroundColor: '#1B2A41' }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-responsive-lg font-bold mb-4 text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}>
              Our Numbers Speak
            </h2>
            <p className="text-xl text-white opacity-90 max-w-3xl mx-auto" style={{ fontFamily: 'Lato, sans-serif' }}>
              Each completed project represents our commitment to excellence 
              and total satisfaction of our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold" style={{ color: '#FFB400', fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}>500+</div>
              <div className="text-lg text-white opacity-90" style={{ fontFamily: 'Lato, sans-serif' }}>Completed Projects</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold" style={{ color: '#FFB400', fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}>10+</div>
              <div className="text-lg text-white opacity-90" style={{ fontFamily: 'Lato, sans-serif' }}>Years of Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold" style={{ color: '#FFB400', fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}>100%</div>
              <div className="text-lg text-white opacity-90" style={{ fontFamily: 'Lato, sans-serif' }}>Satisfied Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold" style={{ color: '#FFB400', fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}>24/7</div>
              <div className="text-lg text-white opacity-90" style={{ fontFamily: 'Lato, sans-serif' }}>Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ backgroundColor: '#F5E6D3' }}>
        <div className="container-custom text-center">
          <h2 className="text-responsive-lg font-bold mb-4" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif', fontWeight: '700' }}>
            Inspired by Our Work?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: '#3E4C61', fontFamily: 'Lato, sans-serif' }}>
            Each of these projects started with a vision. Let us help you 
            materialize yours with the same quality, dedication and professionalism.
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
                  border: 'none',
                  boxShadow: '0px 4px 12px rgba(27, 42, 65, 0.15)'
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
                  border: 'none',
                  boxShadow: '0px 4px 12px rgba(138, 166, 121, 0.15)'
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
                Discuss My Project
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 md:h-96 object-cover rounded-t-lg"
              />
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {selectedProject.title}
                  </h2>
                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <span>{selectedProject.location}</span>
                    <span>•</span>
                    <span>{selectedProject.year}</span>
                    <span>•</span>
                    <span className="capitalize">
                      {selectedProject.type === 'residential' ? 'Residencial' : 'Comercial'}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {selectedProject.details}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/quote#quote-form">
                  <Button className="btn-primary hover:scale-105 transform hover:-translate-y-1 transition-all duration-300"
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px) scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0) scale(1)';
                    }}>
                    Similar Project
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/contact#contact-form">
                  <Button className="bg-white text-black hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#F8F9FA';
                      e.target.style.transform = 'translateY(-2px) scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#FFFFFF';
                      e.target.style.transform = 'translateY(0) scale(1)';
                    }}>
                    More Information
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#1B2A41', fontFamily: 'Montserrat, sans-serif' }}>
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact Carlson Masonry LLC for professional masonry services in Arkansas. 
              We serve Springdale, Rogers, Bentonville, Fayetteville, and Siloam Springs.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6 text-sm md:text-base">
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

export default Gallery;

