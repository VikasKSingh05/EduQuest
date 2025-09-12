import React, { useState } from "react";
import RetroButton from "./RetroButton";

const QuestionCard = ({ question, options, correctAnswer, onAnswer, questionNumber }) => {
  const [answered, setAnswered] = useState(false);
  const [userAnswer, setUserAnswer] = useState(null);

  const handleClick = (index) => {
    if (!answered) {
      setAnswered(true);
      setUserAnswer(index);
      const isCorrect = index === correctAnswer;
      onAnswer(isCorrect);
    }
  };

  const getButtonClass = (index) => {
    let baseClass = "relative w-full py-2 text-left !bg-[#14ADFF] !border-[#0065AB] ";

    if (answered) {
      if (index === correctAnswer) {
        baseClass += "!bg-[#B4E50D] !border-[#78C841] ";
      } else if (index === userAnswer) {
        baseClass += "!bg-[#F75270] !border-[#DC143C] ";
      } else {
        baseClass += "!bg-[#526D82] !border-[#27374D] ";
      }
    }

    return baseClass;
  };

  return (
    <div className="bg-[#12122b] p-6">
      <div className="flex items-center text-white text-2xl font-bold mb-4">
        <div className="h-12 w-12 border-3 border-[#14ADFF] rounded-full flex items-center justify-center mr-4" 
             style={{ fontFamily: "heading" }}>
          {questionNumber}
        </div>
        <p className="ml-4" style={{ fontFamily: "regular" }}>
          {question}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mx-20">
        {options.map((option, index) => (
          <RetroButton
            key={index}
            onClick={() => handleClick(index)}
            disabled={answered}
            className={getButtonClass(index)}
            text={option}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
