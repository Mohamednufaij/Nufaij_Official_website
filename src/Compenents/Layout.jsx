// Layout.js
import React from 'react';
import style from './main.module.css'; // Import global CSS for layout
import { useEffect,useRef } from 'react';


const Layout = ({ children }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.2; // Set the desired playback rate (0.5 means half speed)
    }
  }, []);

  return (
    <div className={style.layoutContainer}>
      <video ref={videoRef} autoPlay loop muted className={style.backgroundVideo}>
        <source src={`${process.env.PUBLIC_URL}/bgvideo.mp4`} type="video/mp4" />
      </video>
      <div className={style.content}>
        {children}
      </div>
    </div>
  );
};

export default Layout;

