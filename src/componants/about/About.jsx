import  './about.css';
import { useTranslation } from "react-i18next";
import React from 'react'

export default function About() {
  const { t } = useTranslation();
  return (
    <section className='about flex' id='about'>
      <div className="leftSide ">
          <img src="./me.jpg" alt="" />
          <div className="icons flex">
          <a className="icon icon-envelop" href='mailto:issa.alali.991@gmail.com' target="_blank"></a>
          <a className="icon icon-github" href='https://github.com/issaalali991' target="_blank"></a>
          <a className="icon icon-linkedin2" href='https://www.linkedin.com/in/isali91/' target="_blank"></a>
        </div>
      </div>


      <div className="rightSide ">
        <h2>{t('Greetings!')}</h2>
        <h3>{t('I’m')} Issa Alali <br />
            Junior Full stack {t('Developer')} </h3><br />
        <div className='paragraph'>
        {t('I’m a 32 year old software enthusiast from Syria currently living in Germany for tow year. I am happily married and have a wonderful son.')} 
        
        <br /> <br />
        <h3>Educational Information:</h3> <br />
        I pursued my interest in information technology and studied computer engineering in Syria from 2008 to 2014, specializing in software.
        During this time, I gained a strong foundation in programming.
        <br /> <br />
        <h3>Working Experience:</h3> <br />
        After school, I went further into education and worked as a teaching staff at Al-Bath University for two years.
        This experience allowed me to share my skills and help develop individual candidates.

        <br /> <br />
        <h3>Language Skills:</h3> <br />
        One of the most important things I have achieved since moving to Germany is that I have achieved B2 level in German fluently.
        Effective communication plays an important role in integrating me into a vibrant German community.

        <br /> <br />
        <h3>Current efforts:</h3> <br />
        I am currently involved in the Weiterbildung program, focusing on Full-Stack Web & App Development.
        This educational journey not only aligns with my passion for organizing but confirms my commitment to continuous self-improvement

        <br /> <br />
        <h3>Activity Interests:</h3> <br />
        My passion for coding extends beyond the professional sphere; It’s a personal preference.
        I am passionate about the complexity of software development and am always eager to tackle new challenges.
        For me, programming isn’t just work; It is a journey of constant learning and improvement.

        <br /> <br />
        <h3>Future aspirations:</h3> <br />
        I want to contribute to innovation and use my skills to make a positive impact on the tech scene.
        My travels in Germany have improved, and I have enjoyed the opportunities the web and app offer in a dynamic environment



        





        </div>
      </div>
      
    </section>
  )
}
