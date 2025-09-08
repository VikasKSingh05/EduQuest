import React from "react";
import Landing from "./landing";
import Courses from "./Courses";
import Description from "./Description";
import Feedback from "./Feedback";
import Footer from "../components/footer";

const Home = () => {
  return(
    <div className="bg-white">
      <Landing/>
      <Courses/>
      <Description/>
      <Feedback/>
      <Footer/> 
    </div>
  )
}
export default Home;