import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import style from './main.module.css'; // Import CSS module for styling

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_nb8glrs', // Replace with your service ID
      'template_jop0z3g', // Replace with your template ID
      formData,
      'Mohamed Nufaij' // Replace with your user ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to send the message, please try again.');
    });

    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div id={style.contactContainer}>
      <div className={style.heading}>
        <h2>Contact Me</h2>
      </div>
      <form className={style.contactForm} onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit" className={style.submitButton}>Send Message</button>
      </form>
      <div className={style.contactDetails}>
        <p>
          <strong>Email:</strong> nufaijjufu321@gmail.com
          <a href="mailto:nufaijjufu321@gmail.com">
            <FaEnvelope className={style.icon} />
          </a>
        </p>
        <p>
          <strong>Phone:</strong> +91 7994103145
          <a href="tel:+917994103145">
            <FaPhone className={style.icon} />
          </a>
        </p>
        <p><strong>Address:</strong> TAJ, Aniyaram(po), 670672, Thalassery, Kannur</p>
      </div>
    </div>
  );
};

export default ContactMe;
