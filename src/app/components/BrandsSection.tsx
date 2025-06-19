// components/BrandsSection.tsx
"use client";
import React, { useState } from 'react';
import { Heart, Stethoscope, Ambulance, Phone, Calendar, Brain, BookOpen, Users, ArrowRight, CheckCircle, ClipboardList, Pill, Shield, FileText, Package, Handshake, CreditCard, Activity, TrendingUp, Globe, Zap } from 'lucide-react';

const BrandsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('metahealth');

  const brands = {
    metahealth: {
      name: 'Global Health Connect',
      tagline: 'Unified Public Health Intelligence Platform',
      description: 'A comprehensive global health platform integrating data from CDC, NHS, WHO and other agencies to provide real-time disease surveillance, health profiling, and evidence-based intervention planning.',
      icon: Heart,
      color: 'from-blue-500 to-teal-600',
      features: [
        {
          icon: Stethoscope,
          title: 'Disease Surveillance',
          description: 'Real-time monitoring of disease prevalence including COVID-19, malaria, tuberculosis and emerging threats with predictive analytics'
        },
        {
          icon: ClipboardList,
          title: 'Health Profiling',
          description: 'Comprehensive population health assessments identifying risk factors, healthcare gaps and vulnerable groups'
        },
        {
          icon: Users,
          title: 'Community Health',
          description: 'Targeted community interventions based on demographic and epidemiological data'
        },
        {
          icon: Shield,
          title: 'Preventive Care',
          description: 'Early detection systems and preventive measures to reduce disease burden'
        },
        {
          icon: Brain,
          title: 'Clinical Intelligence',
          description: 'AI-powered diagnostic support and treatment recommendations for healthcare providers'
        },
        {
          icon: Ambulance,
          title: 'Emergency Response',
          description: 'Integrated emergency coordination with ambulance dispatch and hospital capacity monitoring'
        }
      ],
      services: [
        'Global Disease Surveillance',
        'Population Health Analytics',
        'Risk Factor Identification',
        'Healthcare Resource Allocation',
        'Public Health Intervention Planning',
        'Environmental Health Monitoring',
        'Vulnerable Group Protection',
        'Health Equity Assessments',
        'Outbreak Prediction Models',
        'Interagency Data Integration'
      ]
    }
  };

  const currentBrand = brands[activeTab as keyof typeof brands];
  const IconComponent = currentBrand.icon;

  return (
    <>
      <style jsx>{`
        .brands-section {
          position: relative;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%);
          padding: 6rem 0;
          overflow: hidden;
        }

        .brands-bg-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.05) 0%, transparent 50%),
            linear-gradient(45deg, transparent 49%, rgba(59, 130, 246, 0.02) 50%, transparent 51%);
          background-size: 200px 200px, 300px 300px, 40px 40px;
        }

        .medical-dots {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(circle, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
          opacity: 0.3;
        }

        .brands-container {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          animation: fadeInUp 1s ease-out;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 800;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .section-subtitle {
          font-size: clamp(1rem, 1.5vw, 1.25rem);
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .brand-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
          animation: fadeInUp 1s ease-out 0.2s both;
        }

        .brand-info {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 24px;
          padding: 2.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .brand-info::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #10b981, #06b6d4);
        }

        .brand-info:hover {
          transform: translateY(-5px);
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.15);
        }

        .brand-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .brand-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.4);
        }

        .brand-name {
          font-size: 1.75rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.25rem;
        }

        .brand-tagline {
          font-size: 0.875rem;
          color: #64748b;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .brand-description {
          font-size: 1.125rem;
          color: #475569;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .brand-services {
          margin-top: 2rem;
        }

        .services-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .services-title::before {
          content: '';
          width: 4px;
          height: 20px;
          background: linear-gradient(135deg, #3b82f6, #10b981);
          border-radius: 2px;
        }

        .services-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 0.75rem;
        }

        .service-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: rgba(59, 130, 246, 0.05);
          border-radius: 12px;
          font-size: 0.875rem;
          font-weight: 500;
          color: #475569;
          transition: all 0.3s ease;
        }

        .service-item:hover {
          background: rgba(59, 130, 246, 0.1);
          transform: translateX(5px);
        }

        .check-icon {
          color: #10b981;
          flex-shrink: 0;
        }

        .brand-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08);
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #10b981);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .feature-card:hover::before {
          transform: scaleX(1);
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .feature-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .feature-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 8px 20px -5px rgba(59, 130, 246, 0.3);
        }

        .feature-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: #0f172a;
        }

        .feature-description {
          color: #64748b;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .cta-section {
          text-align: center;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0369a1 100%);
          border-radius: 32px;
          padding: 4rem 2rem;
          color: white;
          position: relative;
          overflow: hidden;
          animation: fadeInUp 1s ease-out 0.4s both;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.5;
        }

        .cta-content {
          position: relative;
          z-index: 2;
        }

        .cta-title {
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-description {
          font-size: 1.125rem;
          color: #cbd5e1;
          max-width: 600px;
          margin: 0 auto 2.5rem;
          line-height: 1.6;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          border: none;
          border-radius: 50px;
          padding: 1.25rem 2.5rem;
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.4);
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 25px 50px -12px rgba(59, 130, 246, 0.5);
        }

        .floating-medical-icons {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 1;
        }

        .floating-medical-icon {
          position: absolute;
          color: rgba(59, 130, 246, 0.08);
          animation: floatMedical 8s ease-in-out infinite;
        }

        .floating-medical-icon:nth-child(1) {
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .floating-medical-icon:nth-child(2) {
          top: 20%;
          right: 10%;
          animation-delay: 2s;
        }

        .floating-medical-icon:nth-child(3) {
          bottom: 30%;
          left: 15%;
          animation-delay: 4s;
        }

        .floating-medical-icon:nth-child(4) {
          bottom: 20%;
          right: 5%;
          animation-delay: 6s;
        }

        @keyframes floatMedical {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          25% { transform: translateY(-15px) rotate(5deg); opacity: 0.6; }
          50% { transform: translateY(-5px) rotate(-3deg); opacity: 0.8; }
          75% { transform: translateY(-20px) rotate(8deg); opacity: 0.4; }
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

        @media (max-width: 1024px) {
          .brand-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .brand-features {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .brands-container {
            padding: 0 1rem;
          }

          .brand-info,
          .feature-card {
            padding: 1.5rem;
          }

          .services-list {
            grid-template-columns: 1fr;
          }

          .cta-section {
            padding: 2.5rem 1.5rem;
            border-radius: 20px;
          }

          .cta-button {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .section-header {
            margin-bottom: 2rem;
          }

          .brand-content {
            margin-bottom: 2rem;
          }

          .brand-header {
            flex-direction: column;
            text-align: center;
          }

          .feature-header {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>

      <section id="brands" className="brands-section">
        <div className="brands-bg-pattern"></div>
        <div className="medical-dots"></div>
        
        <div className="floating-medical-icons">
          <Activity className="floating-medical-icon" size={40} />
          <TrendingUp className="floating-medical-icon" size={36} />
          <Globe className="floating-medical-icon" size={42} />
          <Zap className="floating-medical-icon" size={38} />
        </div>

        <div className="brands-container">
          <div className="section-header">
            <h2 className="section-title">Global Health Intelligence</h2>
            <p className="section-subtitle">
              Integrating data from worldwide health agencies for comprehensive public health solutions
            </p>
          </div>

          <div className="brand-content">
            <div className="brand-info">
              <div className="brand-header">
                <div className={`brand-icon bg-gradient-to-br ${currentBrand.color}`}>
                  <IconComponent size={24} />
                </div>
                <div>
                  <h3 className="brand-name">{currentBrand.name}</h3>
                  <p className="brand-tagline">{currentBrand.tagline}</p>
                </div>
              </div>

              <p className="brand-description">
                {currentBrand.description}
              </p>

              <div className="brand-services">
                <h4 className="services-title">Core Capabilities</h4>
                <div className="services-list">
                  {currentBrand.services.map((service, index) => (
                    <div key={index} className="service-item">
                      <CheckCircle size={16} className="check-icon" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="brand-features">
              {currentBrand.features.map((feature, index) => {
                const FeatureIcon = feature.icon;
                return (
                  <div key={index} className="feature-card">
                    <div className="feature-header">
                      <div className={`feature-icon bg-gradient-to-br ${currentBrand.color}`}>
                        <FeatureIcon size={20} />
                      </div>
                      <h4 className="feature-title">{feature.title}</h4>
                    </div>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="cta-section">
            <div className="cta-content">
              <h3 className="cta-title">Ready to Enhance Public Health Outcomes?</h3>
              <p className="cta-description">
                Join governments and health organizations using our platform to make data-driven public health decisions
              </p>
              <button className="cta-button">
                Request Health Data Demo
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandsSection;