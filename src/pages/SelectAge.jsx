
import React, { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../SupabaseClient";
import RetroButton from "../components/RetroButton";
import Gridlines from "react-gridlines";

const SelectAge = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [ageCategory, setAgeCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Debug: Log user info
  console.log("SelectAge - User:", user);
  console.log("SelectAge - User ID:", user?.id);

  // Show loading if user is not loaded yet
  if (!user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading user information...</div>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!ageCategory) {
      setError("Please select an age category");
      return;
    }
    
    setLoading(true);
    setError("");
    try {
      // First check if profile exists
      const { data: existingProfile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (existingProfile) {
        // Update existing profile
        await supabase
          .from("profiles")
          .update({ age_category: ageCategory })
          .eq("id", user.id);
      } else {
        // Create new profile
        await supabase
          .from("profiles")
          .insert([{
            id: user.id,
            name: user.firstName || user.fullName || "Anonymous",
            points: 0,
            age_category: ageCategory
          }]);
      }

      navigate("/dashboard");
    } catch (error) {
      console.error("Error updating age category:", error);
      setError("Error saving your age category. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const ageCategories = [
    { value: "kids", label: "Kids (6-12)", emoji: "🧒", description: "Fun and interactive learning" },
    { value: "teens", label: "Teens (13-18)", emoji: "👦", description: "Engaging challenges and projects" },
    { value: "adults", label: "Adults (19+)", emoji: "👨", description: "In-depth environmental knowledge" }
  ];

  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      {/* Gridlines in the background */}
      <Gridlines
        cellWidth={25}
        cellHeight={30}
        lineColor="rgba(255,255,255,0.1)"
        className="absolute inset-0 pointer-events-none"
      />

      {/* Page content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        <div className="bg-[#12122b] border-2 border-[#68696a] rounded-2xl p-8 shadow-xl max-w-2xl w-full">
          <div className="text-center mb-8">
            <h1 
              className="text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "heading" }}
            >
              Welcome to EduQuest! 🎮
            </h1>
            <p 
              className="text-lg text-white"
              style={{ fontFamily: "regular" }}
            >
              Let's personalize your learning journey
            </p>
            {user && (
              <p className="text-sm text-gray-400 mt-2">
                Welcome, {user.firstName || user.fullName || "User"}!
              </p>
            )}
            <button
              type="button"
              onClick={async () => {
                try {
                  const { data, error } = await supabase
                    .from("profiles")
                    .select("*")
                    .eq("id", user.id)
                    .single();
                  console.log("Current profile:", data);
                  console.log("Error:", error);
                  alert(`Profile exists: ${!!data}\nAge category: ${data?.age_category || 'None'}`);
                } catch (err) {
                  console.error("Debug error:", err);
                  alert("Error checking profile");
                }
              }}
              className="text-xs text-blue-400 underline mt-2"
            >
              Debug: Check Profile Status
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                className="block text-white text-xl font-bold mb-4"
                style={{ fontFamily: "heading" }}
              >
                Select Your Age Category
              </label>
              <div className="space-y-3">
                {ageCategories.map((category) => (
                  <div
                    key={category.value}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                      ageCategory === category.value
                        ? "border-[#14ADFF] bg-[#14ADFF]/10"
                        : "border-[#68696a] hover:border-[#14ADFF]/50"
                    }`}
                    onClick={() => setAgeCategory(category.value)}
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-3xl">{category.emoji}</span>
                      <div>
                        <h3 className="text-white font-bold text-lg">{category.label}</h3>
                        <p className="text-gray-300 text-sm">{category.description}</p>
                      </div>
                      <div className="ml-auto">
                        <input
                          type="radio"
                          name="ageCategory"
                          value={category.value}
                          checked={ageCategory === category.value}
                          onChange={(e) => setAgeCategory(e.target.value)}
                          className="w-5 h-5 text-[#14ADFF]"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {error && (
              <div className="text-red-400 text-center mb-4 p-3 bg-red-400/10 border border-red-400 rounded-lg">
                {error}
              </div>
            )}

            <div className="flex justify-center pt-4">
              <RetroButton
                text={loading ? "Setting up..." : "Start Learning!"}
                onClick={handleSubmit}
                disabled={!ageCategory || loading}
                className="px-8 py-3 text-lg"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SelectAge;
