import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <section>
      <h2>
        <a href="mailto:krystiansporysz@gmail.com">krystiansporysz@gmail.com</a>
      </h2>
      <h2><a href="tel:+48695444638">+48 695444638</a></h2>
      </section>
    </div>
  );
};

export default Footer;
