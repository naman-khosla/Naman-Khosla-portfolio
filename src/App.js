import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Correct imports

import "./App.css";
import Navbar from "./Components/Main_Components/Navbar";
import Footer from "./Components/Main_Components/Footer";
import Introduction1 from "./Components/Homepage_Components/Introduction_1.js";
import ProfessionalSnap from "./Components/Homepage_Components/ProfessionalSnap.js";
import Home from "./Pages/Homepage";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Portfolio from "./Pages/Portfolio";
import Hobbies from "./Pages/Hobbies";
import PortfolioPage from "./Pages/Pull.js";
import ProjectDetail from "./Pages/ProjectDetails.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homepage" element={<Navigate replace to="/" />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/:projectName" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
