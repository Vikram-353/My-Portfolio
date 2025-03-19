import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Gallary from "./pages/Gallary";
export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallary />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
// className="flex flex-col min-h-screen bg-gray-900 text-white"
