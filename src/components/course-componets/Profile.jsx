import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { supabase } from "../../SupabaseClient";

function Profile() {
  const { user, isLoaded } = useUser();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!isLoaded || !user) {
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (error) {
          console.error("Error fetching profile:", error);
        } else {
          setProfile(data);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user, isLoaded]);

  const calculateLevel = (points) => {
    // Simple level calculation: every 100 points = 1 level
    return Math.floor((points || 0) / 100) + 1;
  };

  if (loading) {
    return (
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">
            <img src="/image/boy.gif" alt="boy" />
          </div>
          <div className="profile-info">
            <p className="profile-name">Loading...</p>
            <p className="profile-level">Level 1</p>
          </div>
        </div>
        <div className="profile-button-wrapper">
          <button className="profile-button">Your Profile</button>
        </div>
      </div>
    );
  }

  const displayName = profile?.name || user?.firstName || "User";
  const userLevel = calculateLevel(profile?.points);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <img src="/image/boy.gif" alt="boy" />
        </div>
        <div className="profile-info">
          <p className="profile-name">{displayName}</p>
          <p className="profile-level">Level {userLevel}</p>
        </div>
      </div>

      <div className="profile-button-wrapper">
        <button className="profile-button">Your Profile</button>
      </div>
    </div>
  );
}

export default Profile;
