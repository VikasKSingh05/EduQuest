import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { supabase } from "../SupabaseClient";

export const useQuizScore = () => {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  const submitQuizScore = async (quizType, score, totalQuestions, timeSpent) => {
    if (!user) {
      console.error("User not authenticated");
      return false;
    }

    setLoading(true);
    try {
      // Calculate points based on score and quiz type
      const pointsEarned = calculatePoints(quizType, score, totalQuestions);
      
      // Store quiz attempt
      const { error: quizError } = await supabase
        .from("quiz_attempts")
        .insert([
          {
            user_id: user.id,
            quiz_type: quizType,
            score: score,
            total_questions: totalQuestions,
            points_earned: pointsEarned,
            time_spent: timeSpent,
            completed_at: new Date().toISOString()
          }
        ]);

      if (quizError) {
        console.error("Error storing quiz attempt:", quizError);
        return false;
      }

      // Update user's total points
      const { error: pointsError } = await supabase.rpc('increment_user_points', {
        user_id: user.id,
        points_to_add: pointsEarned
      });

      if (pointsError) {
        console.error("Error updating user points:", pointsError);
        return false;
      }

      return { success: true, pointsEarned };
    } catch (error) {
      console.error("Error submitting quiz score:", error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const calculatePoints = (quizType, score, totalQuestions) => {
    // Each course gives 10 points total
    const basePoints = 10;
    const accuracy = score / totalQuestions;
    
    // Calculate points based on accuracy (0-10 points)
    return Math.round(basePoints * accuracy);
  };

  return {
    submitQuizScore,
    loading
  };
};
