import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
import About from "../../Components/AboutMe/Aboutme";
import Skills from "../../Components/Skills/Skills";
import Projects from "../../Components/Projects/projects";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section id="home" className="home">
        <motion.h1
          className="hello"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }} // Triggers when 20% of the section is in view
        >
          Hello <span className="wave">👋</span>
        </motion.h1>

        <motion.h2
          className="typing-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <span className="i-am">I am </span>
          <span className="animated-text">
            <Typewriter
              words={["Mohith Reddy", "a Full Stack Developer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </span>
        </motion.h2>

        <motion.h3
          className="mern-role"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          MERN Stack Developer
        </motion.h3>

        <motion.div
          className="mern-icons"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <SiMongodb className="mern-icon mongodb" title="MongoDB" />
          <SiExpress className="mern-icon express" title="Express.js" />
          <SiReact className="mern-icon react" title="React.js" />
          <SiNodedotjs className="mern-icon node" title="Node.js" />
        </motion.div>
      </section>

      <About />
      <Skills />
      <Projects />
    </>
  );
};

export default Home;
