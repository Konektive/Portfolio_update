import React from "react";
import styles from "./Single.module.css";
const Single = (props) => {
  const { title, code, link, site, purpose, description } = props;

  return (
    <div className={styles.project}>
      <div
        style={{ backgroundImage: `url(${link})` }}
        className={styles.image}
      ></div>
      <a href={site}>+</a>
    </div>
  );
};

export default Single;
