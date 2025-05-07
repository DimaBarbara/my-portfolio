import React from "react";
import SwiperComponent from "../Swiper/Swiper";
import s from "./Projects.module.css";
const Projects = () => {
  return (
    <section id="projects" className={s.projects}>
      <h2 className={s.h2Projects}>
        <span className={s.spanProjects}>#</span>projects
      </h2>
      <SwiperComponent />
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

export default Projects;
