import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Correct imports

import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Introduction1 from "./Components/Introduction_1";
import ProfessionalSnap from "./Components/ProfessionalSnap";
import Home from "./Pages/Homepage";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Portfolio from "./Pages/Portfolio";
import Hobbies from "./Pages/Hobbies";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homepage" element={<Navigate replace to="/" />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
