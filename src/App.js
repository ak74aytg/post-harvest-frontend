import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Pages/Homepage";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GrainQuality from "./Pages/GrainQuality";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/grains-quality" element={<GrainQuality />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
