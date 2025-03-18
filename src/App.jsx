import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProjectList from "./components/Projectlist";
import MessagingPage from "./components/MessagingPage";
import UserProfile from "./components/Userprofile";
import PitchSubmission from "./components/PitchSubmission";
import Login from "./components/Login";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/messages" element={<MessagingPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/submit-pitch" element={<PitchSubmission />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
    
  );
};

export default App;
