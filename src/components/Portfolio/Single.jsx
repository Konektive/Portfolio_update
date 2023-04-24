import React from "react";
import styles from "./Single.module.css";
const Single = () => {
  const DUMMY_PROJECTS = [
    {
      title: "weather app",
      description:"Real-time weather updates based on your location, keeping you prepared for the current weather conditions.",
      technologies: ["JS", "React", "Tailwind"],
      url:"https://github.com/Konektive/Weather-App",
      purpose:'Accurate Forecasts',
      link:'https://media.discordapp.net/attachments/1100137809932722198/1100137834234519692/image.png?width=873&height=440'
    },
    {
      title: "Restaurant app",
      description: "Seamless online food ordering from a featured restaurant, bringing the convenience of delicious meals to your fingertips.",
      technologies: ["JS", "React", "Tailwind"],
      url:"https://github.com/",
      purpose:'Easy Dining Solutions',
      link:'https://cdn.discordapp.com/attachments/1100137809932722198/1100154197866983626/platter-2009590_1920.jpg'
    },
    {
      title: "Blog app",
      description:"Engaging and informative text content covering diverse topics to inspire and entertain readers with valuable insights.",
      technologies: ["JS", "React", "Tailwind"],
      url:"https://github.com/",
      purpose:"Creative Storytelling",
      link:'https://cdn.discordapp.com/attachments/1100137809932722198/1100153870849675384/blog-793047_1920.jpg'
    },
  ];

  return (
    <>
      {DUMMY_PROJECTS.map((project) => {
        return (
          <div className={styles.project}>
            <p>{project.title}</p>
            <a href={project.url}>Code</a>
            <div className={styles.glass}>
              <div style={{backgroundImage: `url(${project.link})`}} className={styles.image}></div>
            </div>
            <div className={styles.description}>
              <h3>{project.purpose}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Single;
