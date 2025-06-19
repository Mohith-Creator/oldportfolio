import React from "react";
import { motion } from "framer-motion";
import { SiMongodb, SiExpress } from "react-icons/si";
import ProfilePic from "../../assets/react.svg";
import HTML5 from "../../assets/html5-icon.svg";
import CSS3 from "../../assets/css3-icon.svg";
import BOOTSTRAP from "../../assets/bootstrap-icon.svg";
import JAVASCRIPT from "../../assets/javascript-icon.svg";
import NODEJS from "../../assets/nodejs-icon.svg";
import REACTJS from "../../assets/react-icon.svg";
import "./aboutme.css";

const About = () => {
  return (
    <section id="about" className="about">
      <motion.div
        className="about-content"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h2
          className="about-heading"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          About Me 🚀
        </motion.h2>

        <motion.p
          className="about-text"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Hey there! I'm <span className="highlight">Mohith Reddy</span>, a
          passionate <span className="highlight">MERN Stack Developer</span> who
          loves crafting seamless digital experiences. From designing
          eye-catching user interfaces to building powerful backends, I thrive
          on turning ideas into reality.
        </motion.p>

        <motion.ul
          className="about-list"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <li>💡 Solving complex problems with simple, elegant code.</li>
          <li>🎨 Creating intuitive and engaging UI/UX experiences.</li>
          <li>🤖 Exploring AI-driven web applications and emerging tech.</li>
        </motion.ul>

        <motion.div
          className="skills"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h3>⚡ My Superpowers:</h3>
          <div className="skills-list">
            <SiMongodb
              className="mern-icon mongodb"
              title="MongoDB"
              size={35}
            />
            <SiExpress
              className="mern-icon express"
              title="Express.js"
              size={35}
            />
            <img src={REACTJS} alt="REACTJS" width="34" height="34" />
            <img src={NODEJS} alt="NODEJS" width="34" height="34" />
            <img src={HTML5} alt="HTML5" width="34" height="34" />
            <img src={CSS3} alt="CSS3" width="34" height="34" />
            <img src={BOOTSTRAP} alt="Bootstrap" width="34" height="34" />
            <img src={JAVASCRIPT} alt="JavaScript" width="34" height="34" />
          </div>
        </motion.div>
        <motion.p
          className="about-ending"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          When I'm not coding, you’ll find me experimenting with new tech,
          brainstorming innovative ideas, or maybe just enjoying a good cup of
          coffee ☕.
        </motion.p>
      </motion.div>

      <motion.div
        className="about-image"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <img src={ProfilePic} alt="Mohith Reddy" className="profile-pic" />
      </motion.div>
    </section>
  );
};

export default About;