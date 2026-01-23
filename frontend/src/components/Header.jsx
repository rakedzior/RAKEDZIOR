import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const scroll = () => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      const offset = 80;
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    };

    // Jeśli nie jesteśmy na Home → przejdź na Home, potem scroll
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scroll, 150);
    } else {
      scroll();
    }

    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (item) => {
    if (item.isRoute) {
      navigate('/contact');
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
          onClick={() => navigate('/')}
          role="button"
          tabIndex={0}
          aria-label="Go to home"
        />

        <nav className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="nav-link"
              onClick={() => handleNavigation(item)}
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
              type="button"
              className="mobile-nav-link"
              onClick={() => handleNavigation(item)}
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
