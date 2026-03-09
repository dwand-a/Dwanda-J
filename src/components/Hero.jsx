import profile from "../assets/Profile.jpeg";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {

  const navigate = useNavigate();

  const gotoProjects = () => {
    navigate("/project");
  };
  
  const gotoContact = () => {
    navigate("/contact");
  };

  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <h1>
          Hi, I am <span>Dwanda Pennants</span>
        </h1>

        <h3>Front-End Web Developer</h3>

        <p>
          Aspiring front-end developer with practical experience developing
          responsive and secure web applications using React and modern
          JavaScript. Adept at building intuitive user interfaces and
          collaborating in team-based environments.
        </p>

        <div className="buttons">
          <button className="primary" onClick={gotoProjects}>
            View My Work
          </button>

          <button className="secondary" onClick={gotoContact}>
            Get in Touch
          </button>
        </div>
      </div>

      <div className="hero-image">
        <img src={profile} alt="Dwanda Pennants" />
      </div>
    </section>
  );
};

export default Hero;

