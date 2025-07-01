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
      description: "Seamless integration with India's national digital health ecosystem",
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
      }
    },
    {
      title: "APAAR (Academic Account Registry)",
      icon: BookOpenText,
      description: "Lifelong student ID integration for India's education ecosystem",
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
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <style jsx>{`
        @keyframes slideFromLeft {
          0% {
            transform: translateX(-60px) translateY(15px);
            opacity: 0;
          }
          100% {
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideFromRight {
          0% {
            transform: translateX(60px) translateY(15px);
            opacity: 0;
          }
          100% {
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .slide-from-left {
          animation: slideFromLeft 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .slide-from-right {
          animation: slideFromRight 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          animation-delay: 0.15s;
        }

        .fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
          animation-delay: 0.3s;
        }

        .integrations-section {
          padding: 4rem 0;
          background: #f8fafc;
        }

        .integrations-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
          opacity: 0;
          animation: fadeInUp 0.5s ease-out forwards;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 1.75rem;
            flex-direction: column;
            gap: 0.5rem;
          }
        }

        .section-subtitle {
          font-size: 1rem;
          color: #6b7280;
          max-width: 42rem;
          margin: 0 auto;
          line-height: 1.6;
        }

        .integrations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
          gap: 2rem;
          margin-bottom: 2.5rem;
          align-items: stretch;
        }

        @media (max-width: 768px) {
          .integrations-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        .integration-card {
          background: white;
          border-radius: 1.25rem;
          padding: 2rem;
          box-shadow: 0 3px 5px rgba(0, 0, 0, 0.06);
          border: 1px solid #e5e7eb;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: translateY(15px);
          min-height: 600px;
        }

        .integration-card.visible {
          opacity: 1;
        }

        .integration-card:hover {
          box-shadow: 0 15px 30px rgba(59, 130, 246, 0.12);
          transform: translateY(-8px) scale(1.01);
        }

        .integration-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%);
          transition: all 0.3s ease;
        }

        .integration-card:hover::before {
          height: 6px;
          background-size: 200% 200%;
          animation: gradientShift 2s ease infinite;
        }

        .integration-card:hover::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.02) 0%, rgba(29, 78, 216, 0.02) 100%);
          pointer-events: none;
          z-index: 1;
        }

        .integration-content {
          position: relative;
          z-index: 2;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .integration-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .integration-icon {
          width: 3rem;
          height: 3rem;
          border-radius: 0.75rem;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 3px 6px rgba(59, 130, 246, 0.25);
          transition: all 0.25s ease;
        }

        .integration-card:hover .integration-icon {
          transform: scale(1.05) rotate(3deg);
          box-shadow: 0 6px 15px rgba(59, 130, 246, 0.3);
        }

        .integration-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
          line-height: 1.3;
          transition: color 0.25s ease;
        }

        .integration-card:hover .integration-title {
          color: #3b82f6;
        }

        .integration-description {
          color: #4b5563;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }

        .features-title {
          font-size: 1rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem 0;
          flex: 1;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          color: #4b5563;
          font-size: 0.875rem;
          transition: transform 0.2s ease;
        }

        .integration-card:hover .feature-item {
          transform: translateX(3px);
        }

        .feature-item::before {
          content: '✓';
          color: #10b981;
          font-weight: 600;
          width: 1rem;
          height: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ecfdf5;
          border-radius: 50%;
          font-size: 0.75rem;
          transition: all 0.25s ease;
        }

        .integration-card:hover .feature-item::before {
          background: #10b981;
          color: white;
          transform: scale(1.05);
        }

        .use-case {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border-radius: 0.75rem;
          padding: 1.5rem;
          border: 1px solid #e2e8f0;
          margin-top: auto;
          transition: all 0.25s ease;
        }

        .integration-card:hover .use-case {
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
          border-color: #bfdbfe;
        }

        .use-case-title {
          font-size: 1rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .use-case-steps {
          list-style: none;
          padding: 0;
          margin: 0;
          counter-reset: step-counter;
        }

        .use-case-step {
          counter-increment: step-counter;
          margin-bottom: 0.75rem;
          padding-left: 2rem;
          position: relative;
          color: #4b5563;
          line-height: 1.5;
          font-size: 0.875rem;
          transition: transform 0.2s ease;
        }

        .integration-card:hover .use-case-step {
          transform: translateX(3px);
        }

        .use-case-step::before {
          content: counter(step-counter);
          position: absolute;
          left: 0;
          top: 0.05rem;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 600;
          box-shadow: 0 2px 4px rgba(59, 130, 246, 0.25);
          transition: all 0.25s ease;
        }

        .integration-card:hover .use-case-step::before {
          transform: scale(1.05) rotate(5deg);
          box-shadow: 0 3px 8px rgba(59, 130, 246, 0.3);
        }

        .security-section {
          background: white;
          border-radius: 1.25rem;
          padding: 2.5rem;
          text-align: center;
          margin-top: 3rem;
          box-shadow: 0 3px 5px rgba(0, 0, 0, 0.06);
          border: 1px solid #e5e7eb;
          opacity: 0;
          transition: all 0.25s ease;
        }

        .security-section.visible {
          opacity: 1;
        }

        .security-section:hover {
          box-shadow: 0 12px 20px rgba(59, 130, 246, 0.08);
          transform: translateY(-3px);
        }

        .security-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }

        .security-description {
          color: #6b7280;
          max-width: 42rem;
          margin: 0 auto 2rem;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .security-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1.5rem;
          max-width: 700px;
          margin: 0 auto;
        }

        .security-feature {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          padding: 1.5rem 1rem;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border-radius: 0.75rem;
          border: 1px solid #e2e8f0;
          transition: all 0.25s ease;
        }

        .security-feature:hover {
          transform: translateY(-5px) scale(1.02);
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
          border-color: #bfdbfe;
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.12);
        }

        .security-feature-icon {
          width: 2.5rem;
          height: 2.5rem;
          background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1d4ed8;
          transition: all 0.25s ease;
        }

        .security-feature:hover .security-feature-icon {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          transform: scale(1.05) rotate(3deg);
        }

        .security-feature-title {
          font-weight: 600;
          color: #1f2937;
          font-size: 0.9rem;
          transition: color 0.25s ease;
        }

        .security-feature:hover .security-feature-title {
          color: #3b82f6;
        }
      `}</style>

      <section id="government-integrations" className="integrations-section">
        <div className="integrations-container">
          <div className="section-header">
            <h2 className="section-title">
              <ShieldCheck size={32} />
              National Ecosystem Enablement
            </h2>
            <p className="section-subtitle">
              Seamless integration with India's digital public infrastructure for health and education
            </p>
          </div>

          <div className="integrations-grid">
            {integrations.map((integration, index) => {
              const IconComponent = integration.icon;
              return (
                <div 
                  key={index} 
                  className={`integration-card ${isVisible ? 'visible' : ''} ${isVisible ? (index === 0 ? 'slide-from-left' : 'slide-from-right') : ''}`}
                >
                  <div className="integration-content">
                    <div className="integration-header">
                      <div className="integration-icon">
                        <IconComponent size={20} />
                      </div>
                      <h3 className="integration-title">{integration.title}</h3>
                    </div>
                    
                    <p className="integration-description">{integration.description}</p>
                    
                    <div>
                      <h4 className="features-title">
                        <Link2 size={16} />
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
                        <BadgeCheck size={16} />
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
                </div>
              );
            })}
          </div>

          <div className={`security-section ${isVisible ? 'visible fade-in-up' : ''}`}>
            <h3 className="security-title">
              <FileLock2 size={28} />
              Built with Privacy and Compliance
            </h3>
            <p className="security-description">
              Our government integrations are developed using approved protocols and encrypted APIs, ensuring complete data privacy, user consent, and legal compliance with national frameworks.
            </p>
            
            <div className="security-features">
              <div className="security-feature">
                <div className="security-feature-icon">
                  <Fingerprint size={16} />
                </div>
                <div className="security-feature-title">Consent Framework</div>
              </div>
              <div className="security-feature">
                <div className="security-feature-icon">
                  <DatabaseZap size={16} />
                </div>
                <div className="security-feature-title">NDHM Compliance</div>
              </div>
              <div className="security-feature">
                <div className="security-feature-icon">
                  <ShieldCheck size={16} />
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