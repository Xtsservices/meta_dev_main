"use client";
import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  HeartPulse, 
  BookOpenText, 
  Link2, 
  Fingerprint,
  FileLock2,
  BadgeCheck,
  DatabaseZap
} from 'lucide-react';

const GovernmentIntegrations: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const integrations = [
    {
      title: "Ayushman Bharat Digital Mission (ABDM)",
      icon: HeartPulse,
      description: "Seamless integration with India&apos;s national digital health ecosystem",
      features: [
        "ABHA (Health Account) creation & management",
        "Digital Health Record (DHR) linkage",
        "Health Information Exchange (HIE) compliance",
        "Hospital/Clinic onboarding support",
        "Consent-based data sharing"
      ],
      useCase: {
        title: "Integrated Healthcare Journey",
        steps: [
          "Patient visits hospital with ABHA ID",
          "Instant access to medical history",
          "Treatment recorded in real-time",
          "Prescriptions shared securely with pharmacies",
          "Continuity of care across providers"
        ]
      },
      color: "from-blue-600 to-cyan-500",
      animationClass: "slide-from-left"
    },
    {
      title: "APAAR (Academic Account Registry)",
      icon: BookOpenText,
      description: "Lifelong student ID integration for India&apos;s education ecosystem",
      features: [
        "Automated APAAR ID generation",
        "Academic record linking",
        "Skills certification storage",
        "National Academic Depository integration",
        "Interoperable academic mobility"
      ],
      useCase: {
        title: "Seamless Education Tracking",
        steps: [
          "Student registers with APAAR ID",
          "All academic records digitally stored",
          "Certificates and skills tracked",
          "Simplified admissions process",
          "Fraud-proof credential verification"
        ]
      },
      color: "from-purple-600 to-fuchsia-500",
      animationClass: "slide-from-right"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <style jsx>{`
        @keyframes slideFromLeft {
          0% {
            transform: translateX(-100%) translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideFromRight {
          0% {
            transform: translateX(100%) translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .slide-from-left {
          animation: slideFromLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .slide-from-right {
          animation: slideFromRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          animation-delay: 0.2s;
        }

        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          animation-delay: 0.4s;
        }

        .integrations-section {
          padding: 5rem 0;
          background: #f8fafc;
        }

        .integrations-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #111827;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
            flex-direction: column;
            gap: 0.5rem;
          }
        }

        .section-subtitle {
          font-size: 1.25rem;
          color: #6b7280;
          max-width: 48rem;
          margin: 0 auto;
        }

        .integrations-grid {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 3rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        @media (max-width: 1024px) {
          .integrations-grid {
            flex-direction: column;
            align-items: center;
          }
        }

        .integration-card {
          background: white;
          border-radius: 1.5rem;
          padding: 2.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
          border: 1px solid #e5e7eb;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
          width: 100%;
          max-width: 500px;
          opacity: 0;
          transform: translateY(20px);
        }

        .integration-card.visible {
          opacity: 1;
        }

        .integration-card:hover {
          box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
          transform: translateY(-8px) scale(1.02);
        }

        .integration-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%);
        }

        .integration-card:nth-child(2)::before {
          background: linear-gradient(90deg, #8b5cf6 0%, #d946ef 100%);
        }

        .integration-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .integration-icon {
          width: 4rem;
          height: 4rem;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .integration-title {
          font-size: 1.625rem;
          font-weight: 700;
          color: #111827;
          margin: 0;
          line-height: 1.3;
        }

        .integration-description {
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 2rem;
          font-size: 1.05rem;
        }

        .features-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0 0 2.5rem 0;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          color: #4b5563;
          font-size: 1rem;
        }

        .feature-item::before {
          content: '✓';
          color: #10b981;
          font-weight: bold;
          width: 1.25rem;
          height: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ecfdf5;
          border-radius: 50%;
          font-size: 0.875rem;
        }

        .use-case {
          background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
          border-radius: 1rem;
          padding: 2rem;
          border: 1px solid #e5e7eb;
        }

        .use-case-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .use-case-steps {
          list-style: none;
          padding: 0;
          margin: 0;
          counter-reset: step-counter;
        }

        .use-case-step {
          counter-increment: step-counter;
          margin-bottom: 1rem;
          padding-left: 2.5rem;
          position: relative;
          color: #4b5563;
          line-height: 1.6;
        }

        .use-case-step::before {
          content: counter(step-counter);
          position: absolute;
          left: 0;
          top: 0.1rem;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          width: 1.75rem;
          height: 1.75rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.875rem;
          font-weight: 600;
          box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
        }

        .integration-card:nth-child(2) .use-case-step::before {
          background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
          box-shadow: 0 2px 4px rgba(139, 92, 246, 0.3);
        }

        .security-section {
          background: white;
          border-radius: 1.5rem;
          padding: 3.5rem;
          text-align: center;
          margin-top: 4rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
          border: 1px solid #e5e7eb;
          opacity: 0;
        }

        .security-section.visible {
          opacity: 1;
        }

        .security-title {
          font-size: 2rem;
          font-weight: bold;
          color: #111827;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .security-description {
          color: #6b7280;
          max-width: 48rem;
          margin: 0 auto 3rem;
          line-height: 1.7;
          font-size: 1.125rem;
        }

        .security-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .security-feature {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 2rem 1.5rem;
          background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
          border-radius: 1rem;
          border: 1px solid #e5e7eb;
          transition: transform 0.2s ease;
        }

        .security-feature:hover {
          transform: translateY(-4px);
        }

        .security-feature-icon {
          width: 3.5rem;
          height: 3.5rem;
          background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1d4ed8;
        }

        .security-feature-title {
          font-weight: 600;
          color: #111827;
          font-size: 1.1rem;
        }
      `}</style>

      <section id="government-integrations" className="integrations-section">
        <div className="integrations-container">
          <div className="section-header">
            <h2 className="section-title">
              <ShieldCheck size={40} />
              National Ecosystem Enablement
            </h2>
            <p className="section-subtitle">
              Seamless integration with India&apos;s digital public infrastructure for health and education
            </p>
          </div>

          <div className="integrations-grid">
            {integrations.map((integration, index) => {
              const IconComponent = integration.icon;
              return (
                <div 
                  key={index} 
                  className={`integration-card ${isVisible ? 'visible' : ''} ${isVisible ? integration.animationClass : ''}`}
                >
                  <div className="integration-header">
                    <div className={`integration-icon bg-gradient-to-br ${integration.color}`}>
                      <IconComponent size={24} />
                    </div>
                    <h3 className="integration-title">{integration.title}</h3>
                  </div>
                  
                  <p className="integration-description">{integration.description}</p>
                  
                  <div>
                    <h4 className="features-title">
                      <Link2 size={20} />
                      Key Integration Features
                    </h4>
                    <ul className="features-list">
                      {integration.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="feature-item">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="use-case">
                    <h4 className="use-case-title">
                      <BadgeCheck size={20} />
                      {integration.useCase.title}
                    </h4>
                    <ol className="use-case-steps">
                      {integration.useCase.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="use-case-step">
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={`security-section ${isVisible ? 'visible fade-in-up' : ''}`}>
            <h3 className="security-title">
              <FileLock2 size={36} />
              Built with Privacy and Compliance
            </h3>
            <p className="security-description">
              Our government integrations are developed using approved protocols and encrypted APIs, ensuring complete data privacy, user consent, and legal compliance with national frameworks.
            </p>
            
            <div className="security-features">
              <div className="security-feature">
                <div className="security-feature-icon">
                  <Fingerprint size={20} />
                </div>
                <div className="security-feature-title">Consent Framework</div>
              </div>
              <div className="security-feature">
                <div className="security-feature-icon">
                  <DatabaseZap size={20} />
                </div>
                <div className="security-feature-title">NDHM Compliance</div>
              </div>
              <div className="security-feature">
                <div className="security-feature-icon">
                  <ShieldCheck size={20} />
                </div>
                <div className="security-feature-title">Data Encryption</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GovernmentIntegrations;