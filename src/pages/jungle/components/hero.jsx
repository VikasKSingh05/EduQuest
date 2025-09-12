import React from "react";

export default function Hero() {
  const scrollToSection = () => {
    const section = document.getElementById("quiz");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero-jungle">
      <div className="hero-overlay-jungle"></div>
      <div className="hero-gradient"></div>

      <div className="hero-content">
        <h1 className="hero-title">Jungle Science</h1>
        <p className="hero-desc">
          Welcome to the magical jungle — where every tree hides a secret and every animal has a story to tell!
        </p>
        <button onClick={scrollToSection} className="hero-btn">
          Start Learning
        </button>
      </div>
    </div>
  );
}
