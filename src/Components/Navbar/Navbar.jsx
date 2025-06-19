import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle smooth scrolling with delay
  const handleNavClick = (e, targetId) => {
    e.preventDefault();

    setTimeout(() => {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50, // Adjust offset if needed
          behavior: "smooth",
        });
      }
    }, 200); // Delay of 200ms
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <a href="/" className="logo">
        &lt; Mohith Reddy /&gt;
      </a>
      <ul className="nav-links">
        <li>
          <a href="#home" onClick={(e) => handleNavClick(e, "#home")}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => handleNavClick(e, "#about")}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => handleNavClick(e, "#projects")}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
