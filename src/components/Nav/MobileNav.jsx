import React from "react";
import { useState } from "react";
import styles from "./MobileNav.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <nav className={styles.mobileNavigation}>
      <button className={styles.menuButton} onClick={toggleMenu}>
        <GiHamburgerMenu />
      </button>
      <div className={`${styles.mobile} ${isOpen && styles.active}`}>
        <a
          href="#home"
          onClick={() => {
            toggleMenu();
          }}
        >
          <p>Back to the Top</p>
        </a>
        <a
          href="#myjourney"
          onClick={() => {
            toggleMenu();
          }}
        >
          <p>My Journey</p>
        </a>
        <a
          href="#projects"
          onClick={() => {
            toggleMenu();
          }}
        >
          <p>Portfolio</p>
        </a>
        <a
          href="#about"
          onClick={() => {
            toggleMenu();
          }}
        >
          <p>About Me!</p>
        </a>
        <a
          href="#contact"
          onClick={() => {
            toggleMenu();
          }}
        >
          <p>Contact ME!</p>
        </a>
      </div>
      </nav>

  );
};

export default MobileNav;
