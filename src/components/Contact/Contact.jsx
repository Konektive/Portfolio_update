import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import linked from "../../assets/linkedIcon.png";
import insta from "../../assets/instaIcon.png";
import git from "../../assets/gitIcon.png";
import Attributes from './Attributes'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className={styles.formWrap}>
      <form ref={form} onSubmit={sendEmail}>
        <h2>Let's get in touch!</h2>
        <label>Your Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <div className={styles.buttons}>
          <button>Clear</button>
          <button type="submit">Send</button>
        </div>
        <aside className={styles.socials}>
          <a
            href="https://www.linkedin.com/in/krystian-sporysz/"
            target="_blank"
          >
            <img src={linked} alt="" />
          </a>
          <a href="https://github.com/Konektive" target="_blank">
            <img src={git} alt="" />
          </a>
          <a href="https://www.instagram.com/krystian_sporysz/" target="_blank">
            <img src={insta} alt="" />
          </a>
        </aside>
      </form>
      <aside>
        {/* <div>
          <h2>Strong Problem-Solving Skills</h2>
          <p>
            As a software developer, I excel in problem-solving. I possess the
            ability to analyze complex issues, break them down into manageable
            parts, and develop effective solutions. I enjoy tackling challenges
            head-on and finding innovative ways to overcome them.
          </p>
        </div>
      </aside>
      <aside>
        <div>
          <h2>Technical Proficiency</h2>
          <p>
            I am technically proficient and continuously enhance my skills in
            programming languages, frameworks, and technologies. I stay
            up-to-date with the latest industry trends and leverage my knowledge
            to develop robust and efficient software solutions.
          </p>
        </div>
      </aside>
      <aside>
        <div>
          <h2>Attention to Detail</h2>
          <p>
            Attention to detail is one of my strong suits as a developer. I
            meticulously review and refine my code, ensuring accuracy and
            minimizing errors. I have a keen eye for spotting bugs and
            conducting thorough testing to deliver high-quality software.
          </p>
        </div>
      </aside>
      <aside>
        <div>
          <h2>Collaboration and Communication</h2>
          <p>
            Collaboration and effective communication are integral to my
            development approach. I actively engage with team members,
            stakeholders, and clients, contributing my ideas and actively
            listening to others. I can articulate technical concepts clearly,
            fostering a collaborative environment.
          </p>
        </div>
      </aside>
      <aside>
        <div>
          <h2>Adaptability and Continuous Learning</h2>
          <p>
            Adaptability is one of my key strengths. I embrace change and stay
            open to learning new technologies and methodologies. I actively seek
            opportunities for growth and strive for continuous improvement in my
            skills and knowledge as a software developer.
          </p>
        </div> */}
    <Attributes></Attributes>
      </aside>
    </div>
  );
};

export default Contact;
