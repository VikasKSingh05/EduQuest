import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../SupabaseClient";
import Header from "../components/Header";
import Footer from "../components/footer";
import RetroButton from "../components/RetroButton";
import RetroCards from "../components/RetroCards";
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
          navigate("/select-age");
          return;
        }
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
        title: "ZooTopia", 
        description: "Step into the wild and explore the fascinating world of animals, their habitats in a fun, interactive way.",
        link: "/courses/zoo",
        image: "/image/origbig3.png",
        points: 10
      },
      { 
        title: "Our Planet, Our Home", 
        description: "Explore the fundamentals of our environment, its ecosystems, and the importance of protecting our planet.",
        link: "/courses/coming-soon",
        image: "/image/origbig1.png",
        points: 10
      },
      { 
        title: "Ocean Mysteries", 
        description: "Uncover the secrets of the deep blue sea and its amazing creatures.",
        link: "/courses/coming-soon",
        image: "/image/origbig4.png",
        points: 10
      }
    ],
    teens: [
      { 
        title: "Jungle Detectives", 
        description: "Dive into the world of wildlife and ecosystems, learning to observe and understand nature around us.",
        link: "/courses/jungle",
        image: "/image/origbig2.png",
        points: 10
      },
      { 
        title: "Climate Guardians", 
        description: "Learn about climate change and how you can become a guardian of our planet.",
        link: "/courses/coming-soon",
        image: "/image/origbig5.png",
        points: 10
      },
      { 
        title: "Plastic Pirates", 
        description: "Join the fight against plastic pollution and discover ways to reduce waste.",
        link: "/courses/coming-soon",
        image: "/image/origbig6.png",
        points: 10
      }
    ],
    adults: [
      { 
        title: "Recycling Basics", 
        description: "Learn how to sort and recycle different materials and keep our planet clean",
        link: "/courses/coming-soon",
        image: "/image/banner2.png",
        points: 10
      },
      { 
        title: "Save Water", 
        description: "Discover simple ways to conserve water",
        link: "/courses/coming-soon",
        image: "/image/banner1.png",
        points: 10
      },
      { 
        title: "Green Energy", 
        description: "Explore renewable energy sources and technologies",
        link: "/courses/coming-soon",
        image: "/image/banner4.gif",
        points: 10
      }
    ],
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl" style={{ fontFamily: "regular" }}>Loading your dashboard...</div>
      </div>
    );
  }

  if (!profile) {
    return null; 
  }

  const recommended = courses[profile.age_category] || [];

  return (
    <div className="relative bg-[#020618] min-h-screen overflow-hidden">
      {/* Gridlines in the background */}
      <Gridlines
        cellWidth={25}
        cellHeight={30}
        lineColor="rgba(255,255,255,0.1)"
        className="absolute inset-0 pointer-events-none"
      />

      {/* Header with background and gridlines */}
      <div className="relative z-20 bg-black/90 backdrop-blur-sm">
        <Header />
      </div>
      
        {/* Banner below header */}
        <div className="relative z-10 h-100 overflow-hidden">
          <img src="/image/banner.gif" alt="" className="w-full h-full object-cover" />
        </div>

      {/* Page content */}
      <div className="relative z-10 pt-8 pb-16">
        {/* Welcome Section */}
        <div className="container mx-auto px-6 text-center mb-12">
          <div 
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "heading" }}
          >
            Welcome back, {profile.name}! 
          </div>
          <div className="flex justify-center items-center space-x-8 text-white mt-10" style={{ fontFamily: "regular" }}>
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
        <div className="container mx-auto px-6 mt-10">
          <h2 
            className="text-3xl font-bold text-white mb-8 text-center"  
            style={{ fontFamily: "heading" }}
          >
            Recommended for You
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {recommended.map((course, idx) => (
              <div key={idx} onClick={() => navigate(course.link)} className="cursor-pointer">
                <RetroCards
                  title={course.title}
                  desc={course.description}
                  source={course.image}
                  tags={[`+${course.points} pts`]}
                >
                  <RetroButton 
                    text="Start" 
                    className="px-4 py-2 text-sm"
                    onClick={() => navigate(course.link)}
                  />
                </RetroCards>
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

      {/* Footer with background and gridlines */}
      <div className="relative z-20 bg-black/90 backdrop-blur-sm">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
