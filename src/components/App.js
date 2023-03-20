import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Home from "../pages/Home";
import BeginnerWorkout from "../pages/BeginnerWorkout";
import AdvanceWorkout from "../pages/AdvanceWorkout";
import Store from "../pages/Store";
import About from "../pages/About";
import Feedback from "./Feedback";
function App() {
  return (
    <div className="containerapp">
      <Router>
        {/* this will always remain at the top irrespective of whatever page I am currently present */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/beginnerworkout" element={<BeginnerWorkout />} />
          <Route path="/advanceworkout" element={<AdvanceWorkout />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
