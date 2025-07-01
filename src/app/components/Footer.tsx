// components/Footer.tsx

"use client";

import React from 'react';
import { Heart, GraduationCap, Mail, Phone, Globe } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { label: "Home", id: "home" },
    { 
      label: "Our Brands", 
      id: "services",
      subItems: [
        { label: "MetaHealth", id: "metahealth" },
        { label: "Abhyasa", id: "abhyasa" }
      ]
    },
    // { label: "Our Brands", id: "brands" },
    { label: "Team", id: "team" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  const contact = [
    { icon: Mail, label: 'info@metadev.in', href: 'mailto:info@metadev.com' },
    { icon: Phone, label: '+91 9559559143', href: 'tel:+919559559143' },
    { icon: Globe, label: 'metadev.in', href: 'https://metadev.in' }
  ];

  const handleNavClick = (id: string) => {
    if (id === "metahealth" || id === "abhyasa") {
      if (pathname === `/${id}`) {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(`/components/${id}#services`);
      }
    } else if (id === "home") {
      if (pathname === "/") {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      } else {
        router.push("/");
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }, 100);
      }
    } else if (id === "brands") {
      if (pathname === "/") {
        const brandsSection = document.getElementById("brands-section");
        if (brandsSection) {
          brandsSection.scrollIntoView({ 
            behavior: "smooth",
            block: "start"
          });
        }
      } else {
        router.push("/#brands-section");
        setTimeout(() => {
          const brandsSection = document.getElementById("brands-section");
          if (brandsSection) {
            brandsSection.scrollIntoView({ 
              behavior: "smooth",
              block: "start"
            });
          }
        }, 100);
      }
    } else {
      if (pathname === "/") {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ 
            behavior: "smooth",
            block: "start"
          });
        }
      } else {
        router.push(`/#${id}`);
        setTimeout(() => {
          const section = document.getElementById(id);
          if (section) {
            section.scrollIntoView({ 
              behavior: "smooth",
              block: "start"
            });
          }
        }, 100);
      }
    }
  };

  return (
    <>
      <style jsx>{`
        .footer {
          background: #0a1624;
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
            radial-gradient(circle at 20% 20%, rgba(93, 224, 230, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 74, 173, 0.2) 0%, transparent 50%);
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
          border-bottom: 1px solid rgba(93, 224, 230, 0.2);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
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
          background: linear-gradient(135deg, #5de0e6, #004aad);
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
          background: linear-gradient(135deg, #5de0e6, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .brand-info p {
          color: #a0d2eb;
          font-size: 0.875rem;
          margin: 0;
        }

        .brand-description {
          line-height: 1.7;
          color: #c3e4ff;
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
          color: #c3e4ff;
          font-size: 0.875rem;
        }

        .highlight-icon {
          color: #5de0e6;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          width: 2.5rem;
          height: 2.5rem;
          background: rgba(93, 224, 230, 0.1);
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #c3e4ff;
          transition: all 0.2s;
          text-decoration: none;
        }

        .social-link:hover {
          background: rgba(93, 224, 230, 0.2);
          color: white;
          transform: translateY(-2px);
        }

        .footer-section h4 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: #5de0e6;
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
          color: #c3e4ff;
          text-decoration: none;
          transition: color 0.2s;
          cursor: pointer;
        }

        .footer-link a:hover {
          color: #5de0e6;
        }

        .footer-submenu {
          padding-left: 1rem;
          margin-top: 0.5rem;
        }

        .footer-submenu-item {
          margin-bottom: 0.5rem;
        }

        .footer-submenu-item a {
          color: #a0d2eb;
          font-size: 0.875rem;
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-submenu-item a:hover {
          color: #5de0e6;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          color: #c3e4ff;
        }

        .contact-icon {
          width: 2rem;
          height: 2rem;
          background: rgba(93, 224, 230, 0.2);
          border-radius: 0.375rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #5de0e6;
          flex-shrink: 0;
        }

        .contact-item a {
          color: #c3e4ff;
          text-decoration: none;
          transition: color 0.2s;
        }

        .contact-item a:hover {
          color: #5de0e6;
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
          color: #a0d2eb;
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
          color: #a0d2eb;
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.2s;
          cursor: pointer;
        }

        .footer-bottom-link:hover {
          color: #5de0e6;
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-grid">
              {/* Brand Section */}
              <div className="footer-brand">
                <div className="brand-header">
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

              </div>

              {/* Navigation Links */}
              <div className="footer-section">
                <h4>Navigation</h4>
                <ul className="footer-links">
                  {navItems.map((item) => (
                    <li key={item.id} className="footer-link">
                      <a onClick={() => handleNavClick(item.id)}>{item.label}</a>
                      {item.subItems && (
                        <div className="footer-submenu">
                          {item.subItems.map((subItem) => (
                            <div key={subItem.id} className="footer-submenu-item">
                              <a onClick={() => handleNavClick(subItem.id)}>{subItem.label}</a>
                            </div>
                          ))}
                        </div>
                      )}
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
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;