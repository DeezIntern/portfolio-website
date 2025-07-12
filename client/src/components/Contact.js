import React, { useState } from 'react';
import axios from 'axios';

function Contact({ data }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      await axios.post('/api/contact', formData);
      setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!data) return null;

  return (
    <section id="contact" className="section contact">
      <h2>Get In Touch</h2>
      <div className="contact-content">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitMessage && <p className="submit-message">{submitMessage}</p>}
          </form>
        </div>
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>I'm always open to discussing new opportunities and interesting projects.</p>
          {data.contact && (
            <div className="contact-details">
              {data.contact.email && (
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
                </div>
              )}
              {data.contact.phone && (
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <a href={`tel:${data.contact.phone}`}>{data.contact.phone}</a>
                </div>
              )}
              {data.contact.linkedin && (
                <div className="contact-item">
                  <i className="fab fa-linkedin"></i>
                  <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </div>
              )}
              {data.contact.github && (
                <div className="contact-item">
                  <i className="fab fa-github"></i>
                  <a href={data.contact.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
