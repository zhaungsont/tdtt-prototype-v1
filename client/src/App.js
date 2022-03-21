import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Analysis from "./pages/Analysis";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/analysis" element={<Analysis />} />
      </Routes>
    </div>
  );
}

export default App;