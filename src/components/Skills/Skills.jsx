import React from "react";
import s from "./Skills.module.css";

const Skills = () => {
  return (
    <section id="skills" className={s.skills}>
      <h2 className={s.h2Skills}>
        <span className={s.spanSkills}>#</span>skills
      </h2>
      <img src="/img/Group.png" alt="Group" />
      <ul className={s.ulSkills}>
        <li className={s.liSkills}>
          <h3 className={s.h3Skills}>Languages</h3>
          <p className={s.pSkills}>JavaScript TypeScript </p>
        </li>
        <li className={s.liSkills}>
          <h3 className={s.h3Skills}>Database</h3>
          <p className={s.pSkills}>MongoDB</p>
        </li>
        <li className={s.liSkills}>
          <h3 className={s.h3Skills}>Tools</h3>
          <p className={s.pSkills}>VSCode Figma Git Postman Trello </p>
        </li>
        <li className={s.liSkills}>
          <h3 className={s.h3Skills}>Other</h3>
          <p className={s.pSkills}>HTML CSS REST NodeJs </p>
        </li>
        <li className={s.liSkills}>
          <h3 className={s.h3Skills}>Frameworks</h3>
          <p className={s.pSkills}>React Vite Express Redux</p>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
