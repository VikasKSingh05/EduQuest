import React from "react";
import Navbar from "../../components/course-componets/Navbar";
import Hero from "./components/hero";
import Game from "./components/game";
import Quiz from "../../components/course-componets/Quiz";
import Footer from "../../components/footer";
import ZooQuestions from "./ZooQuestions";


function Zoo(){
    return (
        <div>
            <Navbar />
            <Hero />
            <Game />
            <Quiz ques = {ZooQuestions} />
            <Footer />
        </div>
        
    );
}
export default Zoo;