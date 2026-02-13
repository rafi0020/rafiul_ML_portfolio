
import { useState } from "react";

export default function Contact(){
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    const mailtoLink = `mailto:rafiulislam1921@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75z"/>
            </svg>
            Contact
          </span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Open for opportunities, collaborations, and interesting conversations
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <div className="contact-links">
              <a href="mailto:rafiulislam1921@gmail.com" className="contact-link">
                <div className="contact-link-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-link-text">
                  <strong>Email</strong>
                </div>
              </a>
              <a href="tel:+8801679899117" className="contact-link">
                <div className="contact-link-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#34A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-link-text">
                  <strong>Phone</strong>
                </div>
              </a>
              <a href="https://wa.me/8801679899117" target="_blank" rel="noreferrer" className="contact-link">
                <div className="contact-link-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-link-text">
                  <strong>WhatsApp</strong>
                </div>
              </a>
              <a href="https://linkedin.com/in/rafi009" target="_blank" rel="noreferrer" className="contact-link">
                <div className="contact-link-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#0A66C2">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="contact-link-text">
                  <strong>LinkedIn</strong>
                </div>
              </a>
              <a href="https://github.com/rafi0020" target="_blank" rel="noreferrer" className="contact-link">
                <div className="contact-link-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="contact-link-text">
                  <strong>GitHub</strong>
                </div>
              </a>
              <a href="https://www.researchgate.net/profile/Rafiul-Islam-13" target="_blank" rel="noreferrer" className="contact-link">
                <div className="contact-link-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="11" fill="#00CCBB"/>
                    <text x="12" y="16" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="serif">RG</text>
                  </svg>
                </div>
                <div className="contact-link-text">
                  <strong>ResearchGate</strong>
                </div>
              </a>
              <a href="https://scholar.google.com/citations?user=ORj6wioAAAAJ&hl=en&authuser=1" target="_blank" rel="noreferrer" className="contact-link">
                <div className="contact-link-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2.5L1 9l11 6 9-4.91V17h2V9L12 2.5z" fill="#4285F4"/>
                    <path d="M5 13.18v4.7c0 4.5 7 4.5 7 4.5s7 0 7-4.5v-4.7l-7 3.82-7-3.82z" fill="#356AC3"/>
                  </svg>
                </div>
                <div className="contact-link-text">
                  <strong>Google Scholar</strong>
                </div>
              </a>
              {/* <div className="contact-link" style={{cursor: 'default', pointerEvents: 'none'}}>
                <div className="contact-link-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="#EA4335"/>
                    <circle cx="12" cy="10" r="3" fill="white"/>
                  </svg>
                </div>
                <div className="contact-link-text">
                  <span>Location</span>
                </div>
              </div> */}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input 
                type="email" 
                className="form-input" 
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea 
                className="form-input form-textarea" 
                placeholder="Tell me about your query..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
              <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
                <path d="M.05 3.555A2 2 0 012 2h12a2 2 0 011.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 002 14h12a2 2 0 001.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
