 // Import CSS module for styling
import img1 from './media/Screenshot (11).png'
import img2 from "./media/Screenshot (20).png"
import img3 from "./media/Screenshot (21).png"
import img5 from "./media/ChatApp.png"
import img4 from "./media/ReactCrud.png"
import img6 from "./media/Video call app.png"
import React from 'react';
import style from './main.module.css';

const projects = [
  {
    title: 'Quick Analyzer',
    imageUrl: img2,
    siteUrl: 'https://github.com/Mohamednufaij/final_year_project/tree/main/mysite',
  },
  {
    title: 'Ecommerse-Store',
    imageUrl: img3,
    siteUrl: 'https://github.com/Mohamednufaij/ECommerce-Store',
  },
  {
    title: 'Video-Call-App',
    imageUrl: img6,
    siteUrl: 'https://video-call-app-ashen-kappa.vercel.app/',
  },
  {
    title: 'Chat App',
    imageUrl: img5,
    siteUrl: 'https://simple-chat-platform-front-end.vercel.app/',
  },
  {
    title: 'Netflix Clone',
    imageUrl: img1,
    siteUrl: 'https://github.com/Mohamednufaij/NetflixcloneReact',
  },
  {
    title: 'Employee Details-Management System',
    imageUrl: img4,
    siteUrl: 'https://github.com/Mohamednufaij/BasicCRUDreact',
  },
  
];

const Projects = () => {
  return (
    <div className={style.projectContainer}>
      <h2 className={style.heading}>My Projects</h2>
      <div className={style.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={style.projectItem}>
            <a href={project.siteUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={project.imageUrl}
                alt={project.title}
                className={style.projectThumbnail}
              />
            </a>
            <div className={style.projectDetails}>
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
