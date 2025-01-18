import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <h1 className="header__logo">SameeFy</h1>
      </div>
      <div className="header__center">
        <input
          type="text"
          placeholder="What do you want to play?"
          className="header__searchInput"
        />
      </div>
      <div className="header__right">
        <button className="header__login">Log in</button>
        <button className="header__signup">Sign up</button>
      </div>
    </div>
  );
}

export default Header;
