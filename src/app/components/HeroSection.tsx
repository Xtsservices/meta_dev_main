// components/HeroSection.tsx
"use client";
import React from 'react';
import { Heart, ArrowRight, Zap, Target, Activity, Shield, Users, Plus, TrendingUp, Globe } from 'lucide-react';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <>
      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #0369a1 100%);
          overflow: hidden;
          display: flex;
          align-items: center;
          margin-top:4rem
        }

        .hero-bg-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
            linear-gradient(45deg, transparent 49%, rgba(255, 255, 255, 0.02) 50%, transparent 51%);
          background-size: 100px 100px, 150px 150px, 20px 20px;
          animation: patternMove 20s linear infinite;
        }

        @keyframes patternMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(20px, 20px); }
        }

        .medical-grid {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridPulse 4s ease-in-out infinite alternate;
        }

        @keyframes gridPulse {
          0% { opacity: 0.3; }
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
          animation: float 6s ease-in-out infinite;
        }

        .floating-icon:nth-child(1) {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .floating-icon:nth-child(2) {
          top: 60%;
          right: 15%;
          animation-delay: 2s;
        }

        .floating-icon:nth-child(3) {
          bottom: 30%;
          left: 20%;
          animation-delay: 4s;
        }

        .floating-icon:nth-child(4) {
          top: 15%;
          right: 30%;
          animation-delay: 1s;
        }

        .floating-icon:nth-child(5) {
          bottom: 20%;
          right: 10%;
          animation-delay: 3s;
        }

        .floating-icon:nth-child(6) {
          top: 45%;
          left: 5%;
          animation-delay: 5s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(10deg); }
          66% { transform: translateY(10px) rotate(-5deg); }
        }

        .hero-container {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
          padding: 2rem;
          width: 100%;
        }

        .hero-content {
          text-align: center;
          color: white;
          max-width: 900px;
          margin: 0 auto;
        }

        .hero-badges {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
          animation: slideUp 1s ease-out 0.2s both;
        }

        .hero-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          padding: 0.75rem 1.25rem;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .hero-badge:hover {
          background: rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.4);
          transform: translateY(-2px);
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: slideUp 1s ease-out 0.4s both;
        }

        .hero-subtitle {
          font-size: clamp(1.25rem, 2.5vw, 1.5rem);
          font-weight: 600;
          color: #e2e8f0;
          margin-bottom: 1rem;
          animation: slideUp 1s ease-out 0.6s both;
        }

        .hero-description {
          font-size: clamp(1rem, 1.5vw, 1.125rem);
          color: #cbd5e1;
          line-height: 1.6;
          margin-bottom: 3rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          animation: slideUp 1s ease-out 0.8s both;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 4rem;
          animation: slideUp 1s ease-out 1s both;
        }

        .hero-button-primary {
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

        .hero-button-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .hero-button-primary:hover::before {
          left: 100%;
        }

        .hero-button-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 25px -5px rgba(59, 130, 246, 0.4);
        }

        .hero-button-secondary {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: transparent;
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

        .hero-button-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-3px);
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          animation: slideUp 1s ease-out 1.2s both;
        }

        .hero-stat {
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

        .hero-stat::before {
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

        .hero-stat:hover::before {
          transform: scaleX(1);
        }

        .hero-stat:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-5px);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .hero-stat-number {
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

        .hero-stat-label {
          font-size: 0.875rem;
          color: #cbd5e1;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .medical-cross {
          position: absolute;
          top: 10%;
          right: 10%;
          width: 60px;
          height: 60px;
          opacity: 0.1;
          animation: spin 20s linear infinite;
        }

        .medical-cross::before,
        .medical-cross::after {
          content: '';
          position: absolute;
          background: #3b82f6;
        }

        .medical-cross::before {
          width: 100%;
          height: 20%;
          top: 40%;
        }

        .medical-cross::after {
          height: 100%;
          width: 20%;
          left: 40%;
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
          width: 300px;
          height: 300px;
          border: 2px solid rgba(59, 130, 246, 0.3);
          border-radius: 50%;
          animation: pulse 3s ease-in-out infinite;
        }

        .pulse-ring:nth-child(2) {
          width: 400px;
          height: 400px;
          animation-delay: 1s;
        }

        .pulse-ring:nth-child(3) {
          width: 500px;
          height: 500px;
          animation-delay: 2s;
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
          .hero-container {
            padding: 1rem;
          }
          
          .hero-badges {
            flex-direction: column;
            align-items: center;
          }
          
          .hero-buttons {
            flex-direction: column;
          }
          
          .hero-button-primary,
          .hero-button-secondary {
            width: 100%;
            justify-content: center;
          }
          
          .hero-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .hero-stats {
            grid-template-columns: 1fr;
          }
          
          .hero-stat-number {
            font-size: 2rem;
          }
        }
      `}</style>

      <section id="home" className="hero-section">
        <div className="hero-bg-pattern"></div>
        <div className="medical-grid"></div>
        
        <div className="pulse-ring"></div>
        <div className="pulse-ring"></div>
        <div className="pulse-ring"></div>
        
        <div className="floating-icons">
          <Heart className="floating-icon" size={48} />
          <Activity className="floating-icon" size={52} />
          <Shield className="floating-icon" size={44} />
          <Plus className="floating-icon" size={40} />
          <TrendingUp className="floating-icon" size={46} />
          <Globe className="floating-icon" size={48} />
        </div>

        <div className="medical-cross"></div>

        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badges">
              <div className="hero-badge">
                <Heart size={18} />
                <span>Public Health Intelligence</span>
              </div>
              <div className="hero-badge">
                <Users size={18} />
                <span>Global Disease Surveillance</span>
              </div>
              <div className="hero-badge">
                <Zap size={18} />
                <span>Evidence-Based Interventions</span>
              </div>
            </div>

            <h1 className="hero-title">
              Transforming Global Health Through Data Integration
            </h1>
            
            <p className="hero-subtitle">
              Connecting public health agencies, researchers, and policymakers worldwide
            </p>
            
            <p className="hero-description">
              Our advanced platform aggregates and analyzes health data from CDC, NHS, WHO and other leading agencies
              to provide actionable insights for improving population health outcomes and preventing disease outbreaks.
            </p>

            <div className="hero-buttons">
              <button
                className="hero-button-primary"
                onClick={() => scrollToSection('brands')}
              >
                Explore Health Solutions
                <ArrowRight size={20} />
              </button>
              <button
                className="hero-button-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Contact Health Team
                <Target size={20} />
              </button>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-number">50+</span>
                <span className="hero-stat-label">Countries Covered</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">100M+</span>
                <span className="hero-stat-label">Health Records</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">30+</span>
                <span className="hero-stat-label">Disease Indicators</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">24/7</span>
                <span className="hero-stat-label">Outbreak Monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;