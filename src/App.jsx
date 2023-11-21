/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/sidebar/Sidebar";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Skill from "./components/skills/Skill";
import About from "./components/about/About";
import Contact from "./components/contact/contact";

const App = () => {
  let navList = ['Skills', 'Project', 'Resume'];
  let href = ['#skill', '#work', '#resume'];

  return (
    <div>
      <Sidebar navList={navList} href={href} title={"LIN"} />
      <main className="main">
        <About />
        <Skill />
        <Portfolio />
        <Resume />
        <Contact />
      </main>
    </div>
  );
};

export default App;