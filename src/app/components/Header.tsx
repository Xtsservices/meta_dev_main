"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface HeaderProps {
  scrollToSection?: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
    { label: "Home", id: "home" },
    {
      label: "Our Brands",
      id: "brands",
      subItems: [
        { label: "MetaHealth", id: "metahealth" },
        { label: "Abhyasa", id: "abhyasa" },
      ],
    },
    {
      label: "Services",
      id: "services",
      subItems: [        
        { label: "MetaDev", id: "metadev" },
        { label: "MetaHealth", id: "metahealth" },
        { label: "Abhyasa", id: "abhyasa" },
      ],
    },
    { label: "Team", id: "team" },
  ];

  const handleNavClick = (id: string) => {
    if (id === "metahealth" || id === "abhyasa" || id === "metadev") {
      // Navigate directly to the respective pages
      router.push(`/components/${id}`);
    } else if (id === "home") {
      if (pathname === "/") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        router.push("/");
      }
    } else if (id === "about") {
      router.push("/components/metadev");
    } else if (id === "team") {
      router.push("/components/Team");
    } else if (id === "brands") {
      if (pathname === "/") {
        const brandsSection = document.getElementById("brands-section");
        if (brandsSection) {
          brandsSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      } else {
        router.push("/#brands-section");
      }
    } else if (id === "contact") {
      if (pathname === "/") {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      } else {
        router.push("/#contact");
      }
    } else if (scrollToSection) {
      scrollToSection(id);
    }
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsBrandsOpen(false);
  };

  const handleLogoClick = () => {
    router.push("/");
  };

  const toggleServicesDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsServicesOpen(!isServicesOpen);
    setIsBrandsOpen(false); // Close brands dropdown when services is opened
  };

  const toggleBrandsDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBrandsOpen(!isBrandsOpen);
    setIsServicesOpen(false); // Close services dropdown when brands is opened
  };

  useEffect(() => {
    const handleClickOutside = () => {
      if (isServicesOpen || isBrandsOpen) {
        setIsServicesOpen(false);
        setIsBrandsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isServicesOpen, isBrandsOpen]);

  return (
    <>
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: #0a1624;
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #e5e7eb;
          z-index: 50;
          height: 6rem;
        }

        .header-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
          height: 100%;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
        }

        .company-info {
          display: flex;
          align-items: center;
          height: 100%;
          cursor: pointer;
        }

        .company-info img {
          height: 80px;
          width: auto;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .company-info:hover img {
          transform: scale(1.05);
        }

        .nav-section {
          display: flex;
          align-items: center;
          height: 100%;
        }

        .desktop-nav {
          display: none;
          gap: 2rem;
          align-items: center;
          position: relative;
        }

        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex;
          }
        }

        .nav-item {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          position: relative;
        }

        .nav-item:hover {
          color: #60a5fa;
        }

        .dropdown {
          position: relative;
        }

        .dropdown-content {
          position: absolute;
          top: 100%;
          left: 0;
          background: #0a1624;
          border: 1px solid #374151;
          border-radius: 0.5rem;
          min-width: 200px;
          padding: 0.5rem 0;
          z-index: 100;
        }

        .dropdown-content.services {
          display: ${isServicesOpen ? "block" : "none"};
        }

        .dropdown-content.brands {
          display: ${isBrandsOpen ? "block" : "none"};
        }

        .dropdown-item {
          color: white;
          padding: 0.75rem 1rem;
          text-decoration: none;
          display: block;
          transition: background-color 0.2s;
          cursor: pointer;
        }

        .dropdown-item:hover {
          background-color: #1f2937;
          color: #60a5fa;
        }

        .mobile-menu-button {
          display: block;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          height: 100%;
          display: flex;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .mobile-menu-button {
            display: none;
          }
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: #0a1624;
          border-bottom: 1px solid #374151;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
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
          color: white;
          text-decoration: none;
          font-weight: 500;
          border-bottom: 1px solid #374151;
          cursor: pointer;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .mobile-nav-item:last-child {
          border-bottom: none;
        }

        .mobile-nav-item:hover {
          color: #60a5fa;
        }

        .mobile-submenu {
          padding-left: 1rem;
          margin-top: 0.5rem;
        }

        .mobile-submenu.services {
          display: ${isServicesOpen ? "block" : "none"};
        }

        .mobile-submenu.brands {
          display: ${isBrandsOpen ? "block" : "none"};
        }

        .mobile-submenu-item {
          padding: 0.5rem 0;
          color: #d1d5db;
          cursor: pointer;
          display: block;
        }

        .mobile-submenu-item:hover {
          color: #60a5fa;
        }

        @media (max-width: 767px) {
          .header {
            height: 5rem;
          }

          .company-info img {
            height: 60px;
          }

          .header-container {
            padding: 0 0.5rem;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .header {
            height: 6rem;
          }

          .company-info img {
            height: 70px;
          }

          .mobile-menu-button {
            display: flex;
          }

          .desktop-nav {
            display: none;
          }
        }
      `}</style>

      <header className="header">
        <div className="header-container">
          <div className="header-content">
            <div className="company-info" onClick={handleLogoClick}>
              <img src="/logo.jpg" alt="Meta Dev Logo" />
            </div>

            <div className="nav-section">
              <nav className="desktop-nav">
                {navItems.map((item) =>
                  item.subItems ? (
                    <div key={item.id} className="dropdown">
                      <span
                        className="nav-item"
                        onClick={item.id === "services" ? toggleServicesDropdown : toggleBrandsDropdown}
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            (item.id === "services" && isServicesOpen) || 
                            (item.id === "brands" && isBrandsOpen) ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                      <div className={`dropdown-content ${item.id}`}>
                        {item.subItems.map((subItem) => (
                          <span
                            key={subItem.id}
                            className="dropdown-item"
                            onClick={() => handleNavClick(subItem.id)}
                          >
                            {subItem.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <span
                      key={item.id}
                      className="nav-item"
                      onClick={() => handleNavClick(item.id)}
                    >
                      {item.label}
                    </span>
                  )
                )}
              </nav>

              <button
                className="mobile-menu-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          <div className={`mobile-menu ${!isMenuOpen ? "hidden" : ""}`}>
            <nav className="mobile-nav">
              {navItems.map((item) => (
                <div key={item.id}>
                  <span
                    className="mobile-nav-item"
                    onClick={() => {
                      if (!item.subItems) {
                        handleNavClick(item.id);
                      } else if (item.id === "services") {
                        setIsServicesOpen(!isServicesOpen);
                        setIsBrandsOpen(false);
                      } else if (item.id === "brands") {
                        setIsBrandsOpen(!isBrandsOpen);
                        setIsServicesOpen(false);
                      }
                    }}
                  >
                    {item.label}
                    {item.subItems && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          (item.id === "services" && isServicesOpen) ||
                          (item.id === "brands" && isBrandsOpen) ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </span>
                  {item.subItems && (
                    <div className={`mobile-submenu ${item.id}`}>
                      {item.subItems.map((subItem) => (
                        <span
                          key={subItem.id}
                          className="mobile-submenu-item"
                          onClick={() => handleNavClick(subItem.id)}
                        >
                          {subItem.label}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;