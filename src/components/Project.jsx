import CampusElectCover from "../assets/CampusElectCover.png";
import FreeLanceDesignCover from "../assets/FreeLanceDesignCover.png";
import GigBoardCover from "../assets/GigBoardCover.png";
import DwandaPortfolio from "../assets/DwandaPortfolio.png";
import "./Project.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useEffect } from "react";


const Project = () => {

  // Fade-in scroll animation
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <section className="project-section">
      <h1 className="project-title">My Projects</h1>
      <p className="project-subtitle">
        A collection of projects showcasing my front-end development skills and design work.
      </p>

      <div className="project-container">

        {/* CampusElect */}
        <div className="project-card CampusElect">
          <img
            src={CampusElectCover} alt="CampusElect"/>
          <div className="project-content">
            <h3>CampusElect - Secure Electronic Voting System</h3>
            <p>
              A secure voting platform built with React, Firebase.
              Features authentication, role-based access control and secure vote tallying.
            </p>

            <div className="project-links">
              <a
                href="https://github.com/dwand-a/CampusElect-2.0.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> Code
              </a>
            </div>
          </div>
        </div>

        {/* GigBoard */}
        <div className="project-card GigBoard">
          <img
            src={GigBoardCover} alt="GigBoard" />
          <div className="project-content">
            <h3>GigBoard - Student E-commerce Platform</h3>
            <p>
              CHIPS Club Website competition. Student marketplace for hand-made products.
              Built using HTML, CSS and JavaScript with GitHub collaboration.
            </p>

            <div className="project-links">
              <a
                href="https://github.com/Ikarudo/GigBoard.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> Code
              </a>
            </div>
          </div>
        </div>

        {/* Freelance Design */}
        <div className="project-card freelance-design">
          <img
            src={FreeLanceDesignCover} alt="Freelance Design" />
          <div className="project-content">
            <h3>Freelance Digital Design</h3>
            <p>
              Ongoing freelance web and graphic design projects using Canva and branding tools.
            </p>
          </div>
        </div>

        {/* Portfolio */}
        <div className="project-card">
          <img
            src={DwandaPortfolio} alt="Portfolio"/>
          <div className="project-content">
            <h3>Dwanda's Portfolio Website</h3>
            <p>
              Personal portfolio showcasing projects, skills and front-end development abilities.
              Built with React and modern CSS animations.
            </p>

            <div className="project-links">
              <a
                href="https://github.com/dwand-a/Dwanda-s-Portfolio.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> Code
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Project;
