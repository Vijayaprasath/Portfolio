import './skills.css';
import React from 'react'
import FrontEnd from './FrontEnd';
import BackEnd from './BackEnd';
import Gaming from './Gaming';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Level</span>

        <div className="skills__container container grid">
            <FrontEnd />
            


            <BackEnd />
            <Gaming />
        </div>
    </section>
  )
}

export default Skills;