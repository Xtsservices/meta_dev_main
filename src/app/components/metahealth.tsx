"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  Activity,
  Shield,
  Database,
  Globe,
  ArrowRight,
  Target,
} from "lucide-react";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
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
        rootMargin: "0px 0px -50px 0px",
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

  const navigateToMetaHealth = () => {
    console.log("Navigation clicked");
    try {
      router.push("components/metahealth");
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap");

        * {
          font-family: "Open Sans", sans-serif;
        }

        .hero-section {
          position: relative;
          min-height: 100vh;
          background: white;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 2rem 0;
          margin
        }

        .hero-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
              circle at 20% 80%,
              rgba(166, 166, 166, 0.1) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 80% 20%,
              rgba(3, 152, 158, 0.1) 0%,
              transparent 50%
            ),
            linear-gradient(
              45deg,
              rgba(166, 166, 166, 0.05) 0%,
              rgba(3, 152, 158, 0.05) 100%
            );
          animation: backgroundMove 20s ease-in-out infinite;
        }

        @keyframes backgroundMove {
          0%,
          100% {
            transform: translateX(0) translateY(0) rotate(0deg);
          }
          25% {
            transform: translateX(-20px) translateY(-10px) rotate(1deg);
          }
          50% {
            transform: translateX(20px) translateY(10px) rotate(-1deg);
          }
          75% {
            transform: translateX(-10px) translateY(20px) rotate(0.5deg);
          }
        }

        .hero-container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem;
          width: 100%;
        }

        /* Scroll-triggered animations */
        .scroll-fade-up {
          opacity: ${isInView ? "1" : "0"};
          transform: ${isInView ? "translateY(0)" : "translateY(50px)"};
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .scroll-fade-up-delay-1 {
          opacity: ${isInView ? "1" : "0"};
          transform: ${isInView ? "translateY(0)" : "translateY(50px)"};
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
        }

        .scroll-fade-up-delay-2 {
          opacity: ${isInView ? "1" : "0"};
          transform: ${isInView ? "translateY(0)" : "translateY(50px)"};
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;
        }

        .scroll-fade-up-delay-3 {
          opacity: ${isInView ? "1" : "0"};
          transform: ${isInView ? "translateY(0)" : "translateY(50px)"};
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s;
        }

        .scroll-fade-up-delay-4 {
          opacity: ${isInView ? "1" : "0"};
          transform: ${isInView ? "translateY(0)" : "translateY(50px)"};
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s;
        }

        .scroll-scale-up {
          opacity: ${isInView ? "1" : "0"};
          transform: ${
            isInView ? "scale(1) translateY(0)" : "scale(0.8) translateY(30px)"
          };
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .logo-section {
          text-align: center;
          margin-bottom: 2rem;
          opacity: ${isVisible ? "1" : "0"};
          transform: ${isVisible ? "translateY(0)" : "translateY(-20px)"};
          transition: all 0.8s ease 0.1s;
          background
        }

       .logo {
  width: 350px;
  height: 250px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  animation: logoFloat 3s ease-in-out infinite;
  margin-bottom: -5rem;
}

        .logo-image {
          max-width: 100%;
          height: auto;
          object-fit: contain;
        }

        @keyframes logoFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .company-name {
          font-size: 1.4rem;
          font-weight: 700;
          color: #03989e;
          margin: 0;
        }

        .hero-content {
          text-align: center;
          color: #333;
        }

        .hero-badges {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .hero-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(3, 152, 158, 0.2);
          border-radius: 25px;
          padding: 0.6rem 1.2rem;
          font-size: 0.8rem;
          font-weight: 500;
          color: #03989e;
          transition: all 0.3s ease;
        }

        .hero-badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(3, 152, 158, 0.2);
          background: rgba(3, 152, 158, 0.1);
        }

        .hero-title {
          font-size: 2.8rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #03989e 0%, #a6a6a6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.1rem;
          font-weight: 400;
          color: #a6a6a6;
          margin-bottom: 2.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .hero-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          border: none;
        }

        .primary-button {
          background: linear-gradient(135deg, #03989e 0%, #05a8ae 100%);
          color: white;
          border: none;
          box-shadow: 0 4px 15px rgba(3, 152, 158, 0.3);
        }

        .secondary-button {
          background: transparent;
          color: #03989e;
          border: 1px solid #03989e;
        }

        .hero-button:hover {
          transform: translateY(-2px);
        }

        .primary-button:hover {
          box-shadow: 0 6px 20px rgba(3, 152, 158, 0.4);
        }

        .secondary-button:hover {
          background: rgba(3, 152, 158, 0.1);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
          padding: 0 1rem;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(3, 152, 158, 0.15);
          border-radius: 16px;
          padding: 1.5rem;
          transition: all 0.3s ease;
          cursor: pointer;
          text-align: center;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 10px 25px rgba(3, 152, 158, 0.15);
          border-color: #03989e;
        }

        .feature-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #03989e 0%, #a6a6a6 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          margin-left: auto;
          margin-right: auto;
          transition: all 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1);
        }

        .feature-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.8rem;
          color: #333;
        }

        .feature-description {
          color: #a6a6a6;
          margin-bottom: 1rem;
          line-height: 1.5;
          font-size: 0.9rem;
        }

        .know-more {
          color: #03989e;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          transition: all 0.3s ease;
        }

        .feature-card:hover .know-more {
          transform: translateX(3px);
        }

        /* Medium screens (tablets) */
        @media (max-width: 992px) {
          .hero-title {
            font-size: 2.4rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .logo {
            width: 280px;
            height: 200px;
            margin-bottom: -3rem;
            
          }
        }

        /* Small screens (large phones) */
        @media (max-width: 768px) {
          .hero-section {
            min-height: auto;
            padding: 4rem 0;
          }

          .hero-title {
            font-size: 2rem;
            margin-bottom: 1rem;
          }

          .hero-subtitle {
            font-size: 0.95rem;
            margin-bottom: 1.5rem;
            padding: 0 1rem;
          }

          .hero-buttons {
            margin-bottom: 2rem;
          }

          .logo {
            width: 200px;
            height: 150px;
            margin-bottom: -2rem;
          }

          .features-grid {
            padding: 0;
          }

          .feature-card {
            padding: 1.2rem;
          }
        }

        /* Extra small screens (phones) */
        @media (max-width: 576px) {
          .hero-section {
            padding: 3rem 0;
          }

          .hero-container {
            padding: 0.5rem;
          }

          .hero-title {
            font-size: 1.8rem;
            padding: 0 0.5rem;
          }

          .hero-subtitle {
            font-size: 0.9rem;
            padding: 0 0.5rem;
          }

          .hero-badges {
            gap: 0.5rem;
            margin-bottom: 1.5rem;
          }

          .hero-badge {
            padding: 0.5rem 1rem;
            font-size: 0.7rem;
          }

          .hero-buttons {
            gap: 0.8rem;
          }

          .hero-button {
            padding: 0.7rem 1.2rem;
            font-size: 0.85rem;
          }

          .logo {
            width: 150px;
            height: 100px;
            margin-bottom: -1rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .feature-card {
            padding: 1rem;
          }

          .feature-icon {
            width: 40px;
            height: 40px;
          }

          .feature-title {
            font-size: 1rem;
          }

          .feature-description {
            font-size: 0.85rem;
          }
        }

        /* Very small screens */
        @media (max-width: 400px) {
          .hero-title {
            font-size: 1.6rem;
          }

          .hero-subtitle {
            font-size: 0.85rem;
          }

          .hero-badge {
            padding: 0.4rem 0.8rem;
            font-size: 0.65rem;
          }

          .hero-button {
            padding: 0.6rem 1rem;
            font-size: 0.8rem;
          }

          .logo {
            width: 120px;
            height: 80px;
          }
        }
      `}</style>

      <section
        className="hero-section"
        id="metahealth-section"
        ref={sectionRef}
      >
        <div className="hero-container">
          <div className="logo-section scroll-scale-up">
            <div className="logo">
              <img
                src="/metahealth-logo.png"
                alt="MetaHealth Logo"
                className="logo-image"
              />
            </div>
          </div>

          <div className="hero-content">
            <div className="hero-badges scroll-fade-up">
              <div className="hero-badge">
                <Activity size={16} />
                <span>Digital Health</span>
              </div>
              <div className="hero-badge">
                <Shield size={16} />
                <span>Secure Platform</span>
              </div>
              <div className="hero-badge">
                <Database size={16} />
                <span>Data Integration</span>
              </div>
            </div>

            <h1 className="hero-title scroll-fade-up-delay-1">
              Transform Healthcare with Technology
            </h1>

            <p className="hero-subtitle scroll-fade-up-delay-2">
              Modern patient care and medical data management through innovative
              digital solutions
            </p>

            <div className="hero-buttons scroll-fade-up-delay-3">
              <button
                className="hero-button primary-button"
                onClick={navigateToMetaHealth}
              >
                Learn More <ArrowRight size={16} />
              </button>
             
            </div>

            <div className="features-grid scroll-fade-up-delay-4">
              <div className="feature-card" onClick={navigateToMetaHealth}>
                <div className="feature-icon">
                  <Globe size={20} color="white" />
                </div>
                <h3 className="feature-title">About MetaHealth</h3>
                <p className="feature-description">
                  Discover our mission to revolutionize healthcare through
                  technology
                </p>
                <div className="know-more">
                  Know More <ArrowRight size={14} />
                </div>
              </div>

              <div className="feature-card" onClick={navigateToMetaHealth}>
                <div className="feature-icon">
                  <Activity size={20} color="white" />
                </div>
                <h3 className="feature-title">Our Services</h3>
                <p className="feature-description">
                  Comprehensive digital health solutions for modern healthcare
                </p>
                <div className="know-more">
                  Know More <ArrowRight size={14} />
                </div>
              </div>

              <div className="feature-card" onClick={navigateToMetaHealth}>
                <div className="feature-icon">
                  <Database size={20} color="white" />
                </div>
                <h3 className="feature-title">Technology</h3>
                <p className="feature-description">
                  Advanced platform built on secure, interoperable systems
                </p>
                <div className="know-more">
                  Know More <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
