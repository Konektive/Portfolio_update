import React from "react";
import styles from "./Single.module.css";
const Single = () => {
  const DUMMY_PROJECTS = [
    {
      title: "weather app",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit a quae pariatur qui repellat deserunt, delectus quam debitis, eum, laudantium porro molestiae. Sunt, similique neque.",
      technologies: ["JS", "React", "Tailwind"],
    },
    {
      title: "Restaurant app",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit a quae pariatur qui repellat deserunt, delectus quam debitis, eum, laudantium porro molestiae. Sunt, similique neque.",
      technologies: ["JS", "React", "Tailwind"],
    },
    {
      title: "Blog app",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit a quae pariatur qui repellat deserunt, delectus quam debitis, eum, laudantium porro molestiae. Sunt, similique neque.",
      technologies: ["JS", "React", "Tailwind"],
    },
  ];

  return (
    <>
      {DUMMY_PROJECTS.map((project) => {
        return (
          <div className={styles.project}>
            <a className={styles.glass} href="https://github.com/">
              <div className={styles.image}></div>
              <div className={styles.technologies}>
                <ul>
                  <li>{project.technologies[0]}</li>
                  <li>{project.technologies[1]}</li>
                  <li>{project.technologies[2]}</li>
                </ul>
              </div>
            </a>
            <div className={styles.description}>
              <p>{project.description}</p>
              <a href="source-code"> Source Code</a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Single;
