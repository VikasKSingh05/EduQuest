import React, { useState } from "react";
import Profile from "./Profile";
import Score from "./Score";
import Cards from "./Cards";

function Quiz({ ques }) {
  const questions = ques;
  const [score, setScore] = useState(0);

  return (
    <div>
      {/* Title Section */}
      <div className="quiz-header">
        <h1 className="quiz-title">[ Are you ready to test yourself ]</h1>
      </div>

      {/* Main Quiz Layout */}
      <div id="quiz" className="quiz-container">
        {/* Questions Section */}
        <div className="quiz-questions">
          {questions.map((questionData, index) => (
            <Cards
              key={questionData.id || index}
              id={questionData.id}
              question={questionData.question}
              options={questionData.options}
              correct={questionData.correct}
              setScore={setScore}
            />
          ))}
        </div>

        {/* Profile + Score */}
        <div className="sidebar-sticky">
        <div className="quiz-sidebar">
          <div className="quiz-box">
            <Profile />
          </div>
          <div className="quiz-box">
            <Score score={score} />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
