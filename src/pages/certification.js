import React from "react";
import certStupend from "../assets/Dimas Faizal Fikri Utama - 086_CERTIFICATE-C_WDUIUX_CAMP-B3_2025 - Web Development & UI_UX Design_page-0001.jpg";
import certAWS from "../assets/Sertifikat Cloud Essentials Knowledge Badge Assessment_page-0001 (1).jpg";
import certPKKMB from "../assets/E-Sertifikat PKKMB Dimas Faizal Fikri Utama _page-0001.jpg";
import certPKKMBFT from "../assets/DIMAS FAIZAL FIKRI UTAMA_page-0001.jpg";
import certXPROJECT from "../assets/Dimas Faizal Fikri Utama.png";

const Certification = () => {
  const certifications = [
    {
      title: "Studi Independent Web Development & UI/UX Design Celerates Acceleration Mastery Program Batch 3",
      date: "Oct 2025 - Dec 2025",
      image: certStupend,
      link: "https://drive.google.com/file/d/1gW37kt-riHKzwL3whjJbIjFJExiPFcZ0/view",
    },
    {
      title: "AWS Training & Certification: AWS Cloud Practitioner Essentials Knowledge Badge Assesment",
      date: "Jan 2026",
      image: certAWS,
      link: "https://drive.google.com/file/d/1MOSCrpQ5aB7QfNiBDpwbbqWI2ml7hio5/view?usp=drive_link",
    },
    {
      title: "PKKMB Universitas Negeri Surabaya Tahun 2023",
      date: "Aug 2023",
      image: certPKKMB,
      link: "https://drive.google.com/file/d/15Afg9iPsYPU9HmtMnj4ZakP37XDw-Kh4/view?usp=drive_link",
    },
    {
      title: "PKKMB Fakultas Teknik Universitas Negeri Surabaya Tahun 2023",
      date: "Aug 2023",
      image: certPKKMBFT,
      link: "https://drive.google.com/file/d/1AKsyeVjFD_ku6_ye1_X_WgREbk4LQSx9/view?usp=drive_link",
    },
    {
      title: "X-PROJECT 2024 Tech Genius: WEBINAR TECH ENTREPRENEURSHIP ",
      date: "Oct 2025 - Dec 2025",
      image: certXPROJECT,
      link: "https://drive.google.com/file/d/1gW37kt-riHKzwL3whjJbIjFJExiPFcZ0/view",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
        Certification
      </h2>
      <span className="block w-40 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mb-6"></span>

      <section className="certification-posts">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {certifications.map((item, index) => (
            <li
              key={index}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              {/* Image */}
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                />
              </a>

              {/* Content */}
              <div className="p-3 md:p-4">
                <p className="text-xs md:text-sm text-gray-500 mb-1">
                  Event • {item.date}
                </p>
                <h3 className="text-base md:text-lg font-semibold text-gray-800 leading-snug">
                  {item.title}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Certification;
