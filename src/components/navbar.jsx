import React from "react";
import Search from "./search";

function Navbar() {
  return (
    <div className="navbar bg-[#020617] shadow-sm md:px-50 border-b-1 border-slate-600 ">
      {/* Logo */}
      <img src="/forest.svg" alt="" className="h-10 w-10 mr-5" />
      {/*title */}
      <div className="flex-1">
        <a href="/" className="text-[30px] " style={{ fontFamily: "heading" }}>
          EduQuest
        </a>
      </div>
      <div className="navbar-end">
        {/* Search */}
        <Search />
        {/* links */}
        <div>
          {/* Web buttons: hidden on small screens, visible on medium+ */}
          <div className="hidden md:flex space-x-2">
            <button className="btn btn-ghost hover:bg-[#78C841]">
              Leaderboard
            </button>
            <button className="btn btn-ghost hover:bg-[#78C841] ">
              Courses
            </button>
          </div>

          {/* Mobile dropdown button: visible on small screens, hidden on medium+ */}
          <div className="md:hidden">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost">
                Menu
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>Leaderboard</a>
                </li>
                <li>
                  <a>Courses</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sign Up button */}
<button className="relative w-30 py-2 ml-5 bg-[#B4E50D] text-black font-bold text-sm border-b-4 border-2 border-[#78C841] rounded-sm shadow-lg hover:translate-y-0.5 active:translate-y-2 transition-all" style={{fontFamily: 'button_text'}} >
  Sign up
</button>
      </div>
    </div>
  );
}
export default Navbar;
