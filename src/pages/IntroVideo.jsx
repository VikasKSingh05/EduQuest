import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function IntroVideo() {
  const navigate = useNavigate();

  // handle skip with "S"
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key.toLowerCase() === "s") {
        navigate("/all-courses");
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [navigate]);

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black overflow-hidden flex items-center justify-center">
      <video
        autoPlay
        className="w-full h-full object-cover"
        onEnded={() => navigate("/all-courses")}
      >
        <source src="/image/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay skip hint */}
      <div className="absolute bottom-30 right-10 text-white text-lg bg-black/50 px-4 py-2 rounded-lg" style={{fontFamily:'heading'}}>
        Press <strong>S</strong> to skip
      </div>
    </div>
  );
}
