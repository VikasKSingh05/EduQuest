import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const courses = [
  { id: 1, name: "Jungle", path: "/courses/jungle" },
  { id: 2, name: "Zoo", path: "/courses/zoo" },
];

function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleClick = (path) => {
    navigate(path);
    setQuery("");
  };

  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
      </div>

      {query && (
        <ul className="search-dropdown">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <li
                key={course.id}
                onClick={() => handleClick(course.path)}
                className="dropdown-item"
              >
                {course.name}
              </li>
            ))
          ) : (
            <li className="dropdown-empty">No courses found</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default Search;
