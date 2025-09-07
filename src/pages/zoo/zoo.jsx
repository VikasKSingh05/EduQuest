import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Hero from "./components/hero";
import Game from "./components/game";
import Quiz from "../../components/quiz";
function Zoo() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero />
      <Game />
      <Quiz />
      <Footer></Footer>
    </div>
  );
}

export default Zoo;
