import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const courses = [
  { id: 1, name: "Jungle", path: "/jungle" },
  { id: 2, name: "Zoo", path: "/zoo" },
];

function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // Filter courses based on search query
  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(query.toLowerCase())
  );

  // Handle clicking a course
  const handleClick = (path) => {
    navigate(path); // Go to the route
    setQuery("");   // Clear search input (optional)
  };

  return (
    <div className="relative bg-[#020617] w-64 md:w-auto mr-5 p-3 rounded-lg">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 bg-[#020617] text-white"
        />
      </div>

      {/* Dropdown results */}
      {query && (
        <ul className="mt-2 max-h-40 overflow-auto bg-[#12122b] rounded-md shadow-md absolute w-full z-10">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <li
                key={course.id}
                onClick={() => handleClick(course.path)}
                className="py-2 px-3 hover:bg-[#1a1a3b] cursor-pointer"
              >
                {course.name}
              </li>
            ))
          ) : (
            <li className="text-gray-500 py-2 px-3">No courses found</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default Search;
