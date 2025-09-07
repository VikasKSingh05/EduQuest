import React from "react";

function Profile() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex-1 flex flex-row gap-5">
        <div className="flex-1">
          <img src="/image/boy.gif" alt="boy" className="h-15 w-15" />
        </div>
        <div className="flex-3 py-2">
          <p className="text-[20px] font-bold">Your Name</p>
          <p>Level 1</p>
        </div>
      </div>
      <div className="flex-1 ml-6">
        <button
          className="relative px-5 py-2 bg-[#020617] text-white font-bold text-lg
                   border-2 border-b-4 border-[#475569] rounded-sm shadow-lg
                   hover:translate-y-0.5 active:translate-y-2 transition-all"
          style={{ fontFamily: "button_text" }}
        >
          Your Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
