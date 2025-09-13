import React from "react";
import Navbar from "../../components/course-componets/Navbar";
import Hero from "./components/hero";
import Game from "./components/game";
import Quiz from "../../components/course-componets/Quiz";
import Footer from "../../components/footer";
import ZooQuestions from "./ZooQuestions";
import "../courses.css";


function Zoo(){
    return (
        <div>
            <Navbar />
            <Hero />
            <Game />
            <Quiz ques={ZooQuestions} quizType="zoo" />
            <Footer />
        </div>
        
    );
}
export default Zoo;