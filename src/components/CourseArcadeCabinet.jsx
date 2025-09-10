// src/components/CourseArcadeCabinet.jsx
import React from 'react';

const CourseArcadeCabinet = ({ course }) => {
  return (
    <div className="relative w-full max-w-xs mx-auto mb-8 font-pixel overflow-hidden">
      {/* Arcade Cabinet Frame */}
      <div className="bg-gray-900 border-4 border-gray-700 rounded-lg p-2 shadow-lg arcade-cabinet-effect">
        {/* Top Marquee */}
        <div className="bg-red-700 text-white text-center py-1 mb-2 rounded marquee-font text-sm uppercase">
          {course.title}
        </div>

        {/* Screen Area */}
        <div className="bg-gray-800 border-2 border-gray-600 p-1 mb-2 screen-inset">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-32 object-cover pixelated-image"
          />
        </div>

        {/* Control Panel Area */}
        <div className="text-white text-center">
          <p className="text-xs mb-1 leading-tight">{course.description}</p>
          <div className="flex justify-center gap-2 mb-3">
            {course.tags.map((tag, index) => (
              <span key={index} className="bg-green-600 text-xs px-2 py-0.5 rounded-full pixelated-tag">
                {tag}
              </span>
            ))}
          </div>
          <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded start-button-effect text-sm uppercase">
            Start Quest
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseArcadeCabinet;