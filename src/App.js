import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Correct imports

import "./App.css";
import Navbar from "./Components/Main_Components/Navbar";
import Footer from "./Components/Main_Components/Footer";
import Home from "./Pages/Homepage";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Interests from "./Pages/Interests.js";
import Portfolio_main from "./Pages/Portfolio_main.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homepage" element={<Navigate replace to="/" />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio_main />} />
        <Route path="/Interests" element={<Interests />} />
        {/* <Route path="/:projectName" element={<ProjectDetail />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
