import React from "react";
import styles from "./Single.module.css";

const Single = () => {
  return (
    <>
    <div className={styles.wrap}>
      <div class={styles.card}>
        <div className={styles.image}></div>
        <div>
          <h2>Title</h2>
          <h3>Tech Stack:</h3>
          <p>
            Soon you can invest in Sid Harman's new attractive property, set in
            the heart of Athens.
          </p>
        </div>
      </div>
      </div>

      <div className={styles.wrap}>
      <div class={styles.card}>
        <div className={styles.image}></div>
        <div>
          <h2>Title</h2>
          <h3>Tech Stack:</h3>
          <p>
            Soon you can invest in Sid Harman's new attractive property, set in
            the heart of Athens.
          </p>
        </div>
      </div>
      </div>

      
    </>
  );
};

export default Single;
