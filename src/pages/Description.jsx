import React from 'react';
import Gridlines from 'react-gridlines';

const Description = () => {
  return (
    <div className="relative bg-slate-900 min-h-screen overflow-hidden">
      {/* Background gridlines */}
      <Gridlines
        cellWidth={25}
        cellHeight={30}
        lineColor="rgba(255,255,255,0.03)"
        className="absolute inset-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 space-y-32">
        {/* First Block */}
        <div className="grid md:grid-cols-2 items-center gap-10">
          {/* Left: Image + GIF */}
          <div className="relative">
            <img src="/image/desc1.png" alt="desc1" className="w-full h-80 object-cover rounded-lg" />
            <img src="/image/battle.gif" alt="battle" className="absolute h-60 w-60 top-[75%] left-[60%] transform -translate-x-1/2 -translate-y-1/2" />
          </div>

          {/* Right: Heading + Description */}
          <div className="flex flex-col">
            <p className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'heading' }}>
              Level Up Your Learning
            </p>
            <p className="text-lg text-white" style={{ fontFamily: 'regular' }}>
              Enhance your skills with interactive courses and hands-on projects. Explore new topics and grow your knowledge.
            </p>
          </div>
        </div>

        {/* Second Block */}
        <div className="grid md:grid-cols-2 items-center gap-10 pt-30">
          {/* Left: Heading + Description */}
          <div className="flex flex-col order-last md:order-first">
            <p className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'heading' }}>
              Enhance Your Environmental Knowledge
            </p>
            <p className="text-lg text-white" style={{ fontFamily: 'regular' }}>
              Embark on a gamified journey to explore the environment. Complete challenges, earn rewards, and apply your knowledge to real-world ecological problems.
            </p>
          </div>

       
          {/* Right: Image + GIF */}
          <div className="relative">
            <img src="/image/desc2.png" alt="desc2" className="w-80 h-10 rounded-lg" />
          </div>
        </div>

          {/* Third Block */}
        <div className="grid md:grid-cols-2 items-center gap-10 pt-30">
          {/* Left: Image + GIF */}
          <div className="relative">
            <img src="/image/desc3.png" alt="desc1" className="w-120 h-50 object-cover rounded-lg" />
            <img src="/image/rocket.gif" alt="battle" className="absolute h-40 w-50 top-[75%] left-[60%] transform -translate-x-1/2 -translate-y-1/2" />
          </div>

          {/* Right: Heading + Description */}
          <div className="flex flex-col">
            <p className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'heading' }}>
              Create Your Eco-Projects
            </p>
            <p className="text-lg text-white" style={{ fontFamily: 'regular' }}>
             Share your achievements and explore real-world ecological challenges in a fun, gamified way
            </p>
          </div>
        </div>

        {/* Fourth Block */}
        <div className="grid md:grid-cols-2 items-center gap-10 pt-40">
          {/* Left: Heading + Description */}
          <div className="flex flex-col order-last md:order-first">
            <p className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'heading' }}>
              Make friends along the way
            </p>
            <p className="text-lg text-white" style={{ fontFamily: 'regular' }}>
              Connect with fellow environmental explorers on our community forum and Discord. Collaborate on projects, share ideas, and level up your skills while making a positive impact
            </p>
          </div>

          {/* Right: Image + GIF */}
          <div className="relative">
            <img src="/image/desc4.png" alt="desc4" className="w-full h-40 rounded-lg" />
             <img src="/image/friends.gif" alt="battle" className="absolute h-40 w-50 top-[75%] left-[60%] transform -translate-x-1/2 -translate-y-1/2" />
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default Description;
