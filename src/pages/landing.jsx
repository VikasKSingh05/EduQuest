import React from "react";
import Gridlines from "react-gridlines";
import { useNavigate } from "react-router-dom";
import Navbar from '../components/navbar'
import "../App.css";

// Retro components 
import RetroButton from "../components/RetroButton";
import RetroCards from "../components/RetroCards";
import RetroBubble from "../components/RetroBubble";
import RetroArea from "../components/RetroArea";
import RetroAccordion from "../components/Accordion";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-amber-100 overflow-hidden">

      <Gridlines
        cellWidth={25}
        cellHeight={30}
        lineColor="rgba(0,0,0,0.08)"
        className="absolute inset-0 pointer-events-none z-0"
      />

      <div className="relative z-10">
       <Navbar/>

        <img src="image/sparkle.png" alt="" className="w-20 h-10 absolute top-[30%] left-[65%]"/>
        <img src="image/sparkle.png" alt="" className="w-20 h-10 absolute top-[100%] left-[25%]"/>
        <img src="image/boy.gif" alt="" className="absolute top-[100%] left-[46%]"/>


        <div className="m-60 flex flex-col items-center justify-center gap-5 text-black text-center">
          <div className="text-7xl drop-shadow-lg" style={{ fontFamily: "heading" }}>
            EDUQUEST
          </div>
          <div className="text-2xl max-w-2xl" style={{ fontFamily: "button_text" }}>
            Gamify your environmental learning journey with interactive lessons, projects, and a vibrant community.
          </div>
          <RetroButton text="Get Started" style={{ fontFamily: "button_text" }} onClick={() => navigate("/courses")} />
        </div>
      </div>

        <div className="pointer-events-auto absolute top-[20%] transform rotate-15 -left-10" >
          <RetroBubble dir='left' desc='I am so obsessed with this platform '/>
        </div>
        <div className="pointer-events-auto absolute top-[30%] transform -rotate-10  left-10" >
          <RetroBubble dir='right' desc='Me too. ' bg='#ddceb4'/>
        </div>

      <div
        className="absolute top-[12%] -right-5 z-20 transform -rotate-14 skew-x-[-4deg]"
        style={{ transformOrigin: "top right" }}>
          <div className="w-64 h-auto">
            <RetroCards title='Welcome' desc='It will be a fun adventure' source='/image/landing1.png'/>
          </div>
      </div>  

      <div
        className="absolute bottom-10 left-4 z-20 transform rotate-10 skew-x-2"
        style={{ transformOrigin: "bottom left" }}
      >
          <RetroArea />
      </div>

      <div
        className="absolute bottom-8 right-8 z-20 transform -rotate-8 skew-x-6"
        style={{ transformOrigin: "bottom right" }}
      >
        <div className="pointer-events-auto">
          <RetroAccordion />
        </div>
      </div>
    </div>
  );
}
