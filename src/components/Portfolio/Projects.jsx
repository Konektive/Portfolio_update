import React from "react";
import Single from './Single'
import styles from './Projects.module.css'

const Projects = () => {
  return (
    <div className={styles.projects} id="projects">
      <Single />
    </div>
  );
};

export default Projects;
