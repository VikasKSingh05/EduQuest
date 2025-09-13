import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { supabase } from "../SupabaseClient";
import Header from "../components/Header";
import Footer from "../components/footer";
import RetroButton from "../components/RetroButton";
import Gridlines from "react-gridlines";
import { useNavigate } from "react-router-dom";

const Leaderboard = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [leaders, setLeaders] = useState([]);
  const [userRank, setUserRank] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        // Fetch top 10 leaders
        let { data: leadersData } = await supabase
          .from("profiles")
          .select("name, points, age_category")
          .order("points", { ascending: false })
          .limit(10);
        
        setLeaders(leadersData || []);

        // Fetch current user's rank if logged in
        if (user) {
          let { data: userData } = await supabase
            .from("profiles")
            .select("name, points, age_category")
            .eq("id", user.id)
            .single();

          if (userData) {
            // Get user's rank
            let { data: rankData } = await supabase
              .from("profiles")
              .select("id")
              .gte("points", userData.points)
              .order("points", { ascending: false });

            setUserRank({
              ...userData,
              rank: rankData ? rankData.length : 0
            });
          }
        }
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaders();

    // Set up real-time subscription
    const subscription = supabase
      .channel('leaderboard-changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'profiles' },
        () => {
          fetchLeaders(); // Refresh data when profiles change
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [user]);

  const getRankEmoji = (rank) => {
    switch (rank) {
      case 1: return "🥇";
      case 2: return "🥈";
      case 3: return "🥉";
      default: return "🏅";
    }
  };

  const getRankColor = (rank) => {
    switch (rank) {
      case 1: return "text-yellow-400";
      case 2: return "text-gray-300";
      case 3: return "text-orange-400";
      default: return "text-white";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading leaderboard...</div>
      </div>
    );
  }

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
      <div className="relative z-10 h-32 overflow-hidden">
        <img src="/image/origbig5.png" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Page content */}
      <div className="relative z-10 pt-8 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <div 
              className="text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "heading" }}
            >
              🏆 Leaderboard
            </div>
            <p 
              className="text-lg text-gray-300"
              style={{ fontFamily: "regular" }}
            >
              Top environmental champions making a difference!
            </p>
          </div>

          {/* Top 3 Podium */}
          {leaders.length >= 3 && (
            <div className="flex justify-center items-end space-x-6 mb-12">
              {/* 2nd Place */}
              <div className="text-center transform hover:scale-105 transition-transform">
                <div className="bg-gradient-to-b from-gray-300 to-gray-500 border-4 border-gray-400 rounded-xl p-6 mb-3 h-28 flex flex-col justify-center shadow-lg">
                  <div className="text-3xl mb-2">🥈</div>
                  <div className="text-white font-bold text-sm" style={{ fontFamily: "heading" }}>{leaders[1]?.name}</div>
                  <div className="text-gray-200 text-xs">{leaders[1]?.points} pts</div>
                </div>
                <div className="text-white text-lg font-bold" style={{ fontFamily: "heading" }}>#2</div>
              </div>

              {/* 1st Place */}
              <div className="text-center transform hover:scale-110 transition-transform">
                <div className="bg-gradient-to-b from-yellow-300 to-yellow-600 border-4 border-yellow-400 rounded-xl p-6 mb-3 h-36 flex flex-col justify-center shadow-2xl">
                  <div className="text-4xl mb-2">🥇</div>
                  <div className="text-black font-bold" style={{ fontFamily: "heading" }}>{leaders[0]?.name}</div>
                  <div className="text-yellow-800 text-sm font-bold">{leaders[0]?.points} pts</div>
                </div>
                <div className="text-yellow-400 text-xl font-bold" style={{ fontFamily: "heading" }}>#1 CHAMPION</div>
              </div>

              {/* 3rd Place */}
              <div className="text-center transform hover:scale-105 transition-transform">
                <div className="bg-gradient-to-b from-orange-400 to-orange-600 border-4 border-orange-500 rounded-xl p-6 mb-3 h-24 flex flex-col justify-center shadow-lg">
                  <div className="text-2xl mb-2">🥉</div>
                  <div className="text-white font-bold text-sm" style={{ fontFamily: "heading" }}>{leaders[2]?.name}</div>
                  <div className="text-orange-100 text-xs">{leaders[2]?.points} pts</div>
                </div>
                <div className="text-white text-lg font-bold" style={{ fontFamily: "heading" }}>#3</div>
              </div>
            </div>
          )}

          {/* Full Leaderboard */}
          <div className="bg-gradient-to-br from-[#12122b] to-[#0a0f1a] border-2 border-[#14ADFF] rounded-2xl p-8 max-w-5xl mx-auto shadow-2xl">
            <div 
              className="text-2xl font-bold text-white mb-8 text-center"
              style={{ fontFamily: "heading" }}
            >
              🏆 Complete Rankings
            </div>
            
            <div className="space-y-4">
              {leaders.map((leader, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between p-6 rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] ${
                    idx < 3 
                      ? "border-[#B4E50D] bg-gradient-to-r from-[#B4E50D]/20 to-[#B4E50D]/10 shadow-lg" 
                      : "border-[#68696a] bg-gradient-to-r from-[#12122b] to-[#0a0f1a] hover:border-[#14ADFF]/70 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center space-x-6">
                    <div className={`text-3xl ${getRankColor(idx + 1)}`}>
                      {getRankEmoji(idx + 1)}
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl font-bold text-[#14ADFF]" style={{ fontFamily: "heading" }}>
                        #{idx + 1}
                      </div>
                      <div>
                        <div className="text-white font-bold text-xl" style={{ fontFamily: "heading" }}>{leader.name}</div>
                        <div className="text-gray-400 text-sm capitalize" style={{ fontFamily: "regular" }}>{leader.age_category}</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#14ADFF] font-bold text-2xl" style={{ fontFamily: "heading" }}>{leader.points}</div>
                    <div className="text-gray-400 text-sm" style={{ fontFamily: "regular" }}>points</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current User Rank */}
          {userRank && (
            <div className="mt-8 bg-gradient-to-br from-[#14ADFF]/20 to-[#14ADFF]/10 border-2 border-[#14ADFF] rounded-2xl p-8 max-w-5xl mx-auto shadow-xl">
              <div 
                className="text-2xl font-bold text-white mb-6 text-center"
                style={{ fontFamily: "heading" }}
              >
                🎯 Your Ranking
              </div>
              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-[#14ADFF]/20 to-[#14ADFF]/10 rounded-xl border border-[#14ADFF]/30">
                <div className="flex items-center space-x-6">
                  <div className="text-4xl text-[#14ADFF]">👤</div>
                  <div>
                    <div className="text-white font-bold text-xl" style={{ fontFamily: "heading" }}>{userRank.name}</div>
                    <div className="text-gray-300 text-sm capitalize" style={{ fontFamily: "regular" }}>{userRank.age_category}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[#14ADFF] font-bold text-3xl" style={{ fontFamily: "heading" }}>#{userRank.rank}</div>
                  <div className="text-white text-lg" style={{ fontFamily: "regular" }}>{userRank.points} points</div>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-center space-x-6 mt-12">
            <RetroButton 
              text="Back to Dashboard" 
              onClick={() => navigate("/dashboard")}
              className="px-8 py-4 text-lg"
            />
            <RetroButton 
              text="Take Quiz" 
              onClick={() => navigate("/all-courses")}
              className="px-8 py-4 text-lg"
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

export default Leaderboard;
