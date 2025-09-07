import React from "react";

export default function Hero() {
  const scrollToSection = () => {
    const section = document.getElementById("quiz");
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className="relative w-full h-[30rem] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url("image/background_course1.gif")` }}
    >
      <div className="absolute inset-0 bg-black/40"></div> {/* overlay */}
      <div className="container mx-50 px-6 relative z-10 flex flex-col items-start md:w-2/3">
        {/* Heading */}
        <h1
          className="text-5xl md:text-6xl font-bold text-white [text-shadow:5px_5px_0_black] mb-4"
          style={{ fontFamily: "heading" }}
        >
          Jungle Science
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-white mb-6 w-150">
          Learn programming fundamentals such as variables, control flow, and
          loops with the world's most popular and versatile coding language —
          Python!
        </p>

        {/* Button */}
        <button
          onClick={scrollToSection}
          className="relative px-5 py-2 bg-[#B4E50D] text-black font-bold text-lg
                   border-2 border-b-4 border-[#78C841] rounded-sm shadow-lg
                   hover:translate-y-0.5 active:translate-y-2 transition-all"
          style={{ fontFamily: "button_text" }}
        >
          Start Learning
        </button>
      </div>
    </div>
  );
}
