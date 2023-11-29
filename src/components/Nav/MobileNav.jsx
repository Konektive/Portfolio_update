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
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (<>
      <button onClick={toggleMenu}>
        <GiHamburgerMenu />
      </button>
    <div className={`${styles.mobile} ${isOpen ? styles.active : ''}`}>
        <a
          href="#home"
          onClick={() => {
            setMenu("home");
          }}
        >
          <AiFillHome />
        </a>
        <a
          href="#myjourney"
          onClick={() => {
            setMenu("story");
          }}
        >
          <BsFillCalendarDateFill />
        </a>
        <a
          href="#projects"
          onClick={() => {
            setMenu("work");
          }}
        >
          <BsPersonWorkspace />
        </a>
        <a
          href="#about"
          onClick={() => {
            setMenu("about");
          }}
        >
          <SiAboutdotme />
        </a>
        <a
          href="#contact"
          onClick={() => {
            setMenu("contact");
          }}
        >
          <HiMail />
        </a>
      </div>
      </>
  );
};

export default MobileNav;
