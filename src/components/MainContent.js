import React from "react";
import "../styles/MainContent.css";
import MyPlaylist from "./MyPlaylist";
import TopHits from "./TopHits";
import NowPlaying from "./NowPlaying";
import DiscoverMore from "./DiscoverMore";
import { FaCode, FaDatabase, FaRobot, FaBook } from "react-icons/fa"; // Importing icons

function MainContent({ currentSection }) {
  // Data for the home section
  const introData = [
    {
      icon: <FaCode />,
      title: "Software Engineer",
      text: "Hi, I’m Abdul Samee, a passionate software engineer with a Bachelor’s degree in Computer Science from Wayne State University, graduating in 2024. My journey in technology has been driven by my dedication to solving real-world problems through innovative and scalable solutions.",
    },
    {
      icon: <FaDatabase />,
      title: "Full-Stack Development",
      text: "My primary skills include Python and full-stack development, with a strong focus on backend systems and data-related fields such as data science, analytics, and machine learning. I thrive on designing robust systems, analyzing data for impactful insights, and building efficient applications.",
    },
    {
      icon: <FaRobot />,
      title: "Future-Proof",
      text: "My goal is to be well-rounded in all aspects of technology—a 'jack of all trades, master of none'—and to continuously adapt as new technologies emerge. I am deeply passionate about learning, growing, and staying ahead in the ever-evolving tech landscape.",
    },
    {
      icon: <FaBook />,
      title: "Explore More",
      text: "Explore my projects, skills, and experiences to learn more about what I can do. Let’s create something amazing together!",
    },
  ];

  return (
    <div className="mainContent">
      {currentSection === "home" && (
        <div className="mainContent__home">
          <h1 className="mainContent__title">Welcome to SameeFy!</h1>
          <div className="mainContent__grid">
            {introData.map((item, index) => (
              <div key={index} className="mainContent__card">
                <div className="mainContent__icon">{item.icon}</div>
                <div className="mainContent__text">
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mainContent__button">
            <a href="#projects" className="mainContent__buttonLink">
              Explore My Work
            </a>
          </button>
        </div>
      )}

      {/* Other sections */}
      {currentSection === "myPlaylist" && <MyPlaylist />}
      {currentSection === "skills" && <TopHits />}
      {currentSection === "experience" && <NowPlaying />}
      {currentSection === "contact" && <DiscoverMore />}
    </div>
  );
}

export default MainContent;
