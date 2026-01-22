import React from 'react';
import { BarChart3, Database, Code2, Award, Users, Target } from 'lucide-react';
import { aboutMe, skills } from '../mock';
import './About.css';

const About = () => {
  const skillCategories = [
    { 
      ...skills.analytics,
      icon: BarChart3
    },
    { 
      ...skills.biVisualization,
      icon: Database
    },
    { 
      ...skills.dataModeling,
      icon: Code2
    }
  ];

  const highlights = [
    { icon: Award, label: "5+ Years", text: "Analytics Experience" },
    { icon: Users, label: "Cross-Regional", text: "Stakeholder Collaboration" },
    { icon: Target, label: "Decision-Ready", text: "Analytics & Dashboards" }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-content">
          <div className="about-highlights">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="highlight-card">
                  <Icon size={28} className="highlight-icon" />
                  <div className="highlight-text">
                    <div className="highlight-label">{item.label}</div>
                    <div className="highlight-value">{item.text}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="about-text-section">
            <div className="about-text-card">
              <div className="text-block">
                <h4 className="text-section-label">WHAT I DO</h4>
                <p className="about-paragraph">{aboutMe.whatIDo}</p>
              </div>
              
              <div className="text-block">
                <h4 className="text-section-label">HOW I WORK</h4>
                <p className="about-paragraph">{aboutMe.howIWork}</p>
              </div>
              
              <p className="about-paragraph emphasis">{aboutMe.lookingFor}</p>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h3 className="skills-title">Core Skill Areas</h3>
          <div className="skills-grid">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="skill-category">
                  <div className="category-header">
                    <Icon size={28} className="category-icon" />
                    <div>
                      <h4 className="category-title">{category.title}</h4>
                      <p className="category-subtitle">{category.subtitle}</p>
                    </div>
                  </div>
                  <ul className="skill-list">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="skill-item">{skill}</li>
                    ))}
                  </ul>
                  <div className="tools-section">
                    <div className="tools-chips">
                      {category.tools.map((tool, idx) => (
                        <span key={idx} className="tool-chip">{tool}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
