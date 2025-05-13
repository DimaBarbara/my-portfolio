import React from "react";
import s from "./Contacts.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Icon from "../Icon";

const Contacts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you! Notification sent.");
    e.target.reset();
  };

  return (
    <section id="contacts" className={s.contacts}>
      <h2 className={s.h2Contacts}>
        <span className={s.spanContacts}>#</span>contacts
      </h2>
      <div className={s.divContacts}>
        <div className={s.divContacts2}>
          <p className={s.pContacts}>
            I’m currently looking for opportunities to work as a developer in a
            dynamic and growth-oriented company.
            <br /> However, if you have any other questions or proposals, feel
            free to reach out!
          </p>
          <div className={s.divIcon}>
            <a
              className={s.icons}
              href="https://t.me/dimabarbara"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon id="Telegram" />
            </a>

            <a
              className={s.icons}
              href="www.linkedin.com/in/dmytro-barbara"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon id="Linkedin" />
            </a>

            <a
              className={s.icons}
              href="https://github.com/DimaBarbara"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon id="Github" />
            </a>

            <a className={s.icons} href="mailto:dmytronarnara1@gmail.com">
              <Icon id="Email" />
            </a>
          </div>
        </div>
        <form className={s.form} onSubmit={handleSubmit}>
          <input
            className={s.inputContacts}
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className={s.inputContacts}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            className={s.inputContacts}
            type="text"
            name="title"
            placeholder="Title"
          />
          <textarea
            className={s.inputContacts}
            name="message"
            placeholder="Message"
            rows="5"
            required
          />
          <button className={s.buttonContacts} type="submit">
            Send
          </button>
        </form>
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
      <ToastContainer position="top-center" autoClose={3000} />
    </section>
  );
};

export default Contacts;
