import React, { useEffect } from 'react';
import style from './main.module.css';

const CustomCursor = () => {
  useEffect(() => {
    const circle = document.getElementById('cur');
    if (!circle) return;

    let mouseX = 0, mouseY = 0;
    let circleX = 0, circleY = 0;
    const speed = 0.1;

    const handleMouseMove = (e) => {
      mouseX = e.pageX;
      mouseY = e.pageY;
    };

    const animate = () => {
      circleX += (mouseX - circleX) * speed;
      circleY += (mouseY - circleY) * speed;

      if (circle) {
        circle.style.left = circleX + 'px';
        circle.style.top = circleY + 'px';
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div id="cur" className={style.cursor}></div>;
};

export default CustomCursor;

/* main.module.css */

