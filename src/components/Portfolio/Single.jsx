import React from "react";
import styles from "./Single.module.css";
const Single = () => {
  const DUMMY_PROJECTS = [
    {
      title: "weather app",
      description:"Real-time weather updates based on your location, keeping you prepared for the current weather conditions.",
      technologies: ["JS", "React", "Tailwind"],
      purpose:'Accurate Forecasts',
      code:"https://github.com/Konektive/Weather-App",
      link:'https://media.discordapp.net/attachments/1100137809932722198/1100137834234519692/image.png?width=873&height=440',
      site:"https://app.netlify.com/teams/konektive/overview"
    },
    {
      title: "Restaurant app",
      description: "Seamless online food ordering from a featured restaurant, bringing the convenience of delicious meals to your fingertips.",
      technologies: ["JS", "React", "Tailwind"],
      purpose:'Easy Dining Solutions',
      code:"https://github.com/",
      link:'https://cdn.discordapp.com/attachments/1100137809932722198/1100154197866983626/platter-2009590_1920.jpg',
      site:"https://app.netlify.com/teams/konektive/overview"
    },
    {
      title: "Blog app",
      description:"Engaging and informative text content covering diverse topics to inspire and entertain readers with valuable insights.",
      technologies: ["JS", "React", "Tailwind"],
      purpose:"Creative Storytelling",
      code:"https://github.com/",
      link:'https://cdn.discordapp.com/attachments/1100137809932722198/1100153870849675384/blog-793047_1920.jpg',
      site:"https://app.netlify.com/teams/konektive/overview"
    },
  ];

  return (
    <>
      {DUMMY_PROJECTS.map((project) => {
        return (
          <div key={project.title} className={styles.project}>
            <p>{project.title}</p>
            <a className={styles.code} href={project.code}>Code</a>
            <div className={styles.glass}>
              <a style={{backgroundImage: `url(${project.link})`}} className={styles.image} href={project.site}></a>
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
