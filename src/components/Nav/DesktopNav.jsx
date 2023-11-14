import React from "react";
import styles from "./DesktopNav.module.css";
import logo from '../../assets/logo.svg'
import CV from '../../assets/Krystian Sporysz CV.pdf'

const DesktopNav = () => {
  return (
    <nav className={styles.desktop}>
      <div className={styles.logo}>
      <img src={logo} alt="Signature" />
      </div>
      <div className={styles.navigation}>
        <a href="#myjourney">My journey</a>
        <a href="#projects">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href={CV} target="_blank">CV</a>
      </div>
    </nav>
  );
};

export default DesktopNav;
