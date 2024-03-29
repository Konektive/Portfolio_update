import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import Map from "./Map";
import Socials from "../Socials/Socials";

const Contact = () => {
  const form = useRef();

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccesMessage] = useState("");
  const [showForm, setShowForm] = useState(true);

  const clearForm = ()=>{
    form.current.reset()
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qdly7mf",
        "templatex07vgqp",
        form.current,
        "4D6uJabpuMjrjLriF"
      )
      .then(
        (result) => {
          setSuccesMessage("Your message has been send");
          setShowForm(false);
          setIsLoading(false);
        },
        (error) => {
          setErrorMessage(
            "There was some problem with sending the message, contact me directly."
          );
          setShowForm(false);
          setIsLoading(false);
        }
      );
  };

  return (
    <div id="contact" className={styles.formWrap}>
      {successMessage && <div className={styles.success}>{successMessage}</div>}
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}

      {showForm && (
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
          <h2>Let's get in touch!</h2>
          <label>
            Your name: <input placeholder="Name..." type="text" name="user_name" />
          </label>

          <label>
            Email: <input placeholder="xyz@gmail.com" type="email" name="user_email" />
          </label>

          <label className={styles.area}>
            Message: <textarea placeholder="Message..." type="text" name="user_message" />
          </label>

          <div className={styles.buttons}>
            <button type="reset" onClick={clearForm}>Clear</button>
            <button type="submit">Send</button>
          </div>
          <Socials />
        </form>
      )}

      <aside className={styles.map}>
        <Map></Map>
      </aside>
    </div>
  );
};

export default Contact;
