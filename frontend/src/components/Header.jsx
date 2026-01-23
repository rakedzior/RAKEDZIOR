import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // GitHub Pages subpath support (e.g. /RAKEDZIOR)
  const base = process.env.PUBLIC_URL || '';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const doScroll = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    };

    // If we are not on the homepage (under base), navigate there first
    if (location.pathname !== `${base}/`) {
      navigate(`${base}/`);
      setTimeout(doScroll, 100);
    } else {
      doScroll();
    }

    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (item) => {
    if (item.isRoute) {
      navigate(`${base}/contact`);
      setIsMobileMenuOpen(false);
    } else {
      scrollToSection(item.id);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About me', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Contact Me', id: 'contact', isRoute: true }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div
          className="logo"
          onClick={() => navigate(`${base}/`)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') navigate(`${base}/`);
          }}
          aria-label="Go to home"
        />

        <nav className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item)}
              className="nav-link"
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          type="button"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item)}
              className="mobile-nav-link"
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
