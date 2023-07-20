import React, { useState } from "react";
import Single from "./Single";
import styles from "./Projects.module.css";

const Projects = () => {
  const [stack, setStack] = useState("");

  const pickStack = (value) => {
    setStack(value);
    console.log(stack)
  };

  return (
    <>
      <h1>Portfolio</h1>
      <button
        onClick={() => {
          pickStack("html");
        }}
      >
        Html/Css
      </button>
      <button
        onClick={() => {
          pickStack('js');
        }}
      >
        JavaScript
      </button>
      <button
        onClick={() => {
          pickStack("react");
        }}
      >
        React
      </button>
      <button
        onClick={() => {
          pickStack("typescript");
        }}
      >
        TypeScript
      </button>
      <div className={styles.projects} id="projects">
        <Single selected={stack} />
      </div>
    </>
  );
};

export default Projects;
