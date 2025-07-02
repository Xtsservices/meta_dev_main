"use client";

import React, { useState, useEffect, useRef } from "react";

interface Slide {
  id: string;
  title: string;
  logo: string;
  description: string;
  features: string[];
  contentPosition: "left" | "right";
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
      id: "metadev",
      title: "METADEV",
      logo: "/metadev-logo.png",
      description:
        "Leading the digital transformation with innovative technology solutions. Metadev builds platforms that empower businesses to thrive in the digital era.",
      features: [
        "Cloud Solutions",
        "AI Integration",
        "Digital Platforms",
        "Enterprise Apps",
      ],
      contentPosition: "left",
      theme: {
        primary: "#5de0e6",
        secondary: "#004aad",
        gradient: "linear-gradient(135deg, #5de0e6 0%, #004aad 100%)",
        textColor: "#ffffff",
        buttonHover: "#003d8a",
        shadowColor: "rgba(0, 74, 173, 0.4)",
        indicatorActive: "#ffffff",
        indicatorInactive: "rgba(255, 255, 255, 0.5)",
      },
      animations: {
        content: "fadeInLeft",
        features: "fadeInRight",
        contentDelay: "0s",
        featuresDelay: "0.3s",
      },
    },
    {
      id: "metahealth",
      title: "METAHEALTH",
      logo: "/metahealth-logo.png",
      description:
        "Transforming healthcare through digital innovation. Our solutions enhance patient care, streamline operations, and connect healthcare ecosystems.",
      features: [
        "Patient Management",
        "Telemedicine",
        "Health Analytics",
        "Digital Records",
      ],
      contentPosition: "right",
      theme: {
        primary: "#ffffff",
        secondary: "#03989e",
        gradient:
          "linear-gradient(135deg, #ffffff 0%, #e8f8f9 50%, #03989e 100%)",
        textColor: "#2c3e50",
        buttonHover: "#027a7e",
        shadowColor: "rgba(3, 152, 158, 0.4)",
        indicatorActive: "#03989e",
        indicatorInactive: "rgba(3, 152, 158, 0.3)",
      },
      animations: {
        content: "fadeInRight",
        features: "fadeInLeft",
        contentDelay: "0.3s",
        featuresDelay: "0s",
      },
    },
    {
      id: "abhyasa",
      title: "ABHYASA",
      logo: "/abhyasa-logo.png",
      description:
        "Redefining education with technology-driven learning platforms. Making quality education accessible, interactive, and effective for all learners.",
      features: [
        "Interactive Learning",
        "Progress Tracking",
        "Virtual Classrooms",
        "Skill Assessment",
      ],
      contentPosition: "left",
      theme: {
        primary: "#c0c0c0",
        secondary: "#01b2c7",
        gradient: "linear-gradient(135deg, #c0c0c0 0%, #01b2c7 100%)",
        textColor: "#ffffff",
        buttonHover: "#0195a8",
        shadowColor: "rgba(1, 178, 199, 0.4)",
        indicatorActive: "#ffffff",
        indicatorInactive: "rgba(255, 255, 255, 0.5)",
      },
      animations: {
        content: "fadeInUp",
        features: "fadeInDown",
        contentDelay: "0s",
        featuresDelay: "0.2s",
      },
    },
  ];

  // Auto-rotate slides every 5 seconds with pause on hover
  useEffect(() => {
    const startInterval = () => {
      slideInterval.current = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
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
      }, 5000);
    }
  };

  const scrollToMetaHealth = () => {
    const element = document.getElementById("metahealth-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbhyasa = () => {
    const element = document.getElementById("abhyasa-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Banner Container with proper spacing */}
      <div
        ref={bannerRef}
        className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] xl:h-[700px] 2xl:h-[750px] overflow-hidden mt-16 sm:mt-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Slides */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                index === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              style={{
                background: slide.theme.gradient || slide.theme.primary,
                backgroundColor: slide.theme.primary,
                color: slide.theme.textColor,
              }}
            >
              {/* Slide Content Container with proper padding */}
              <div
                className={`container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 py-8 sm:py-10 lg:py-12 pb-20 sm:pb-0 ${
                  slide.contentPosition === "right" ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text Content */}
                <div
                  className={`flex-1 flex flex-col justify-center space-y-3 sm:space-y-4 lg:space-y-5 text-center lg:text-left ${
                    slide.contentPosition === "right"
                      ? "lg:text-right"
                      : "lg:text-left"
                  }`}
                  style={{
                    animation:
                      index === activeSlide
                        ? `${slide.animations.content} 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${slide.animations.contentDelay} both`
                        : "none",
                  }}
                >
                  <div
                    className={`flex justify-center ${
                      slide.contentPosition === "right"
                        ? "lg:justify-end"
                        : "lg:justify-start"
                    } mb-2 sm:mb-0`}
                  >
                    <div className="relative">
                      <img
                        src={slide.logo}
                        alt={`${slide.title} Logo`}
                        className="w-24 sm:w-28 lg:w-32 xl:w-36 h-auto transition-all duration-500 hover:scale-105 filter drop-shadow-lg"
                        style={{
                          filter:
                            slide.id === "metahealth"
                              ? "drop-shadow(0 2px 8px rgba(0,0,0,0.3)) brightness(0.8)"
                              : "drop-shadow(0 2px 8px rgba(0,0,0,0.3))",
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          const titleFallback = document.createElement("div");
                          titleFallback.className =
                            slide.id === "metahealth"
                              ? "text-xl sm:text-2xl lg:text-3xl font-bold text-teal-600 bg-white/90 px-4 py-2 rounded-lg backdrop-blur-sm border border-teal-200 shadow-lg"
                              : "text-xl sm:text-2xl lg:text-3xl font-bold text-white bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm";
                          titleFallback.textContent = slide.title;
                          target.parentNode?.appendChild(titleFallback);
                        }}
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold tracking-tight leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg leading-relaxed opacity-90 max-w-full lg:max-w-md xl:max-w-xl">
                    {slide.description}
                  </p>
                  {slide.id !== "metadev" && (
                    <div
                      className={`flex ${
                        slide.contentPosition === "right"
                          ? "lg:justify-end"
                          : "lg:justify-start"
                      } justify-center mt-3 sm:mt-0`}
                    >
                      <button
                        className="px-5 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl transform text-xs sm:text-sm lg:text-base"
                        style={{
                          backgroundColor: slide.theme.secondary,
                          color:
                            slide.id === "metahealth"
                              ? "#ffffff"
                              : slide.theme.textColor,
                          boxShadow: `0 4px 14px 0 ${slide.theme.shadowColor}`,
                        }}
                        onMouseEnter={(e) => {
                          const target = e.currentTarget;
                          target.style.backgroundColor =
                            slide.theme.buttonHover;
                          target.style.transform =
                            "translateY(-3px) scale(1.05)";
                          target.style.boxShadow = `0 8px 25px 0 ${slide.theme.shadowColor}`;
                        }}
                        onMouseLeave={(e) => {
                          const target = e.currentTarget;
                          target.style.backgroundColor = slide.theme.secondary;
                          target.style.transform = "translateY(0) scale(1)";
                          target.style.boxShadow = `0 4px 14px 0 ${slide.theme.shadowColor}`;
                        }}
                        onClick={
                          slide.id === "metahealth"
                            ? scrollToMetaHealth
                            : scrollToAbhyasa
                        }
                      >
                        Learn More →
                      </button>
                    </div>
                  )}
                </div>

                {/* Features Section */}
                <div
                  className={`flex-1 flex flex-col justify-center ${
                    slide.contentPosition === "right"
                      ? "lg:items-start"
                      : "lg:items-end"
                  } items-center w-full mt-4 sm:mt-0`}
                  style={{
                    animation:
                      index === activeSlide
                        ? `${slide.animations.features} 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${slide.animations.featuresDelay} both`
                        : "none",
                  }}
                >
                  <div className="w-full max-w-xs sm:max-w-sm md:max-w-md space-y-3 sm:space-y-4 lg:space-y-5">
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold opacity-90 text-center lg:text-left">
                      Key Features
                    </h3>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      {slide.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="p-2 sm:p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                          style={{
                            backgroundColor:
                              slide.id === "metahealth"
                                ? "rgba(3, 152, 158, 0.1)"
                                : "rgba(255, 255, 255, 0.1)",
                            border:
                              slide.id === "metahealth"
                                ? "1px solid rgba(3, 152, 158, 0.2)"
                                : "1px solid rgba(255, 255, 255, 0.2)",
                          }}
                        >
                          <div className="flex items-center justify-center lg:justify-start space-x-2">
                            <div
                              className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full flex-shrink-0"
                              style={{
                                backgroundColor:
                                  slide.id === "metahealth"
                                    ? "#03989e"
                                    : slide.theme.secondary,
                              }}
                            />
                            <span className="font-medium text-xs sm:text-sm lg:text-base">
                              {feature}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Stats Section - Only show on larger screens */}
                    <div className="hidden md:grid grid-cols-3 gap-2 sm:gap-3 mt-3">
                      <div className="text-center">
                        <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold">
                          50+
                        </div>
                        <div className="text-xs sm:text-sm opacity-75">
                          Projects
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold">
                          99%
                        </div>
                        <div className="text-xs sm:text-sm opacity-75">
                          Success Rate
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold">
                          24/7
                        </div>
                        <div className="text-xs sm:text-sm opacity-75">
                          Support
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-24 sm:w-32 lg:w-40 xl:w-48 h-24 sm:h-32 lg:h-40 xl:h-48 opacity-10 pointer-events-none">
                <div
                  className="w-full h-full rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${slide.theme.secondary} 0%, transparent 70%)`,
                  }}
                />
              </div>
              <div className="absolute bottom-0 left-0 w-12 sm:w-16 lg:w-20 xl:w-24 h-12 sm:h-16 lg:h-20 xl:h-24 opacity-5 pointer-events-none">
                <div
                  className="w-full h-full rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${slide.theme.secondary} 0%, transparent 70%)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Indicators - Properly positioned */}
        <div className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20">
          {slides.map((slide, index) => (
            <button
              key={index}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-500 ${
                index === activeSlide ? "w-5 sm:w-6" : "w-2 sm:w-2.5"
              }`}
              style={{
                backgroundColor:
                  index === activeSlide
                    ? slide.theme.indicatorActive
                    : slide.theme.indicatorInactive,
              }}
              onClick={() => goToSlide(index)}
              aria-label={`Go to ${slides[index].title} slide`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-4 sm:left-6 lg:left-8 top-1/2 transform -translate-y-1/2 z-20 p-1.5 sm:p-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 transition-all duration-300 hover:scale-110 hidden sm:block"
          onClick={() => {
            setActiveSlide(
              (prev) => (prev - 1 + slides.length) % slides.length
            );
            resetInterval();
          }}
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="absolute right-4 sm:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 z-20 p-1.5 sm:p-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 transition-all duration-300 hover:scale-110 hidden sm:block"
          onClick={() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
            resetInterval();
          }}
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-black/20 z-20">
          <div
            className="h-full transition-all duration-300 ease-linear"
            style={{
              width: `${((activeSlide + 1) / slides.length) * 100}%`,
              backgroundColor: slides[activeSlide].theme.indicatorActive,
            }}
          />
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
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

        /* Laptop-specific adjustments (1024px-1440px) */
        @media (min-width: 1024px) and (max-width: 1440px) {
          .banner-content {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
