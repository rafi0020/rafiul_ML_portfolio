
import Icon from "../components/Icon";
import SectionCTA from "../components/SectionCTA";

const experiences = [
  {
    role: "Machine Learning Engineer",
    company: "Bondstein Technologies Ltd. (RUNNER Group)",
    date: "Feb 2025 - Present",
    description: "Architected and deployed 10+ production-grade computer vision systems for enterprise clients including Unilever, BAT, and KDS. Led full ML lifecycle: data annotation, model development (custom YOLOv11, PaddleOCR), edge deployment (NVIDIA Jetson), and on-site integration. Engineered specialized solutions: ISO 6346-compliant container tracking with >98% accuracy and <50ms latency, real-time SOP monitoring across 150+ cameras, Bangla ANPR achieving ~94% accuracy, multi-modal threat detection with depth estimation, and counterfeit detection systems. Conducted extensive R&D on pose estimation (MediaPipe, MMpose, YOLOv11-pose), object tracking (DeepSORT, ByteTrack, StrongSORT), and LLM fine-tuning (DeepSeek R1). Reduced operational costs by 60-90% through AI automation.",
    tech: ["YOLOv11", "PaddleOCR", "TensorRT", "NVIDIA Jetson", "DeepSORT", "MediaPipe", "InsightFace", "Depth-Anything-V2", "FastAPI", "Docker", "OpenCV", "SAHI"]
  },
  {
    role: "Research Assistant",
    company: "4IR Research Cell, Daffodil International University",
    date: "Jan 2024 - Feb 2025",
    description: "Conducted applied research under Dr. Md. Taimur Ahad in voice-based mental health diagnostics and medical computer vision. Designed hybrid architectures (DenseNet–ViT–GRU) for advanced representation learning. Explored self-supervised and noise-robust learning strategies for audio (noise-aware training and robustness). Built explainable AI (XAI) pipelines including LIME, SHAP, and Grad-CAM variants. Investigated CLAHE-based contrast enhancement and image preprocessing for medical imaging. Published in Journal of Voice (Scopus Q1) and contributed to the first open-source Bengali voice dataset for mental health diagnostics. Mentored junior researchers on ML best practices and academic writing.",
    tech: ["PyTorch", "TensorFlow", "Vision Transformers", "DenseNet", "GRU", "Librosa", "LIME", "SHAP", "Grad-CAM", "Transfer Learning", "W&B"]
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
            <Icon name="briefcase" />
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
          <SectionCTA to="/about" state={{ scrollTo: "experience" }}>
            View full experience
          </SectionCTA>
        )}
      </div>
    </section>
  );
}
