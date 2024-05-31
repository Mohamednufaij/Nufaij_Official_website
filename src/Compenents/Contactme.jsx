import React from 'react';
import style from './main.module.css'; // Import CSS module for styling

const ContactMe = () => {
  return (
    <div id={style.contactContainer}>
      <div className={style.heading}>
        <h2>Contact Me</h2>
      </div>
      <form className={style.contactForm}>
        <div className={style.formGroup}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" className={style.submitButton}>Send Message</button>
      </form>
      <div className={style.contactDetails}>
        <p><strong>Email:</strong> nufaijjufu321@gmail.com</p>
        <p><strong>Phone:</strong> +91 7994103145</p>
        <p><strong>Address:</strong> TAJ,Aniyaram(po),670672,Thalassery,Kannur</p>
      </div>
    </div>
  );
};

export default ContactMe;
