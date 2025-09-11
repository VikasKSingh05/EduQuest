import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar({ courses, setSearchTerm }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleClick = (path, title) => {
    navigate(path); 
    setQuery("");
    setSearchTerm(title); 
  };

  return (
    <div className=" w-64 md:w-auto mx-auto p-3 rounded-lg ">
      <div className="flex items-center gap-2">
      <input
      type="text"
      placeholder="Search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="px-4 py-2 border border-gray-600 rounded-md shadow-sm 
             focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 
             !bg-[#020617] !text-white !placeholder:text-gray-400"/>

      </div>

      {query && (
        <ul className="mt-2 max-h-40 overflow-auto bg-[#12122b] rounded-md shadow-md absolute w-full z-10">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <li
                key={course.id}
                onClick={() => handleClick(course.link, course.title)}
                className="py-2 px-3 hover:bg-[#1a1a3b] cursor-pointer !text-white"
              >
                {course.title}
              </li>
            ))
          ) : (
            <li className="!text-white py-2 px-3">No courses found</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
