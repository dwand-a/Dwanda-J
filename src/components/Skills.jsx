import "./Skills.css";
import { FaCode, FaPalette, FaLock, FaShieldAlt, FaUsers, FaCheckCircle } from "react-icons/fa";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-header" data-aos="fade-up">
        <h2>Skills & Expertise</h2>
        <p>Technical skills and competencies I've developed</p>
      </div>

      <div className="skills-grid">

        <div className="skill-card" data-aos="fade-up">
          <FaCode className="icon" />
          <h3>React.js & JavaScript</h3>
          <p>Building modern, responsive web applications with React and JavaScript</p>
        </div>

        <div className="skill-card" data-aos="fade-up" data-aos-delay="100">
          <FaPalette className="icon" />
          <h3>UI/UX Design</h3>
          <p>Creating intuitive user interfaces with focus on user experience principles</p>
        </div>

        <div className="skill-card" data-aos="fade-up" data-aos-delay="200">
          <FaLock className="icon" />
          <h3>Authentication & Access Control</h3>
          <p>Implementing secure authentication systems and role-based access</p>
        </div>

        <div className="skill-card" data-aos="fade-up">
          <FaShieldAlt className="icon" />
          <h3>Cybersecurity</h3>
          <p>Cisco certified in Introduction to Cybersecurity fundamentals</p>
        </div>

        <div className="skill-card" data-aos="fade-up" data-aos-delay="100">
          <FaUsers className="icon" />
          <h3>Team Collaboration</h3>
          <p>Effective communication and collaboration in development environments</p>
        </div>

        <div className="skill-card" data-aos="fade-up" data-aos-delay="200">
          <FaCheckCircle className="icon" />
          <h3>Problem Solving</h3>
          <p>Analytical thinking and adaptability in tackling complex challenges</p>
        </div>

      </div>

      <div className="skills-bottom" data-aos="fade-up">
        <div className="bottom-card">
          <h4>Languages & Frameworks</h4>
          <div className="tags">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Firebase</span>
          </div>
        </div>

        <div className="bottom-card">
          <h4>Tools & Platforms</h4>
          <div className="tags">
            <span>Git & GitHub</span>
            <span>Canva</span>
            <span>VS Code</span>
            <span>Firebase</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
