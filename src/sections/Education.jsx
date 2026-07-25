
import Icon from "../components/Icon";
import SectionCTA from "../components/SectionCTA";

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
            <Icon name="cap" />
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
          <SectionCTA to="/about" state={{ scrollTo: "education" }}>
            View more details
          </SectionCTA>
        )}
      </div>
    </section>
  );
}
