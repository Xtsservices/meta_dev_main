"use client";

import React, { useState, useEffect } from 'react';
import { BookOpen, GraduationCap, Users, Clock, BarChart, Globe, Award, BrainCircuit, Video, Languages, School, TabletSmartphone, ChevronUp } from 'lucide-react';
import Header from '../Header';

// Scroll to Top Button Component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
};

const AbhyasaPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const hash = window.location.hash;
    if (hash === '#services') {
      setTimeout(() => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const courseCategories = [
    { 
      title: 'School Education', 
      desc: 'CBSE, ICSE, State Boards (1st-12th Grade)',
      icon: School,
      features: ['Interactive syllabus', 'Concept videos', 'Practice worksheets', 'Exam preparation']
    },
    { 
      title: 'Competitive Exams', 
      desc: 'JEE, NEET, UPSC, GATE, CAT',
      icon: GraduationCap,
      features: ['Previous year papers', 'Mock tests', 'Performance analysis', 'Expert guidance']
    },
    { 
      title: 'Professional Skills', 
      desc: 'Programming, Design, Business, Marketing',
      icon: BrainCircuit,
      features: ['Industry-relevant', 'Project-based', 'Certification', 'Career support']
    },
    { 
      title: 'Languages', 
      desc: 'English, Hindi, Regional Languages',
      icon: Languages,
      features: ['Conversational practice', 'Grammar lessons', 'Pronunciation guide', 'Cultural context']
    }
  ];

  const ActiveIcon = courseCategories[activeTab].icon;

  return (
    <>
      <Header />
      <div
        className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-gray-100 relative overflow-hidden"
        style={{
          fontFamily: "'Open Sans', sans-serif",
          paddingTop: '6rem',
          // @ts-ignore - CSS custom properties
          '--mouse-x': `${mousePosition.x * 0.008}px`,
          '--mouse-y': `${mousePosition.y * 0.01}px`
        } as React.CSSProperties}
      >
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute w-64 h-64 rounded-full opacity-10 transition-all duration-1000 ease-out"
            style={{
              background: 'linear-gradient(135deg, #004aad, #c0c0c0)',
              left: 'calc(50px + var(--mouse-x))',
              top: 'calc(100px + var(--mouse-y))',
              filter: 'blur(40px)'
            }}
          />
          <div 
            className="absolute w-48 h-48 rounded-full opacity-8 animate-float"
            style={{
              background: 'radial-gradient(circle, #004aad15, transparent)',
              right: 'calc(30px + var(--mouse-x) * 0.6)',
              bottom: 'calc(80px + var(--mouse-y) * 0.3)',
              animationDuration: '15s'
            }}
          />
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            25% { transform: translateY(-20px) rotate(2deg); }
            50% { transform: translateY(10px) rotate(-1deg); }
            75% { transform: translateY(-10px) rotate(1deg); }
          }
          .animate-float {
            animation: float 15s ease-in-out infinite;
          }
          .card-hover-effect {
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          }
          .card-hover-effect:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          }
          .tab-underline {
            position: relative;
          }
          .tab-underline::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 3px;
            background: linear-gradient(90deg, #004aad, #c0c0c0);
            transition: width 0.3s ease;
          }
          .tab-underline:hover::after {
            width: 100%;
          }
          .tab-underline.active::after {
            width: 100%;
          }
        `}</style>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
          {/* Animated Header */}
          <div 
            className={`flex flex-col items-center justify-center mb-12 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="w-60 h-60 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/abhyasa-logo.png"
                  alt="Abhyasa Logo"
                  className="w-full h-full object-contain p-2"
                />
              </div>
           
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center leading-relaxed">
              Bridging traditional wisdom with modern technology to create transformative learning experiences
            </p>
          </div>

          {/* Stats Section */}
          <div 
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {[
              { number: '50K+', label: 'Active Learners', icon: Users },
              { number: '500+', label: 'Courses', icon: BookOpen },
              { number: '95%', label: 'Completion Rate', icon: Award },
              { number: '24/7', label: 'Access', icon: Clock }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index} 
                  className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm card-hover-effect flex flex-col items-center text-center"
                >
                  <div 
                    className="w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4" 
                    style={{ background: 'linear-gradient(135deg, #004aad, #c0c0c0)' }}
                  >
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <div 
                    className="text-3xl font-bold mb-2 bg-gradient-to-r bg-clip-text text-transparent" 
                    style={{ backgroundImage: 'linear-gradient(to right, #004aad, #c0c0c0)' }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Services Section with ID */}
          <div 
            id="services"
            className={`mb-16 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#004aad' }}>
              Our Learning Programs
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {courseCategories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full font-medium transition-all tab-underline ${
                    activeTab === index ? 'active text-blue-800' : 'text-gray-600 hover:text-blue-700'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {category.title}
                </button>
              ))}
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-sm card-hover-effect">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div 
                    className="w-24 h-24 rounded-xl bg-gradient-to-br flex items-center justify-center shadow-lg" 
                    style={{ background: 'linear-gradient(135deg, #004aad, #c0c0c0)' }}
                  >
                    <ActiveIcon size={36} className="text-white" />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#004aad' }}>
                    {courseCategories[activeTab].title}
                  </h3>
                  <p className="text-gray-600 mb-4">{courseCategories[activeTab].desc}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {courseCategories[activeTab].features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div 
            className={`mb-16 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#004aad' }}>
              Why Choose Abhyasa?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  icon: Video, 
                  title: 'Engaging Content', 
                  desc: 'Interactive lessons with videos, animations, and simulations to make learning enjoyable and effective.' 
                },
                { 
                  icon: BarChart, 
                  title: 'Personalized Learning', 
                  desc: 'AI-driven recommendations adapt to your learning style and pace for optimal knowledge retention.' 
                },
                { 
                  icon: TabletSmartphone, 
                  title: 'Multi-Device Access', 
                  desc: 'Learn anytime, anywhere with our responsive platform that works across all devices.' 
                }
              ].map((feature, index) => {
                const FeatureIcon = feature.icon;
                return (
                  <div 
                    key={index} 
                    className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm card-hover-effect"
                  >
                    <div 
                      className="w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4" 
                      style={{ background: 'linear-gradient(135deg, #004aad, #c0c0c0)' }}
                    >
                      <FeatureIcon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#004aad' }}>{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technology Section */}
          <div 
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#004aad' }}>
              Our Innovative Technology
            </h2>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-sm card-hover-effect">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#004aad' }}>Adaptive Learning Engine</h3>
                  <p className="text-gray-600 mb-4">
                    Our proprietary AI analyzes learning patterns to customize content delivery, ensuring each student gets the right material at the right time.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">Real-time performance tracking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">Personalized learning paths</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">Automated difficulty adjustment</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#004aad' }}>Immersive Technologies</h3>
                  <p className="text-gray-600 mb-4">
                    We incorporate cutting-edge technologies to create engaging learning experiences that improve retention and understanding.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">Interactive 3D models and simulations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">Augmented reality learning modules</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700">Gamified learning experiences</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </>
  );
};

export default AbhyasaPage;