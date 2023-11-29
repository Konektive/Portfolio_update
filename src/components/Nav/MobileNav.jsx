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
  const [menu, setMenu] = useState("home");
  const modal = document.querySelector('[data-modal]')

  return (
    <div className={styles.mobile}>
      <button onClick={()=>{
        modal.show()
      }}>
        <GiHamburgerMenu />
      </button>

      <dialog data-modal>
        <a
          href="#home"
          className={menu === "home" ? styles.active : undefined}
          onClick={() => {
            setMenu("home");
          }}
        >
          <AiFillHome />
        </a>
        <a
          href="#myjourney"
          className={menu === "story" ? styles.active : undefined}
          onClick={() => {
            setMenu("story");
          }}
        >
          <BsFillCalendarDateFill />
        </a>
        <a
          href="#projects"
          className={menu === "work" ? styles.active : undefined}
          onClick={() => {
            setMenu("work");
          }}
        >
          <BsPersonWorkspace />
        </a>
        <a
          href="#about"
          className={menu === "about" ? styles.active : undefined}
          onClick={() => {
            setMenu("about");
          }}
        >
          <SiAboutdotme />
        </a>
        <a
          href="#contact"
          className={menu === "contact" ? styles.active : undefined}
          onClick={() => {
            setMenu("contact");
          }}
        >
          <HiMail />
        </a>
      </dialog>
    </div>
  );
};

export default MobileNav;
