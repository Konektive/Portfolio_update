import React from "react";
import styles from "./DesktopNav.module.css";
import logoimage from "../../assets/logo.png";

const DesktopNav = () => {
  return (
    <nav className={styles.desktop}>
      <div className={styles.logo}>
        <h2>Krystian.S</h2>
      </div>
      <div className={styles.navigation}>
        <a href="#myjourney">My journey</a>
        <a href="#projects">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default DesktopNav;
