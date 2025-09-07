import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Jungle from "./pages/Jungle/Jungle";

function App() {
  return (
    <Routes>
      {/* Landing page (default at "/") */}
      <Route path="/" element={<Landing />} />

      {/* Standalone Jungle page */}
      <Route path="/jungle" element={<Jungle />} />
    </Routes>
  );
}

export default App;
