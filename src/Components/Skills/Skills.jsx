import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const skills = [
  { name: "MongoDB", level: 85 },
  { name: "Express.js", level: 80 },
  { name: "React.js", level: 80 },
  { name: "Node.js", level: 85 },
  { name: "JavaScript", level: 92 },
  { name: "HTML & CSS", level: 90 },
  { name: "BootStrap", level: 90 },
  { name: "Java", level: 65 },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">⚡ My Superpowers</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                initial={{ width: "0%" }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
