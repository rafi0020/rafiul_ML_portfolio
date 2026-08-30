import { useState } from "react";
import Icon from "../components/Icon";

const EMAIL = "rafiulislam1921@gmail.com";

const CHANNELS = [
  { href: `mailto:${EMAIL}`, icon: "mail", label: "Email", detail: EMAIL },
  { href: "tel:+8801679899117", icon: "phone", label: "Phone", detail: "+880 1679-899117" },
  { href: "https://wa.me/8801679899117", icon: "chat", label: "WhatsApp", detail: "Message me" },
  { href: "https://linkedin.com/in/rafi009", icon: "linkedin", label: "LinkedIn", detail: "in/rafi009" },
  { href: "https://github.com/rafi0020", icon: "github", label: "GitHub", detail: "@rafi0020" },
  { href: "https://scholar.google.com/citations?user=ORj6wioAAAAJ&hl=en", icon: "scholar", label: "Google Scholar", detail: "Publications" },
  { href: "https://www.researchgate.net/profile/Rafiul-Islam-13", icon: "book", label: "ResearchGate", detail: "Profile" },
];

export default function Contact({ asPage = false }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const Heading = asPage ? "h1" : "h2";

  const update = (field) => (event) =>
    setForm((prev) => ({ ...prev, [field]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();

    // The visitor's own address used to be collected and then dropped, which
    // left no way to reply. It now leads the message body.
    const subject = `Portfolio enquiry from ${form.name || "a visitor"}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      "",
      form.message,
    ].join("\n");

    const composeUrl = new URL("https://mail.google.com/mail/");
    composeUrl.search = new URLSearchParams({
      view: "cm", fs: "1", to: EMAIL, su: subject, body,
    }).toString();
    const composeWindow = window.open(composeUrl.toString(), "_blank", "noopener,noreferrer");
    setStatus(composeWindow
      ? "Your message is ready in Gmail. Review it there, then press Send."
      : `The compose window was blocked. Email ${EMAIL} directly.`);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <Icon name="mail" />
            Contact
          </span>
          <Heading className="section-title">Let&rsquo;s connect</Heading>
          <p className="section-subtitle">
            Open to opportunities, collaborations, and interesting conversations
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <h2>Get in touch</h2>
            <ul className="contact-links">
              {CHANNELS.map(({ href, icon, label, detail }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="contact-link"
                    {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    <span className="contact-link-icon">
                      <Icon name={icon} size={22} />
                    </span>
                    <span className="contact-link-text">
                      <strong>{label}</strong>
                      <span className="contact-link-detail">{detail}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <p className="form-note">
              This form opens Gmail with your message pre-filled. Nothing is stored
              by this website, and you review the message before sending.
            </p>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                className="form-input"
                placeholder="Your name"
                value={form.name}
                onChange={update("name")}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                className="form-input"
                placeholder="you@example.com"
                value={form.email}
                onChange={update("email")}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                className="form-input form-textarea"
                placeholder="Tell me about your project or question..."
                value={form.message}
                onChange={update("message")}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              <Icon name="mail" size={18} />
              Continue in Gmail
            </button>
            {status && <p className="form-status" role="status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
