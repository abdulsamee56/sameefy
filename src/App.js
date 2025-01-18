import React, { useRef, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import BackgroundMusic from "./components/BackgroundMusic";
import "./styles/App.css";

function App() {
  const audioRef = useRef(null); // Persistent reference for audio
  const [currentSection, setCurrentSection] = useState("home");

  const songs = [
    `${process.env.PUBLIC_URL}/assets/CaOn & On(Lyrics)feat.DanielLevi.mp3`,
    `${process.env.PUBLIC_URL}/assets/Forever_Drake.mp3`,
    `${process.env.PUBLIC_URL}/assets/JaySeanDown.mp3`,
    `${process.env.PUBLIC_URL}/assets/jungkook-euphoria.mp3`,
    `${process.env.PUBLIC_URL}/assets/Owl City-Fireflies.mp3`,
    `${process.env.PUBLIC_URL}/assets/Payphone.mp3`,
    `${process.env.PUBLIC_URL}/assets/Post Malone - Rockstar.mp3`,
    `${process.env.PUBLIC_URL}/assets/Ruth B.Dandelions.mp3`,
    `${process.env.PUBLIC_URL}/assets/Sheeran_2Step.mp3`,
    `${process.env.PUBLIC_URL}/assets/Who Shot Cupid.mp3`,
    `${process.env.PUBLIC_URL}/assets/Witt Lowry - Movies.mp3`,
    `${process.env.PUBLIC_URL}/assets/Wiz Khalifa - See You Again.mp3`,
  ];

  return (
    <div className="app">
      <Header audioRef={audioRef} songs={songs} />
      <div className="app__body">
        <Sidebar setCurrentSection={setCurrentSection} />
        <MainContent currentSection={currentSection} />
      </div>
      <BackgroundMusic audioRef={audioRef} songs={songs} />
    </div>
  );
}

export default App;
