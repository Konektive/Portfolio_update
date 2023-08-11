import React from "react";
import styles from './Socials.module.css'
import linked from "../../assets/linkedIcon.png";
import insta from "../../assets/instaIcon.png";
import git from "../../assets/gitIcon.png";

const Socials = () => {
  return (
    <div className={styles.socials}>
      <a href="https://www.linkedin.com/in/krystian-sporysz/" target="_blank">
        <img src={linked} alt="" />
      </a>
      <a href="https://github.com/Konektive" target="_blank">
        <img src={git} alt="" />
      </a>
      <a href="https://www.instagram.com/krystian_sporysz/" target="_blank">
        <img src={insta} alt="" />
      </a>
    </div>
  );
};

export default Socials;
