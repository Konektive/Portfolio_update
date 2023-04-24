import React from "react";
import styles from "./Skills.module.css";
import { SiAdobephotoshop, SiTypescript } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { ref: skillRef, inView: stackIsVisible } = useInView();

  const visible = stackIsVisible ? styles.showStack : "";
  return (
    <div className={styles.skills}>
      <div className={styles.info}>
        <h2>What I bring to the table</h2>
        <p>
          I have a strong skillset that includes proficiency in React,
          TypeScript, and various databases such as MongoDB. In addition, I have
          experience building back-end systems with Node.js and Express,
          allowing me to create powerful and scalable web applications. With my
          expertise in these technologies, I am capable of building full-stack
          web applications from the ground up.
        </p>
      </div>
      <aside className={styles.skillsAside}>
        <div ref={skillRef} className={visible}>
          <FaReact />
          <h3>React</h3>
          <p>
            Proficient in building dynamic UIs with React for modern web
            applications.
          </p>
        </div>
        <div ref={skillRef} className={visible}>
          <FaNodeJs />
          <h3>NodeJS</h3>
          <p>
            Experienced in writing backend server logic with Node.js for
            scalable and efficient web applications.
          </p>
        </div>
        <div ref={skillRef} className={visible}>
          <SiTypescript />
          <h3>TypeScript</h3>
          <p>
            Skilled in using TypeScript to add static typing and improve code
            robustness in JavaScript projects.
          </p>
        </div>
        <div ref={skillRef} className={visible}>
          <SiAdobephotoshop />
          <h3>Photoshop</h3>
          <p>
            Proficient in using Photoshop for graphic design and image
            manipulation to create visually appealing web assets.
          </p>
        </div>
      </aside>
    </div>
  );
};

export default Skills;
