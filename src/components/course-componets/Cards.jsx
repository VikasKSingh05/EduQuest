import React, { useState } from "react";

function Cards({ id, question, options, correct, onAnswer }) {
  const [answered, setAnswered] = useState(false);
  const [userAnswer, setUserAnswer] = useState(null);

  function handleClick(index) {
    if (!answered) {
      setAnswered(true);
      setUserAnswer(index);
      onAnswer(index === correct);
    }
  }

  const getButtonClass = (index) => {
    let baseClass = "option-btn";
    if (answered) {
      if (index === correct) {
        return baseClass + " correct";
      } else if (index === userAnswer) {
        return baseClass + " wrong";
      } else {
        return baseClass + " neutral";
      }
    }
    return baseClass + " default";
  };

  return (
    <div className="card-container">
      {/* Question header */}
      <div className="question-header">
        <p className="question-id">{id}</p>
        <p className="question-text">{question}</p>
      </div>

      {/* Options */}
      <div className="options-grid">
        {options.map((opt, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={getButtonClass(index)}
            disabled={answered}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Cards;
