import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Landing() {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Welcome to My Website</h1>
        <p className="mb-4">Click below to explore the Jungle Course</p>

        {/* Open Jungle in a new tab */}
        <a
          href="/jungle"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Go to Jungle Course
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
