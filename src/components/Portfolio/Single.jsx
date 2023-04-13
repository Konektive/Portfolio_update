import React from "react";
import styles from "./Single.module.css";

const Single = () => {
  return (
    <>
      <a className={styles.glass} href="https://github.com/">
        <div className={styles.image}></div>
        <div className="description">
          <h3>Title</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            voluptatum sunt ea architecto vitae exercitationem.
          </p>
        </div>
      </a>
    </>
  );
};

export default Single;
