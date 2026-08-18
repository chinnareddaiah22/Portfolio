import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Certificates from "./Components/Certificates";
import Contact from "./Components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}