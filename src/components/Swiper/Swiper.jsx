import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import projects from "../../../public/data/projects.json";
import s from "./Swiper.module.css";
const SwiperComponent = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      className={s.swiperContainer}
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index} className={s.swiperSlide}>
          <div className={s.divSwiper}>
            <img
              src={project.image}
              alt={project.title}
              width="330"
              height="201"
            />
            <p className={s.pSwiper}>{project.stack.join(" ")}</p>
            <div className={s.divSwiper2}></div>
            <h3 className={s.h3Swiper}>{project.title}</h3>
            <p className={s.pSwiper2}>{project.description}</p>

            <div className={s.divSwiper3}>
              <a
                className={s.aSwiper}
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className={s.aSwiper}
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
