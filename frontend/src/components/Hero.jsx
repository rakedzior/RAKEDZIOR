import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { personalInfo } from '../mock';
import { Button } from './ui/button';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const techStack = ['Python', 'SQL', 'Snowflake', 'dbt', 'Tableau', 'Power BI'];

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">Data Professional</div>
          <h1 className="hero-title">
            Hi, I'm <span className="name-highlight">{personalInfo.name}</span>
          </h1>
          <h2 className="hero-subtitle">{personalInfo.title}</h2>
          <p className="hero-description">{personalInfo.tagline}</p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">{personalInfo.yearsOfExperience}</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">{personalInfo.projectsCompleted}</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
          </div>

          <div className="tech-stack">
            <span className="tech-label">Tech Stack:</span>
            <div className="tech-chips">
              {techStack.map((tech, index) => (
                <span key={index} className="tech-chip">{tech}</span>
              ))}
            </div>
          </div>

          <div className="hero-actions">
            <Button 
              onClick={() => scrollToSection('portfolio')} 
              className="btn-primary"
            >
              View Portfolio
              <ArrowRight className="btn-icon" size={18} />
            </Button>
            <Button 
              onClick={() => window.location.href = `mailto:${personalInfo.email}`}
              variant="outline"
              className="btn-secondary"
            >
              <Mail size={18} />
              Contact
            </Button>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-wrapper">
            <img src={personalInfo.photo} alt={personalInfo.name} />
            <div className="image-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
