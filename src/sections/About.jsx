import { Link } from "react-router-dom";
import Icon from "../components/Icon";

const SOCIAL_LINKS = [
  { href: "https://github.com/rafi0020", label: "GitHub", icon: "home" },
  { href: "https://linkedin.com/in/rafi009", label: "LinkedIn", icon: "linkedin" },
  { href: "https://scholar.google.com/citations?user=ORj6wioAAAAJ&hl=en", label: "Google Scholar", icon: "scholar" },
];

const EVIDENCE = [
  { value: "20+", label: "AI & CV projects", detail: "Delivered end to end", icon: "repo" },
  { value: "10+", label: "Industrial deployments", detail: "Across multiple environments", icon: "briefcase" },
  { value: "CV + Edge AI", label: "Core engineering focus", detail: "Production and impact", icon: "gear" },
  { value: "Peer reviewed", label: "Research track record", detail: "Journal article and dataset", icon: "book" },
];

const CAPABILITIES = [
  { title: "Computer Vision Systems", description: "Detection, tracking, OCR, ANPR, face recognition, pose analysis, and multi-camera video analytics.", icon: "skills" },
  { title: "Model Engineering", description: "Dataset curation, training, evaluation, error analysis, and reproducible experimentation with PyTorch and TensorFlow.", icon: "gear" },
  { title: "Edge AI Deployment", description: "Real-time inference on NVIDIA Jetson, TensorRT optimization, GPU Linux systems, and resilient RTSP processing.", icon: "download" },
  { title: "MLOps & Data Engineering", description: "Annotation workflows, versioned data, experiment tracking, validation, monitoring, and delivery pipelines.", icon: "repo" },
  { title: "Systems Engineering", description: "FastAPI services, Docker, event queues, temporal rules, evidence generation, telemetry, and retryable integrations.", icon: "briefcase" },
  { title: "Research & Evaluation", description: "Applied research, subject-aware validation, explainability, signal processing, and peer-reviewed publication.", icon: "book" },
];

const ACHIEVEMENTS = [
  { title: "Production CV across industries", description: "Built systems for banking, industrial safety, logistics, manufacturing, and retail environments.", proof: "Multiple real-world domains", icon: "briefcase" },
  { title: "ISO 6346 container OCR", description: "Engineered an edge pipeline for container-code recognition with validation and telemetry integration.", proof: "Check digit + telemetry", icon: "repo" },
  { title: "Bangla ANPR system", description: "Developed track-centric plate recognition with oriented detection, OCR validation, voting, and deduplication.", proof: "Detection + OCR + tracking", icon: "gear" },
  { title: "Multi-camera video analytics", description: "Architected tracking pipelines with temporal rules, evidence queues, and reliable downstream delivery.", proof: "Real-time operational workflows", icon: "skills" },
  { title: "Jetson & TensorRT deployment", description: "Deployed and optimized computer-vision workloads for NVIDIA Jetson and multi-GPU Linux systems.", proof: "Edge and GPU production stacks", icon: "download" },
  { title: "Journal of Voice publication", description: "First-authored peer-reviewed research on Bengali voice-based mental-health assessment.", proof: "~91% accuracy · ~0.97 ROC-AUC", icon: "book" },
];

const BUILD_STAGES = [
  { number: "01", title: "Data", description: "Collect, label, audit, and version representative datasets." },
  { number: "02", title: "Modeling", description: "Train, validate, and analyze failure modes against strong baselines." },
  { number: "03", title: "Systems", description: "Connect inference to tracking, decision logic, APIs, and evidence." },
  { number: "04", title: "Deployment", description: "Ship to edge or GPU infrastructure with monitoring and recovery paths." },
];

const TRAINING = [
  { title: "Tools for Data Science", provider: "IBM · Coursera", date: "Sep 2024" },
  { title: "Generative AI Productivity Skills", provider: "Microsoft & LinkedIn", date: "Aug 2024" },
  { title: "Prompt Engineering for Generative AI", provider: "LinkedIn", date: "Jul 2024" },
  { title: "Brain-Computer Interface", provider: "Pantech.AI Academy", date: "Professional training" },
];

const COMMUNITY = [
  { title: "Red Crescent Youth Volunteer", organization: "Bangladesh Red Crescent Society", date: "Feb 2021 – Aug 2022" },
  { title: "Vice President, Arts and Crafts", organization: "BAF Shaheen College Dhaka Science Club", date: "2017 – 2018" },
];

function SocialLinks() {
  return (
    <ul className="about-socials" aria-label="Professional profiles">
      {SOCIAL_LINKS.map(({ href, label, icon }) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noreferrer">
            <Icon name={icon} size={17} />
            <span>{label}</span>
            <Icon name="externalLink" size={13} />
          </a>
        </li>
      ))}
    </ul>
  );
}

function CompactAbout() {
  return (
    <div className="about-compact">
      <div className="about-compact-profile">
        <img className="about-compact-avatar" src="/assets/images/profile.jpg" alt="MD Rafiul Islam" />
        <strong>MD Rafiul Islam</strong>
        <span>Machine Learning Engineer</span>
        <span>Dhaka, Bangladesh</span>
      </div>
      <div className="about-compact-copy">
        <span className="section-label"><Icon name="user" /> About</span>
        <h2>Engineering reliable vision systems for the real world</h2>
        <p>
          I&rsquo;m a Machine Learning Engineer specializing in production Computer
          Vision and Edge AI. I build systems for safety, logistics, manufacturing,
          banking surveillance, and retail—from data and model development to
          tracking, decision logic, APIs, and dependable edge deployment.
        </p>
        <p>
          Alongside industry delivery, I conduct peer-reviewed research in
          computational healthcare. That research discipline strengthens how I
          evaluate models, communicate uncertainty, and design trustworthy systems.
        </p>
        <div className="about-compact-actions">
          <Link to="/about" className="btn btn-primary">
            Know More
            <Icon name="arrowRight" />
          </Link>
        </div>
      </div>
      <dl className="about-compact-evidence" aria-label="Career highlights">
        {EVIDENCE.map(({ value, label, icon }) => (
          <div key={label}>
            <Icon name={icon} size={19} />
            <dt>{value}</dt>
            <dd>{label}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function About({ compact = false }) {
  return (
    <section id="about" className={`section about-section ${compact ? "about-section-compact" : ""}`}>
      <div className="container">
        {compact ? (
          <CompactAbout />
        ) : (
          <>
            <div className="about-intro-grid">
              <aside className="about-identity" aria-label="Profile summary">
                <img className="about-avatar" src="/assets/images/profile.jpg" alt="MD Rafiul Islam" />
                <div>
                  <h2>MD Rafiul Islam</h2>
                  <p className="about-role">Machine Learning Engineer</p>
                  <p className="about-specialty">Computer Vision · Edge AI</p>
                </div>
                <p className="about-identity-summary">
                  Building production-grade vision systems that connect dependable
                  engineering with measurable real-world impact.
                </p>
                <dl className="about-identity-facts">
                  <div>
                    <dt><Icon name="pin" size={16} /> Location</dt>
                    <dd>Dhaka, Bangladesh</dd>
                  </div>
                  <div>
                    <dt><Icon name="briefcase" size={16} /> Role</dt>
                    <dd>Machine Learning Engineer</dd>
                  </div>
                </dl>
              </aside>

              <div className="about-story">
                <span className="section-label"><Icon name="user" /> About me</span>
                <h1>Machine Learning Engineer specializing in production Computer Vision and Edge AI.</h1>
                <p>
                  I design and deploy reliable computer-vision systems for safety,
                  security, logistics, manufacturing, and retail. My work spans the
                  full delivery path—from data and model development to tracking,
                  temporal decision logic, APIs, evidence generation, and edge inference.
                </p>
                <p>
                  Alongside production engineering, I conduct peer-reviewed research in
                  computational healthcare. That research discipline shapes how I evaluate
                  models, communicate uncertainty, and build systems that remain trustworthy
                  outside a controlled experiment.
                </p>
                <SocialLinks />
              </div>
            </div>

            <dl className="about-evidence" aria-label="Professional highlights">
              {EVIDENCE.map(({ value, label, detail, icon }) => (
                <div key={label} className="about-evidence-item">
                  <span className="about-evidence-icon"><Icon name={icon} size={23} /></span>
                  <div>
                    <dt>{value}</dt>
                    <dd>{label}</dd>
                    <span>{detail}</span>
                  </div>
                </div>
              ))}
            </dl>

            <section className="about-block" aria-labelledby="capabilities-title">
              <div className="about-block-heading">
                <span className="section-label">Core capabilities</span>
                <h2 id="capabilities-title">Engineering from model to production</h2>
              </div>
              <div className="about-capability-list">
                {CAPABILITIES.map(({ title, description, icon }) => (
                  <article key={title} className="about-capability-row">
                    <span className="about-row-icon"><Icon name={icon} size={21} /></span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="about-block" aria-labelledby="achievements-title">
              <div className="about-block-heading">
                <span className="section-label">Selected achievements</span>
                <h2 id="achievements-title">Evidence from production and research</h2>
                <p>Representative outcomes that show how the work performs beyond a model notebook.</p>
              </div>
              <div className="about-achievement-grid">
                {ACHIEVEMENTS.map(({ title, description, proof, icon }) => (
                  <article key={title} className="about-achievement">
                    <span className="about-achievement-icon"><Icon name={icon} size={23} /></span>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                      <span className="about-proof"><strong>Proof</strong>{proof}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="about-method-grid" aria-label="Engineering method and research foundation">
              <div className="about-method-card">
                <div className="about-block-heading">
                  <span className="section-label">How I build</span>
                  <h2>Reliable delivery, end to end</h2>
                </div>
                <ol className="about-build-list">
                  {BUILD_STAGES.map(({ number, title, description }) => (
                    <li key={title}>
                      <span>{number}</span>
                      <div><h3>{title}</h3><p>{description}</p></div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="about-method-card">
                <div className="about-block-heading">
                  <span className="section-label">Research foundation</span>
                  <h2>Evaluation grounded in evidence</h2>
                </div>
                <p>
                  My research covers Bengali voice-based mental-health assessment,
                  spectrogram learning, Vision Transformers, explainability, and
                  noise-robust evaluation. It strengthens the way I design experiments
                  and validate production decisions.
                </p>
                <div className="about-research-links">
                  <a href="https://doi.org/10.1016/j.jvoice.2024.10.010" target="_blank" rel="noreferrer">
                    <Icon name="doc" size={18} /> Journal of Voice article <Icon name="externalLink" size={13} />
                  </a>
                  <a href="https://data.mendeley.com/datasets/s5j25b5tjk/1" target="_blank" rel="noreferrer">
                    <Icon name="repo" size={18} /> Bengali voice dataset <Icon name="externalLink" size={13} />
                  </a>
                </div>
              </div>
            </section>

            <section className="about-support" aria-labelledby="support-title">
              <div className="about-block-heading">
                <span className="section-label">Selected training & community</span>
                <h2 id="support-title">Continuous learning and service</h2>
              </div>
              <div className="about-support-grid">
                <div>
                  <h3>Training & certifications</h3>
                  <ul className="about-simple-list">
                    {TRAINING.map(({ title, provider, date }) => (
                      <li key={title}>
                        <Icon name="cap" size={18} />
                        <div><strong>{title}</strong><span>{provider} · {date}</span></div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Community & leadership</h3>
                  <ul className="about-simple-list">
                    {COMMUNITY.map(({ title, organization, date }) => (
                      <li key={title}>
                        <Icon name="user" size={18} />
                        <div><strong>{title}</strong><span>{organization} · {date}</span></div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </section>
  );
}
