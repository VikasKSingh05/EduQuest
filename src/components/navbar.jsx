import React from "react";
import RetroButton from "./RetroButton";

function Navbar() {
  return (
    <div className="navbar bg-[#020617] shadow-sm md:px-50 border-b-1 border-slate-600 ">
      {/* Logo */}
      <img src="/forest.svg" alt="" className="h-10 w-10 mr-5" />
      {/*title */}
      <div className="flex-1">
        <a href="/" className="text-[30px] " style={{ fontFamily: "heading" }}>
          EduQuest
        </a>
      </div>
      <div className="navbar-end">
        {/* Search */}
        <label className="input bg-[#020617] w-24 md:w-auto mr-5">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
        {/* links */}
        <div>
          {/* Web buttons: hidden on small screens, visible on medium+ */}
          <div className="hidden md:flex space-x-2">
            <button className="btn btn-ghost hover:bg-[#78C841]">
              Leaderboard
            </button>
            <button className="btn btn-ghost hover:bg-[#78C841] ">
              Courses
            </button>
          </div>

          <nav className="flex items-center gap-6 text-base" style={{ fontFamily: "regular" }}>
            <a href="/courses">Learn</a>
            <a href="/courses">Practice</a>
            <a href="/courses">Build</a>
            <a href="">Community</a>
            <a href="">Pricing</a>
          </nav>

          <RetroButton text="Sign In" onClick={() => navigate("/")} />
        </header>
  );
}
export default Navbar;
