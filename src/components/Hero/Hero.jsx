import React from "react";
import s from "./Hero.module.css";
const Hero = () => {
  return (
    <section id="hero" className={s.hero}>
      <div className={s.mainDivHero}>
        <div className={s.divHero}>
          <h1 className={s.h1Hero}>
            HELLO.
            <br /> I`M <span className={s.spanHero}>FRONTEND DEVELOPER</span>
            <br />
            BARBARA DMYTRO
          </h1>
          <p className={s.pHero}>
            I love creating responsive websites where technology meets
            creativity.
          </p>
          <a href="#contacts">
            <button className={s.buttonHero}>Contact me!</button>
          </a>
        </div>
        <div className={s.imgBlock}>
          <img
            className={s.imgLogo}
            src="/img/Logo.png"
            alt="logo"
            width="155"
            height="155"
          />
          <img
            className={s.imgDots}
            src="/img/Dots.png"
            alt="dots"
            width="84"
            height="84"
          />
          <img
            className={s.imgMe}
            src="/img/Me.png"
            alt="Me"
            width="457"
            height="386"
          />
        </div>
      </div>
      <div className={s.quote}>
        <img
          className={s.imgFrame1}
          src="/img/Frame.png"
          alt="Frame"
          width="42"
          height="29"
        />
        <img
          className={s.imgFrame2}
          src="/img/Frame.png"
          alt="Frame"
          width="42"
          height="29"
        />
        <h2 className={s.h2Hero}>
          "Make it work, make it right, make it fast."
        </h2>
        <h2 className={s.h2Hero2}>&ndash; Kent Beck</h2>
      </div>
      <img
        className={s.imgRectangle}
        src="/img/Rectangle.png"
        alt="Rectangle"
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

export default Hero;
