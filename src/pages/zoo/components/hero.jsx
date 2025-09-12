import React from "react";

export default function Hero() {
  const scrollToSection = () => {
    const section = document.getElementById("quiz");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-gradient"></div>

      <div className="hero-content">
        <h1 className="hero-title">Welcome to the Zoo</h1>
        <p className="hero-desc">
          Welcome to the magical jungle — where every tree hides a secret and every animal has a story to tell!
        </p>
        <button onClick={scrollToSection} className="hero-btn">
          Explore
        </button>
      </div>
    </div>
  );
}
