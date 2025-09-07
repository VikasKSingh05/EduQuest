import React, { useState } from "react";
import Profile from "./profile";
import Score from "./score";
import Cards from "./cards";

function Quiz({ques}) {
  const questions = ques;
  const [score, setScore] = useState(0);

  return (
    <div>
      <div className="py-10 text-center bg-[#020617]">
        <h1
          className="text-6xl [text-shadow:5px_5px_0_red] justify-between"
          style={{ fontFamily: "heading" }}
        >
          [ Are you ready to test youself ]
        </h1>
      </div>
    <div id="quiz" className="flex flex-col md:flex-row px-50 py-15 bg-[#020617] gap-5">
      
      
      <div className="flex-3 border-2 border-slate-600 rounded-2xl p-5">
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


      <div className="flex-1 flex flex-col gap-5 h-full">
        <div className="flex-1 border-2 border-slate-600 rounded-3xl p-5">
          <Profile />
        </div>
        <div className="flex-1 border-2 border-slate-600 rounded-3xl p-5">
          <Score score={score} />
        </div>
      </div>

    </div>
    </div>
  );
}

export default Quiz;