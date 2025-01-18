import React from "react";
import "../styles/Sidebar.css";

function Sidebar({ setCurrentSection }) {
  return (
    <div className="sidebar">
      {/* Branding */}
      <h1 className="sidebar__logo">Abdul Samee</h1>

      {/* Navigation Links */}
      <div className="sidebar__links">
        <button
          className="sidebar__button"
          onClick={() => setCurrentSection("home")}
        >
          Home (Welcome and intro)
        </button>
        <button
          className="sidebar__button"
          onClick={() => setCurrentSection("myPlaylist")}
        >
          My Playlist (Projects and portfolio work)
        </button>
        <button
          className="sidebar__button"
          onClick={() => setCurrentSection("skills")}
        >
          Top Hits (Key skills and expertise)
        </button>
        <button
          className="sidebar__button"
          onClick={() => setCurrentSection("experience")}
        >
          Now Playing (Current job and work being done)
        </button>
        <button
          className="sidebar__button"
          onClick={() => setCurrentSection("contact")}
        >
          Discover More (Links, contact info, and resume)
        </button>
      </div>

      {/* Quick Actions */}
      <div className="sidebar__actions">
        <button
          className="sidebar__actionButton"
          onClick={() => window.open("https://github.com/abdulsamee56", "_blank")}
        >
          GitHub
        </button>
        <button
          className="sidebar__actionButton"
          onClick={() => window.open("path/to/resume.pdf", "_blank")}
        >
          Download Resume
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
