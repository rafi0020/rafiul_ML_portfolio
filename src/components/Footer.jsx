
import { Link } from "react-router-dom";

export default function Footer(){
  const currentYear = new Date().getFullYear();
  const baseUrl = import.meta.env.BASE_URL || "/";
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="navbar-logo" style={{width: '32px', height: '32px', fontSize: '14px'}}>MR</div>
            <span>MD Rafiul Islam</span>
          </div>
          <p className="footer-description">
            Applied AI Engineer &amp; Researcher building production-grade
            Computer Vision and Edge AI systems. Open to collaborations
            and exciting opportunities.
          </p>
          <div className="footer-social">
            <a href="https://github.com/rafi0020" className="social-link" target="_blank" rel="noreferrer" title="GitHub">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/rafi009" className="social-link" target="_blank" rel="noreferrer" title="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
            </a>
            <a href="mailto:rafiulislam1921@gmail.com" className="social-link" title="Email">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                <path d="M.05 3.555A2 2 0 012 2h12a2 2 0 011.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 002 14h12a2 2 0 001.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
              </svg>
            </a>
            <a href="tel:+8801679899117" className="social-link" title="Call">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <div className="footer-links">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/projects" className="footer-link">Projects</Link>
            <Link to="/research" className="footer-link">Research</Link>
            <Link to="/skills" className="footer-link">Skills</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>
        </div>

        <div className="footer-column">
          <h4>Contact Info</h4>
          <div className="footer-links">
            <a href="mailto:rafiulislam1921@gmail.com" className="footer-link">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style={{marginRight: '8px'}}>
                <path d="M.05 3.555A2 2 0 012 2h12a2 2 0 011.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 002 14h12a2 2 0 001.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
              </svg>
              rafiulislam1921@gmail.com
            </a>
            <a href="tel:+8801679899117" className="footer-link">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style={{marginRight: '8px'}}>
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
              +880 1679-899117
            </a>
            <div className="footer-link" style={{cursor: 'default'}}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style={{marginRight: '8px'}}>
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
              </svg>
              368/2-A, Ahammednagar, Paikpara, Mirpur-1, Dhaka-1216, Bangladesh
            </div>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © {currentYear} MD Rafiul Islam. All rights reserved.
        </p>
        <div className="footer-tech">
          {/* <span>Built with</span>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="#61DAFB">
            <circle cx="8" cy="8" r="1.5"/>
            <ellipse cx="8" cy="8" rx="7" ry="3" fill="none" stroke="#61DAFB" strokeWidth="0.8"/>
            <ellipse cx="8" cy="8" rx="7" ry="3" fill="none" stroke="#61DAFB" strokeWidth="0.8" transform="rotate(60 8 8)"/>
            <ellipse cx="8" cy="8" rx="7" ry="3" fill="none" stroke="#61DAFB" strokeWidth="0.8" transform="rotate(120 8 8)"/>
          </svg>
          <span>React + Vite</span> */}
        </div>
      </div>
    </footer>
  );
}
