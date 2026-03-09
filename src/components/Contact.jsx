import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {

  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_yqor03m",     // replace with your EmailJS service ID
      "template_t9qaesf",    // replace with your EmailJS template ID
      form.current,
      "1zD18njLqUPhDhlr6"      // replace with your EmailJS public key
    )
    .then(
      () => {
        setStatus("Message sent successfully!");
        form.current.reset();
      },
      () => {
        setStatus("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <section className="contact-page">

      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>
          Have a question or want to work together? I'd love to hear from you.
          Fill out the form below or reach out through any of the contact methods.
        </p>
      </div>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <h3>Contact Information</h3>

          <div className="info-item">
            <FaEnvelope className="info-box" />
            <div>
              <h4>Email</h4>
              <p>pennantsd@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <FaPhoneAlt className="info-box" />
            <div>
              <h4>Phone</h4>
              <p>+1 (876) 349-9062</p>
            </div>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="info-box" />
            <div>
              <h4>Location</h4>
              <p>May Pen, Clarendon</p>
            </div>
          </div>

          <div className="why-connect">
            <h4>Why Connect?</h4>

            <ul>
              <li>Collaborate on exciting projects</li>
              <li>Discuss internship opportunities</li>
              <li>Share knowledge and learn together</li>
              <li>Explore potential partnerships</li>
            </ul>

          </div>

        </div>


        {/* RIGHT SIDE FORM */}

        <div className="contact-form">

          <form ref={form} onSubmit={sendEmail}>

            <label>Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="your.email@example.com"
              required
            />

            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="What's this about?"
              required
            />

            <label>Message</label>
            <textarea
              name="message"
              placeholder="Tell me more about your message..."
              rows="5"
              required
            ></textarea>

            <button type="submit" className="send-btn">
              <FaPaperPlane /> Send Message
            </button>

            {status && <p className="form-status">{status}</p>}

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;
