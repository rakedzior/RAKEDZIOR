import React from 'react';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import { personalInfo } from '../mock';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">RK</h3>
            <p className="footer-tagline">{personalInfo.title}</p>
            <p className="footer-location">
              <MapPin size={16} />
              {personalInfo.location}
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="links-list">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#experience" className="footer-link">Experience</a></li>
              <li><a href="#education" className="footer-link">Education</a></li>
              <li><a href="#portfolio" className="footer-link">Portfolio</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Contact</h4>
            <ul className="contact-list">
              <li>
                <a href={`mailto:${personalInfo.email}`} className="contact-item">
                  <Mail size={18} />
                  <span>{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${personalInfo.phone}`} className="contact-item">
                  <Phone size={18} />
                  <span>{personalInfo.phone}</span>
                </a>
              </li>
            </ul>

            <div className="social-links">
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
