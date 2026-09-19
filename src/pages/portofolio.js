import React, { useEffect, useRef } from "react";
import webMnyTracker from "../assets/moneyTracker.png";
import webCookpad from "../assets/webCookpad.png";
import desainFigma from "../assets/desainFigma.png";
import lspBlk from "../assets/lspblk.png";

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

const TAG_COLORS = {
  "Web App":   "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  "UI Design": "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  "Finance":   "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  "Figma":     "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400",
  "Backend":   "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
};


const PortfolioCard = ({ title, date, image, link, tags = [], desc, delay }) => {
  const ref = useReveal(delay);
  return (
    <div
      ref={ref}
      className="reveal portfolio-card group bg-white dark:bg-slate-700/60 border border-gray-100 dark:border-slate-600/40 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image with Overlay */}
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Hover overlay */}
        <div className="card-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-end pb-5 px-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold text-sm px-5 py-2 rounded-full shadow-lg transition-colors"
            id={`portfolio-link-${title.replace(/\s+/g, "-").toLowerCase()}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
            View Project
          </a>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs font-semibold px-2 py-0.5 rounded-full ${TAG_COLORS[tag] ?? "bg-gray-100 dark:bg-slate-600 text-gray-600 dark:text-slate-300"}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-base font-bold text-gray-800 dark:text-white mb-1 leading-snug">
          {title}
        </h3>
        {desc && (
          <p className="text-xs text-gray-500 dark:text-slate-400 mb-2 leading-relaxed">{desc}</p>
        )}
        <p className="text-xs text-gray-400 dark:text-slate-500 flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
          </svg>
          {date}
        </p>
      </div>
    </div>
  );
};

const Portofolio = () => {
  const headerRef = useReveal();

  const projects = [
    {
      title: "LSP BLK Surabaya – Competency Certification Portal",
      date: "Feb 2026 – Jun 2026",
      image: lspBlk,
      link: "https://lspblksurabaya.id",
      tags: ["Web App", "Backend"],
      desc: "Backend system for digital competency certification at BLK Surabaya — internship project with automated document generation.",
    },
    {
      title: "Cookpad Web Application",
      date: "Sept 2024 – Dec 2024",
      image: webCookpad,
      link: "https://drive.google.com/drive/folders/1__dMsu_mkgApvXcU5J7GyeTqfEIebv3r?usp=drive_link",
      tags: ["Web App"],
      desc: "A full-stack cooking recipe web application built as a course final project.",
    },
    {
      title: "Money Tracker Web Application",
      date: "Oct 2025 – Dec 2025",
      image: webMnyTracker,
      link: "https://moneytrackerapp-sandy.vercel.app/",
      tags: ["Web App", "Finance"],
      desc: "Student financial management system with tracking and reporting features.",
    },
    {
      title: "Mockup Design – Calmz App",
      date: "Nov 2025",
      image: desainFigma,
      link: "https://www.figma.com/design/b4RGhXZGVHWznAISbbnNPZ/Dimas-Faizal-Fikri-Utama---Mini-Project--Website-Calmz-?node-id=19-1537&t=7wdZ38J5l0rN5t5v-1k",
      tags: ["UI Design", "Figma"],
      desc: "High-fidelity Figma mockup design for the Calmz wellness web application.",
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 transition-colors duration-300">
      {/* Header */}
      <div ref={headerRef} className="reveal mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-1">
          Portfolio
        </h2>
        <span className="block w-40 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mb-3" />
        <p className="text-sm text-gray-500 dark:text-slate-400">
          A selection of projects I've worked on — hover to explore.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <PortfolioCard key={project.title} {...project} delay={i * 100} />
        ))}
      </div>
    </div>
  );
};

export default Portofolio;
