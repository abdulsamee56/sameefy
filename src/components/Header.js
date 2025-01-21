import React, { useState } from "react";
import "../styles/Header.css";

function Header({ audioRef, songs }) {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    if (audioRef?.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const changeSong = () => {
    if (audioRef?.current) {
      const randomIndex = Math.floor(Math.random() * songs.length);
      audioRef.current.src = songs[randomIndex];
      audioRef.current.play().catch((error) => {
        console.error("Failed to play new song:", error);
      });
    }
  };

  return (
    <div className="header">
      <div className="header__left">
        {/* Use the relative path for the logo in the public folder */}
        <img
          src={`${process.env.PUBLIC_URL}/sameelogo.png`}
          alt="SameeFy Logo"
          className="header__logoImage"
        />
      </div>
      {/* 
<div className="header__center">
  <input
    type="text"
    placeholder="What do you want to play?"
    className="header__searchInput"
  />
</div>
*/}
      <div className="header__right">
        <button className="header__button header__mute" onClick={toggleMute}>
          {isMuted ? "🔈 Unmute" : "🔇 Mute"}
        </button>
        <button className="header__button header__changeSong" onClick={changeSong}>
          🎵 Change Song
        </button>
      </div>
    </div>
  );
}

export default Header;
