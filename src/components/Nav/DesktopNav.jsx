import React from "react";
import styles from "./DesktopNav.module.css";
import logo from '../../assets/Logo.svg'
import CV from '../../assets/Krystian Sporysz CV.pdf'

const DesktopNav = () => {
  return (
    <nav className={styles.desktop}>
      <div className={styles.logo}>
      <img src={logo} alt="Signature" />
      </div>
      <div className={styles.navigation}>
        <a aria-label="Check how i got into IT" href="#myjourney">My journey</a>
        <a aria-label="Check my projects" href="#projects">Work</a>
        <a aria-label="Check about me section" href="#about">About</a>
        <a aria-label="Contact me here" href="#contact">Contact</a>
        <a aria-label="Download my CV" href={CV} target="_blank">CV</a>
      </div>
    </nav>
  );
};

export default DesktopNav;
