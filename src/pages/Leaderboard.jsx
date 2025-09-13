// src/pages/Leaderboard.jsx
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { supabase } from "../SupabaseClient";
import Header from "../components/Header";
import Footer from "../components/footer";
import RetroButton from "../components/RetroButton";
import Gridlines from "react-gridlines";

const Leaderboard = () => {
  const { user } = useUser();
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
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 
              className="text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "heading" }}
            >
              🏆 Leaderboard
            </h1>
            <p 
              className="text-lg text-gray-300"
              style={{ fontFamily: "regular" }}
            >
              Top environmental champions making a difference!
            </p>
          </div>

          {/* Top 3 Podium */}
          {leaders.length >= 3 && (
            <div className="flex justify-center items-end space-x-4 mb-12">
              {/* 2nd Place */}
              <div className="text-center">
                <div className="bg-[#12122b] border-2 border-[#68696a] rounded-lg p-4 mb-2 h-24 flex flex-col justify-center">
                  <div className="text-2xl">🥈</div>
                  <div className="text-white font-bold text-sm">{leaders[1]?.name}</div>
                  <div className="text-[#14ADFF] text-xs">{leaders[1]?.points} pts</div>
                </div>
                <div className="text-white text-sm">#2</div>
              </div>

              {/* 1st Place */}
              <div className="text-center">
                <div className="bg-[#12122b] border-2 border-[#B4E50D] rounded-lg p-4 mb-2 h-32 flex flex-col justify-center">
                  <div className="text-3xl">🥇</div>
                  <div className="text-white font-bold">{leaders[0]?.name}</div>
                  <div className="text-[#B4E50D] text-sm">{leaders[0]?.points} pts</div>
                </div>
                <div className="text-white font-bold">#1</div>
              </div>

              {/* 3rd Place */}
              <div className="text-center">
                <div className="bg-[#12122b] border-2 border-[#68696a] rounded-lg p-4 mb-2 h-20 flex flex-col justify-center">
                  <div className="text-xl">🥉</div>
                  <div className="text-white font-bold text-sm">{leaders[2]?.name}</div>
                  <div className="text-[#14ADFF] text-xs">{leaders[2]?.points} pts</div>
                </div>
                <div className="text-white text-sm">#3</div>
              </div>
            </div>
          )}

          {/* Full Leaderboard */}
          <div className="bg-[#12122b] border-2 border-[#68696a] rounded-2xl p-6 max-w-4xl mx-auto">
            <h2 
              className="text-2xl font-bold text-white mb-6 text-center"
              style={{ fontFamily: "heading" }}
            >
              Complete Rankings
            </h2>
            
            <div className="space-y-3">
              {leaders.map((leader, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                    idx < 3 
                      ? "border-[#B4E50D] bg-[#B4E50D]/10" 
                      : "border-[#68696a] hover:border-[#14ADFF]/50"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`text-2xl ${getRankColor(idx + 1)}`}>
                      {getRankEmoji(idx + 1)}
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">{leader.name}</div>
                      <div className="text-gray-400 text-sm capitalize">{leader.age_category}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#14ADFF] font-bold text-xl">{leader.points}</div>
                    <div className="text-gray-400 text-sm">points</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current User Rank */}
          {userRank && (
            <div className="mt-8 bg-[#12122b] border-2 border-[#14ADFF] rounded-2xl p-6 max-w-4xl mx-auto">
              <h3 
                className="text-xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "heading" }}
              >
                Your Ranking
              </h3>
              <div className="flex items-center justify-between p-4 bg-[#14ADFF]/10 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl text-[#14ADFF]">👤</div>
                  <div>
                    <div className="text-white font-bold text-lg">{userRank.name}</div>
                    <div className="text-gray-400 text-sm capitalize">{userRank.age_category}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[#14ADFF] font-bold text-xl">#{userRank.rank}</div>
                  <div className="text-white text-sm">{userRank.points} points</div>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <RetroButton 
              text="Back to Dashboard" 
              onClick={() => window.history.back()}
              className="px-6 py-3"
            />
            <RetroButton 
              text="Take Quiz" 
              onClick={() => window.location.href = "/courses"}
              className="px-6 py-3"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Leaderboard;
