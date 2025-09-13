import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../SupabaseClient";
import Header from "../components/Header";
import Footer from "../components/footer";
import RetroButton from "../components/RetroButton";
import Gridlines from "react-gridlines";

const Dashboard = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;
      
      try {
        let { data } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();
        
        if (!data) {
          // If no profile exists, redirect to age selection
          navigate("/select-age");
          return;
        }
        
        // If profile exists but no age category, redirect to age selection
        if (!data.age_category) {
          navigate("/select-age");
          return;
        }
        
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [user, navigate]);

  const courses = {
    kids: [
      { 
        title: "Zoo Adventure", 
        description: "Meet amazing animals and learn about wildlife conservation",
        link: "/courses/zoo",
        image: "/image/3.png",
        points: 10
      },
      { 
        title: "Recycling Basics", 
        description: "Learn how to sort and recycle different materials",
        link: "/courses/recycling",
        image: "/image/coin.png",
        points: 10
      },
      { 
        title: "Save Water", 
        description: "Discover simple ways to conserve water at home",
        link: "/courses/water",
        image: "/image/coin.png",
        points: 10
      }
    ],
    teens: [
      { 
        title: "Jungle Science", 
        description: "Explore ecosystems and biodiversity in tropical forests",
        link: "/courses/jungle",
        image: "/image/3.gif",
        points: 10
      },
      { 
        title: "Climate Change 101", 
        description: "Understand the science behind climate change",
        link: "/courses/climate",
        image: "/image/coin.png",
        points: 10
      },
      { 
        title: "Sustainable Living", 
        description: "Learn eco-friendly lifestyle choices",
        link: "/courses/sustainable",
        image: "/image/coin.png",
        points: 10
      }
    ],
    adults: [
      { 
        title: "Green Energy", 
        description: "Explore renewable energy sources and technologies",
        link: "/courses/energy",
        image: "/image/coin.png",
        points: 10
      },
      { 
        title: "Policy & Environment", 
        description: "Understand environmental policies and regulations",
        link: "/courses/policy",
        image: "/image/coin.png",
        points: 10
      },
      { 
        title: "Environmental Economics", 
        description: "Learn about the economic aspects of environmental protection",
        link: "/courses/economics",
        image: "/image/coin.png",
        points: 10
      }
    ],
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading your dashboard...</div>
      </div>
    );
  }

  if (!profile) {
    return null; // Will redirect to age selection
  }

  const recommended = courses[profile.age_category] || [];

  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      {/* Gridlines in the background */}
      <Gridlines
        cellWidth={25}
        cellHeight={30}
        lineColor="rgba(255,255,255,0.1)"
        className="absolute inset-0 pointer-events-none"
      />

      <Header />
      
      {/* Page content */}
      <div className="relative z-10 pt-20 pb-16">
        {/* Welcome Section */}
        <div className="container mx-auto px-6 text-center mb-12">
          <div 
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "heading" }}
          >
            Welcome back, {profile.name}! 
          </div>
          <div className="flex justify-center items-center space-x-8 text-white">
            <div className="bg-[#12122b] border-2 border-[#68696a] rounded-lg p-4">
              <div className="text-2xl font-bold text-[#14ADFF]">{profile.points || 0}</div>
              <div className="text-sm">Total Points</div>
            </div>
            <div className="bg-[#12122b] border-2 border-[#68696a] rounded-lg p-4">
              <div className="text-2xl font-bold text-[#B4E50D]">{profile.age_category}</div>
              <div className="text-sm">Age Group</div>
            </div>
          </div>
        </div>

        {/* Recommended Courses */}
        <div className="container mx-auto px-6">
          <h2 
            className="text-3xl font-bold text-white mb-8 text-center"
            style={{ fontFamily: "heading" }}
          >
            Recommended for You
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {recommended.map((course, idx) => (
              <div
                key={idx}
                className="bg-[#12122b] border-2 border-[#68696a] rounded-2xl p-6 hover:border-[#14ADFF] transition-all cursor-pointer group"
                onClick={() => navigate(course.link)}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#14ADFF] rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 
                    className="text-xl font-bold text-white mb-2"
                    style={{ fontFamily: "heading" }}
                  >
                    {course.title}
                  </h3>
                  <p 
                    className="text-gray-300 mb-4 text-sm"
                    style={{ fontFamily: "regular" }}
                  >
                    {course.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#B4E50D] font-bold">+{course.points} pts</span>
                    <RetroButton 
                      text="Start" 
                      className="px-4 py-2 text-sm"
                      onClick={() => navigate(course.link)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="flex justify-center space-x-4">
            <RetroButton 
              text="View All Courses" 
              onClick={() => navigate("/all-courses")}
              className="px-6 py-3"
            />
            <RetroButton 
              text="Leaderboard" 
              onClick={() => navigate("/leaderboard")}
              className="px-6 py-3"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
