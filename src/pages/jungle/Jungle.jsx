import React from "react";
import Navbar from "../../components/course-componets/Navbar";
import Hero from "./components/hero";
import Quiz from "../../components/course-componets/Quiz";
import Footer from "../../components/footer";
import Video from "./components/Video";
import JungleQuestions from "./JungleQuestions";


function Jungle(){
    return (
        <div>
            <Navbar />
            <Hero />
            <Video />
            <Quiz ques = {JungleQuestions} />
            <Footer />
        </div>
        
    );
}
export default Jungle;