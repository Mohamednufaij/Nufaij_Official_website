// Header.js

// Header.js

import React, { useState } from 'react';
import style from './main.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header id="header" className={`${style.header} ${showNav ? style.showNav : ''}`}>
      <div className={style.container}>
        <h1 className={style.name}>Mohamed Nufaij T K</h1>
        <nav className={style.navContainer}>
          <div className={style.navToggle} onClick={toggleNav}>
            <div className={style.bar}></div>
            <div className={style.bar}></div>
            <div className={style.bar}></div>
          </div>
          <ul className={`${style.navLinks} ${showNav ? style.show : ''}`}>
            <li><Link to="/" onClick={toggleNav}>About Me</Link></li>
            <li><Link to="/skills" onClick={toggleNav}>Skills</Link></li>
            <li><Link to="/projects" onClick={toggleNav}>Projects</Link></li>
            <li><Link to="/contact" onClick={toggleNav}>Contact Me</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;






