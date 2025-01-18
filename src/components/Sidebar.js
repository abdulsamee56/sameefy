import React from "react";
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Your Library</h2>
      <button>Create Playlist</button>
      <button>Browse Podcasts</button>
    </div>
  );
}

export default Sidebar;
