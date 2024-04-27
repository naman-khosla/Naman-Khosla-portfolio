import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import "./App.css";
import Navbar from "./Components/Main_Components/Navbar";
import Footer from "./Components/Main_Components/Footer";
import ScrollToTop from "./Components/Main_Components/ScrollToTop.js";
import Home from "./Pages/Homepage";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Interests from "./Pages/Interests.js";
import Portfolio from "./Pages/Portfolio.js";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homepage" element={<Navigate replace to="/" />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/Interests" element={<Interests />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
