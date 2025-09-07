import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Hero from "./components/hero";
import Game from "./components/game";
import Quiz from "../../components/quiz";
import questions from "./questions";

function Zoo() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero />
      <Game />
      <Quiz ques={questions} />
      <Footer></Footer>
    </div>
  );
}

export default Zoo;
