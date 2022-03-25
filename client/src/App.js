import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Analysis from "./pages/Analysis";
import Achievements from "./pages/Achievements";
import Settings from "./pages/Settings";
import Login from "./pages/Login";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;