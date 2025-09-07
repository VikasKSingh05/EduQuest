import React from "react";

function Score({score}) {
    const value = score * 10;
  return (
    <div className="flex flex-col gap-2">
      <p className="flex-1 text font-bold">Points Scored</p>
      <div className="flex flex-row justify-between">
        <img src="/image/star.png" alt="star" className="h-15 w-15" />
        <p>{score}/10</p>
      </div>
      <div>
        <progress
          className="progress progress-accent w-56"
          value={value}
          max="100"
        ></progress>
      </div>
    </div>
  );
}

export default Score;
