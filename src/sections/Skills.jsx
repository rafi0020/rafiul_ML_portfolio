import Icon from "../components/Icon";
import SectionCTA from "../components/SectionCTA";

const skillCategories = [
  {
    title: "Computer Vision",
    icon: "skills",
    skills: [
      "YOLO11", "YOLO-OBB", "YOLOE", "OpenCV", "Object Detection",
      "Instance Segmentation", "Pose Estimation", "PaddleOCR", "Bangla ANPR",
      "InsightFace", "FAISS", "ByteTrack", "BoT-SORT", "MediaPipe",
      "Depth-Anything-V2"
    ]
  },
  {
    title: "Video Analytics & Reliability",
    icon: "gear",
    skills: [
      "Multi-camera RTSP", "ROI & Line-Crossing Logic", "Temporal Voting",
      "State Machines", "EMA & Hysteresis", "Session Deduplication",
      "Evidence Generation", "SQLite WAL Queues", "Retryable Senders",
      "Camera Health & Tamper Signals"
    ]
  },
  {
    title: "Edge AI & Deployment",
    icon: "arrowRight",
    skills: [
      "NVIDIA Jetson", "TensorRT", "ONNX", "FP16/INT8 Optimization",
      "CUDA", "GStreamer", "Docker", "Linux", "Multi-GPU Inference",
      "Multiprocessing", "Threaded Pipelines", "Performance Profiling"
    ]
  },
  {
    title: "Deep Learning & Research",
    icon: "book",
    skills: [
      "PyTorch", "TensorFlow", "CNNs", "Vision Transformers", "DenseNet",
      "GRU", "Transfer Learning", "wav2vec 2.0", "WavLM", "Whisper",
      "Subject-independent Evaluation", "Grad-CAM", "LIME", "SHAP"
    ]
  },
  {
    title: "APIs, Data & MLOps",
    icon: "repo",
    skills: [
      "Python", "FastAPI", "REST APIs", "SQLite", "PostgreSQL", "Pandas",
      "NumPy", "Scikit-learn", "Weights & Biases", "MLflow", "Git/GitHub",
      "Dataset Versioning", "Configuration-driven Systems"
    ]
  },
  {
    title: "Applied Domains",
    icon: "briefcase",
    skills: [
      "Industrial Safety", "Banking Surveillance", "Ports & Logistics",
      "Manufacturing Inspection", "Retail Analytics", "Computational Healthcare",
      "OCR Validation", "Open-vocabulary Detection", "Client UAT",
      "On-site Integration"
    ]
  }
];

export default function Skills({ compact = false, asPage = false }) {
  const displayedCategories = compact ? skillCategories.slice(0, 3) : skillCategories;
  const Heading = asPage ? "h1" : "h2";

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <Icon name="gear" />
            Technical capabilities
          </span>
          <Heading className="section-title">Production-focused AI stack</Heading>
          <p className="section-subtitle">
            Tools and methods demonstrated through deployed systems and research
          </p>
        </div>

        <div className="skills-container">
          {displayedCategories.map((category, index) => (
            <div
              key={category.title}
              className="skill-category"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-category-header">
                <div className="skill-category-icon" aria-hidden="true">
                  <Icon name={category.icon} size={24} />
                </div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>

              <div className="skill-items">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {compact && <SectionCTA to="/skills">View all capabilities</SectionCTA>}
    </section>
  );
}
