import React, { useState, useEffect } from 'react'
import { useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/footer'
import RetroButton from '../components/RetroButton'
import ZooQuestions from '../components/ZooQuestions'
import QuestionCard from '../components/QuestionCard'
import { useQuizScore } from '../hooks/useQuizScore'

const Zoo = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const { submitQuizScore, loading } = useQuizScore();
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [startTime] = useState(Date.now());
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setAnsweredQuestions(answeredQuestions + 1);
  };

  const handleQuizComplete = async () => {
    if (!user) {
      alert("Please sign in to save your progress!");
      return;
    }

    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    const result = await submitQuizScore('zoo', score, ZooQuestions.length, timeSpent);
    
    if (result.success) {
      setShowResults(true);
      setQuizCompleted(true);
    } else {
      alert("Error saving your score. Please try again.");
    }
  };

  useEffect(() => {
    if (answeredQuestions === ZooQuestions.length && !quizCompleted) {
      handleQuizComplete();
    }
  }, [answeredQuestions, quizCompleted]);

  return (
    <div className='bg-black'>
      <Header/>
      
      {/* Hero Section */}
      <div className="relative w-full h-[30rem] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url("/image/3.png")`}}>  {/* Add leading forward slash */}
        <div className="absolute inset-0 bg-cover bg-[position:-150px_0]" 
          style={{ backgroundImage: `url("/image/2.gif")`}}>  {/* Add leading forward slash */}
        </div> 
        <span className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></span>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-start md:w-2/3">
          <div className="text-5xl md:text-6xl font-bold text-white [text-shadow:5px_5px_0_black] mb-4 max-w-2xl"
            style={{ fontFamily: "heading" }}>
            Welcome to the Zoo
          </div>

          <p className="text-lg md:text-xl text-white mb-6 max-w-xl" 
            style={{ fontFamily: "regular" }}>
            Every animal is your new friend — let's learn, play, and explore the zoo together!
          </p>

          <div className='mt-4'>
            <RetroButton text="Explore the Zoo"/>
          </div>
        </div>
      </div>

      {/* Learn by Playing Section */}
      <div className="flex py-16 px-5 gap-5 bg-[#020617]">
        <div className="flex-1 flex flex-col justify-center gap-8 mx-auto max-w-xl">
          <p style={{ fontFamily: "heading" }} className="text-3xl font-bold text-white">
            Learn by playing
          </p>
          <div className="text-white" style={{ fontFamily: "regular" }}>
        Are you ready to go on a wild adventure? In this zoo, you'll meet animals from around the world — from the tallest giraffes to the smallest penguins.
          </div>
          <div> 
            <a href="/game/jungle_game.html" target="_blank" rel="noopener noreferrer">
              <RetroButton 
                text="DIVE IN"
                className=" text-white font-bold py-2 px-4 rounded"
              />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center mr-20">
          <img src="/image/test_image.png" alt="" className="w-[680px] h-[510px]" />  {/* Add leading forward slash */}
        </div>
      </div>

      {/* Quiz Section */}
      <div className="py-10 text-center bg-[#020617]">
        <div
          className="text-6xl [text-shadow:5px_5px_0_red] justify-between text-white"
          style={{ fontFamily: "heading" }}
        >
          [ Are you ready to test yourself ]
        </div>
      </div>
      <div id="quiz" className="flex flex-col md:flex-row px-50 py-15 bg-[#020617] gap-5">
        <div className="flex-3 !border-2 !border-[#68696a] rounded-2xl p-8 bg-[#12122b] shadow-xl mx-auto max-w-5xl">
          {ZooQuestions.map((questionData, index) => (
            <div key={questionData.id || index} className="mb-8 last:mb-0">
              <QuestionCard
                questionNumber={index + 1}
                question={questionData.question}
                options={questionData.options}
                correctAnswer={questionData.correct}
                onAnswer={handleAnswer}
              />
            </div>
          ))}
          
          {/* Score display */}
          <div className="mt-8 text-white text-center border-t-2 border-[#14ADFF] pt-4">
            <h2 className="text-2xl font-bold" style={{ fontFamily: "heading" }}>
              Current Score: {score}/{ZooQuestions.length}
            </h2>
            {loading && (
              <p className="text-[#14ADFF] mt-2">Saving your progress...</p>
            )}
            {showResults && (
              <div className="mt-4 p-4 bg-[#B4E50D]/20 border border-[#B4E50D] rounded-lg">
                <h3 className="text-xl font-bold text-[#B4E50D] mb-2">Quiz Completed! 🎉</h3>
                <p className="text-white">Great job! Your score has been saved.</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <RetroButton 
                    text="View Leaderboard" 
                    onClick={() => navigate("/leaderboard")}
                    className="px-4 py-2"
                  />
                  <RetroButton 
                    text="Back to Dashboard" 
                    onClick={() => navigate("/dashboard")}
                    className="px-4 py-2"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Zoo