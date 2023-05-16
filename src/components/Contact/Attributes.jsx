import React, { useRef, useState } from "react";
import styles from "./Attributes.module.css";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";

const faqs = [
  {
    id: 1,
    header: "Strong Problem-Solving Skills",
    text: "As a software developer, I excel in problem-solving. I possess the ability to analyze complex issues, break them down into manageable parts, and develop effective solutions. I enjoy tackling challenges head-on and finding innovative ways to overcome them.",
  },
  {
    id: 2,
    header: "Technical Proficiency",
    text: "I am technically proficient and continuously enhance my skills in programming languages, frameworks, and technologies. I stay up-to-date with the latest industry trends and leverage my knowledge to develop robust and efficient software solutions.",
  },
  {
    id: 3,
    header: "Attention to Detail",
    text: "Attention to detail is one of my strong suits as a developer. I meticulously review and refine my code, ensuring accuracy and minimizing errors. I have a keen eye for spotting bugs and conducting thorough testing to deliver high-quality software.",
  },
  {
    id: 4,
    header: "Collaboration and Communication",
    text: "Collaboration and effective communication are integral to my development approach. I actively engage with team members, stakeholders, and clients, contributing my ideas and actively listening to others. I can articulate technical concepts clearly, fostering a collaborative environment.",
  },
  {
    id: 5,
    header: "Adaptability and Continuous Learning",
    text: "Adaptability is one of my key strengths. I embrace change and stay open to learning new technologies and methodologies. I actively seek opportunities for growth and strive for continuous improvement in my skills and knowledge as a software developer.",
  },
];

const AccordionItem = (props) => {
  const contentEl = useRef(null);
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;

  return (
    <div>
      <header
        className={active === id ? "active" : ""}
        onClick={() => handleToggle(id)}
      >
        <h2>{header}</h2>
        {active === id ? (
          <span>
            <BsFillArrowUpCircleFill />
          </span>
        ) : (
          <span>
            <BsFillArrowDownCircleFill />
          </span>
        )}
      </header>
      <div
        ref={contentEl}
        className={`${styles.collapse} ${active === id ? "show" : ""}`}
        style={
          active === id
            ? { height: contentEl?.current?.scrollHeight }
            : { height: "0px" }
        }
      >
        <p>{text}</p>
      </div>
    </div>
  );
};

const Attributes = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <article className={styles.attrArticle}>
      {faqs.map((faq, index) => {
        return (
          <AccordionItem
            key={index}
            active={active}
            handleToggle={handleToggle}
            faq={faq}
          />
        );
      })}
    </article>
  );
};

export default Attributes;
