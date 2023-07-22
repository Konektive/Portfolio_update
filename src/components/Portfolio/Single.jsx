import React from "react";
import styles from "./Single.module.css";
const Single = (props) => {
  const { title, code, id, link, site, purpose, description } = props;

  return (
    <div key={title} className={styles.project}>
      <p>{title}</p>
      <a className={styles.code} href={code}>
        Code
      </a>
      <div className={styles.glass}>
        <a
          style={{ backgroundImage: `url(${link})` }}
          className={styles.image}
          href={site}
        ></a>
      </div>
      <div className={styles.description}>
        <h3>{purpose}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Single;
