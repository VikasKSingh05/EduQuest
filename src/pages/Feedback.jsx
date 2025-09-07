import React from "react";
import Gridlines from 'react-gridlines';
import '../App.css';

function Feedback() {
  return (
    <section className="relative min-h-screen bg-slate-950 overflow-hidden">

      <Gridlines
        cellWidth={25}
        cellHeight={30}
        lineColor="rgba(255,255,255,0.05)" 
        className="absolute inset-0 pointer-events-none z-0"
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <div className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'heading' }}>
          Loved by our learners 💖
        </div>
        <p className="text-lg text-gray-300 max-w-2xl" style={{fontFamily:'regular'}}>
          Join our gamified environmental learning community. Hear from learners who have leveled up their skills, explored new challenges, and made a positive impact on the planet!
        </p>
      </div>

    </section>
  );
}

export default Feedback;
