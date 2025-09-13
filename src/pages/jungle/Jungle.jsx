import React from "react";
import Header from "../../components/Header";
import Hero from "./components/hero";
import Quiz from "../../components/course-componets/Quiz";
import Footer from "../../components/footer";
import Video from "./components/Video";
import JungleQuestions from "./JungleQuestions";
import "../courses.css";


function Jungle(){
    return (
        <div>
            <Header />
            <Hero />
            <Video />
            <Quiz ques={JungleQuestions} quizType="jungle" />
            <Footer />
        </div>
        
    );
}
export default Jungle;