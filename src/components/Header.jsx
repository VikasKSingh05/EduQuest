import React from "react";
import RetroButton from "./RetroButton";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

const Header = () => {
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
        <a href="#desc">About</a>
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
