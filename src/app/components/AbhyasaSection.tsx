// components/AbhyasaSection.tsx
"use client";
import React from 'react';
import { GraduationCap, BookOpen, Users, Shield, Award, ArrowRight, Database, Globe } from 'lucide-react';

interface AbhyasaSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const AbhyasaSection: React.FC<AbhyasaSectionProps> = ({ scrollToSection }) => {
  return (
    <>
      <style jsx>{`
        .abhyasa-section {
          position: relative;
          min-height: 100vh;
        //   background: linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #0369a1 100%);
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .abhyasa-bg-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
            linear-gradient(45deg, transparent 49%, rgba(255, 255, 255, 0.02) 50%, transparent 51%);
          background-size: 120px 120px, 180px 180px, 25px 25px;
          animation: patternMove 25s linear infinite;
        }

        @keyframes patternMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(25px, 25px); }
        }

        .education-grid {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridPulse 5s ease-in-out infinite alternate;
        }

        @keyframes gridPulse {
          0% { opacity: 0.4; }
          100% { opacity: 0.1; }
        }

        .floating-icons {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 1;
        }

        .floating-icon {
          position: absolute;
          color: rgba(59, 130, 246, 0.15);
          animation: float 7s ease-in-out infinite;
        }

        .floating-icon:nth-child(1) {
          top: 15%;
          left: 8%;
          animation-delay: 0s;
        }

        .floating-icon:nth-child(2) {
          top: 65%;
          right: 12%;
          animation-delay: 2.5s;
        }

        .floating-icon:nth-child(3) {
          bottom: 25%;
          left: 18%;
          animation-delay: 5s;
        }

        .floating-icon:nth-child(4) {
          top: 20%;
          right: 25%;
          animation-delay: 1.5s;
        }

        .floating-icon:nth-child(5) {
          bottom: 15%;
          right: 8%;
          animation-delay: 3.5s;
        }

        .floating-icon:nth-child(6) {
          top: 50%;
          left: 3%;
          animation-delay: 6s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-25px) rotate(15deg); }
          66% { transform: translateY(15px) rotate(-10deg); }
        }

        .abhyasa-container {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
          padding: 2rem;
          width: 100%;
        }

        .abhyasa-content {
          text-align: center;
          color: white;
          max-width: 900px;
          margin: 0 auto;
        }

        .abhyasa-badges {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
          animation: slideUp 1s ease-out 0.2s both;
        }

        .abhyasa-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          padding: 0.75rem 1.25rem;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .abhyasa-badge:hover {
          background: rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.4);
          transform: translateY(-2px);
        }

        .abhyasa-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: slideUp 1s ease-out 0.4s both;
        }

        .abhyasa-subtitle {
          font-size: clamp(1.25rem, 2.5vw, 1.5rem);
          font-weight: 600;
          color: #3b82f6;
          margin-bottom: 1rem;
          animation: slideUp 1s ease-out 0.6s both;
        }

        .abhyasa-description {
          font-size: clamp(1rem, 1.5vw, 1.125rem);
          color: #3b82f6;
          line-height: 1.6;
          margin-bottom: 3rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          animation: slideUp 1s ease-out 0.8s both;
        }

        .abhyasa-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 4rem;
          animation: slideUp 1s ease-out 1s both;
        }

        .abhyasa-button-primary {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          border: none;
          border-radius: 50px;
          padding: 1rem 2rem;
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .abhyasa-button-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .abhyasa-button-primary:hover::before {
          left: 100%;
        }

        .abhyasa-button-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 25px -5px rgba(59, 130, 246, 0.4);
        }

        .abhyasa-button-secondary {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50px;
          padding: 1rem 2rem;
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .abhyasa-button-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-3px);
        }

        .abhyasa-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          animation: slideUp 1s ease-out 1.2s both;
        }

        .abhyasa-stat {
          text-align: center;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .abhyasa-stat::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #10b981, #06b6d4);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .abhyasa-stat:hover::before {
          transform: scaleX(1);
        }

        .abhyasa-stat:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-5px);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .abhyasa-stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #3b82f6, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
          line-height: 1;
        }

        .abhyasa-stat-label {
          font-size: 0.875rem;
          color: #cbd5e1;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .education-symbol {
          position: absolute;
          top: 8%;
          right: 8%;
          width: 80px;
          height: 80px;
          opacity: 0.1;
          animation: spin 25s linear infinite;
        }

        .education-symbol::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: #3b82f6;
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pulse-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 320px;
          height: 320px;
          border: 2px solid rgba(59, 130, 246, 0.3);
          border-radius: 50%;
          animation: pulse 4s ease-in-out infinite;
        }

        .pulse-ring:nth-child(2) {
          width: 420px;
          height: 420px;
          animation-delay: 1.5s;
        }

        .pulse-ring:nth-child(3) {
          width: 520px;
          height: 520px;
          animation-delay: 3s;
        }

        @keyframes pulse {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(0.8);
          }
          50% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1.2);
          }
        }

        @media (max-width: 768px) {
          .abhyasa-container {
            padding: 1rem;
          }
          
          .abhyasa-badges {
            flex-direction: column;
            align-items: center;
          }
          
          .abhyasa-buttons {
            flex-direction: column;
          }
          
          .abhyasa-button-primary,
          .abhyasa-button-secondary {
            width: 100%;
            justify-content: center;
          }
          
          .abhyasa-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .abhyasa-stats {
            grid-template-columns: 1fr;
          }
          
          .abhyasa-stat-number {
            font-size: 2rem;
          }
        }
      `}</style>

      <section id="abhyasa" className="abhyasa-section">
        <div className="abhyasa-bg-pattern"></div>
        <div className="education-grid"></div>
        
       
        
        <div className="pulse-ring"></div>
        <div className="pulse-ring"></div>
        <div className="pulse-ring"></div>

        <div className="education-symbol"></div>

        <div className="abhyasa-container">
          <div className="abhyasa-content">
            <div className="abhyasa-badges">
              <div className="abhyasa-badge">
                <GraduationCap size={18} />
                <span>APAAR Integration</span>
              </div>
              <div className="abhyasa-badge">
                <Database size={18} />
                <span>Academic Registry</span>
              </div>
              <div className="abhyasa-badge">
                <Shield size={18} />
                <span>Secure Credentials</span>
              </div>
            </div>

            <h1 className="abhyasa-title">
              Abhyasa: Revolutionizing Digital Education
            </h1>
            
            <p className="abhyasa-subtitle">
              Seamlessly integrated with APAAR for lifelong academic identity
            </p>
            
            <p className="abhyasa-description">
              Our advanced education platform integrates with India's APAAR (Automated Permanent Academic Account Registry) 
              system, enabling seamless APAAR ID generation, automatic academic record linking, and secure credential storage 
              under the National Academic Depository for enhanced student mobility and reduced document fraud.
            </p>

            <div className="abhyasa-buttons">
              <button
                className="abhyasa-button-primary"
                onClick={() => scrollToSection('features')}
              >
                Explore Education Solutions
                <ArrowRight size={20} />
              </button>
              <button
                className="abhyasa-button-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get Started Today
                <BookOpen size={20} />
              </button>
            </div>

            <div className="abhyasa-stats">
              <div className="abhyasa-stat">
                <span className="abhyasa-stat-number">10M+</span>
                <span className="abhyasa-stat-label">Student Records</span>
              </div>
              <div className="abhyasa-stat">
                <span className="abhyasa-stat-number">500+</span>
                <span className="abhyasa-stat-label">Institutions</span>
              </div>
              <div className="abhyasa-stat">
                <span className="abhyasa-stat-number">100%</span>
                <span className="abhyasa-stat-label">APAAR Compliant</span>
              </div>
              <div className="abhyasa-stat">
                <span className="abhyasa-stat-number">24/7</span>
                <span className="abhyasa-stat-label">System Availability</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AbhyasaSection;