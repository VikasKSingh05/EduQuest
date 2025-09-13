import React from "react";
import RetroButton from "./RetroButton";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAboutClick = () => {
    if (location.pathname === "/") {
      // If already on home page, scroll to desc section
      const descElement = document.getElementById("desc");
      if (descElement) {
        descElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on other page, navigate to home and then scroll
      navigate("/");
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        const descElement = document.getElementById("desc");
        if (descElement) {
          descElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <header className="text-white text-center bg-black flex items-center justify-between px-8 py-3 font-extrabold">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src="/forest.svg" alt="logo" className="w-10 h-10" />
        <h1
          className="text-lg font-bold pl-4"
          style={{ fontFamily: "heading" }}
        >
          EduQuest
        </h1>
      </Link>

      {/* Nav links */}
      <nav
        className="flex items-center gap-6 text-base"
        style={{ fontFamily: "regular" }}
      >
        <Link to="/all-courses">Learn</Link>
        <Link to="/all-courses">Practice</Link>
        <SignedIn>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/leaderboard">Leaderboard</Link>
        </SignedIn>
        <button onClick={handleAboutClick} className="hover:text-[#14ADFF] transition-colors">About</button>
      </nav>

      {/* Auth buttons */}
      <div>
      <SignedOut>
        <Link to="/sign-in">
        <RetroButton text="Sign In" />
        </Link>
      </SignedOut>


        <SignedIn>
          {/* Clerk’s built-in profile menu */}
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
