import React from "react";
import styles from "./Skills.module.css";
import { SiAdobephotoshop, SiTypescript } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";

const Skills = () => {
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
        <div>
          <FaReact />
          <h3>React</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eos?
          </p>
        </div>
        <div>
          <FaNodeJs />
          <h3>NodeJS</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eos?
          </p>
        </div>
        <div>
          <SiTypescript />
          <h3>TypeScript</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eos?
          </p>
        </div>
        <div>
          <SiAdobephotoshop />
          <h3>Photoshop</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eos?
          </p>
        </div>
      </aside>
    </div>
  );
};

export default Skills;
