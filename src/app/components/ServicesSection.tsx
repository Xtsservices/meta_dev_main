// components/ServicesSection.tsx
"use client";
import React, { useState } from 'react';
import { 
  Database, 
  Globe, 
  Shield,
  Activity,
  Users,
  BarChart3,
  ClipboardList,
  Map,
  HeartPulse,
  TestTube2,
  ArrowRight,
  TrendingUp,
  Brain,
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const [, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Database,
      title: 'Health Data Integration',
      description: 'Aggregate and harmonize health data from multiple global sources including CDC, NHS, and WHO.',
      features: ['Multi-source data integration', 'Data standardization', 'Real-time updates', 'API connectivity'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Disease Surveillance',
      description: 'Global monitoring of disease spread with predictive analytics for outbreak prevention.',
      features: ['Real-time tracking', 'Geospatial mapping', 'Early warning systems', 'Trend analysis'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Activity,
      title: 'Population Health Analytics',
      description: 'Comprehensive analysis of population health indicators and risk factors.',
      features: ['Health equity analysis', 'Risk stratification', 'Vulnerable population identification', 'Benchmarking'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Shield,
      title: 'Public Health Intelligence',
      description: 'Actionable insights for public health decision-making and policy formulation.',
      features: ['Evidence-based recommendations', 'Intervention planning', 'Resource allocation models', 'Impact forecasting'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: ClipboardList,
      title: 'Health Profiling',
      description: 'Detailed community health assessments identifying key health needs and priorities.',
      features: ['Demographic analysis', 'Disease prevalence mapping', 'Healthcare access evaluation', 'Environmental risk factors'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: BarChart3,
      title: 'Performance Metrics',
      description: 'Tracking and visualization of key public health indicators and outcomes.',
      features: ['Custom dashboards', 'Progress tracking', 'Goal measurement', 'Quality indicators'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Map,
      title: 'Geospatial Health Mapping',
      description: 'Visual representation of health data across geographic regions for targeted interventions.',
      features: ['Hotspot identification', 'Resource allocation mapping', 'Accessibility analysis', 'Environmental overlays'],
      color: 'from-blue-600 to-purple-600'
    },
    {
      icon: HeartPulse,
      title: 'Chronic Disease Management',
      description: 'Systems for monitoring and managing prevalence of chronic conditions.',
      features: ['Diabetes tracking', 'Hypertension monitoring', 'Cancer surveillance', 'Preventive care planning'],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: TestTube2,
      title: 'Environmental Health',
      description: 'Monitoring environmental factors impacting public health outcomes.',
      features: ['Air quality tracking', 'Water safety monitoring', 'Climate impact analysis', 'Exposure risk assessment'],
      color: 'from-teal-500 to-green-500'
    }
  ];

  const dataSources = [
    { name: 'CDC Data', category: 'United States', icon: Shield },
    { name: 'NHS Statistics', category: 'United Kingdom', icon: HeartPulse },
    { name: 'WHO Indicators', category: 'Global', icon: Globe },
    { name: 'Eurostat', category: 'European Union', icon: BarChart3 },
    { name: 'AIHW Data', category: 'Australia', icon: Activity },
    { name: 'MHLW Statistics', category: 'Japan', icon: TrendingUp },
    { name: 'DHS Surveys', category: 'Developing Nations', icon: Users },
    { name: 'IHME Data', category: 'Global Burden of Disease', icon: Brain }
  ];

  return (
    <>
      <style jsx>{`
        .services-section {
          position: relative;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #0369a1 100%);
          padding: 8rem 0;
          overflow: hidden;
        }

        .services-bg-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.08) 0%, transparent 50%);
          background-size: 300px 300px, 400px 400px;
          animation: patternMove 25s linear infinite;
        }

        @keyframes patternMove {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(50px, 50px) rotate(360deg); }
        }

        .medical-grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridPulse 6s ease-in-out infinite alternate;
        }

        @keyframes gridPulse {
          0% { opacity: 0.2; }
          100% { opacity: 0.05; }
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
          color: rgba(59, 130, 246, 0.1);
          animation: floatMedical 10s ease-in-out infinite;
        }

        .floating-medical-icon:nth-child(1) {
          top: 15%;
          left: 8%;
          animation-delay: 0s;
        }

        .floating-medical-icon:nth-child(2) {
          top: 25%;
          right: 12%;
          animation-delay: 3s;
        }

        .floating-medical-icon:nth-child(3) {
          bottom: 20%;
          left: 10%;
          animation-delay: 6s;
        }

        .floating-medical-icon:nth-child(4) {
          bottom: 35%;
          right: 15%;
          animation-delay: 9s;
        }

        @keyframes floatMedical {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.1; }
          25% { transform: translateY(-20px) rotate(10deg); opacity: 0.15; }
          50% { transform: translateY(-10px) rotate(-5deg); opacity: 0.2; }
          75% { transform: translateY(-30px) rotate(15deg); opacity: 0.12; }
        }

        .services-container {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
          animation: fadeInUp 1s ease-out;
        }

        .section-title {
          font-size: clamp(2.5rem, 4vw, 4rem);
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .section-subtitle {
          font-size: clamp(1.125rem, 1.5vw, 1.375rem);
          color: #cbd5e1;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 2rem;
          margin-bottom: 6rem;
          animation: fadeInUp 1s ease-out 0.2s both;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 2.5rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.6), transparent);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .service-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 0 25px 50px -12px rgba(59, 130, 246, 0.2);
        }

        .service-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .service-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.4);
          transition: all 0.3s ease;
        }

        .service-card:hover .service-icon {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 15px 35px -5px rgba(59, 130, 246, 0.6);
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          line-height: 1.2;
        }

        .service-description {
          color: #cbd5e1;
          line-height: 1.7;
          margin-bottom: 2rem;
          font-size: 1.05rem;
        }

        .service-features {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 0.75rem;
        }

        .service-feature {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #e2e8f0;
          font-size: 0.95rem;
          padding: 0.5rem 0;
          transition: all 0.3s ease;
          position: relative;
        }

        .service-feature::before {
          content: '';
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #10b981, #059669);
          border-radius: 50%;
          flex-shrink: 0;
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.4);
        }

        .service-card:hover .service-feature {
          color: white;
          transform: translateX(5px);
        }

        .tech-stack-section {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 32px;
          padding: 4rem 3rem;
          margin-bottom: 5rem;
          text-align: center;
          animation: fadeInUp 1s ease-out 0.4s both;
          position: relative;
          overflow: hidden;
        }

        .tech-stack-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #10b981, #06b6d4);
        }

        .tech-stack-title {
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .tech-stack-subtitle {
          font-size: 1.125rem;
          color: #cbd5e1;
          margin-bottom: 3rem;
        }

        .tech-stack-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .tech-item {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .tech-item::before {
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

        .tech-item:hover::before {
          transform: scaleX(1);
        }

        .tech-item:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 0 15px 30px -5px rgba(59, 130, 246, 0.2);
        }

        .tech-name {
          font-size: 1.25rem;
          font-weight: 600;
          color: white;
          margin-bottom: 0.5rem;
        }

        .tech-category {
          font-size: 0.875rem;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .cta-section {
          text-align: center;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 32px;
          padding: 4rem 2rem;
          animation: fadeInUp 1s ease-out 0.6s both;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6, #10b981, #06b6d4, #8b5cf6);
        }

        .cta-title {
          font-size: clamp(1.75rem, 3vw, 2.25rem);
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
        }

        .cta-description {
          font-size: 1.125rem;
          color: #cbd5e1;
          max-width: 600px;
          margin: 0 auto 2.5rem;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }

        .cta-button-primary {
          display: flex;
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

        .cta-button-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .cta-button-primary:hover::before {
          left: 100%;
        }

        .cta-button-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 40px -5px rgba(59, 130, 246, 0.5);
        }

        .cta-button-secondary {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50px;
          padding: 1.25rem 2.5rem;
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .cta-button-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-3px);
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
          .services-grid {
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          }

          .tech-stack-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .services-container {
            padding: 0 1rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .service-card {
            padding: 2rem;
          }

          .tech-stack-section {
            padding: 2.5rem 1.5rem;
          }

          .tech-stack-grid {
            grid-template-columns: 1fr;
          }

          .cta-section {
            padding: 2.5rem 1.5rem;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .cta-button-primary,
          .cta-button-secondary {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .section-header {
            margin-bottom: 3rem;
          }

          .services-grid {
            margin-bottom: 4rem;
          }

          .service-header {
            flex-direction: column;
            text-align: center;
          }

          .service-card {
            padding: 1.5rem;
          }
        }
      `}</style>

      <section id="services" className="services-section">
        <div className="services-bg-pattern"></div>
        <div className="medical-grid-overlay"></div>
        
       
        <div className="services-container">
          <div className="section-header">
            <h2 className="section-title">Public Health Services</h2>
            <p className="section-subtitle">
              Comprehensive solutions for global health monitoring, analysis and evidence-based intervention
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index} 
                  className="service-card"
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className="service-header">
                    <div className="service-icon">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                  </div>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="service-feature">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="tech-stack-section">
            <h3 className="tech-stack-title">Integrated Data Sources</h3>
            <p className="tech-stack-subtitle">
              We integrate with leading global health data providers for comprehensive insights
            </p>
            <div className="tech-stack-grid">
              {dataSources.map((source, index) => (
                <div key={index} className="tech-item">
                  <div className="tech-name">{source.name}</div>
                  <div className="tech-category">{source.category}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="cta-section">
            <h3 className="cta-title">Need Custom Public Health Solutions?</h3>
            <p className="cta-description">
              Our team can develop tailored systems for your specific health monitoring and intervention needs
            </p>
            <div className="cta-buttons">
              <button className="cta-button-primary">
                Request Consultation
                <ArrowRight size={20} />
              </button>
              <button className="cta-button-secondary">
                View Case Studies
                <Users size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;