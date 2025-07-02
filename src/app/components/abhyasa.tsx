"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  BookOpen,
  GraduationCap,
  Users,
  Clock,
  ArrowRight,
  Target,
} from "lucide-react";

const Abhyasa = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const navigateToAbhyasa = () => {
    router.push("/components/abhyasa");
  };

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-gray-100 relative overflow-hidden"
      style={{ fontFamily: "'Open Sans', sans-serif" }}
      id="abhyasa-section"
    >
      {/* Subtle Moving Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-64 h-64 rounded-full opacity-5 transition-all duration-1000 ease-out"
          style={{
            background: "linear-gradient(135deg, #004aad, #c0c0c0)",
            left: `${20 + mousePosition.x * 0.01}px`,
            top: `${20 + mousePosition.y * 0.01}px`,
          }}
        />
        <div
          className="absolute w-48 h-48 rounded-full opacity-10 animate-pulse"
          style={{
            background: "radial-gradient(circle, #004aad20, transparent)",
            right: `${10 + mousePosition.x * 0.005}px`,
            top: `${100 + mousePosition.y * 0.008}px`,
            animationDuration: "6s",
          }}
        />
        <div
          className="absolute w-32 h-32 rounded-full opacity-8"
          style={{
            background: "radial-gradient(circle, #c0c0c040, transparent)",
            left: `${60 + mousePosition.x * 0.003}px`,
            bottom: `${40 + mousePosition.y * 0.002}px`,
            animation: "float 8s ease-in-out infinite",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        {/* Header with Logo */}
        <div
          className={`flex items-center justify-center mb-4 sm:mb-8 transition-all duration-800 ${
            isInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
          }`}
          style={{
            transitionDelay: "0.1s",
            transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
          }}
        >
          <div className="flex items-center justify-center transition-all duration-800">
            <div className="flex items-center gap-3">
              {/* Logo Container - Responsive size */}
              <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/abhyasa-logo.png"
                  alt="Abhyasa Logo"
                  className="w-full h-full object-contain p-2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div
          className={`text-center transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{
            transitionDelay: "0.3s",
            transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
          }}
        >
          {/* Badges */}
          <div className="flex justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 flex-wrap">
            {[
              { icon: BookOpen, text: "E-Learning" },
              { icon: GraduationCap, text: "Certification" },
              { icon: Users, text: "Community" },
            ].map((badge, index) => (
              <div
                key={index}
                className={`flex items-center gap-1 sm:gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-white/60 backdrop-blur-sm border border-gray-200 text-gray-700 text-xs sm:text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${0.5 + index * 0.1}s`,
                  transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                }}
              >
                <badge.icon size={12} className="sm:w-4 sm:h-4" style={{ color: "#004aad" }} />
                <span>{badge.text}</span>
              </div>
            ))}
          </div>

          {/* Title */}
          <h1 
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gray-800 transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{
              transitionDelay: "0.8s",
              transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            }}
          >
            <span
              className="bg-gradient-to-r from-blue-600 to-gray-500 bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(to right, #004aad, #c0c0c0)",
              }}
            >
              Revolutionize Learning
            </span>
            <br />
            <span className="text-gray-700">with ABHYASA</span>
          </h1>

          {/* Subtitle */}
          <p 
            className={`text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0 transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: "1s",
              transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            }}
          >
            The next-generation education platform that adapts to every
            learner's needs
          </p>

          {/* Buttons */}
          <div 
            className={`flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: "1.2s",
              transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            }}
          >
            <button
              onClick={navigateToAbhyasa}
              className="group px-5 py-2 sm:px-6 sm:py-3 bg-gradient-to-r text-white font-medium rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base"
              style={{
                background: "linear-gradient(135deg, #004aad, #0066cc)",
              }}
            >
              <span>Learn More</span>
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
           
          </div>
        </div>

        {/* Features Grid */}
        <div 
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
          style={{
            transitionDelay: "1.4s",
            transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
          }}
        >
          {[
            {
              icon: BookOpen,
              title: "About ABHAYASA",
              description:
                "Discover our mission to make quality education accessible to everyone",
            },
            {
              icon: GraduationCap,
              title: "Our Courses",
              description:
                "Comprehensive learning paths for students and professionals",
            },
            {
              icon: Clock,
              title: "Learning Technology",
              description:
                "Adaptive learning platform powered by AI and analytics",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`group p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200 hover:border-blue-300 hover:shadow-lg transform hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
                isInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
              }`}
              onClick={navigateToAbhyasa}
              style={{
                transitionDelay: `${1.6 + index * 0.2}s`,
                transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
              }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:rotate-3 transition-transform duration-300"
                style={{
                  background: "linear-gradient(135deg, #004aad, #c0c0c0)",
                }}
              >
                <feature.icon size={18} className="text-white w-4 h-4 sm:w-5 sm:h-5" />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div
                  className="flex items-center justify-center gap-1 font-medium group-hover:text-blue-600 transition-colors duration-300"
                  style={{ color: "#004aad" }}
                >
                  <span className="text-xs sm:text-sm">Know More</span>
                  <ArrowRight
                    size={12}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Abhyasa;