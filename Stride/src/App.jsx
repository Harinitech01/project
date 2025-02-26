import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Frontpage from "./pages/Frontpage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import CreateProject from "./pages/CreateProject";
import InviteTeamMembers from "./pages/InviteTeamMembers";
import ViewReports from "./pages/ViewReports";
import RecentProjects from "./pages/RecentProjects"; // Import the new page
import "./index.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/invite-team" element={<InviteTeamMembers />} />
        <Route path="/view-reports" element={<ViewReports />} />
        <Route path="/recent-projects" element={<RecentProjects />} /> {/* Add the new route */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;