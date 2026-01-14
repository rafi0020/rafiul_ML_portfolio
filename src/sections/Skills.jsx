
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const skillCategories = [
  {
    title: "Computer Vision",
    icon: "👁️",
    skills: ["YOLOv11", "OpenCV", "Object Detection", "Image Segmentation", "OCR (PaddleOCR)", "Tracking (DeepSORT/ByteTrack)", "SAHI", "Pose Estimation", "MediaPipe"],
    bars: [
      { name: "Object Detection & YOLOv11", level: 95 },
      { name: "Multi-Object Tracking", level: 92 },
      { name: "OCR & Text Recognition", level: 90 },
    ]
  },
  {
    title: "Deep Learning & AI",
    icon: "🧠",
    skills: ["PyTorch", "TensorFlow", "Keras", "CNN Architectures", "Vision Transformers (ViT)", "Transfer Learning", "DenseNet", "EfficientNet", "ResNet", "Model Optimization"],
    bars: [
      { name: "CNN Architectures & Training", level: 94 },
      { name: "Vision Transformers", level: 88 },
      { name: "Transfer Learning & Fine-tuning", level: 92 },
    ]
  },
  {
    title: "Edge AI & Deployment",
    icon: "⚡",
    skills: ["NVIDIA Jetson (Nano/Xavier)", "TensorRT", "ONNX", "Model Quantization", "CUDA", "OpenVINO", "TFLite", "Docker", "Kubernetes"],
    bars: [
      { name: "Jetson Edge Deployment", level: 93 },
      { name: "Model Optimization (TensorRT)", level: 90 },
      { name: "Real-time Inference Systems", level: 91 },
    ]
  },
  {
    title: "MLOps & Tools",
    icon: "🚀",
    skills: ["Git/GitHub", "MLflow", "Weights & Biases", "Docker", "CI/CD", "Linux", "Python", "Pytest", "Grafana", "Prometheus"],
    bars: [
      { name: "Experiment Tracking (W&B/MLflow)", level: 88 },
      { name: "CI/CD Pipeline Development", level: 86 },
      { name: "Model Versioning & Deployment", level: 90 },
    ]
  },
  {
    title: "Data & Visualization",
    icon: "📊",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Plotly", "Librosa", "OpenCV", "Scikit-learn", "Data Augmentation", "Feature Engineering"],
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
    title: "Quantum ML (Emerging)",
    icon: "⚛️",
    skills: ["PennyLane", "Qiskit", "Variational Quantum Circuits", "Quantum-Classical Hybrid Models"],
    bars: [
      { name: "Quantum Circuit Design", level: 70 },
      { name: "Hybrid QML Architectures", level: 72 },
      { name: "Quantum Simulation", level: 68 },
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
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 01-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 01.872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 012.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 012.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 01.872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 01-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 01-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 110-5.86 2.929 2.929 0 010 5.858z"/>
            </svg>
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
      
      {compact && (
        <div style={{textAlign: 'center', marginTop: '3rem'}}>
          <Link to="/skills" className="btn btn-primary" style={{display: 'inline-flex', alignItems: 'center', gap: '8px'}}>
            View All Skills
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
            </svg>
          </Link>
        </div>
      )}
    </section>
  );
}
