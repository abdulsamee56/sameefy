import React from "react";
import "../styles/MainContent.css";

function MainContent({ currentSection }) {
  return (
    <div className="mainContent">
      {currentSection === "home" && (
        <div className="mainContent__home">
          <h1 className="mainContent__title">Welcome to SameeFy!</h1>
          <p className="mainContent__intro">
            Hi, I’m Abdul Samee, a passionate software engineer focused on building innovative and scalable solutions. 
            With a background in data analytics and software development, I aim to create impactful projects that solve real-world problems.
          </p>
          <p className="mainContent__intro">
            Explore my projects, skills, and experiences to learn more about what I can do. 
            Let’s create something amazing together!
          </p>
          <button className="mainContent__button">
            <a href="#projects" className="mainContent__buttonLink">
              Explore My Work
            </a>
          </button>
        </div>
      )}
      {/* Other sections can go here */}
    </div>
  );
}

export default MainContent;
