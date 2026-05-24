// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes comunes
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Páginas
import Home from "./pages/Home";
import Projects from "./pages/Projects";
// import Skills from "./pages/Skills";
import Experiences from "./pages/Experiences";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main style={{ minHeight: "80vh"}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/skills" element={<Skills />} /> */}
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;