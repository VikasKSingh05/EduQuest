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
    const basePoints = {
      'zoo': 50,
      'jungle': 75,
      'recycling': 30,
      'water': 25,
      'climate': 60,
      'sustainable': 45,
      'energy': 100,
      'policy': 80,
      'economics': 90
    };

    const base = basePoints[quizType] || 50;
    const accuracy = score / totalQuestions;
    
    // Bonus points for perfect score
    const perfectBonus = accuracy === 1 ? base * 0.2 : 0;
    
    return Math.round(base * accuracy + perfectBonus);
  };

  return {
    submitQuizScore,
    loading
  };
};
