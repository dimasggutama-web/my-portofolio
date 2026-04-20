import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import AboutSection from "./pages/aboutSection";
import Certification from "./pages/certification";
import Contact from "./pages/contact";
import Portofolio from "./pages/portofolio";
import Resume from "./pages/resume";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <main className="pt-16 ml-80 w-[calc(100%-20rem)] px-6 min-h-screen">
        <Routes>
          <Route path="/" element={<AboutSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portofolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
