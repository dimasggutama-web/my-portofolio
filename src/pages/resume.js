import React from "react";

const Resume = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Resume</h2>
        <span className="block w-40 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mb-6"></span>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
        {/* LEFT COLUMN */}
        <div className="space-y-8 md:space-y-12">
          {/* EDUCATION */}
          <section>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
              🎓 Education
            </h3>

            <div className="space-y-4 md:space-y-6 border-l-2 border-yellow-400 pl-4 md:pl-6">
              <div>
                <h4 className="text-sm md:text-base font-semibold text-gray-800">
                  State University of Surabaya
                </h4>
                <span className="text-xs md:text-sm text-yellow-500">2023 – Present</span>
                <p className="text-xs md:text-sm text-gray-600 mt-1">
                  Active student majoring in Information System at the State University
                  of Surabaya.
                </p>
              </div>

              <div>
                <h4 className="text-sm md:text-base font-semibold text-gray-800">
                  SMA Negeri 10 Surabaya
                </h4>
                <span className="text-xs md:text-sm text-yellow-500">2020 – 2023</span>
              </div>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
              💼 Experience
            </h3>

            <div className="space-y-4 md:space-y-6 border-l-2 border-yellow-400 pl-4 md:pl-6">
              <div>
                <h4 className="text-sm md:text-base font-semibold text-gray-800">
                  National Science Project Competiton
                </h4>
                <span className="text-xs md:text-sm text-yellow-500">Jan 2023 – Feb 2023</span>
                <p className="text-xs md:text-sm text-gray-600 mt-1">
                  Created NSPC research project titled "Characteristics of Bullying at SMAN 10 Surabaya"
                  observed the characteristics of bullying victims.
                </p>
              </div>

              <div>
                <h4 className="text-sm md:text-base font-semibold text-gray-800">
                  Fullstack Web Development
                </h4>
                <span className="text-xs md:text-sm text-yellow-500">Sept 2024 – Dec 2024</span>
                <p className="text-xs md:text-sm text-gray-600 mt-1">
                  Created, Designing, managing, testing, deploying, and maintaining web applications cooking
                  from the initial stage until is already for use as a final project in the course.
                </p>
              </div>

              <div>
                <h4 className="text-sm md:text-base font-semibold text-gray-800">
                  Liaison Officer Asean University Games 2024
                </h4>
                <span className="text-xs md:text-sm text-yellow-500">
                  July 2024 – June 2024
                </span>
                <p className="text-xs md:text-sm text-gray-600 mt-1">
                  Serving as liaison to ensure smooth communication and coordination
                  for event Asean University Games participants.
                </p>
              </div>

              <div>
                <h4 className="text-sm md:text-base font-semibold text-gray-800">
                  Fullstack Web Development – Celerates Accelaration Mastery Program Batch 3
                </h4>
                <span className="text-xs md:text-sm text-yellow-500">Oct 2025 – Dec 2025</span>
                <p className="text-xs md:text-sm text-gray-600 mt-1">
                  Created, Designing, mananaging, testing, deploying, and maintaining a student financial management
                  website applications from the initial stage until is already for use.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <section>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-6">
            Personal Skills
          </h3>

          <div className="bg-gray-100 rounded-xl p-4 md:p-6 space-y-4 md:space-y-6 shadow-inner">
            <Skill label="Programming" value={58} />
            <Skill label="Creativity" value={66} />
            <Skill label="Public Speaking" value={31} />
            <Skill label="Problem Solving" value={61} />
          </div>
        </section>
      </div>
    </div>
  );
};

const Skill = ({ label, value }) => (
  <div>
    <div className="flex justify-between text-xs md:text-sm mb-2">
      <span className="text-gray-700">{label}</span>
      <span className="text-gray-500">{value}%</span>
    </div>
    <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
      <div
        className="h-full bg-yellow-400 rounded-full transition-all duration-700"
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

export default Resume;