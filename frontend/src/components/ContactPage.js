import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { artistInfo } from '../mock';
import '../styles/artworld.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock form submission - replace with actual API call later
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1000);
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <header className="section-spacing">
        <div className="container-artworld">
          <nav className="flex justify-between items-center">
            <Link to="/" className="nav-link">
              {artistInfo.name}
            </Link>
            <div className="flex gap-8">
              <Link to="/" className="nav-link">Work</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/contact" className="nav-link text-primary">Contact</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Contact Header */}
      <section className="section-spacing-large">
        <div className="container-artworld">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-4xl md:text-5xl fade-in-up">
              Let's Work Together
            </h1>
            <p className="body-text max-w-2xl mx-auto mt-6 fade-in-up fade-in-up-delay-1">
              I'm always interested in new projects, collaborations, and opportunities to create meaningful art. 
              Whether you're looking to commission a piece, discuss an exhibition, or simply want to connect, 
              I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-spacing-large">
        <div className="container-artworld">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="fade-in-up">
                <h2 className="artist-name mb-8">Send a Message</h2>
                
                {submitMessage && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 body-text">
                    {submitMessage}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="form-textarea"
                      rows="6"
                      placeholder="Tell me about your project, idea, or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="fade-in-up fade-in-up-delay-1">
                <h2 className="artist-name mb-8">Get in Touch</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="nav-link mb-2">Email</h3>
                    <a 
                      href={`mailto:${artistInfo.email}`}
                      className="body-text hover:text-primary transition-colors"
                    >
                      {artistInfo.email}
                    </a>
                  </div>

                  <div>
                    <h3 className="nav-link mb-2">Location</h3>
                    <p className="body-text">
                      {artistInfo.location}
                    </p>
                  </div>

                  <div>
                    <h3 className="nav-link mb-4">Follow My Work</h3>
                    <div className="social-links justify-start">
                      <a 
                        href={artistInfo.social.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link"
                        title="Instagram"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      <a 
                        href={artistInfo.social.facebook} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link"
                        title="Facebook"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a 
                        href={artistInfo.social.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link"
                        title="LinkedIn"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="nav-link mb-2">Response Time</h3>
                    <p className="body-text">
                      I typically respond to inquiries within 24-48 hours. For urgent matters, 
                      please feel free to reach out via social media or email directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-spacing bg-gray-900 text-white mt-16">
        <div className="container-artworld">
          <div className="text-center">
            <p className="caption-text text-gray-400">
              © 2024 {artistInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;