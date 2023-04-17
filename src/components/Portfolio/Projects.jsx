import React from "react";
import Single from './Single'
import styles from './Projects.module.css'

const Projects = () => {
  return (
    <div id="projects" style={{ height: "200vh"}}>
      <div className={styles.hex}></div>
      <Single />
    </div>
  );
};

export default Projects;
