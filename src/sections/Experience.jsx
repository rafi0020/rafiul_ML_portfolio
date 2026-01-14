
import { Link } from "react-router-dom";

const experiences = [
  {
    role: "Machine Learning Engineer",
    company: "Bondstein Technologies Ltd. (RUNNER Group)",
    date: "Feb 2024 - Present",
    description: "Architected and deployed 10+ production-grade computer vision systems for enterprise clients including Unilever, BAT, and KDS. Led full ML lifecycle: data annotation, model development (custom YOLOv11, PaddleOCR), edge deployment (NVIDIA Jetson), and on-site integration. Engineered specialized solutions: ISO 6346-compliant container tracking with >98% accuracy and <50ms latency, real-time SOP monitoring across 150+ cameras, Bangla ANPR achieving ~94% accuracy, multi-modal threat detection with depth estimation, and counterfeit detection systems. Conducted extensive R&D on pose estimation (MediaPipe, MMpose, YOLOv11-pose), object tracking (DeepSORT, ByteTrack, StrongSORT), and LLM fine-tuning (DeepSeek R1). Reduced operational costs by 60-90% through AI automation.",
    tech: ["YOLOv11", "PaddleOCR", "TensorRT", "NVIDIA Jetson", "DeepSORT", "MediaPipe", "InsightFace", "Depth-Anything-V2", "FastAPI", "Docker", "OpenCV", "SAHI"]
  },
  {
    role: "Research Assistant",
    company: "Daffodil International University",
    date: "Jan 2024 - Feb 2025",
    description: "Conducted applied research in voice-based mental health diagnostics and transfer learning. Designed and implemented novel CNN architectures (VGG16, InceptionV3, DenseNet121) achieving 94% accuracy on mental stability classification. Published peer-reviewed research in Journal of Voice (Q1). Explored quantum machine learning and multimodal AI systems. Mentored junior researchers on ML best practices and academic writing.",
    tech: ["PyTorch", "TensorFlow", "Vision Transformers", "Librosa", "DenseNet", "Transfer Learning", "Jupyter", "W&B"]
  },
  // {
  //   role: "AI/ML Engineer",
  //   company: "Freelance & Contract Projects",
  //   date: "2022 - 2024",
  //   description: "Delivered end-to-end AI solutions for various clients including computer vision systems, OCR engines, and automated monitoring platforms. Specialized in edge deployment with NVIDIA Jetson devices, real-time processing pipelines, and production-grade API development. Built custom models for specific industry needs with 95%+ accuracy in challenging conditions.",
  //   tech: ["YOLOv8", "OpenCV", "PaddleOCR", "FastAPI", "MediaPipe", "TensorRT", "Docker", "MongoDB"]
  // }
];

export default function Experience({ compact = false }){
  const displayExperiences = compact ? experiences.slice(0, 2) : experiences;
  
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3z"/>
            </svg>
            Experience
          </span>
          <h2 className="section-title">Work History</h2>
          <p className="section-subtitle">
            My professional journey in AI and machine learning
          </p>
        </div>

        <div className="experience-timeline">
          {displayExperiences.map((exp, idx) => (
            <div key={idx} className="experience-item">
              <div className="experience-header">
                <div>
                  <h3 className="experience-role">{exp.role}</h3>
                  <span className="experience-company">{exp.company}</span>
                </div>
                <span className="experience-date">{exp.date}</span>
              </div>
              <p className="experience-description">{exp.description}</p>
              <div className="experience-tech">
                {exp.tech.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
        
        {compact && (
          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <Link to="/about" state={{ scrollTo: 'experience' }} className="btn btn-primary" style={{display: 'inline-flex', alignItems: 'center', gap: '8px'}}>
              View Full Experience
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
