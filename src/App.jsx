import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Gallary from "./pages/Gallary";
import ScrollToTop from "./Components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            {/* ✅ Fix: Make Home the default route */}
            <Route path="/" element={<Home />} />
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
