import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
              My Portfolio
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/resume" className="text-gray-700 hover:text-blue-600">Resume</Link>
            <Link to="/certification" className="text-gray-700 hover:text-blue-600">Certification</Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-blue-600">Portfolio</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </div>

          {/* Hamburger Menu Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-2 space-y-2">
          <Link to="/about" className="block text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/resume" className="block text-gray-700 hover:text-blue-600">Resume</Link>
          <Link to="/certification" className="block text-gray-700 hover:text-blue-600">Certification</Link>
          <Link to="/portfolio" className="block text-gray-700 hover:text-blue-600">Portfolio</Link>
          <Link to="/contact" className="block text-gray-700 hover:text-blue-600">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
