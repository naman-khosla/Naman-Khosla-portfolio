import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"; // Basic CSS for styling
import Navbar from "./Components/Navbar.js";
import Footer from "./Components/Footer.js";
import Body from "./Components/Body.js";

function App() {
  return (
    <div className="main">
      <nav>
        <Navbar />
        <Body />
        <Footer />
      </nav>
    </div>
  );
}

export default App;
