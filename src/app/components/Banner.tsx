"use client";

import React, { useState, useEffect, useRef } from 'react';

interface Slide {
  id: string;
  title: string;
  logo: string;
  description: string;
  features: string[];
  contentPosition: 'left' | 'right';
  theme: {
    primary: string;
    secondary: string;
    gradient: string;
    textColor: string;
    buttonHover: string;
    shadowColor: string;
    indicatorActive: string;
    indicatorInactive: string;
  };
  animations: {
    content: string;
    features: string;
    contentDelay: string;
    featuresDelay: string;
  };
}

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  const slides: Slide[] = [
    {
      id: 'metadev',
      title: 'Metadev',
      logo: '/metadev-logo.png',
      description: 'Leading the digital transformation with innovative technology solutions. Metadev builds platforms that empower businesses to thrive in the digital era.',
      features: ['Cloud Solutions', 'AI Integration', 'Digital Platforms', 'Enterprise Apps'],
      contentPosition: 'left',
      theme: {
        primary: '#5de0e6',
        secondary: '#004aad',
        gradient: 'linear-gradient(135deg, #5de0e6 0%, #004aad 100%)',
        textColor: '#ffffff',
        buttonHover: '#003d8a',
        shadowColor: 'rgba(0, 74, 173, 0.4)',
        indicatorActive: '#ffffff',
        indicatorInactive: 'rgba(255, 255, 255, 0.5)'
      },
      animations: {
        content: 'fadeInLeft',
        features: 'fadeInRight',
        contentDelay: '0s',
        featuresDelay: '0.3s'
      }
    },
    {
      id: 'metahealth',
      title: 'MetaHealth',
      logo: '/metahealth-logo.png',
      description: 'Transforming healthcare through digital innovation. Our solutions enhance patient care, streamline operations, and connect healthcare ecosystems.',
      features: ['Patient Management', 'Telemedicine', 'Health Analytics', 'Digital Records'],
      contentPosition: 'right',
      theme: {
        primary: '#ffffff',
        secondary: '#03989e',
        gradient: 'linear-gradient(135deg, #ffffff 0%, #e8f8f9 50%, #03989e 100%)',
        textColor: '#2c3e50',
        buttonHover: '#027a7e',
        shadowColor: 'rgba(3, 152, 158, 0.4)',
        indicatorActive: '#03989e',
        indicatorInactive: 'rgba(3, 152, 158, 0.3)'
      },
      animations: {
        content: 'fadeInRight',
        features: 'fadeInLeft',
        contentDelay: '0.3s',
        featuresDelay: '0s'
      }
    },
    {
      id: 'abhyasa',
      title: 'Abhyasa',
      logo: '/abhyasa-logo.png',
      description: 'Redefining education with technology-driven learning platforms. Making quality education accessible, interactive, and effective for all learners.',
      features: ['Interactive Learning', 'Progress Tracking', 'Virtual Classrooms', 'Skill Assessment'],
      contentPosition: 'left',
      theme: {
        primary: '#c0c0c0',
        secondary: '#01b2c7',
        gradient: 'linear-gradient(135deg, #c0c0c0 0%, #01b2c7 100%)',
        textColor: '#ffffff',
        buttonHover: '#0195a8',
        shadowColor: 'rgba(1, 178, 199, 0.4)',
        indicatorActive: '#ffffff',
        indicatorInactive: 'rgba(255, 255, 255, 0.5)'
      },
      animations: {
        content: 'fadeInUp',
        features: 'fadeInDown',
        contentDelay: '0s',
        featuresDelay: '0.2s'
      }
    }
  ];

  // Auto-rotate slides every 3 seconds with pause on hover
  useEffect(() => {
    const startInterval = () => {
      slideInterval.current = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
    };

    if (!isHovered) {
      startInterval();
    }

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [slides.length, isHovered]);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
    resetInterval();
  };

  const resetInterval = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    if (!isHovered) {
      slideInterval.current = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
    }
  };

  const scrollToMetaHealth = () => {
    const element = document.getElementById('metahealth-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbhyasa = () => {
    const element = document.getElementById('abhyasa-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Banner Container with proper spacing */}
      <div 
        ref={bannerRef}
        className="relative w-full h-[500px] sm:h-[550px] lg:h-[600px] overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg sm:shadow-xl lg:shadow-2xl mt-4 sm:mt-6 lg:mt-8 mb-4 sm:mb-6 lg:mb-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: 'calc(100% - 2rem)'
        }}
      >
        {/* Slides */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                index === activeSlide ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-95'
              }`}
              style={{
                background: slide.theme.gradient || slide.theme.primary,
                backgroundColor: slide.theme.primary,
                color: slide.theme.textColor,
                padding: '1rem'
              }}
            >
              {/* Slide Content Container */}
              <div className={`flex flex-col lg:flex-row w-full h-full items-center px-4 sm:px-6 lg:px-12 py-6 sm:py-8 lg:py-0 gap-4 sm:gap-6 lg:gap-8 ${slide.contentPosition === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                {/* Text Content */}
                <div 
                  className={`flex-1 space-y-3 sm:space-y-4 lg:space-y-6 text-center lg:text-left ${slide.contentPosition === 'right' ? 'lg:text-right' : 'lg:text-left'}`}
                  style={{
                    animation: index === activeSlide ? 
                      `${slide.animations.content} 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${slide.animations.contentDelay} both` : 
                      'none'
                  }}
                >
                  <div className={`mb-2 sm:mb-3 lg:mb-4 flex justify-center ${slide.contentPosition === 'right' ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    <div className="relative">
                      <img 
                        src={slide.logo} 
                        alt={`${slide.title} Logo`} 
                        className="w-24 sm:w-32 lg:w-40 h-auto transition-all duration-500 hover:scale-105 filter drop-shadow-lg"
                        style={{
                          filter: slide.id === 'metahealth' ? 'drop-shadow(0 2px 8px rgba(0,0,0,0.3)) brightness(0.8)' : 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))'
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const titleFallback = document.createElement('div');
                          titleFallback.className = slide.id === 'metahealth' 
                            ? 'text-xl sm:text-2xl lg:text-3xl font-bold text-teal-600 bg-white/90 px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg backdrop-blur-sm border border-teal-200 shadow-lg'
                            : 'text-xl sm:text-2xl lg:text-3xl font-bold text-white bg-white/20 px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg backdrop-blur-sm';
                          titleFallback.textContent = slide.title;
                          target.parentNode?.appendChild(titleFallback);
                        }}
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight leading-tight">{slide.title}</h2>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed opacity-90 max-w-full lg:max-w-lg">{slide.description}</p>
                  {slide.id !== 'metadev' && (
                    <button 
                      className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl transform text-sm sm:text-base lg:text-lg mx-auto lg:mx-0"
                      style={{
                        backgroundColor: slide.theme.secondary,
                        color: slide.id === 'metahealth' ? '#ffffff' : slide.theme.textColor,
                        boxShadow: `0 4px 14px 0 ${slide.theme.shadowColor}`,
                      }}
                      onMouseEnter={(e) => {
                        const target = e.currentTarget;
                        target.style.backgroundColor = slide.theme.buttonHover;
                        target.style.transform = 'translateY(-3px) scale(1.05)';
                        target.style.boxShadow = `0 8px 25px 0 ${slide.theme.shadowColor}`;
                      }}
                      onMouseLeave={(e) => {
                        const target = e.currentTarget;
                        target.style.backgroundColor = slide.theme.secondary;
                        target.style.transform = 'translateY(0) scale(1)';
                        target.style.boxShadow = `0 4px 14px 0 ${slide.theme.shadowColor}`;
                      }}
                      onClick={slide.id === 'metahealth' ? scrollToMetaHealth : scrollToAbhyasa}
                    >
                      Learn More →
                    </button>
                  )}
                </div>

                {/* Features Section */}
                <div 
                  className={`flex-1 text-center lg:text-left ${slide.contentPosition === 'right' ? 'lg:text-left' : 'lg:text-right'}`}
                  style={{
                    animation: index === activeSlide ? 
                      `${slide.animations.features} 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${slide.animations.featuresDelay} both` : 
                      'none'
                  }}
                >
                  <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold opacity-90">Key Features</h3>
                    <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                      {slide.features.map((feature, idx) => (
                        <div 
                          key={idx}
                          className="p-2 sm:p-3 lg:p-4 rounded-lg lg:rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                          style={{
                            backgroundColor: slide.id === 'metahealth' 
                              ? 'rgba(3, 152, 158, 0.1)' 
                              : 'rgba(255, 255, 255, 0.1)',
                            border: slide.id === 'metahealth' 
                              ? '1px solid rgba(3, 152, 158, 0.2)' 
                              : '1px solid rgba(255, 255, 255, 0.2)',
                            animationDelay: `${idx * 0.1}s`
                          }}
                        >
                          <div className="flex items-center justify-center lg:justify-start space-x-2 lg:space-x-3">
                            <div 
                              className="w-2 h-2 lg:w-3 lg:h-3 rounded-full flex-shrink-0"
                              style={{
                                backgroundColor: slide.id === 'metahealth' 
                                  ? '#03989e' 
                                  : slide.theme.secondary
                              }}
                            />
                            <span className="font-medium text-xs sm:text-sm lg:text-base">{feature}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Stats Section */}
                    <div className="mt-4 sm:mt-6 lg:mt-8 grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
                      <div className="text-center">
                        <div className="text-xl sm:text-2xl lg:text-3xl font-bold">50+</div>
                        <div className="text-xs sm:text-sm opacity-75">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl sm:text-2xl lg:text-3xl font-bold">99%</div>
                        <div className="text-xs sm:text-sm opacity-75">Success Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl sm:text-2xl lg:text-3xl font-bold">24/7</div>
                        <div className="text-xs sm:text-sm opacity-75">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 opacity-10 pointer-events-none">
                <div 
                  className="w-full h-full rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${slide.theme.secondary} 0%, transparent 70%)`
                  }}
                />
              </div>
              <div className="absolute bottom-0 left-0 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 opacity-5 pointer-events-none">
                <div 
                  className="w-full h-full rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${slide.theme.secondary} 0%, transparent 70%)`
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20">
          {slides.map((slide, index) => (
            <button
              key={index}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-500 ${
                index === activeSlide ? 'w-6 sm:w-8 scale-110' : 'w-1.5 sm:w-2 hover:scale-105'
              }`}
              style={{
                backgroundColor: index === activeSlide ? slide.theme.indicatorActive : slide.theme.indicatorInactive
              }}
              onClick={() => goToSlide(index)}
              aria-label={`Go to ${slides[index].title} slide`}
            />
          ))}
        </div>

        {/* Navigation Arrows - Hidden on mobile, visible on larger screens */}
        <button 
          className="absolute left-2 sm:left-3 lg:left-4 top-1/2 transform -translate-y-1/2 z-20 p-1.5 sm:p-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 transition-all duration-300 hover:scale-110 hidden sm:block"
          onClick={() => {
            setActiveSlide(prev => (prev - 1 + slides.length) % slides.length);
            resetInterval();
          }}
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          className="absolute right-2 sm:right-3 lg:right-4 top-1/2 transform -translate-y-1/2 z-20 p-1.5 sm:p-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 transition-all duration-300 hover:scale-110 hidden sm:block"
          onClick={() => {
            setActiveSlide(prev => (prev + 1) % slides.length);
            resetInterval();
          }}
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-black/20 z-20">
          <div 
            className="h-full transition-all duration-300 ease-linear"
            style={{
              width: `${((activeSlide + 1) / slides.length) * 100}%`,
              backgroundColor: slides[activeSlide].theme.indicatorActive
            }}
          />
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile-specific adjustments */
        @media (max-width: 640px) {
          @keyframes fadeInLeft, @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;