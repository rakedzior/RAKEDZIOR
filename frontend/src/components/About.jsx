import React from 'react';
import { User, Database, BarChart3, Code2 } from 'lucide-react';
import { aboutMe, skills, personalInfo } from '../mock';
import './About.css';

const About = () => {
  const skillCategories = [
    { title: 'Analytics', skills: skills.analytics, icon: BarChart3 },
    { title: 'Data Modeling', skills: skills.dataModeling, icon: Database },
    { title: 'BI & Visualization', skills: skills.visualization, icon: BarChart3 },
    { title: 'Data Engineering', skills: skills.engineering, icon: Code2 }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-image-mobile">
              <img src={personalInfo.photo} alt={personalInfo.name} />
            </div>
            <p className="about-paragraph">{aboutMe.intro}</p>
            <p className="about-paragraph">{aboutMe.expertise}</p>
            <p className="about-paragraph">{aboutMe.lookingFor}</p>
          </div>

          <div className="about-image-desktop">
            <img src={personalInfo.photo} alt={personalInfo.name} />
            <div className="image-border"></div>
          </div>
        </div>

        <div className="skills-section">
          <h3 className="skills-title">Technical Skills</h3>
          <div className="skills-grid">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="skill-category">
                  <div className="category-header">
                    <Icon size={24} className="category-icon" />
                    <h4 className="category-title">{category.title}</h4>
                  </div>
                  <ul className="skill-list">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="skill-item">{skill}</li>
                    ))}
                  </ul>
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
