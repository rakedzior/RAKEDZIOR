import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { education } from '../mock';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="education-container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <div className="section-divider"></div>
        </div>

        <div className="education-grid">
          {education.map((edu) => (
            <div key={edu.id} className="education-card">
              <div className="card-icon">
                <GraduationCap size={32} />
              </div>
              <h3 className="degree-title">{edu.degree}</h3>
              <p className="field-of-study">{edu.field}</p>
              <p className="university-name">{edu.university}</p>
              <div className="education-meta">
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>{edu.period}</span>
                </div>
                <div className="meta-item">
                  <MapPin size={16} />
                  <span>{edu.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
