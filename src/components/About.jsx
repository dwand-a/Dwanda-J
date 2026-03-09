import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-header">
        <h2>About Me</h2>
        <p>
          I'm a dedicated Information Technology student at Northern Caribbean
          University with a passion for front-end development and creating
          secure, user-friendly web applications.
        </p>
      </div>

      <div className="about-card">
        <h3>Education & Experience</h3>

        <ul className="about-list">
          <li>
            <strong>Northern Caribbean University</strong> - Bachelor of
            Science in Information Technology (Expected 2026) | GPA: 3.5
          </li>

          <li>
            <strong>Dean's List</strong> - Northern Caribbean University
            (2022-2023, 2023-2024)
          </li>

          <li>
            <strong>Cisco Certificate</strong> - Introduction to
            Cybersecurity
          </li>

          <li>
            <strong>Church Street Pharmacy</strong> - Part-Time (2023-2025):
            Resolved complex customer issues efficiently, maintained accurate
            records, and strengthened communication skills.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
