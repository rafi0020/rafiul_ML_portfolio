
import { Link } from "react-router-dom";

const educationData = [
  {
    degree: "BSc. in Computer Science and Engineering",
    institution: "Daffodil International University (DIU), Dhaka — CSE 55 Batch",
    cgpa: "3.52/4.00",
    period: "2020 - 2024",
    status: "Completed",
    courses: [
      "Artificial Intelligence",
      "Data Mining & Machine Learning",
      "Natural Language Processing",
      "Statistics & Probability",
      "Numerical Methods",
      "Operating Systems",
      "Big Data & IoT",
      "Human Computer Interaction",
      "Web Engineering",
      "Data Structures and Algorithms",
      "Computer Networks",
      "Database Management Systems",
      "Software Engineering"
    ],
    thesis: "A NOVEL INTERACTIVE AI-BASED TOOL FOR DETECTING MENTAL STABILITY THROUGH ANALYSIS OF HUMAN VOICE",
    thesisNote: "Voice recordings processed into spectrogram images; hybrid deep learning models applied for classification with ~96% accuracy. Ethical consent and real-world clinical data acquisition from mental health institutions in Bangladesh.",
    supervisor: "Dr. Md. Taimur Ahad (Associate Professor, Associate Head, Dept. of CSE; Coordinator, 4IR Research Cell, DIU)"
  },
];

export default function Education({ compact = false }){
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M2 3.75C2 2.784 2.784 2 3.75 2h8.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0112.25 14h-8.5A1.75 1.75 0 012 12.25v-8.5zm1.75-.25a.25.25 0 00-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25v-8.5a.25.25 0 00-.25-.25h-8.5z"/>
            </svg>
            Education
          </span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">
            My educational qualifications and key learnings
          </p>
        </div>

        <div className="education-grid">
          {educationData.map((edu, idx) => (
            <div key={idx} className="education-card">
              <div className="education-header">
                <div className="education-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <div className="education-info">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-institution">{edu.institution}</p>
                  <div className="education-meta">
                    <span className="education-cgpa">CGPA: {edu.cgpa}</span>
                    <span className="education-period">{edu.period}</span>
                    <span className="education-status">{edu.status}</span>
                  </div>
                </div>
              </div>

              <div className="education-body">
                {!compact && (
                  <div className="education-section">
                    <h4>Key Courses:</h4>
                    <ul className="education-courses">
                      {edu.courses.map((course, i) => (
                        <li key={i}>{course}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {edu.thesis && (
                  <div className="education-section">
                    <h4>Thesis:</h4>
                    <p className="education-thesis">{edu.thesis}</p>
                    {edu.thesisNote && (
                      <p className="education-thesis" style={{fontSize: '0.9rem', opacity: 0.85, marginTop: '0.5rem'}}>{edu.thesisNote}</p>
                    )}
                    {edu.supervisor && (
                      <p className="education-supervisor">Supervisor: {edu.supervisor}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {compact && (
          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <Link to="/about" state={{ scrollTo: 'education' }} className="btn btn-primary" style={{display: 'inline-flex', alignItems: 'center', gap: '8px'}}>
              View More Details
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
