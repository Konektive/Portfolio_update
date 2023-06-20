import React from "react";
import styles from "./Footer.module.css";
import { BsTelephone,BsHouseDoor } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        <h2>Usefull links</h2>
      </div>
      <div className={styles.contact}>
        <p>Direct Contact</p>
        <p>
          <SiGmail />{" "}
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=krystiansporysz@gmail.com">
            Krystiansporysz@gmail.com
          </a>
        </p>
        <p>
          <BsTelephone />
          695444638
        </p>
        <p>
          <BsHouseDoor/>
          Wrocław, ul. Kołłątaja 27/26
        </p>
      </div>
    </div>
  );
};

export default Footer;

{
  /* <a href="mailto:krystiansporysz@gmail.com">krystiansporysz@gmail.com</a>
<a href="tel:+48695444638">695444638</a> */
}
