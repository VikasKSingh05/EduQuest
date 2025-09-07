import React from "react";
import Navbar from "../../components/navbar";
import Hero from "./components/hero";
import Quiz from "../../components/quiz";
import Footer from "../../components/footer";
import Reading from "./components/reading";
import '../../App.css';

function Jungle(){
    return (
        <div>
            <Navbar />
            <Hero />
            <Reading />
            <Quiz />
            <Footer />
        </div>
        
    );
}
export default Jungle;
