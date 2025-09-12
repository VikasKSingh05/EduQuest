import React from "react";
import Search from "./Search";

function Navbar() {
  return (
    <div className="navbar">
      {/* Logo */}
      <img src="/forest.svg" alt="Logo" className="logo" />

      {/* Title */}
      <div className="navbar-title">
        <a href="/" className="brand">
          EduQuest
        </a>
      </div>

      {/* Right Side */}
      <div className="navbar-end">
        {/* Search */}
        <Search />

        {/* Links */}
        <div className="nav-links">
          {/* Web buttons (desktop only) */}
          <div className="links-desktop">
            <button className="nav-btn">Leaderboard</button>
            <button className="nav-btn">Courses</button>
          </div>
        </div>

        {/* Sign Up button */}
        <button className="signup-btn">Sign up</button>
      </div>
    </div>
  );
}
export default Navbar;
