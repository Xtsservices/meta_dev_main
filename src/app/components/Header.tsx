// components/Header.tsx

"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Our Brands', id: 'brands' },
    { label: 'Services', id: 'services' },
    { label: 'Features', id: 'features' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #e5e7eb;
          z-index: 50;
        }

        .header-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 4rem;
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .logo {
          width: 2.5rem;
          height: 2.5rem;
          background: linear-gradient(135deg, #2563eb, #9333ea);
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-text {
          color: white;
          font-weight: bold;
          font-size: 1.125rem;
        }

        .company-info h1 {
          font-size: 1.25rem;
          font-weight: bold;
          color: #111827;
          margin: 0;
        }

        .company-info p {
          font-size: 0.75rem;
          color: #6b7280;
          margin: 0;
        }

        .desktop-nav {
          display: none;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .desktop-nav {
            display: flex;
          }
        }

        .nav-item {
          color: #374151;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
          cursor: pointer;
        }

        .nav-item:hover {
          color: #2563eb;
        }

        .mobile-menu-button {
          display: block;
          background: none;
          border: none;
          color: #374151;
          cursor: pointer;
        }

        @media (min-width: 768px) {
          .mobile-menu-button {
            display: none;
          }
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border-bottom: 1px solid #e5e7eb;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .mobile-menu.hidden {
          display: none;
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          padding: 1rem;
        }

        .mobile-nav-item {
          padding: 0.75rem 0;
          color: #374151;
          text-decoration: none;
          font-weight: 500;
          border-bottom: 1px solid #f3f4f6;
          cursor: pointer;
        }

        .mobile-nav-item:last-child {
          border-bottom: none;
        }

        .mobile-nav-item:hover {
          color: #2563eb;
        }
      `}</style>

      <header className="header">
        <div className="header-container">
          <div className="header-content">
            <div className="logo-section">
              <div className="logo">
                <img src="/logo.jpeg" alt="Meta Dev Logo" className="logo-image" />
              </div>
              <div className="company-info">
                <h1>Meta Dev</h1>
                {/* <p>Healthcare & Education Tech</p> */}
              </div>
            </div>
            
            <nav className="desktop-nav">
              {navItems.map((item) => (
                <span
                  key={item.id}
                  className="nav-item"
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </span>
              ))}
            </nav>

            <button
              className="mobile-menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className={`mobile-menu ${!isMenuOpen ? 'hidden' : ''}`}>
            <nav className="mobile-nav">
              {navItems.map((item) => (
                <span
                  key={item.id}
                  className="mobile-nav-item"
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </span>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;