import React from "react";
import webMnyTracker from "../assets/moneyTracker.png";
import webCookpad from "../assets/webCookpad.png";
import desainFigma from "../assets/desainFigma.png";

const Portofolio = () => {
  const portofolio = [
    {
      title: "Cookpad Web Application",
      date: "Sept 2024 - Dec 2024",
      image: webCookpad,
      link: "https://drive.google.com/drive/folders/1__dMsu_mkgApvXcU5J7GyeTqfEIebv3r?usp=drive_link",
    },
    {
      title: "Money Tracker Web Application",
      date: "Oct 2025 - Dec 2025",
      image: webMnyTracker,
      link: "https://moneytrackerapp-sandy.vercel.app/",
    },
    {
      title: "Mockup Design Figma Web Application",
      date: "Nov 2025",
      image: desainFigma,
      link: "https://www.figma.com/design/b4RGhXZGVHWznAISbbnNPZ/Dimas-Faizal-Fikri-Utama---Mini-Project--Website-Calmz-?node-id=19-1537&t=7wdZ38J5l0rN5t5v-1k",
    },
  ];
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Portfolio</h2>
      <span className="block w-40 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mb-6"></span>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {portofolio.map((item, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-40 sm:h-50 md:h-80 object-cover hover:scale-110 transition-transform duration-300"
            />
            <div className="p-3 md:p-4">
              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-xs md:text-sm text-gray-500 mb-3">{item.date}</p>
              <a 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:text-amber-600 font-medium"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portofolio;
