import React from "react";
import RetroButton from "./RetroButton";

function LandingNav() {
  return (
   <header className="text-white text-center bg-black flex items-center justify-between px-8 py-3 font-extrabold">
          <div className="flex items-center">
            <img src="forest.svg" alt="logo" className="w-10 h-10" />
            <h1 className="text-lg font-bold pl-4" style={{ fontFamily: "heading" }}>
              EduQuest
            </h1>
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
export default LandingNav;
