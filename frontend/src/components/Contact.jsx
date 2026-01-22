import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { personalInfo } from '../mock';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import './Contact.css';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Contact Me</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Let's discuss how I can help with your data analytics needs
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-info-title">Get in Touch</h3>
            <p className="contact-info-text">
              I'm always open to discussing new opportunities, collaborations, or data analytics projects. Feel free to reach out!
            </p>

            <div className="contact-details">
              <a href={`mailto:${personalInfo.email}`} className="contact-detail-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-detail-text">
                  <div className="contact-detail-label">Email</div>
                  <div className="contact-detail-value">{personalInfo.email}</div>
                </div>
              </a>

              <a href={`tel:${personalInfo.phone}`} className="contact-detail-item">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-detail-text">
                  <div className="contact-detail-label">Phone</div>
                  <div className="contact-detail-value">{personalInfo.phone}</div>
                </div>
              </a>

              <div className="contact-detail-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-detail-text">
                  <div className="contact-detail-label">Location</div>
                  <div className="contact-detail-value">{personalInfo.location}</div>
                </div>
              </div>

              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-detail-item"
              >
                <div className="contact-icon">
                  <Linkedin size={20} />
                </div>
                <div className="contact-detail-text">
                  <div className="contact-detail-label">LinkedIn</div>
                  <div className="contact-detail-value">Connect with me</div>
                </div>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or question..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="form-textarea"
              />
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="submit-button"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send size={18} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
