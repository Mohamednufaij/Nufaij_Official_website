// Footer.js

import React from 'react';
import style from './main.module.css'; // Import CSS module for styling
import { FaWhatsapp, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.socialIcons}>
        <a href="https://wa.me/7994103145" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        <a href="https://www.linkedin.com/in/mohamed-nufaij-826174191" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/Mohamednufaij" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
      <div className={style.copyright}>
        <p>© {new Date().getFullYear()} Mohamed Nufaij T K. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
