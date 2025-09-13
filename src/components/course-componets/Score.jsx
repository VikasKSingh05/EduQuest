import React from "react";

function Score({ score, total = 10 }) {
  const value = (score / total) * 100;

  return (
    <div className="score-container">
      <p className="score-title">Points Scored</p>

      <div className="score-row">
        <img src="/image/star.png" alt="star" className="star-icon" />
        <p className="score-text">{score}/{total}</p>
      </div>

      <div className="progress-container">
        <progress value={value} max="100"></progress>
      </div>
    </div>
  );
}

export default Score;
