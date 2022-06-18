import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Event from "./pages/event";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </Router>
  );
}
export default App;
