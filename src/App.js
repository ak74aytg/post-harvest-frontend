import "./App.css";
import Homepage from "./Pages/Homepage";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GrainQuality from "./Pages/GrainQuality";
import UploadImages from "./Pages/UploadImages";
import Resources from "./Pages/Resources";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="mt-83 min-h-screen">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/grains-quality" element={<GrainQuality />} />
            <Route path="/upload-image" element={<UploadImages />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
