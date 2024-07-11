import img1 from './media/opengraph-icon-200x200.png';
import style from './main.module.css'
import django from './media/opengraph-icon-200x200.png';
import react from './media/React.webp';
import sql from './media/sql7.jpg';
import html from './media/html3.png';
import css from './media/css.png';
import js from './media/js.png';
import boot from './media/bootstrap.jpg';
import cert1 from './media/pyspiders certificate - 2024-05-09T111950.558.png'; // Example certificate image
import cert2 from './media/WhatsApp Image 2024-05-26 at 11.47.58 AM.jpeg'; // Example certificate image
import cert3 from './media/Python for Data analysis.png';
import cert4 from "./media/SQL And Python.png";
import cert5 from "./media/Data Analysis Using Excel.png";
import vicert1 from "./media/accenture.png"
import vicert2 from "./media/Jp morgan Certificate.png"
const Skills = () => {
  return (
    <div id={style.skillsContainer}>
      <div className={style.heading}>
        <h2>Let's Explore My Skills</h2>
      </div>
      <div className={style.skillsList}>
        <SkillItem name="Python" imageUrl={img1} />
        <SkillItem name="Django" imageUrl={django} />
        <SkillItem name="React js" imageUrl={react} />
        <SkillItem name="SQL" imageUrl={sql} />
        <SkillItem name="HTML5" imageUrl={html} />
        <SkillItem name="CSS3" imageUrl={css} />
        <SkillItem name="Javascript" imageUrl={js} />
        <SkillItem name="Bootstrap" imageUrl={boot} />
      </div>
      <div className={style.heading}>
        <h2>Certificates</h2>
      </div>
      <div className={style.certificatesList}>
        <CertificateItem title="Python Full stack Development -Django,React,SQL" imageUrl={cert1} />
        <CertificateItem title="Python for Data-Science" imageUrl={cert2} />
        <CertificateItem title="Python for Data-Analysis" imageUrl={cert3} />
        <CertificateItem title="Analytics using Python and SQL" imageUrl={cert4} />
        <CertificateItem title="Data-Analysis Using Excel" imageUrl={cert5} />
      </div>
      <div className={style.heading}>
        <h2>Virtual Internships</h2>
      </div>
      <div className={style.virtualInternship}>
        <CertificateItem title="Software Engineering Internship" imageUrl={vicert2}/>
        <CertificateItem title="Data Analysis Internship" imageUrl={vicert1}/>
      </div>
    </div>
  );
};

const SkillItem = ({ name, imageUrl }) => {
  return (
    <div className={style.skillItem}>
      <img src={imageUrl} alt={name} />
      
      <p>{name}</p>
    </div>
  );
};

const CertificateItem = ({ title, imageUrl }) => {
  return (
    <div className={style.certificateItem}>
      <img src={imageUrl} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default Skills;

