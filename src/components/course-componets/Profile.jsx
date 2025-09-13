import React from "react";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <img src="/image/boy.gif" alt="boy" />
        </div>
        <div className="profile-info">
          <p className="profile-name">Your Name</p>
          <p className="profile-level">Level 1</p>
        </div>
      </div>

      <div className="profile-button-wrapper">
        <button className="profile-button">Your Profile</button>
      </div>
    </div>
  );
}

export default Profile;
