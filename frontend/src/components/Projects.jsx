import React, { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { portfolio } from '../mock';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Badge } from './ui/badge';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Portfolio</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            A selection of analytics projects delivering measurable business impact
          </p>
        </div>

        <div className="projects-grid">
          {portfolio.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-thumbnail">
                <img src={project.thumbnail} alt={project.title} />
                <div className="thumbnail-overlay">
                  <ExternalLink size={24} />
                  <span>View Details</span>
                </div>
              </div>
              <div className="project-content">
                <div className="project-industry">{project.industry}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tools.slice(0, 3).map((tool, idx) => (
                    <span key={idx} className="tag">{tool}</span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="tag">+{project.tools.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="project-modal">
            <button 
              className="modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close"
            >
              <X size={24} />
            </button>
            
            <DialogHeader>
              <DialogTitle className="modal-title">{selectedProject.title}</DialogTitle>
              <Badge className="industry-badge">{selectedProject.industry}</Badge>
            </DialogHeader>

            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedProject.thumbnail} alt={selectedProject.title} />
              </div>

              {selectedProject.screenshots && selectedProject.screenshots.length > 1 && (
                <div className="modal-screenshots">
                  <h4 className="section-heading">Dashboard Screenshots</h4>
                  <div className="screenshots-grid">
                    {selectedProject.screenshots.map((screenshot, idx) => (
                      <div key={idx} className="screenshot-item">
                        <img src={screenshot} alt={`${selectedProject.title} - View ${idx + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="modal-section">
                <h4 className="section-heading">Overview</h4>
                <p className="section-text">{selectedProject.description}</p>
              </div>

              <div className="modal-section">
                <h4 className="section-heading">Problem</h4>
                <p className="section-text">{selectedProject.problem}</p>
              </div>

              <div className="modal-section">
                <h4 className="section-heading">Approach</h4>
                <p className="section-text">{selectedProject.approach}</p>
              </div>

              <div className="modal-section">
                <h4 className="section-heading">Tools & Technologies</h4>
                <div className="modal-tags">
                  {selectedProject.tools.map((tool, idx) => (
                    <Badge key={idx} variant="secondary" className="tool-badge">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h4 className="section-heading">Key Outcomes</h4>
                <ul className="outcomes-list">
                  {selectedProject.outcomes.map((outcome, idx) => (
                    <li key={idx} className="outcome-item">{outcome}</li>
                  ))}
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default Projects;
