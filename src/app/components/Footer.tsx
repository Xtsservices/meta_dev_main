// components/Footer.tsx

"use client";

import React from 'react';
import { Heart, GraduationCap, Mail, Phone, MapPin, Globe, Twitter, Linkedin, Github, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Brands', href: '#brands' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' }
  ];

const services = [
    { label: 'Healthcare App Development', href: '#healthcare' },
    { label: 'Disease Surveillance', href: '#education' },
    { label: 'Health Profiling', href: '#mobile' },
    { label: 'Geospatial Health Mapping', href: '#web' },
    { label: 'Chronic Disease Management', href: '#ai' },
    { label: 'Environmental Health', href: '#cloud' }
];

  const contact = [
    { icon: Mail, label: 'info@metadev.com', href: 'mailto:info@metadev.com' },
    { icon: Phone, label: '+91 9876543210', href: 'tel:+919876543210' },
    { icon: MapPin, label: 'Hyderabad, Telangana, India', href: '#location' },
    { icon: Globe, label: 'www.metadev.com', href: 'https://metadev.com' }
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/metadev' },
    { icon: Linkedin, href: 'https://linkedin.com/company/metadev' },
    { icon: Github, href: 'https://github.com/metadev' },
    { icon: Facebook, href: 'https://facebook.com/metadev' }
  ];

  return (
    <>
      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
          position: relative;
          z-index: 1;
        }

        .footer-main {
          padding: 4rem 0 2rem;
          border-bottom: 1px solid #374151;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        .footer-brand {
          max-width: 400px;
        }

        .brand-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .brand-logo {
          width: 3rem;
          height: 3rem;
          background: linear-gradient(135deg, #2563eb, #9333ea);
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand-logo-text {
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
        }

        .brand-info h3 {
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0 0 0.25rem 0;
        }

        .brand-info p {
          color: #9ca3af;
          font-size: 0.875rem;
          margin: 0;
        }

        .brand-description {
          line-height: 1.7;
          color: #d1d5db;
          margin-bottom: 2rem;
        }

        .brand-highlights {
          display: flex;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .brand-highlight {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #d1d5db;
          font-size: 0.875rem;
        }

        .highlight-icon {
          color: #10b981;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          width: 2.5rem;
          height: 2.5rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d1d5db;
          transition: all 0.2s;
          text-decoration: none;
        }

        .social-link:hover {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          transform: translateY(-2px);
        }

        .footer-section h4 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: white;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-link {
          margin-bottom: 0.75rem;
        }

        .footer-link a {
          color: #d1d5db;
          text-decoration: none;
          transition: color 0.2s;
          cursor: pointer;
        }

        .footer-link a:hover {
          color: #3b82f6;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          color: #d1d5db;
        }

        .contact-icon {
          width: 2rem;
          height: 2rem;
          background: rgba(59, 130, 246, 0.2);
          border-radius: 0.375rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b82f6;
          flex-shrink: 0;
        }

        .contact-item a {
          color: #d1d5db;
          text-decoration: none;
          transition: color 0.2s;
        }

        .contact-item a:hover {
          color: #3b82f6;
        }

        .footer-bottom {
          padding: 2rem 0;
          text-align: center;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        @media (max-width: 640px) {
          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }
        }

        .copyright {
          color: #9ca3af;
          font-size: 0.875rem;
        }

        .footer-bottom-links {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }

        @media (max-width: 640px) {
          .footer-bottom-links {
            justify-content: center;
          }
        }

        .footer-bottom-link {
          color: #9ca3af;
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.2s;
          cursor: pointer;
        }

        .footer-bottom-link:hover {
          color: #3b82f6;
        }

        .newsletter-section {
          background: rgba(59, 130, 246, 0.1);
          border-radius: 0.75rem;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .newsletter-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: white;
        }

        .newsletter-description {
          color: #d1d5db;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .newsletter-form {
          display: flex;
          gap: 0.5rem;
        }

        .newsletter-input {
          flex: 1;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 0.375rem;
          padding: 0.5rem 0.75rem;
          color: white;
          font-size: 0.875rem;
        }

        .newsletter-input::placeholder {
          color: #9ca3af;
        }

        .newsletter-input:focus {
          outline: none;
          border-color: #3b82f6;
        }

        .newsletter-button {
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 0.375rem;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s;
        }

        .newsletter-button:hover {
          background: #2563eb;
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-grid">
              {/* Brand Section */}
              <div className="footer-brand">
                <div className="brand-header">
                  <div className="brand-logo">
                    <span className="brand-logo-text">M</span>
                  </div>
                  <div className="brand-info">
                    <h3>Meta Dev</h3>
                    <p>Healthcare & Education Tech</p>
                  </div>
                </div>
                
                <p className="brand-description">
                  Transforming healthcare and education through innovative technology solutions. 
                  We build platforms that make essential services more accessible, efficient, and user-friendly.
                </p>

                <div className="brand-highlights">
                  <div className="brand-highlight">
                    <Heart className="highlight-icon" size={16} />
                    <span>MetaHealth</span>
                  </div>
                  <div className="brand-highlight">
                    <GraduationCap className="highlight-icon" size={16} />
                    <span>Abhyasa</span>
                  </div>
                </div>

                <div className="newsletter-section">
                  <h4 className="newsletter-title">Stay Updated</h4>
                  <p className="newsletter-description">
                    Get the latest updates on our products and services
                  </p>
                  <div className="newsletter-form">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="newsletter-input"
                    />
                    <button className="newsletter-button">Subscribe</button>
                  </div>
                </div>

                <div className="social-links">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a 
                        key={index}
                        href={social.href}
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconComponent size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Links */}
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul className="footer-links">
                  {quickLinks.map((link, index) => (
                    <li key={index} className="footer-link">
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="footer-section">
                <h4>Services</h4>
                <ul className="footer-links">
                  {services.map((service, index) => (
                    <li key={index} className="footer-link">
                      <a href={service.href}>{service.label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="footer-section">
                <h4>Contact Us</h4>
                <div>
                  {contact.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="contact-item">
                        <div className="contact-icon">
                          <IconComponent size={16} />
                        </div>
                        <a href={item.href}>{item.label}</a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="copyright">
                © {currentYear} Meta Dev. All rights reserved.
              </div>
              <div className="footer-bottom-links">
                <a href="#privacy" className="footer-bottom-link">Privacy Policy</a>
                <a href="#terms" className="footer-bottom-link">Terms of Service</a>
                <a href="#cookies" className="footer-bottom-link">Cookie Policy</a>
                <a href="#sitemap" className="footer-bottom-link">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;