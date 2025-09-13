import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";
import Score from "./Score";
import Cards from "./Cards";
import { useQuizScore } from "../../hooks/useQuizScore";

function Quiz({ ques, quizType = "general" }) {
  const questions = ques;
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [startTime] = useState(Date.now());
  const navigate = useNavigate();
  const { submitQuizScore, loading } = useQuizScore();

  // Check if quiz is completed
  useEffect(() => {
    if (answeredQuestions === questions.length && !quizCompleted) {
      setQuizCompleted(true);
      handleQuizCompletion();
    }
  }, [answeredQuestions, questions.length, quizCompleted]);

  const handleQuizCompletion = async () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000); // in seconds
    
    const result = await submitQuizScore(
      quizType,
      score,
      questions.length,
      timeSpent
    );

    if (result && result.success) {
      // Show success message and redirect after a short delay
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
  };

  const handleAnswer = (isCorrect) => {
    setAnsweredQuestions(prev => prev + 1);
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  if (quizCompleted) {
    return (
      <div className="quiz-completion">
        <div className="quiz-header">
          <h1 className="quiz-title">[ Quiz Completed! ]</h1>
        </div>
        <div className="quiz-container">
          <div className="completion-message">
            <h2>Great job! You scored {score}/{questions.length}</h2>
            <p>Your score has been saved. Redirecting to dashboard...</p>
            {loading && <p>Saving your progress...</p>}
          </div>
        </div>
      </div>
    );
  }

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
              onAnswer={handleAnswer}
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
            <Score score={score} total={questions.length} />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
