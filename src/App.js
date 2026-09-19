import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import AboutSection from "./pages/aboutSection";
import Certification from "./pages/certification";
import Contact from "./pages/contact";
import Portofolio from "./pages/portofolio";
import Resume from "./pages/resume";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
          <Navbar />
          <Sidebar />
          <main className="pt-16 md:ml-80 md:w-[calc(100%-20rem)] px-4 sm:px-6 min-h-screen pb-10">
            <Routes>
              <Route path="/" element={<AboutSection />} />
              <Route path="/about" element={<AboutSection />} />
              <Route path="/certification" element={<Certification />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portofolio />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
