import React from "react";
import Navbar from "../../components/navbar";
import Hero from "./components/hero";
import Quiz from "../../components/quiz";
import Footer from "../../components/footer";
import Reading from "./components/reading";
import questions from "./questions";
import '../../App.css';

function Jungle(){
    return (
        <div>
            <Navbar />
            <Hero />
            <Reading />
            <Quiz ques = {questions} />
            <Footer />
        </div>
        
    );
}
export default Jungle;
