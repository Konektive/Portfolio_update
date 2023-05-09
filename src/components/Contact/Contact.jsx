import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import linked from "../../assets/linkedIcon.png";
import insta from "../../assets/instaIcon.png";
import git from "../../assets/gitIcon.png";

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
        <a href="https://www.linkedin.com/">
          <img src={linked} alt="" />
        </a>
        <a href="https://www.github.com/">
          <img src={git} alt="" />
        </a>
        <a href="https://www.instagram.com/">
          <img src={insta} alt="" />
        </a>
      </aside>
      </form>
      
    </div>
  );
};

export default Contact;
