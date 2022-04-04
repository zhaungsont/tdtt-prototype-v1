import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Today from "./pages/Today";
import Schedule from "./pages/Schedule";
import Analysis from "./pages/Analysis";
import Achievements from "./pages/Achievements";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import RedirectPage from "./pages/RedirectPage";

// import { AuthContextProvider } from "./store/AuthContext";

function App() {
  return (
    <div className="App">
    {/* <AuthContextProvider> */}
      <Routes>
        <Route path='/' exact element={<RedirectPage />} /> 
        <Route path="/today" exact element={<Today />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    {/* </AuthContextProvider> */}
    </div>
  );
}

export default App;