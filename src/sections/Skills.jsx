
import { useEffect, useRef, useState } from "react";
import Icon from "../components/Icon";
import SectionCTA from "../components/SectionCTA";

const skillCategories = [
  {
    title: "Computer Vision & Image Processing",
    icon: "👁️",
    skills: ["YOLOv11", "YOLO-OBB", "OpenCV", "Object Detection", "Object Tracking", "Semantic Segmentation", "OCR (PaddleOCR)", "DeepSORT/ByteTrack", "SAHI", "Pose Estimation (MediaPipe/YOLOpose)", "ROI Masking", "Geometric Transforms (Homography, Undistortion)", "CLAHE & Contrast Enhancement", "Morphology & Contours", "Temporal Smoothing & Hysteresis", "Evidence Generation", "Depth Estimation (Depth-Anything-V2)"],
    bars: [
      { name: "Object Detection & YOLOv11", level: 95 },
      { name: "Multi-Object Tracking", level: 92 },
      { name: "OCR & Text Recognition", level: 90 },
    ]
  },
  {
    title: "Machine Learning & Deep Learning",
    icon: "🧠",
    skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "CNN Architectures", "Vision Transformers (ViT)", "Transfer Learning", "DenseNet", "EfficientNet", "ResNet", "Hybrid CNN–Transformer Models", "Data Augmentation", "Evaluation Design (Precision, Recall, IoU, AUC)", "Explainable AI (Grad-CAM, LIME, SHAP)"],
    bars: [
      { name: "CNN Architectures & Training", level: 94 },
      { name: "Vision Transformers", level: 88 },
      { name: "Explainable AI (XAI)", level: 87 },
    ]
  },
  {
    title: "Deployment & Systems",
    icon: "⚡",
    skills: ["NVIDIA Jetson (Nano/Xavier/Orin)", "TensorRT", "ONNX", "Model Quantization (FP16/INT8)", "RTSP Pipelines", "GStreamer", "Multi-Threaded & Multi-Process Architectures", "Docker", "API Integration", "Decoupled Uploader Services", "Monitoring & Restart Safety"],
    bars: [
      { name: "Jetson Edge Deployment", level: 93 },
      { name: "Model Optimization (TensorRT)", level: 90 },
      { name: "Real-time Inference Systems", level: 91 },
    ]
  },
  {
    title: "Reliability Engineering",
    icon: "🛡️",
    skills: ["State Machines", "Temporal Smoothing", "Hysteresis/EMA Filtering", "Evidence Logging", "SQLite Queues", "JSON State Management", "Decoupled Sender Services", "Deduplication Logic", "Confidence Voting", "ISO 6346 Validation"],
    bars: [
      { name: "Temporal Reasoning & State Machines", level: 92 },
      { name: "Domain Validation Pipelines", level: 90 },
      { name: "Evidence-Based Decision Logging", level: 91 },
    ]
  },
  {
    title: "Tools & Frameworks",
    icon: "🚀",
    skills: ["Python", "Git/GitHub", "OpenCV", "Ultralytics YOLO", "PaddleOCR", "MediaPipe Pose", "SQLite", "MLflow", "Weights & Biases", "Linux", "Grafana"],
    bars: [
      { name: "Python Ecosystem", level: 95 },
      { name: "Experiment Tracking (W&B/MLflow)", level: 88 },
      { name: "Version Control & Collaboration", level: 90 },
    ]
  },
  {
    title: "Data & Signal Processing",
    icon: "📊",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Plotly", "Librosa", "Scikit-learn", "Data Augmentation", "Feature Engineering", "Audio Signal Processing", "Spectrogram Analysis (Log-mel/STFT)"],
    bars: [
      { name: "Data Processing Pipelines", level: 92 },
      { name: "Audio Signal Processing", level: 85 },
      { name: "Statistical Analysis & Visualization", level: 88 },
    ]
  },
  {
    title: "LLMs & NLP",
    icon: "🤖",
    skills: ["LLaMA 2", "LangChain", "RAG (Retrieval-Augmented Generation)", "ChromaDB", "HuggingFace Transformers", "Vector Databases", "Prompt Engineering"],
    bars: [
      { name: "LLM Fine-tuning & Deployment", level: 82 },
      { name: "RAG System Development", level: 85 },
      { name: "Vector Search & Embeddings", level: 80 },
    ]
  },
  {
    title: "Backend & APIs",
    icon: "🔧",
    skills: ["FastAPI", "Flask", "Django", "PostgreSQL", "MongoDB", "Redis", "Kafka", "MQTT", "WebSocket", "RESTful APIs", "Microservices"],
    bars: [
      { name: "FastAPI & REST Development", level: 90 },
      { name: "Database Design & Optimization", level: 87 },
      { name: "Message Queues & Streaming", level: 85 },
    ]
  },
  {
    title: "Soft Skills",
    icon: "🤝",
    skills: ["Teamwork", "Leadership", "Convincing & Influencing", "Negotiation", "Inspiring", "On-site Client Communication", "Research Mentoring", "Academic Writing"],
    bars: [
      { name: "Teamwork & Collaboration", level: 93 },
      { name: "Leadership & Mentoring", level: 88 },
      { name: "Communication & Negotiation", level: 90 },
    ]
  }
];

export default function Skills({ compact = false }){
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <Icon name="gear" />
            Tech Stack
          </span>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technologies and tools I use to build production-ready AI systems
          </p>
        </div>

        <div className="skills-container">
          {(compact ? skillCategories.slice(0, 3) : skillCategories).map((category, idx) => (
            <div 
              key={category.title} 
              className="skill-category"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="skill-category-header">
                <div className="skill-category-icon">{category.icon}</div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              
              <div className="skill-items">
                {category.skills.map(skill => (
                  <span key={skill} className="skill-item">{skill}</span>
                ))}
              </div>

              <div className="skill-bar-container">
                {category.bars.map(bar => (
                  <div key={bar.name} className="skill-bar">
                    <div className="skill-bar-header">
                      <span className="skill-bar-name">{bar.name}</span>
                      <span className="skill-bar-value">{bar.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div 
                        className="skill-bar-fill" 
                        style={{ width: visible ? `${bar.level}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {compact && <SectionCTA to="/skills">View all skills</SectionCTA>}
    </section>
  );
}
