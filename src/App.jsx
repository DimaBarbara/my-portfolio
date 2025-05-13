import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import AboutMe from "./components/About-me/About-me";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <AboutMe />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
