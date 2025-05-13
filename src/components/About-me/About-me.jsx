import React from "react";
import s from "./About.me.module.css";

const AboutMe = () => {
  return (
    <section id="about-me" className={s.AboutMe}>
      <h2 className={s.h2AboutMe}>
        <span className={s.spanAboutMe}>#</span>about-me
      </h2>
      <div className={s.divAboutMe}>
        <p className={s.pAboutMe}>
          Hello, I'm Dmytro! <br />
          <br />
          I'm a student of the GoIT course, and I'm actively learning web
          development. I have good knowledge of HTML, CSS, JavaScript, and
          React, which I use to create modern and functional websites. I have
          participated in team projects where I gained experience in
          collaboration, agile methodologies, and code integration.
          <br />
          <br /> I strive to constantly develop and master new tools and
          technologies in the IT field.
        </p>
        <img className={s.imgAboutMe} src="/img/About-me.jpg" alt="about me" />
      </div>
      <img
        className={s.imgRectangle}
        src="/img/Rectangle.png"
        alt="Rectangle"
        width="150"
        height="150"
      />
      <img
        className={s.imgDots2}
        src="/img/Dots.png"
        alt="Dots"
        width="84"
        height="84"
      />
    </section>
  );
};

export default AboutMe;
