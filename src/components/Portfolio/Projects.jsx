const DUMMY_PROJECTS = [
  {
    id: 1,
    title: "weather app",
    description:
      "Real-time weather updates based on your location, keeping you prepared for the current weather conditions.",
    technologies: ["html"],
    purpose: "Accurate Forecasts",
    code: "https://github.com/Konektive/Weather-App",
    link: "https://media.discordapp.net/attachments/1100137809932722198/1100137834234519692/image.png?width=873&height=440",
    site: "https://app.netlify.com/teams/konektive/overview",
  },
  {
    id: 2,
    title: "Restaurant app",
    description:
      "Seamless online food ordering from a featured restaurant, bringing the convenience of delicious meals to your fingertips.",
    technologies: ["js"],
    purpose: "Easy Dining Solutions",
    code: "https://github.com/",
    link: "https://cdn.discordapp.com/attachments/1100137809932722198/1100154197866983626/platter-2009590_1920.jpg",
    site: "https://app.netlify.com/teams/konektive/overview",
  },
  {
    id: 3,
    title: "Blog app",
    description:
      "Engaging and informative text content covering diverse topics to inspire and entertain readers with valuable insights.",
    technologies: ["react"],
    purpose: "Creative Storytelling",
    code: "https://github.com/",
    link: "https://cdn.discordapp.com/attachments/1100137809932722198/1100153870849675384/blog-793047_1920.jpg",
    site: "https://app.netlify.com/teams/konektive/overview",
  },
];
import React, { useState } from "react";
import Single from "./Single";
import styles from "./Projects.module.css";

const Projects = () => {
  const [stack, setStack] = useState("");

  const pickStack = (value) => {
    if (stack === value) {
      setStack("");
    } else setStack(value);
    console.log(stack);
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
          pickStack("js");
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
        {DUMMY_PROJECTS.filter((project) => {
          if (stack === "") {
            return project;
          } else if (project.technologies.includes(stack)) {
            return project;
          }
        }).map((project) => {
          return (
            <Single
              key={project.id}
              title={project.title}
              code={project.code}
              link={project.link}
              site={project.site}
              purpose={project.purpose}
              description={project.description}
            />
          );
        })}
      </div>
    </>
  );
};

export default Projects;
