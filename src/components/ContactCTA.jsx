import "./ContactCTA.css";
import { useNavigate } from "react-router-dom";

const ContactCTA = () => {
  const navigate = useNavigate();

  const gotoContact = () => {
    navigate("/contact");
  };

  return (
    <section className="cta" id="contact">
      <div className="cta-content">
        <h2>Interested in Collaborating?</h2>

        <p>
          I'm always open to discussing new projects, opportunities, or
          partnerships. Let's create something amazing together!
        </p>

        <button onClick={gotoContact} className="cta-btn">
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default ContactCTA;
