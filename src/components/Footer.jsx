import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          © 2026 Dwanda Pennants. All rights reserved.
        </div>

        <div className="footer-right">

          {/* GitHub */}
          <a
            href="https://github.com/dwand-a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="http://linkedin.com/in/dwanda-pennants-6b422b331"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* Email */}
          <a
            href="mailto:pennantsd@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

