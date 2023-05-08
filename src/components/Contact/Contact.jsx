import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import styles from './Contact.module.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className={styles.formWrap}>
    <form ref={form} onSubmit={sendEmail}>
      <div className={styles.top}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      </div>
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    <aside className={styles.socials}>Insta Facebook Linked</aside>

    </div>
  );
};

export default Contact;