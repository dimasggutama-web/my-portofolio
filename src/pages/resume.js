import React, { useEffect, useRef } from "react";

function useReveal(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("visible");
            // Animate progress bars if present
            const bars = el.querySelectorAll("[data-progress]");
            bars.forEach((bar) => {
              bar.style.width = bar.getAttribute("data-progress") + "%";
            });
          }, delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

/* ── Timeline Item ── */
const TimelineItem = ({ title, period, desc, delay }) => {
  const ref = useReveal(delay);
  return (
    <div
      ref={ref}
      className="reveal relative pl-6 timeline-item"
    >
      <h4 className="text-sm md:text-base font-semibold text-gray-800 dark:text-white leading-snug">
        {title}
      </h4>
      <span className="inline-block mt-1 mb-1.5 text-xs font-semibold text-amber-500 bg-amber-50 dark:bg-amber-900/20 px-2 py-0.5 rounded-full">
        {period}
      </span>
      {desc && (
        <p className="text-xs md:text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          {desc}
        </p>
      )}
    </div>
  );
};

/* ── Skill Bar ── */
const SkillBar = ({ label, value, delay }) => {
  const ref = useReveal(delay);
  return (
    <div ref={ref} className="reveal">
      <div className="flex justify-between text-xs md:text-sm mb-1.5">
        <span className="font-medium text-gray-700 dark:text-slate-200">{label}</span>
        <span className="text-amber-500 font-semibold">{value}%</span>
      </div>
      <div className="w-full h-2.5 bg-gray-200 dark:bg-slate-600 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500 progress-bar"
          style={{ width: "0%" }}
          data-progress={value}
        />
      </div>
    </div>
  );
};

const Resume = () => {
  const headerRef = useReveal();

  const education = [
    {
      title: "State University of Surabaya",
      period: "2023 – Present",
      desc: "Active student majoring in Information System at the State University of Surabaya.",
    },
    { title: "SMA Negeri 10 Surabaya", period: "2020 – 2023", desc: null },
  ];

  const experience = [
    {
      title: "National Science Project Competition",
      period: "Jan 2023 – Feb 2023",
      desc: "Created NSPC research project titled \"Characteristics of Bullying at SMAN 10 Surabaya\" — observed the characteristics of bullying victims.",
    },
    {
      title: "Liaison Officer – ASEAN University Games 2024",
      period: "July 2024",
      desc: "Serving as liaison to ensure smooth communication and coordination for ASEAN University Games participants.",
    },
    {
      title: "X-PROJECT 2024 Tech Genius – Webinar",
      period: "14 Sept 2024",
      desc: "Participated in Tech Entrepreneurship Webinar.",
    },
    {
      title: "Fullstack Web Development",
      period: "Sept 2024 – Dec 2024",
      desc: "Created, designed, managed, tested, deployed, and maintained a cooking web application as a final course project.",
    },
    {
      title: "Fullstack Web Dev – Celerates Acceleration Mastery Program Batch 3",
      period: "Oct 2025 – Dec 2025",
      desc: "Built a student financial management web application from scratch to deployment.",
    },
    {
      title: "AWS Cloud Practitioner Essentials Knowledge Badge Assessment",
      period: "19 Jan 2026",
      desc: "Completed the AWS Cloud Practitioner Essentials training and Knowledge Badge Assessment.",
    },
    {
      title: "Backend Web Development Intern – LSP BLK Surabaya",
      period: "Feb 2026 – Jun 2026",
      desc: "Developed the backend architecture for a digital competency assessment management system with automated document generation.",
    },
  ];

  const skills = [
    { label: "Programming", value: 62 },
    { label: "Creativity", value: 66 },
    { label: "Public Speaking", value: 40 },
    { label: "Problem Solving", value: 64 },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 transition-colors duration-300">
      {/* Header */}
      <div ref={headerRef} className="reveal mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-1">
          Resume
        </h2>
        <span className="block w-40 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* ── LEFT: Education + Experience ── */}
        <div className="space-y-10">
          {/* Education */}
          <section>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-5 flex items-center gap-2">
              <span className="text-xl">🎓</span> Education
            </h3>
            <div className="space-y-5 border-l-2 border-amber-400/60 pl-2">
              {education.map((item, i) => (
                <TimelineItem key={i} {...item} delay={i * 100} />
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-5 flex items-center gap-2">
              <span className="text-xl">💼</span> Experience
            </h3>
            <div className="space-y-5 border-l-2 border-amber-400/60 pl-2">
              {experience.map((item, i) => (
                <TimelineItem key={i} {...item} delay={i * 80} />
              ))}
            </div>
          </section>
        </div>

        {/* ── RIGHT: Personal Skills ── */}
        <section>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-5 flex items-center gap-2">
            <span className="text-xl">📊</span> Personal Skills
          </h3>
          <div className="bg-gray-50 dark:bg-slate-700/40 border border-gray-100 dark:border-slate-600/30 rounded-2xl p-5 space-y-5">
            {skills.map((s, i) => (
              <SkillBar key={s.label} {...s} delay={i * 120} />
            ))}
          </div>

          {/* Languages */}
          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-xl">🌏</span> Languages
            </h3>
            <div className="space-y-3">
              {[
                { lang: "Indonesian", level: "Native", pct: 100 },
                { lang: "English",    level: "Intermediate", pct: 54 },
              ].map((l, i) => (
                <SkillBar key={l.lang} label={`${l.lang} (${l.level})`} value={l.pct} delay={i * 120} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;