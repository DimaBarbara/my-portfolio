import React from "react";
import s from "./Header.module.css";
const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.divHeader}>
        <img className={s.unionImg} src="/img/Union.png" alt="Union" />
        <p className={s.name}>Dmytro</p>
      </div>
      <div className={s.divHeader}>
        <ul className={s.ulHeader}>
          <li className={s.liHeader}>
            <a className={s.aHeader} href="#hero">
              <span className={s.spanHeader}>#</span>home
            </a>
          </li>
          <li className={s.liHeader}>
            <a className={s.aHeader} href="#projects">
              <span className={s.spanHeader}>#</span>projects
            </a>
          </li>
          <li className={s.liHeader}>
            <a className={s.aHeader} href="#skills">
              <span className={s.spanHeader}>#</span>skills
            </a>
          </li>
          <li className={s.liHeader}>
            <a className={s.aHeader} href="#about-me">
              <span className={s.spanHeader}>#</span>about-me
            </a>
          </li>
          <li className={s.liHeader}>
            <a className={s.aHeader} href="#contacts">
              <span className={s.spanHeader}>#</span>contacts
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
