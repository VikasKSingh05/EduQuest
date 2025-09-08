import React, { useState } from "react";

function Cards({id,  question, options, correct, setScore }) {
  const [answered, setAnswered] = useState(false);
  const [userAnswer, setUserAnswer] = useState(null);

  function handleClick(index) {
    if (!answered) {
      setAnswered(true);
      setUserAnswer(index);
      if (index === correct) {
        setScore((prev) => prev + 1);
      }
    }
  }

  const getButtonClass = (index) => {
    let baseClass = "relative w-full py-2 ml-5 bg-[#14ADFF] text-white font-bold text-base border-b-7 border-4 border-[#0065AB] rounded-sm shadow-lg hover:translate-y-0.5 active:translate-y-2 transition-all ";
    if (answered) {
      if (index === correct) {
        baseClass += "bg-[#B4E50D] hover:bg-[#78C841] hover:border-[#B4E50D] border-[#78C841]";
      } else if (index === userAnswer) {
        baseClass += "bg-[#F75270] hover:bg-[#DC143C] hover:border-[#F75270] border-[#DC143C]";
      } else {
        baseClass += "bg-[#526D82] border-[#27374D] hover:bg-[#27374D] hover:border-[#526D82] ";
      }
    } else {
      baseClass += "bg-blue-500 hover:bg-[#0065AB] hover:border-[#14ADFF]";
    }
    return baseClass;
  };

  return(
    <div className="flex flex-col gap-4 p-6 rounded-lg shadow-lg">
      <div className=" flex text-white text-2xl font-bold ">
        <p className=" h-12 aspect-square border-3 border-slate-600 rounded-full flex items-center justify-center">{id}</p>
        <p className="ml-8">{question}</p>
        
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mx-20" style={{fontFamily: 'heading'}}>
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
