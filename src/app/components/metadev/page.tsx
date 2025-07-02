"use client";
import React, { useEffect, useState } from "react";
import { Activity, Shield, Database, Globe, Users, Clipboard, Server, BarChart, ArrowUp, Cpu, Cloud, Lock, Factory, Car, Banknote, Scale, Building, Code, Brain, Settings, Smartphone, CreditCard, FileText, Printer } from 'lucide-react';
import Header from '../Header';

const MetaDevPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const hash = window.location.hash;
    if (hash === '#services') {
      setTimeout(() => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else if (hash === '#about-section') {
      setTimeout(() => {
        document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Open Sans', sans-serif;
          box-sizing: border-box;
        }

        .metadev-container {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          min-height: 100vh;
          position: relative;
          margin-top: 6rem;
          overflow-x: hidden;
        }

        .metadev-container::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(166, 166, 166, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 100, 255, 0.1) 0%, transparent 50%);
          animation: backgroundFloat 25s ease-in-out infinite;
          pointer-events: none;
          z-index: 1;
        }

        @keyframes backgroundFloat {
          0%, 100% { 
            transform: translateX(0) translateY(0) scale(1); 
            opacity: 0.8;
          }
          25% { 
            transform: translateX(-20px) translateY(-15px) scale(1.02);
            opacity: 0.9;
          }
          50% { 
            transform: translateX(20px) translateY(15px) scale(0.98);
            opacity: 0.7;
          }
          75% { 
            transform: translateX(-15px) translateY(20px) scale(1.01);
            opacity: 0.85;
          }
        }

        .content-wrapper {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 2rem;
        }

        .logo-header {
          text-align: center;
          margin-bottom: 3rem;
          opacity: ${isVisible ? '1' : '0'};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(-30px)'};
          transition: all 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.2s;
        }

        .logo {
          width: 200px;
          height: 200px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          transition: all 0.4s ease;
        }

        .logo:hover {
          transform: translateY(-5px) rotate(5deg);
          box-shadow: 0 15px 40px rgba(0, 100, 255, 0.3);
        }

        @keyframes logoFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(2deg); }
          50% { transform: translateY(5px) rotate(-1deg); }
          75% { transform: translateY(-5px) rotate(1deg); }
        }

        .company-name {
          font-size: 1.8rem;
          font-weight: 700;
          color: #0064ff;
          margin: 0;
          position: relative;
          display: inline-block;
          text-align: center;
          width: 100%;
        }

        .company-name::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #0064ff, #a6a6a6);
          border-radius: 3px;
          transition: width 0.3s ease;
        }

        .company-name:hover::after {
          width: 100px;
        }

        .hero-section {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0, 100, 255, 0.2);
          border-radius: 24px;
          padding: 3rem 2.5rem;
          margin-bottom: 3rem;
          text-align: center;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
          opacity: ${isVisible ? '1' : '0'};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(40px)'};
          transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.4s;
        }

        .hero-section:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
        }

        .hero-title {
          font-size: 2.8rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #0064ff 0%, #a6a6a6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          line-height: 1.2;
          text-align: center;
        }

        .hero-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #0064ff, #a6a6a6);
          border-radius: 4px;
        }

        .hero-description {
          font-size: 1.1rem;
          color: #666;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.7;
          text-align: center;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: #0064ff;
          text-align: center;
          position: relative;
          display: inline-block;
          padding-bottom: 10px;
          width: 100%;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #0064ff, #a6a6a6);
          border-radius: 4px;
          transition: width 0.3s ease;
        }

        .section-title:hover::after {
          width: 120px;
        }

        .about-section, .services-section, .industries-section, .technology-section {
          margin-bottom: 3rem;
          padding: 2.5rem;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 100, 255, 0.15);
          border-radius: 20px;
          transition: all 0.4s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          opacity: ${isVisible ? '1' : '0'};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(50px)'};
          text-align: center;
        }

        .about-section {
          transition-delay: 0.6s;
        }

        .services-section {
          transition-delay: 0.8s;
        }

        .industries-section {
          transition-delay: 0.9s;
        }

        .technology-section {
          transition-delay: 1s;
        }

        .section-description {
          color: #666;
          line-height: 1.7;
          margin-bottom: 2.5rem;
          text-align: center;
          font-size: 1.05rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 2.5rem;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(0, 100, 255, 0.15);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          text-align: center;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(0, 100, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%);
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-10px) scale(1.02);
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 15px 35px rgba(0, 100, 255, 0.15);
          border-color: rgba(0, 100, 255, 0.3);
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .feature-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #0064ff 0%, #a6a6a6 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          transition: all 0.4s ease;
          box-shadow: 0 8px 20px rgba(0, 100, 255, 0.2);
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 12px 25px rgba(0, 100, 255, 0.3);
        }

        .feature-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #333;
          transition: all 0.3s ease;
          text-align: center;
        }

        .feature-card:hover .feature-title {
          color: #0064ff;
        }

        .feature-description {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.6;
          transition: all 0.3s ease;
          text-align: center;
        }

        .feature-card:hover .feature-description {
          color: #555;
        }

        .stats-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }

        .stat-item {
          text-align: center;
          padding: 2rem 1.5rem;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          transition: all 0.4s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(0, 100, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .stat-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #0064ff, #a6a6a6);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 1);
          box-shadow: 0 15px 30px rgba(0, 100, 255, 0.1);
          border-color: rgba(0, 100, 255, 0.2);
        }

        .stat-item:hover::before {
          opacity: 1;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #0064ff;
          margin-bottom: 0.5rem;
          transition: all 0.3s ease;
          text-align: center;
        }

        .stat-item:hover .stat-number {
          transform: scale(1.1);
        }

        .stat-label {
          color: #666;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          text-align: center;
        }

        .stat-item:hover .stat-label {
          color: #0064ff;
        }

        .industry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .industry-card {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(0, 100, 255, 0.15);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .industry-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 100, 255, 0.1);
          border-color: rgba(0, 100, 255, 0.3);
        }

        .industry-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #0064ff;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          text-align: center;
        }

        .industry-description {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.6;
          text-align: center;
        }

        .scroll-to-top {
          position: fixed;
          bottom: 2.5rem;
          right: 2.5rem;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #0064ff 0%, #a6a6a6 100%);
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          opacity: ${scrollY > 300 ? '1' : '0'};
          transform: ${scrollY > 300 ? 'translateY(0)' : 'translateY(30px)'};
          z-index: 100;
          box-shadow: 0 8px 25px rgba(0, 100, 255, 0.3);
        }

        .scroll-to-top:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 12px 30px rgba(0, 100, 255, 0.4);
        }

        .scroll-to-top:active {
          transform: translateY(0) scale(0.95);
        }

        @media (max-width: 1024px) {
          .content-wrapper {
            padding: 2.5rem 1.5rem;
          }

          .hero-title {
            font-size: 2.4rem;
          }
          
          .section-title {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 768px) {
          .content-wrapper {
            padding: 2rem 1rem;
          }

          .hero-title {
            font-size: 2rem;
          }
          
          .hero-description {
            font-size: 1rem;
          }

          .section-title {
            font-size: 1.6rem;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .stats-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .industry-grid {
            grid-template-columns: 1fr;
          }

          .stat-number {
            font-size: 2rem;
          }

          .about-section, .services-section, .industries-section, .technology-section {
            padding: 2rem;
          }

          .feature-card {
            padding: 1.8rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.8rem;
          }

          .hero-section {
            padding: 2rem 1.5rem;
          }

          .section-title {
            font-size: 1.4rem;
          }

          .stats-container {
            grid-template-columns: 1fr;
          }

          .scroll-to-top {
            width: 50px;
            height: 50px;
            bottom: 1.5rem;
            right: 1.5rem;
          }

          .feature-icon {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>
      
      <Header />
      
      <div className="metadev-container">
        <div className="content-wrapper">
          <div className="logo-header">
            <div className="logo">
              <img
                src="/Metadev.jpg"
                alt="MetaDev Logo"
                className="logo-image"
              />
            </div>
            <h1 className="company-name">METADEV</h1>
          </div>

          <div className="hero-section">
            <h1 className="hero-title">Industry-Specific IT Solutions</h1>
            <p className="hero-description">
              METADEV empowers organizations across sectors with next-gen digital solutions designed to improve efficiency, agility, and impact.
            </p>
          </div>

          <div className="about-section" id="about-section">
            <h2 className="section-title">About METADEV</h2>
            <p className="section-description">
              We are an innovative IT company committed to transforming the digital landscape through cutting-edge technology and forward-thinking solutions. Our mission is to deliver smart, scalable, and secure digital experiences that empower businesses and communities alike.
            </p>
            
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Enterprise Clients</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">ISO 27001</div>
                <div className="stat-label">Certified</div>
              </div>
            </div>
          </div>

          <div className="industries-section">
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-description">
              METADEV delivers tailored digital solutions across key industries to drive transformation and growth.
            </p>
            
            <div className="industry-grid">
              <div className="industry-card">
                <h3 className="industry-title"><Factory size={24} /> Manufacturing & Technology</h3>
                <p className="industry-description">
                  Our Industry 4.0 solutions redefine traditional manufacturing by integrating IoT, AI, machine vision, and robotic process automation (RPA). MetaDev's smart factory ecosystems enable predictive maintenance and operational excellence.
                </p>
              </div>
              
              <div className="industry-card">
                <h3 className="industry-title"><Car size={24} /> Automotive</h3>
                <p className="industry-description">
                  From connected vehicle platforms, EV telematics, and OTA software updates to real-time predictive analytics, we empower OEMs and suppliers to enhance safety, reduce time-to-market, and foster innovation.
                </p>
              </div>
              
              <div className="industry-card">
                <h3 className="industry-title"><Banknote size={24} /> Banking & Financial Services</h3>
                <p className="industry-description">
                  METADEV enables end-to-end digital transformation for banks and capital markets. Our services include core banking modernization, digital onboarding, AI-powered virtual assistants, and cybersecurity frameworks.
                </p>
              </div>
              
              <div className="industry-card">
                <h3 className="industry-title"><Scale size={24} /> Insurance</h3>
                <p className="industry-description">
                  METADEV reimagines the insurance value chain with AI-driven claims processing, fraud detection systems, and customer-centric platforms that improve decision-making and streamline policy management.
                </p>
              </div>
              
              <div className="industry-card">
                <h3 className="industry-title"><Building size={24} /> Public Sector</h3>
                <p className="industry-description">
                  METADEV accelerates e-governance by equipping government agencies with secure cloud infrastructure, data-driven policy platforms, and citizen service portals for improved transparency and service delivery.
                </p>
              </div>
            </div>
          </div>

          <div className="services-section" id="services">
            <h2 className="section-title">Our Services</h2>
            <p className="section-description">
              At METDADEV, we empower businesses to evolve through cutting-edge digital infrastructure, intelligent cloud adoption, and transformative enterprise-grade solutions.
            </p>
            
            <div className="features-grid">
              <div className="feature-card" 
                   onMouseEnter={() => setHoveredCard(1)}
                   onMouseLeave={() => setHoveredCard(null)}>
                <div className="feature-icon">
                  <Cloud size={28} color="white" />
                </div>
                <h3 className="feature-title">Cloud Services</h3>
                <p className="feature-description">
                  Expert-led cloud transformation, migration, and management across AWS, Azure, GCP with cloud-native development, DevOps automation, and hybrid cloud consulting.
                </p>
              </div>
              
              <div className="feature-card" 
                   onMouseEnter={() => setHoveredCard(2)}
                   onMouseLeave={() => setHoveredCard(null)}>
                <div className="feature-icon">
                  <Brain size={28} color="white" />
                </div>
                <h3 className="feature-title">Data & AI</h3>
                <p className="feature-description">
                  Predictive analytics, NLP, computer vision, and big data platforms to unlock actionable insights and enable smarter decision-making.
                </p>
              </div>
              
              <div className="feature-card" 
                   onMouseEnter={() => setHoveredCard(3)}
                   onMouseLeave={() => setHoveredCard(null)}>
                <div className="feature-icon">
                  <Settings size={28} color="white" />
                </div>
                <h3 className="feature-title">Enterprise Solutions</h3>
                <p className="feature-description">
                  Digital transformation blueprints, legacy system optimization, Agile/DevOps practices, and IT-business strategy alignment.
                </p>
              </div>

              <div className="feature-card" 
                   onMouseEnter={() => setHoveredCard(4)}
                   onMouseLeave={() => setHoveredCard(null)}>
                <div className="feature-icon">
                  <Shield size={28} color="white" />
                </div>
                <h3 className="feature-title">Cybersecurity</h3>
                <p className="feature-description">
                  Comprehensive protection with threat detection, vulnerability assessments, SIEM, IAM, and compliance with ISO, GDPR, PCI DSS standards.
                </p>
              </div>

              <div className="feature-card" 
                   onMouseEnter={() => setHoveredCard(5)}
                   onMouseLeave={() => setHoveredCard(null)}>
                <div className="feature-icon">
                  <Smartphone size={28} color="white" />
                </div>
                <h3 className="feature-title">Payment Solutions</h3>
                <p className="feature-description">
                  Robust UPI payment systems, digital invoicing, SMS Pay, and secure payment gateway services with real-time transaction processing.
                </p>
              </div>

              <div className="feature-card" 
                   onMouseEnter={() => setHoveredCard(6)}
                   onMouseLeave={() => setHoveredCard(null)}>
                <div className="feature-icon">
                  <Printer size={28} color="white" />
                </div>
                <h3 className="feature-title">ERP & POS Solutions</h3>
                <p className="feature-description">
                  Comprehensive billing applications, POS systems with inventory management, and advanced analytics for smarter business decisions.
                </p>
              </div>
            </div>
          </div>

          <div className="technology-section">
            <h2 className="section-title">Our Technology</h2>
            <p className="section-description">
              Built on a foundation of security, interoperability, and scalability to meet the most demanding enterprise requirements.
            </p>
            
            <div className="features-grid">
              <div className="feature-card" 
                   onMouseEnter={() => setHoveredCard(7)}
                   onMouseLeave={() => setHoveredCard(null)}>
                <div className="feature-icon">
                  <Lock size={28} color="white" />
                </div>
                <h3 className="feature-title">Security First</h3>
                <p className="feature-description">
                  End-to-end encryption, audit logs, and role-based access controls ensure complete data security and regulatory compliance.
                </p>
              </div>
              
              <div className="feature-card" 
                   onMouseEnter={() => setHoveredCard(8)}
                   onMouseLeave={() => setHoveredCard(null)}>
                <div className="feature-icon">
                  <Database size={28} color="white" />
                </div>
                <h3 className="feature-title">Scalable Architecture</h3>
                <p className="feature-description">
                  Modular, microservices-based architecture that scales effortlessly with your business growth and evolving needs.
                </p>
              </div>
              
              <div className="feature-card" 
                   onMouseEnter={() => setHoveredCard(9)}
                   onMouseLeave={() => setHoveredCard(null)}>
                <div className="feature-icon">
                  <Code size={28} color="white" />
                </div>
                <h3 className="feature-title">API-First Approach</h3>
                <p className="feature-description">
                  RESTful APIs for seamless integration with other enterprise systems, ERPs, and third-party applications.
                </p>
              </div>
            </div>
          </div>
        </div>

        <button className="scroll-to-top" onClick={scrollToTop}>
          <ArrowUp size={24} color="white" />
        </button>
      </div>
    </>
  );
};

export default MetaDevPage;