import React from "react";
import { motion } from "framer-motion";
import qrcode from "../../assets/qr-code.jpeg";
import "./Projects.css";

const projects = [
  {
    title: "QR Code Generator",
    image: qrcode,
    description: "Generate QR codes for text or files with ease.",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "QR Code Generator",
    image: qrcode,
    description: "Generate QR codes for text or files with ease.",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "QR Code Generator",
    image: qrcode,
    description: "Generate QR codes for text or files with ease.",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "QR Code Generator",
    image: qrcode,
    description: "Generate QR codes for text or files with ease.",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "QR Code Generator",
    image: qrcode,
    description: "Generate QR codes for text or files with ease.",
    demoLink: "#",
    githubLink: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <motion.h2 className="projects-heading">Projects 🚀</motion.h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-overlay">
              <motion.div
                className="project-info"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-buttons">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
