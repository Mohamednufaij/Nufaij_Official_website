import React from 'react';
import style from './main.module.css'; // Import CSS module for styling
import img from './media/nuf_hd-crp.jpg'

// import resume from './'
// import pdf from './pdf'
const About = () => {
  // Function to handle download button click
  const handleDownloadResume = () => {
    // Replace 'path/to/your/resume.pdf' with the actual path to your resume file
    
    const resumeUrl = `${process.env.PUBLIC_URL}/my_resume.pdf`;
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'Mohamed_Nufaij_Resume.pdf'); // Set the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={style.aboutContainer}>
      <div className={style.description}>
        <h2>Hello, i'm</h2>
        <h1>Mohamed Nufaij</h1>
        <h1>Software Engineer</h1>
        <p>Dedicated to revolutionizing lives through the power of innovation,<br /> I am driven by a lifelong passion for <br />
         tech and a commitment to nurturing visionary entrepreneurs.</p>
        {/* Add the download button */}
        <button onClick={handleDownloadResume}>Download Resume</button>
      </div>
      <div className={style.imageContainer}>
        <img src={img} alt="Profile" className={style.profileImage} />
      </div>
    </div>
  );
};

export default About;

