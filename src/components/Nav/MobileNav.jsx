import React from "react";
import { useState } from "react";
import styles from "./MobileNav.module.css";
import { AiFillHome } from "react-icons/ai";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BsPersonWorkspace } from "react-icons/bs";
import { SiAboutdotme } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (<>
      <button className={styles.menuButton} onClick={toggleMenu}>
        <GiHamburgerMenu />
      </button>
    <div className={`${styles.mobile} ${isOpen ? styles.active : ''}`}>
        <a
          href="#home"
          onClick={() => {
            setMenu("home");
          }}
        >
          
          <p>Back to the Top</p>
        </a>
        <a
          href="#myjourney"
          onClick={() => {
            setMenu("story");
          }}
        >
          <p>My Journey</p>
        </a>
        <a
          href="#projects"
          onClick={() => {
            setMenu("work");
          }}
        >
          <p>Portfolio</p>
        </a>
        <a
          href="#about"
          onClick={() => {
            setMenu("about");
          }}
        >
          <p>About Me!</p>
        </a>
        <a
          href="#contact"
          onClick={() => {
            setMenu("contact");
          }}
        >
          <p>Contact ME!</p>
        </a>
      </div>
      </>
  );
};

export default MobileNav;
