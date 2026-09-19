import React, { useEffect, useRef } from "react";
import certStupend from "../assets/Dimas Faizal Fikri Utama - 086_CERTIFICATE-C_WDUIUX_CAMP-B3_2025 - Web Development & UI_UX Design_page-0001.jpg";
import certAWS from "../assets/Sertifikat Cloud Essentials Knowledge Badge Assessment_page-0001 (1).jpg";
import certPKKMB from "../assets/E-Sertifikat PKKMB Dimas Faizal Fikri Utama _page-0001.jpg";
import certPKKMBFT from "../assets/DIMAS FAIZAL FIKRI UTAMA_page-0001.jpg";
import certXPROJECT from "../assets/Dimas Faizal Fikri Utama.png";
import certInterned from "../assets/SertifMagang.png";

function useReveal(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

const CERT_CATEGORY_COLORS = {
  "Web Dev":   "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  "Cloud":     "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
  "Event":     "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  "Academic":  "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
};

const CertCard = ({ title, date, image, link, category, delay }) => {
  const ref = useReveal(delay);
  return (
    <li ref={ref} className="reveal group bg-white dark:bg-slate-700/60 border border-gray-100 dark:border-slate-600/40 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </a>
        {/* Category badge */}
        <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm ${CERT_CATEGORY_COLORS[category] ?? "bg-gray-100 dark:bg-slate-600 text-gray-600 dark:text-slate-300"}`}>
          {category}
        </span>
        {/* View overlay on hover */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        >
          <span className="bg-white/90 text-gray-900 font-semibold text-sm px-4 py-2 rounded-full shadow flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
            View Certificate
          </span>
        </a>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-gray-400 dark:text-slate-500 mb-1.5 flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
          </svg>
          {date}
        </p>
        <h3 className="text-sm font-semibold text-gray-800 dark:text-white leading-snug line-clamp-3">
          {title}
        </h3>
      </div>
    </li>
  );
};

const Certification = () => {
  const headerRef = useReveal();

  const certifications = [
    {
      title: "Studi Independent Web Development & UI/UX Design — Celerates Acceleration Mastery Program Batch 3",
      date: "Oct 2025 – Dec 2025",
      image: certStupend,
      link: "https://drive.google.com/file/d/1gW37kt-riHKzwL3whjJbIjFJExiPFcZ0/view",
      category: "Web Dev",
    },
    {
      title: "AWS Training & Certification: Cloud Practitioner Essentials Knowledge Badge Assessment",
      date: "Jan 2026",
      image: certAWS,
      link: "https://drive.google.com/file/d/1MOSCrpQ5aB7QfNiBDpwbbqWI2ml7hio5/view?usp=drive_link",
      category: "Cloud",
    },
    {
      title: "PKKMB Universitas Negeri Surabaya Tahun 2023",
      date: "Aug 2023",
      image: certPKKMB,
      link: "https://drive.google.com/file/d/15Afg9iPsYPU9HmtMnj4ZakP37XDw-Kh4/view?usp=drive_link",
      category: "Academic",
    },
    {
      title: "PKKMB Fakultas Teknik Universitas Negeri Surabaya Tahun 2023",
      date: "Aug 2023",
      image: certPKKMBFT,
      link: "https://drive.google.com/file/d/1AKsyeVjFD_ku6_ye1_X_WgREbk4LQSx9/view?usp=drive_link",
      category: "Academic",
    },
    {
      title: "X-PROJECT 2024 Tech Genius: Webinar Tech Entrepreneurship",
      date: "14 Sept 2024",
      image: certXPROJECT,
      link: "https://drive.google.com/file/d/16zzzLRY0koEj3C7XAUw6BZVWNFQKG9gC/view?usp=drive_link",
      category: "Event",
    },
    {
      title: "Interned as a Backend Web Development Intern at LSP BLK Surabaya",
      date: "23 Feb 2026 – 26 Jun 2026",
      image: certInterned,
      link: "https://drive.google.com/file/d/1r3ot2vO9wlTymJug3dfg8rniqTDsCL_l/view?usp=sharing",
      category: "Web Dev",
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 transition-colors duration-300">
      {/* Header */}
      <div ref={headerRef} className="reveal mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-1">
          Certifications
        </h2>
        <span className="block w-40 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mb-3" />
        <p className="text-sm text-gray-500 dark:text-slate-400">
          {certifications.length} certificates earned — hover to view full document.
        </p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, i) => (
          <CertCard key={cert.title} {...cert} delay={i * 80} />
        ))}
      </ul>
    </div>
  );
};

export default Certification;
