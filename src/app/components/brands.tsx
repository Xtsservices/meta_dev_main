"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Heart, GraduationCap, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const BrandsShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
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

  // Marquee content about MetaDev
  const marqueeItems = [
    "MetaDev - Digital Healthcare & Education Solutions",
    "Transforming Lives Through Technology",
    "MetaHealth: Complete Healthcare Management",
    "Abhyasa: Modern Learning Platform",
    "Trusted by 100+ Institutions Nationwide"
  ];

  return (
    <>
      <style jsx>{`
        .showcase {
          background: linear-gradient(135deg, rgba(248, 250, 252, 0.6) 0%, rgba(241, 245, 249, 0.4) 100%);
          padding: 2.5rem 0;
          position: relative;
          overflow: hidden;
          margin-top: -2rem;
          margin-bottom: -4rem;
          backdrop-filter: blur(10px);
        }

        .marquee-container {
          background: linear-gradient(90deg, rgba(0, 74, 173, 0.8), rgba(93, 224, 230, 0.8));
          color: white;
          padding: 0.75rem 0;
          margin-bottom: 2rem;
          overflow: hidden;
          backdrop-filter: blur(5px);
        }

        .marquee {
          display: flex;
          white-space: nowrap;
          animation: scroll 25s linear infinite;
        }

        .marquee-item {
          display: flex;
          align-items: center;
          margin-right: 3rem;
          font-weight: 500;
          font-size: 1rem;
        }

        .marquee-item:before {
          content: "✦";
          margin-right: 1rem;
          color: rgba(255,255,255,0.8);
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .showcase-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 600;
          background: linear-gradient(90deg, #004aad, #5de0e6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.75rem;
        }

        .section-subtitle {
          color: #64748b;
          font-size: 1rem;
          max-width: 600px;
          margin: 0 auto;
          opacity: 0.9;
        }

        .brands-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .brand-card {
          background: rgba(255, 255, 255, 0.7);
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          transition: all 0.6s ease;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          opacity: 0;
          transform: translateX(-100px);
          display: flex;
          flex-direction: column;
          min-height: 400px;
        }

        .brand-card.animate-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .brand-card.animate-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .brand-card.animate-right {
          animation-delay: 0.2s;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .brand-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
          background: rgba(255, 255, 255, 0.85);
        }

        .brand-logo-section {
          flex: 0 0 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          position: relative;
        }

        .metahealth-card .brand-logo-section {
          background: linear-gradient(135deg, #a6a6a6 0%, #03989e 100%);
        }

        .abhyasa-card .brand-logo-section {
          background: linear-gradient(135deg, #c0c0c0 0%, #01b2c7 100%);
        }

        .brand-logo-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .brand-logo-container {
          text-align: center;
          z-index: 1;
          position: relative;
        }

        .brand-logo {
          width: 250px;
          height: 150px;
          background: white;
          border-radius: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
          overflow: hidden;
          margin: 0 auto;
          border: 2px solid rgba(255,255,255,0.3);
          transition: all 0.3s ease;
        }

        .brand-card:hover .brand-logo {
          transform: scale(1.1);
          background: rgba(255,255,255,0.3);
        }

        .brand-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .brand-logo .fallback-icon {
          color: white;
          width: 60px;
          height: 60px;
        }

        .brand-content-section {
          flex: 1;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .brand-description {
          color: #64748b;
          margin-bottom: 1.5rem;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: #475569;
        }

        .feature-icon {
          color: #5de0e6;
          width: 16px;
          height: 16px;
          flex-shrink: 0;
        }

        .metahealth-card .feature-icon {
          color: #03989e;
        }

        .abhyasa-card .feature-icon {
          color: #01b2c7;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .stat-item {
          padding: 0.75rem;
          background: rgba(248, 250, 252, 0.7);
          border-radius: 0.5rem;
          border: 1px solid rgba(226, 232, 240, 0.5);
        }

        .stat-number {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .metahealth-card .stat-number {
          color: #03989e;
        }

        .abhyasa-card .stat-number {
          color: #01b2c7;
        }

        .stat-label {
          font-size: 0.75rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .brand-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.95rem;
          padding: 0.5rem 0;
        }

        .metahealth-card .brand-link {
          color: #03989e;
        }

        .abhyasa-card .brand-link {
          color: #01b2c7;
        }

        .brand-link:hover {
          transform: translateX(4px);
        }

        .metahealth-card .brand-link:hover {
          color: #027a7f;
        }

        .abhyasa-card .brand-link:hover {
          color: #0195a8;
        }

        @media (max-width: 768px) {
          .showcase {
            padding: 2rem 0;
          }
          
          .section-title {
            font-size: 1.75rem;
          }
          
          .brands-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .brand-card {
            min-height: auto;
            transform: translateY(50px);
          }

          .brand-logo-section {
            flex: 0 0 140px;
          }

          .brand-logo-section {
            padding: 1.5rem;
          }

          .brand-logo {
            width: 100px;
            height: 100px;
          }

          .brand-content-section {
            padding: 1.5rem;
          }

          .brand-card.animate-left,
          .brand-card.animate-right {
            animation: slideInUp 0.8s ease-out forwards;
          }

          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      `}</style>

      <div className="showcase" ref={sectionRef} id="brands-section">
        {/* Animated Marquee */}
        <div className="marquee-container">
          <div className="marquee">
            {marqueeItems.concat(marqueeItems).map((item, index) => (
              <div key={index} className="marquee-item">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="showcase-container">
          {/* Section Header */}
          <div className="section-header">
            <h2 className="section-title">MetaDev</h2>
            <p className="section-subtitle">
              Empowering healthcare and education through innovative digital platforms
            </p>
          </div>

          {/* Brands Grid */}
          <div className="brands-grid">
            {/* MetaHealth Card */}
            <div className={`brand-card metahealth-card ${isVisible ? 'animate-left' : ''}`}>
              {/* Logo Section */}
              <div className="brand-logo-section">
                <div className="brand-logo-container">
                  <div className="brand-logo">
                    <Image 
                      src="/metahealth-logo.png" 
                      alt="MetaHealth Logo" 
                      width={280} 
                      height={280}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextElement) {
                          nextElement.style.display = 'flex';
                        }
                      }}
                    />
                    <Heart className="fallback-icon" style={{ display: 'none' }} />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="brand-content-section">
                <div>
                  <p className="brand-description">
                    Comprehensive healthcare management system designed to streamline medical operations and enhance patient care delivery through cutting-edge technology.
                  </p>
                  
                  <div className="features-grid">
                    <div className="feature-item">
                      <ArrowRight className="feature-icon" size={16} />
                      <span>Patient Management System</span>
                    </div>
                    <div className="feature-item">
                      <ArrowRight className="feature-icon" size={16} />
                      <span>Electronic Health Records</span>
                    </div>
                    <div className="feature-item">
                      <ArrowRight className="feature-icon" size={16} />
                      <span>Telemedicine Integration</span>
                    </div>
                    <div className="feature-item">
                      <ArrowRight className="feature-icon" size={16} />
                      <span>Healthcare Analytics</span>
                    </div>
                  </div>

                  <div className="stats-grid">
                    <div className="stat-item">
                      <div className="stat-number">50K+</div>
                      <div className="stat-label">Patients</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">99.9%</div>
                      <div className="stat-label">Uptime</div>
                    </div>
                  </div>
                </div>

                <a href="#" className="brand-link">
                  Learn More <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Abhyasa Card */}
            <div className={`brand-card abhyasa-card ${isVisible ? 'animate-right' : ''}`}>
              {/* Logo Section */}
              <div className="brand-logo-section">
                <div className="brand-logo-container">
                  <div className="brand-logo">
                    <Image 
                      src="/abhyasa-logo.png" 
                      alt="Abhyasa Logo" 
                      width={130} 
                      height={130}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextElement) {
                          nextElement.style.display = 'flex';
                        }
                      }}
                    />
                    <GraduationCap className="fallback-icon" style={{ display: 'none' }} />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="brand-content-section">
                <div>
                  <p className="brand-description">
                    Modern learning management platform that transforms educational experiences through interactive and personalized learning methodologies.
                  </p>
                  
                  <div className="features-grid">
                    <div className="feature-item">
                      <ArrowRight className="feature-icon" size={16} />
                      <span>Interactive Learning Modules</span>
                    </div>
                    <div className="feature-item">
                      <ArrowRight className="feature-icon" size={16} />
                      <span>Progress Tracking</span>
                    </div>
                    <div className="feature-item">
                      <ArrowRight className="feature-icon" size={16} />
                      <span>Virtual Classrooms</span>
                    </div>
                    <div className="feature-item">
                      <ArrowRight className="feature-icon" size={16} />
                      <span>Assessment Tools</span>
                    </div>
                  </div>

                  <div className="stats-grid">
                    <div className="stat-item">
                      <div className="stat-number">25K+</div>
                      <div className="stat-label">Students</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">500+</div>
                      <div className="stat-label">Courses</div>
                    </div>
                  </div>
                </div>

                <a href="#" className="brand-link">
                  Learn More <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandsShowcase;