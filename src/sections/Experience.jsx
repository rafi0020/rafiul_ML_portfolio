import Icon from "../components/Icon";
import SectionCTA from "../components/SectionCTA";

const experiences = [
  {
    role: "Machine Learning Engineer",
    company: "Bondstein Technologies Ltd.",
    date: "Feb 2025 - Present",
    description:
      "Build and deploy production computer vision systems for enterprise safety, security, logistics, retail, and manufacturing workflows. Own the lifecycle from dataset and model development through RTSP processing, tracking and temporal rules, evidence generation, API integration, and NVIDIA Jetson or GPU deployment. Representative work includes ISO 6346 container-code OCR, Bangla ANPR, factory SOP and PPE monitoring, multi-camera banking surveillance, retail analytics, and industrial visual inspection.",
    tech: [
      "Python", "YOLO11", "YOLO-OBB", "PaddleOCR", "OpenCV", "BoT-SORT",
      "ByteTrack", "InsightFace", "FAISS", "TensorRT", "NVIDIA Jetson",
      "FastAPI", "Docker", "SQLite"
    ]
  },
  {
    role: "Research Assistant",
    company: "4IR Research Cell, Daffodil International University",
    date: "Jan 2024 - Feb 2025",
    description:
      "Conducted applied research in Bengali voice-based mental-health assessment and interpretable medical AI under Dr. Md. Taimur Ahad. Developed spectrogram-based CNN, Vision Transformer, DenseNet, and recurrent hybrid models; evaluated self-supervised speech representations and explainability methods. First author of a peer-reviewed Journal of Voice article and contributor to continuing work on robust, subject-independent evaluation.",
    tech: [
      "PyTorch", "TensorFlow", "Vision Transformers", "DenseNet", "GRU",
      "wav2vec 2.0", "WavLM", "Whisper", "Librosa", "Grad-CAM", "LIME",
      "SHAP", "Weights & Biases"
    ]
  }
];

export default function Experience({ compact = false }) {
  const displayExperiences = compact ? experiences.slice(0, 2) : experiences;

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <Icon name="briefcase" />
            Experience
          </span>
          <h2 className="section-title">Production engineering &amp; applied research</h2>
          <p className="section-subtitle">
            End-to-end ownership across model development, deployment, and evaluation
          </p>
        </div>

        <div className="experience-timeline">
          {displayExperiences.map((exp) => (
            <div key={`${exp.company}-${exp.role}`} className="experience-item">
              <div className="experience-header">
                <div>
                  <h3 className="experience-role">{exp.role}</h3>
                  <span className="experience-company">{exp.company}</span>
                </div>
                <span className="experience-date">{exp.date}</span>
              </div>
              <p className="experience-description">{exp.description}</p>
              <div className="experience-tech">
                {exp.tech.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
            </div>
          ))}
        </div>

        {compact && (
          <SectionCTA to="/about" state={{ scrollTo: "experience" }}>
            View full experience
          </SectionCTA>
        )}
      </div>
    </section>
  );
}
