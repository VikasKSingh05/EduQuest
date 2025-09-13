import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/footer";
import RetroButton from "../components/RetroButton";
import RetroCards from "../components/RetroCards";
import Gridlines from "react-gridlines";

const ComingSoon = () => {
  const navigate = useNavigate();

  const comingSoonCourses = [
    { 
      title: "Our Planet, Our Home", 
      description: "Explore the fundamentals of our environment, its ecosystems, and the importance of protecting our planet.",
      image: "/image/origbig1.png",
      points: 10,
      status: "Coming Soon"
    },
    { 
      title: "Ocean Mysteries", 
      description: "Uncover the secrets of the deep blue sea and its amazing creatures.",
      image: "/image/origbig4.png",
      points: 10,
      status: "Coming Soon"
    },
    { 
      title: "Climate Guardians", 
      description: "Learn about climate change and how you can become a guardian of our planet.",
      image: "/image/origbig5.png",
      points: 10,
      status: "Coming Soon"
    },
    { 
      title: "Plastic Pirates", 
      description: "Join the fight against plastic pollution and discover ways to reduce waste.",
      image: "/image/origbig6.png",
      points: 10,
      status: "Coming Soon"
    },
    { 
      title: "Recycling Basics", 
      description: "Learn how to sort and recycle different materials and keep our planet clean",
      image: "/image/banner2.png",
      points: 10,
      status: "Coming Soon"
    },
    { 
      title: "Save Water", 
      description: "Discover simple ways to conserve water",
      image: "/image/banner1.png",
      points: 10,
      status: "Coming Soon"
    },
    { 
      title: "Green Energy", 
      description: "Explore renewable energy sources and technologies",
      image: "/image/banner4.gif",
      points: 10,
      status: "Coming Soon"
    }
  ];

  return (
    <div className="relative bg-[#FEF3C6] min-h-screen overflow-hidden">
      {/* Gridlines in the background */}
      <Gridlines
        cellWidth={25}
        cellHeight={30}
        lineColor="rgba(0,0,0,0.08)"
        className="absolute inset-0 pointer-events-none"
      />

      {/* Header with background and gridlines */}
      <div className="relative z-20 bg-black/90 backdrop-blur-sm">
        <Header />
      </div>
      
      {/* Banner below header */}
      <div className="relative z-10 h-70 overflow-hidden">
        <img src="/image/banner2.png" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Page content */}
      <div className="relative z-10 pt-8 pb-16 text-black">
        {/* Welcome Section */}
        <div className="container mx-auto px-6 text-center mb-12">
          <div 
            className="text-4xl font-bold text-black mb-4"
            style={{ fontFamily: "heading" }}
          >
            Coming Soon! 🚀
          </div>
          <p 
            className="text-xl text-black mb-8"
            style={{ fontFamily: "regular" }}
          >
            Exciting new courses are being developed. Stay tuned for these amazing learning adventures!
          </p>
        </div>

        {/* Coming Soon Courses */}
        <div className="container mx-auto px-6">
          <h2 
            className="text-3xl font-bold text-black mb-8 text-center"  
            style={{ fontFamily: "heading" }}
          >
            Upcoming Courses
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {comingSoonCourses.map((course, idx) => (
              <div key={idx} className="cursor-pointer opacity-75 hover:opacity-90 transition-opacity">
                <RetroCards
                  title={course.title}
                  desc={course.description}
                  source={course.image}
                  tags={[`+${course.points} pts`, course.status]}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-sm text-black font-bold" style={{ fontFamily: "button_text" }}>
                      {course.status}
                    </div>
                    <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                  </div>
                </RetroCards>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="flex justify-center space-x-4">
            <RetroButton 
              text="Back to Dashboard" 
              onClick={() => navigate("/dashboard")}
              className="px-6 py-3"
            />
            <RetroButton 
              text="Available Courses" 
              onClick={() => navigate("/all-courses")}
              className="px-6 py-3"
            />
          </div>
        </div>
      </div>

      {/* Footer with background and gridlines */}
      <div className="relative z-20 bg-black/90 backdrop-blur-sm">
        <Footer />
      </div>
    </div>
  );
};

export default ComingSoon;
