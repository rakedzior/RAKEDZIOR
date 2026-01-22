import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experience } from '../mock';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <div className="section-divider"></div>
        </div>

        <div className="timeline">
          {experience.map((job, index) => (
            <div key={job.id} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {index !== experience.length - 1 && <div className="marker-line"></div>}
              </div>
              
              <div className="job-card">
                <div className="job-header">
                  <div className="job-title-section">
                    <Briefcase size={24} className="job-icon" />
                    <div>
                      <h3 className="job-title">{job.title}</h3>
                      <div className="job-company">
                        {job.company}
                        <span className="job-type">{job.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="job-meta">
                    <div className="meta-item">
                      <Calendar size={16} />
                      <span>{job.period}</span>
                    </div>
                    <div className="meta-item">
                      <MapPin size={16} />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="achievements-list">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx} className="achievement-item">{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
