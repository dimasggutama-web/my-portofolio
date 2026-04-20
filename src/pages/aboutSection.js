import React from "react";
import "../App.css";

const AboutSection = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">About Me</h2>
        <span className="block w-40 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mb-6"></span>

        {/* About Me Description */}
        <p className="about-description text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-left mb-8">
        I am a motivated Information Systems undergraduate student at Universitas Negeri Surabaya 
        (UNESA) with a strong interest in web development and digital technology. I am passionate
        about learning new technologies and contributing to impactful projects by developing efficient,
        user-friendly, and scalable web applications. I enjoy working at the intersection of technology
        and creativity, and continuously enhance my skills in frontend and backend development, UI/UX
        design, and creative problem-solving to deliver meaningful digital solutions.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
        {/* LEFT COLUMN */}
        <div className="space-y-8 md:space-y-12">
          {/* What I'm Doing */}
          <section>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">💻 What I'm Doing</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              <div className="bg-gray-50 rounded-lg p-4 md:p-6 hover:bg-gray-100 transition-colors">
                <h4 className="text-lg md:text-xl font-bold text-gray-700 mb-4">Web Dev</h4>
                <p className="text-sm md:text-base text-gray-600">Building responsive and interactive websites using modern technologies.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="text-xl font-bold text-gray-700 mb-4">UI/UX Design</h4>
                <p className="text-gray-600">Creating intuitive and visually appealing user interfaces.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="text-xl font-bold text-gray-700 mb-4">Problem Solving</h4>
                <p className="text-gray-600">Applying logical thinking to solve complex technical challenges.</p>
              </div>
            </div>
          </section>

          {/* My Journey */}
          <section>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">🚀 My Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="text-xl font-bold text-gray-700 mb-4">Education</h4>
                <p className="text-gray-600">Pursuing a degree in Information Systems at Universitas Negeri Surabaya (UNESA).</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h4 className="text-xl font-bold text-gray-700 mb-4">Experience</h4>
                <p className="text-gray-600">Working on various projects and internships to gain practical experience in the field.</p>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-12">
          {/* Technical Skills */}
          <section>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">🛠️ Technical Skills</h3>
            <div className="skills-marquee">
              <div className="skills-track">
                {/* Group 1 */}
                <div className="skills-group">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-12 md:w-20 h-12 md:h-20" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 md:w-20 h-12 md:h-20" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-12 md:w-20 h-12 md:h-20" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-12 md:w-20 h-12 md:h-20" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-12 md:w-20 h-12 md:h-20" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-12 md:w-20 h-12 md:h-20" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" className="w-12 md:w-20 h-12 md:h-20" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-12 md:w-20 h-12 md:h-20" />
                </div>
                {/* Duplicate for seamless loop */}
                <div className="skills-group">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-12 md:w-20 h-12 md:h-20" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 md:w-20 h-12 md:h-20" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-12 md:w-20 h-12 md:h-20" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-12 md:w-20 h-12 md:h-20" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-12 md:w-20 h-12 md:h-20" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-12 md:w-20 h-12 md:h-20" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" className="w-12 md:w-20 h-12 md:h-20" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-12 md:w-20 h-12 md:h-20" />
                </div>
              </div>
            </div>
          </section>

          {/* Interests */}
          <section>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-6">🎯 Interests</h3>
            <div className="bg-gray-100 rounded-xl p-4 md:p-6 space-y-3 md:space-y-4 shadow-inner">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💻</span>
                <span className="text-gray-700">Web Development & Technology</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎨</span>
                <span className="text-gray-700">UI/UX Design</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📚</span>
                <span className="text-gray-700">Learning New Technologies</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏀</span>
                <span className="text-gray-700">Sports & Outdoor Activities</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
};

export default AboutSection;