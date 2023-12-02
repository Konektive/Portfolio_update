const DUMMY_PROJECTS = [
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
  {
    id: 4,
    title: "Portfolio app",
    description:
      "The first portfolio website I did using react. Made some custom grapthics using photoshop to showcase some of my life hobbies",
    technologies: ["react","js"],
    purpose: "Accurate Forecasts",
    code: "https://github.com/Konektive/React-Portfolio",
    link: "https://cdn.discordapp.com/attachments/1045101615390130229/1174074700805193828/portfolio.png?ex=65664545&is=6553d045&hm=a89a5435372b100006b3c8f8f32a5fb9332abd1ac5afe6a1732adcd0e9ab1c41&",
    site: "https://krystian-sporysz-first.netlify.app/",
  },
  {
    id: 5,
    title: "Invo Card",
    description:
      "First challange i got from Invo Academy online on my journey to learn FrontEnd",
    technologies: ["js"],
    purpose: "Easy Dining Solutions",
    code: "https://github.com/Konektive",
    link: "https://cdn.discordapp.com/attachments/1045101615390130229/1174075660562599976/portfolio.png?ex=6566462a&is=6553d12a&hm=f913c59e9c7b2579fabb69f09bb2a2cfbe879243584737040f77b49ec36e0b38&",
    site: "https://first-invo.netlify.app/",
  },
  {
    id: 6,
    title: "Quote App",
    description:
      "Easy mobile oriented app for generating random motivational quotes. I've made it to improve my tailwind skills",
    technologies: ["react"],
    purpose: "Motivation",
    code: "https://github.com/Konektive/quote-generator",
    link: "https://cdn.discordapp.com/attachments/1045101615390130229/1174076835739480064/image.png?ex=65664742&is=6553d242&hm=a94313341520fbe087bf6a4351c0356538e10362cae7c2949ff32382b6b09d60&",
    site: "https://delicate-baklava-3c28c3.netlify.app",
  },
  // {
  //   id: 1,
  //   title: "weather app",
  //   description:
  //     "Real-time weather updates based on your location, keeping you prepared for the current weather conditions.",
  //   technologies: ["html"],
  //   purpose: "Accurate Forecasts",
  //   code: "https://github.com/Konektive/Weather-App",
  //   link: "https://media.discordapp.net/attachments/1100137809932722198/1100137834234519692/image.png?width=873&height=440",
  //   site: "https://app.netlify.com/teams/konektive/overview",
  // },
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
  };

  return (
    <>
      <h1>Portfolio</h1>
      <div className={styles.portfolioNav}>
        <button
          className={stack === "" ? styles.active : undefined}
          onClick={() => {
            pickStack("");
          }}
        >
          All
        </button>
        <button
          className={stack === "html" ? styles.active : undefined}
          onClick={() => {
            pickStack("html");
          }}
        >
          Html/Css
        </button>
        <button
          className={stack === "js" ? styles.active : undefined}
          onClick={() => {
            pickStack("js");
          }}
        >
          JavaScript
        </button>
        <button
          className={stack === "react" ? styles.active : undefined}
          onClick={() => {
            pickStack("react");
          }}
        >
          React
        </button>
        <button
          className={stack === "typescript" ? styles.active : undefined}
          onClick={() => {
            pickStack("typescript");
          }}
        >
          TypeScript
        </button>
      </div>

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
