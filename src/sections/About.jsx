
import { Link } from "react-router-dom";

export default function About({ compact = false }){
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"/>
            </svg>
            About Me
          </span>
          <h2 className="section-title">README.md</h2>
        </div>

        {compact ? (
          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            <div className="profile-card" style={{padding: '2rem', textAlign: 'center'}}>
              <div className="profile-avatar" style={{margin: '0 auto 1.5rem', overflow: 'visible', position: 'relative'}}>
                <img src="./assets/images/profile.jpg" alt="MD Rafiul Islam" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', position: 'relative', zIndex: 2}} />
              </div>
              <h3 className="profile-name">MD Rafiul Islam</h3>
              <p className="profile-title" style={{marginBottom: '1rem'}}>Machine Learning Engineer | Computer Vision Specialist | AI Researcher</p>
              <p className="profile-bio" style={{marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.6'}}>
                Building production ready AI systems that work in the real world. 
                Specializing in Computer Vision, Edge AI, and scalable ML deployment. 
                Delivering solutions across surveillance, logistics, manufacturing, and smart systems.
              </p>
              <Link to="/about" className="btn btn-primary" style={{display: 'inline-flex', alignItems: 'center', gap: '8px'}}>
                Learn More About Me
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </Link>
            </div>
          </div>
        ) : (
          <div className="about-grid">
          <div className="about-profile">
            <div className="profile-card">
              <div className="profile-avatar" style={{overflow: 'visible', position: 'relative'}}>
                <img src="./assets/images/profile.jpg" alt="MD Rafiul Islam" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', position: 'relative', zIndex: 2}} />
              </div>
              <h3 className="profile-name">MD Rafiul Islam</h3>
              <p className="profile-title">Machine Learning Engineer | Computer Vision Specialist | AI Researcher</p>
              <p className="profile-bio">
                Architecting enterprise-grade computer vision systems for industrial safety, security, and automation.
                From high-performance edge AI to full-stack ML deployment.
              </p>
              <div className="profile-links">
                <a href="https://github.com/rafi0020" className="profile-link" target="_blank" rel="noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                  GitHub
                </a>
                <a href="https://linkedin.com/in/rafi009" className="profile-link" target="_blank" rel="noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                  LinkedIn
                </a>
                <a href="https://www.researchgate.net/profile/Rafiul-Islam-13" className="profile-link" target="_blank" rel="noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                  ResearchGate
                </a>
                <a href="https://scholar.google.com/citations?user=ORj6wioAAAAJ&hl=en&authuser=1" className="profile-link" target="_blank" rel="noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                  Google Scholar
                </a>
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="profile-card info-card" style={{marginTop: '1.5rem'}}>
              <div className="card-header-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="16" x2="12" y2="12"/>
                  <line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
                <h4>Quick Info</h4>
              </div>
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon location">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <span className="info-label">Location</span>
                    <span className="info-value">Dhaka, Bangladesh</span>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon role">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <span className="info-label">Role</span>
                    <span className="info-value">ML Engineer</span>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon education">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <span className="info-label">Education</span>
                    <span className="info-value">BSc. in CSE</span>
                  </div>
                </div>
                {/* <div className="info-item">
                  <div className="info-icon company">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <span className="info-label">Company</span>
                    <span className="info-value">Bondstein Technologies</span>
                  </div>
                </div> */}
                <div className="info-item">
                  <div className="info-icon achievement">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="8" r="7"/>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <span className="info-label">Projects</span>
                    <span className="info-value">20+ Deployments</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information Card - Sidebar */}
            <div className="profile-card contact-sidebar-card" style={{marginTop: '1.5rem'}}>
              <div className="card-header-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <h4>Contact Info</h4>
              </div>
              <div className="contact-sidebar-items">
                <div className="contact-sidebar-item">
                  <div className="contact-sidebar-icon location">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="contact-sidebar-content">
                    <span className="contact-sidebar-label">Location</span>
                    <span className="contact-sidebar-value">Mirpur 1, Dhaka</span>
                  </div>
                </div>
                <div className="contact-sidebar-item">
                  <div className="contact-sidebar-icon email">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div className="contact-sidebar-content">
                    <span className="contact-sidebar-label">Email</span>
                    <a href="mailto:rafiulislam1921@gmail.com" className="contact-sidebar-value" style={{color: 'inherit', textDecoration: 'none', cursor: 'pointer'}}>rafiulislam1921@gmail.com</a>
                  </div>
                </div>
                <div className="contact-sidebar-item">
                  <div className="contact-sidebar-icon phone">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div className="contact-sidebar-content">
                    <span className="contact-sidebar-label">Phone</span>
                    <a href="tel:+8801568617814" className="contact-sidebar-value" style={{color: 'inherit', textDecoration: 'none', cursor: 'pointer'}}>+880 1679899117</a>
                  </div>
                </div>
                <div className="contact-sidebar-item">
                  <div className="contact-sidebar-icon whatsapp">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                    </svg>
                  </div>
                  <div className="contact-sidebar-content">
                    <span className="contact-sidebar-label">WhatsApp</span>
                    <a href="https://wa.me/8801679899117" target="_blank" rel="noreferrer" className="contact-sidebar-value" style={{color: 'inherit', textDecoration: 'none', cursor: 'pointer'}}>+880 1679899117</a>
                  </div>
                </div>
                <div className="contact-sidebar-item">
                  <div className="contact-sidebar-icon linkedin">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </div>
                  <div className="contact-sidebar-content">
                    <span className="contact-sidebar-label">LinkedIn</span>
                    <a href="https://linkedin.com/in/rafi009" target="_blank" rel="noreferrer" className="contact-sidebar-value" style={{color: 'inherit', textDecoration: 'none', cursor: 'pointer'}}>linkedin.com</a>
                  </div>
                </div>
                <div className="contact-sidebar-item">
                  <div className="contact-sidebar-icon researchgate">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                  </div>
                  <div className="contact-sidebar-content">
                    <span className="contact-sidebar-label">ResearchGate</span>
                    <a href="https://www.researchgate.net/profile/Rafiul-Islam-13" target="_blank" rel="noreferrer" className="contact-sidebar-value" style={{color: 'inherit', textDecoration: 'none', cursor: 'pointer'}}>researchgate.net</a>
                  </div>
                </div>
                <div className="contact-sidebar-item">
                  <div className="contact-sidebar-icon scholar">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                  </div>
                  <div className="contact-sidebar-content">
                    <span className="contact-sidebar-label">Google Scholar</span>
                    <a href="https://scholar.google.com/citations?user=ORj6wioAAAAJ&hl=en&authuser=1" target="_blank" rel="noreferrer" className="contact-sidebar-value" style={{color: 'inherit', textDecoration: 'none', cursor: 'pointer'}}>Google Scholar</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-content">
            {/* Professional Profile Card */}
            <div className="content-card profile-card-main">
              <div className="content-card-header">
                <div className="content-icon profile-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <h3>Professional Profile</h3>
              </div>
              <div className="content-card-body">
                <p>
                  I am a Machine Learning Engineer with extensive experience in computer vision, deep learning, and edge
                  deployment. I specialize in transforming complex client requirements into scalable
                  machine learning solutions.
                  With a track record of 10+ industrial deployments and multiple research publications, I bridge the gap between academic research and real-world applications. My
                  expertise spans the entire ML lifecycle—from data annotation to
                  model development and on-site edge deployment.
                </p>
              </div>
            </div>

            {/* What I Do Card */}
            <div className="content-card what-i-do-card">
              <div className="content-card-header">
                <div className="content-icon tasks-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 11 12 14 22 4"/>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                  </svg>
                </div>
                <h3>What I Do</h3>
              </div>
              <div className="content-card-body">
                <div className="task-grid">
                  <div className="task-item">
                    <div className="task-icon">🎯</div>
                    <p>Architect end-to-end computer vision systems for enterprise clients</p>
                  </div>
                  <div className="task-item">
                    <div className="task-icon">⚡</div>
                    <p>Design and deploy computer vision systems for industrial applications</p>
                  </div>
                  <div className="task-item">
                    <div className="task-icon">🔬</div>
                    <p>Apply advanced data analysis in Signal & Image Processing for research publications</p>
                  </div>
                  <div className="task-item">
                    <div className="task-icon">🚀</div>
                    <p>Deploy real-time AI model on NVIDIA Jetson edge devices for industrial applications</p>
                  </div>
                  <div className="task-item">
                    <div className="task-icon">🤝</div>
                    <p>Conduct on-site client visits for system deployment, camera calibration & PoC demos</p>
                  </div>
                  <div className="task-item">
                    <div className="task-icon">💡</div>
                    <p>Lead R&D on emerging technologies: depth estimation, LLMs, and business intelligence tools</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Journey Card */}
            {/* <div className="content-card journey-card">
              <div className="content-card-header">
                <div className="content-icon journey-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <h3>Professional Journey</h3>
              </div>
              <div className="content-card-body">
                <p>
                  My career journey spans from academic research excellence as a Research Assistant at DIU's 4IR Research Cell, 
                  through remote data analysis at Pantech Prolabs India, to currently architecting enterprise AI solutions at Bondstein Technologies. 
                  This progression has equipped me to deliver end-to-end ML solutions—from research-backed model design to production deployment 
                  in demanding industrial environments.
                </p>
              </div>
            </div> */}

            {/* Key Achievements Card */}
            <div className="content-card achievements-card">
              <div className="content-card-header">
                <div className="content-icon achievement-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3>Key Achievements</h3>
              </div>
              <div className="content-card-body">
                <div className="achievement-list">
                  <div className="achievement-item">
                    <div className="achievement-icon">🎯</div>
                    <p>Achieved <strong>{'>'}98% accuracy</strong> in container recognition and <strong>{'<'}50ms latency</strong> in counterfeit detection</p>
                  </div>
                  <div className="achievement-item">
                    <div className="achievement-icon">🚗</div>
                    <p>Pioneered Bangla ANPR solution with <strong>~94% accuracy</strong> through custom model R&D</p>
                  </div>
                  <div className="achievement-item">
                    <div className="achievement-icon">📹</div>
                    <p>Deployed <strong>150+ cameras</strong> across 17 locations for Unilever's centralized SOP monitoring</p>
                  </div>
                  <div className="achievement-item">
                    <div className="achievement-icon">🛒</div>
                    <p>Developed innovative <strong>Customer-Product Interaction tracker</strong> for retail business intelligence</p>
                  </div>
                  <div className="achievement-item">
                    <div className="achievement-icon">💰</div>
                    <p>Reduced operational costs by <strong>60-90%</strong> through AI automation for multiple clients</p>
                  </div>
                  <div className="achievement-item">
                    <div className="achievement-icon">📚</div>
                    <p>Published research in <strong>Q1 journal</strong> on mental health diagnosis using AI</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Expertise Card */}
            {/* <div className="content-card expertise-card">
              <div className="content-card-header">
                <div className="content-icon tech-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <h3>Technical Expertise</h3>
              </div>
              <div className="content-card-body">
                <div className="expertise-grid">
                  <div className="expertise-item">
                    <div className="expertise-header">
                      <span className="expertise-icon">👁️</span>
                      <h4>Computer Vision</h4>
                    </div>
                    <p>Object Detection (YOLOv11), Pose Estimation (MediaPipe), OCR (PaddleOCR), Face Recognition (InsightFace), Multi-Object Tracking (DeepSORT, ByteTrack), OpenCV</p>
                  </div>
                  <div className="expertise-item">
                    <div className="expertise-header">
                      <span className="expertise-icon">⚡</span>
                      <h4>Edge AI & Deployment</h4>
                    </div>
                    <p>NVIDIA Jetson (Nano/Xavier/Orin), TensorRT acceleration, Docker containerization, FastAPI microservices, RTSP Streams, real-time inference optimization</p>
                  </div>
                  <div className="expertise-item">
                    <div className="expertise-header">
                      <span className="expertise-icon">🧠</span>
                      <h4>Machine Learning</h4>
                    </div>
                    <p>Deep Learning frameworks (PyTorch, TensorFlow, Keras), CNN architectures, Vision Transformers, Transfer Learning, Scikit-learn for classical ML</p>
                  </div>
                  <div className="expertise-item">
                    <div className="expertise-header">
                      <span className="expertise-icon">📊</span>
                      <h4>Data Analysis</h4>
                    </div>
                    <p>Advanced Signal & Image Processing, Pandas, NumPy, Matplotlib, Seaborn, Excel for business intelligence and statistical analysis</p>
                  </div>
                  <div className="expertise-item">
                    <div className="expertise-header">
                      <span className="expertise-icon">🚀</span>
                      <h4>Development & Tools</h4>
                    </div>
                    <p>Python, SQL, Git/GitLab version control, Streamlit for demos, data annotation & management, API integration & backend development</p>
                  </div>
                  <div className="expertise-item">
                    <div className="expertise-header">
                      <span className="expertise-icon">📖</span>
                      <h4>Research & Innovation</h4>
                    </div>
                    <p>Q1 journal publications, novel architecture design, experimental design, R&D in emerging tech (monocular depth estimation, LLMs)</p>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Certifications & Training Card */}
            <div className="content-card certifications-main-card">
              <div className="content-card-header">
                <div className="content-icon cert-main-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3>Training & Certifications</h3>
              </div>
              <div className="content-card-body">
                <div className="cert-main-grid">
                  <div className="cert-main-item">
                    <div className="cert-main-icon-wrapper ibm">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="18" rx="2"/>
                        <path d="M8 7h8M8 11h8M8 15h8"/>
                      </svg>
                    </div>
                    <div className="cert-main-content">
                      <h4>Tools for Data Science</h4>
                      <p>IBM • Coursera • Sep 2024</p>
                      <span className="cert-badge">SQL • Python • Git</span>
                    </div>
                  </div>
                  <div className="cert-main-item">
                    <div className="cert-main-icon-wrapper microsoft">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7"/>
                        <rect x="14" y="3" width="7" height="7"/>
                        <rect x="14" y="14" width="7" height="7"/>
                        <rect x="3" y="14" width="7" height="7"/>
                      </svg>
                    </div>
                    <div className="cert-main-content">
                      <h4>Generative AI Productivity Skills</h4>
                      <p>Microsoft & LinkedIn • Aug 2024</p>
                      <span className="cert-badge">Gemini • ChatGPT</span>
                    </div>
                  </div>
                  <div className="cert-main-item">
                    <div className="cert-main-icon-wrapper linkedin">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    </div>
                    <div className="cert-main-content">
                      <h4>AI Productivity Hacks</h4>
                      <p>LinkedIn • Jul 2024</p>
                      <span className="cert-badge">AI Productivity</span>
                    </div>
                  </div>
                  <div className="cert-main-item">
                    <div className="cert-main-icon-wrapper ibm">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="18" rx="2"/>
                        <path d="M8 7h8M8 11h8M8 15h8"/>
                      </svg>
                    </div>
                    <div className="cert-main-content">
                      <h4>What is Data Science?</h4>
                      <p>IBM • Coursera • Jul 2024</p>
                      <span className="cert-badge">Data Science</span>
                    </div>
                  </div>
                  <div className="cert-main-item">
                    <div className="cert-main-icon-wrapper linkedin">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    </div>
                    <div className="cert-main-content">
                      <h4>Prompt Engineering for Generative AI</h4>
                      <p>LinkedIn • Jul 2024</p>
                      <span className="cert-badge">Prompt Engineering</span>
                    </div>
                  </div>
                  <div className="cert-main-item">
                    <div className="cert-main-icon-wrapper fullstack">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                        <path d="M8 7h8M8 11h8"/>
                      </svg>
                    </div>
                    <div className="cert-main-content">
                      <h4>Full Stack Web Development</h4>
                      <p>Bohubrihi • Apr 2023</p>
                      <span className="cert-badge">Python • JavaScript</span>
                    </div>
                  </div>
                  <div className="cert-main-item">
                    <div className="cert-main-icon-wrapper web">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                      </svg>
                    </div>
                    <div className="cert-main-content">
                      <h4>HTML5, CSS3, Bootstrap4</h4>
                      <p>Bohubrihi • Apr 2022</p>
                      <span className="cert-badge">Web Development</span>
                    </div>
                  </div>
                  <div className="cert-main-item">
                    <div className="cert-main-icon-wrapper bci">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
                        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
                      </svg>
                    </div>
                    <div className="cert-main-content">
                      <h4>Brain-Computer Interface</h4>
                      <p>Pantech.AI Academy</p>
                      <span className="cert-badge">BCI Research</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        )}
      </div>
    </section>
  );
}
