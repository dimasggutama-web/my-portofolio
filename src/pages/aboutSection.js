import React, { useEffect, useRef } from "react";
import "../App.css";

/* ── Hook: Intersection Observer for scroll reveal ── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ── What I'm Doing Card ── */
const DoingCard = ({ emoji, title, desc, delay }) => {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal group bg-gray-50 dark:bg-slate-700/50 border border-gray-100 dark:border-slate-600/40 rounded-2xl p-5 hover:shadow-lg hover:border-amber-200 dark:hover:border-amber-600/40 hover:-translate-y-1 transition-all duration-300 animate-delay-${delay}`}
    >
      <div className="text-3xl mb-3">{emoji}</div>
      <h4 className="text-base font-bold text-gray-800 dark:text-white mb-2">{title}</h4>
      <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
};

/* ── Journey Card ── */
const JourneyCard = ({ emoji, title, desc, delay }) => {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal bg-gray-50 dark:bg-slate-700/50 border border-gray-100 dark:border-slate-600/40 rounded-2xl p-5 hover:shadow-md hover:border-amber-200 dark:hover:border-amber-600/40 transition-all duration-300 animate-delay-${delay}`}
    >
      <span className="text-2xl mb-2 block">{emoji}</span>
      <h4 className="text-base font-bold text-gray-800 dark:text-white mb-2">{title}</h4>
      <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
};

/* ── Interest Item ── */
const InterestItem = ({ emoji, label }) => (
  <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-amber-50 dark:hover:bg-amber-900/10 transition-colors group">
    <span className="text-2xl group-hover:scale-110 transition-transform">{emoji}</span>
    <span className="text-sm font-medium text-gray-700 dark:text-slate-300">{label}</span>
  </div>
);

const AboutSection = () => {
  const heroRef = useReveal();
  const skillsRef = useReveal();

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 transition-colors duration-300">
      {/* ── Header ── */}
      <div ref={heroRef} className="reveal mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-1">
          About Me
        </h2>
        <span className="block w-40 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mb-5" />
        <p className="text-base sm:text-lg text-gray-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          I am a <span className="font-semibold text-amber-500">Information Systems</span>{" "}
          undergraduate student at Universitas Negeri Surabaya (UNESA) with a strong passion for web
          development and digital technology. I enjoy working at the intersection of technology and
          creativity — building efficient, user-friendly, and scalable web applications that deliver
          meaningful digital solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* ── LEFT COLUMN ── */}
        <div className="space-y-10">
          {/* What I'm Doing */}
          <section>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-500 text-sm">⚡</span>
              What I'm Doing
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-3">
              <DoingCard emoji="💻" title="Web Dev" desc="Building responsive and interactive websites using modern technologies." delay="100" />
              <DoingCard emoji="🎨" title="UI/UX Design" desc="Creating intuitive and visually appealing user interfaces." delay="200" />
              <DoingCard emoji="🧩" title="Problem Solving" desc="Applying logical thinking to solve complex technical challenges." delay="300" />
            </div>
          </section>

          {/* My Journey */}
          <section>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-500 text-sm">🗺️</span>
              My Journey
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
              <JourneyCard emoji="🎓" title="Education" desc="Pursuing a degree in Information Systems at Universitas Negeri Surabaya (UNESA)." delay="100" />
              <JourneyCard emoji="💼" title="Experience" desc="Working on various projects and internships to gain practical experience in the field." delay="200" />
            </div>
          </section>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="space-y-10">
          {/* Technical Skills Marquee */}
          <section>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-500 text-sm">🛠️</span>
              Technical Skills
            </h3>
            <div ref={skillsRef} className="reveal">
              <div className="skills-marquee rounded-2xl bg-gray-50 dark:bg-slate-700/40 border border-gray-100 dark:border-slate-600/30 py-5">
                <div className="skills-track">
                  {[...Array(2)].map((_, gi) => (
                    <div className="skills-group" key={gi}>
                      {[
                        { src: "python/python-original.svg",         alt: "Python" },
                        { src: "javascript/javascript-original.svg", alt: "JavaScript" },
                        { src: "html5/html5-original.svg",           alt: "HTML5" },
                        { src: "css3/css3-original.svg",             alt: "CSS3" },
                        { src: "react/react-original.svg",           alt: "React" },
                        { src: "nodejs/nodejs-original.svg",         alt: "Node.js" },
                        { src: "mysql/mysql-original.svg",           alt: "MySQL" },
                        { src: "git/git-original.svg",               alt: "Git" },
                        { src: "figma/figma-original.svg",           alt: "Figma" },
                        { src: "php/php-original.svg",               alt: "PHP" },
                      ].map((skill) => (
                        <img
                          key={skill.alt + gi}
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.src}`}
                          alt={skill.alt}
                          title={skill.alt}
                          className="w-12 md:w-16 h-12 md:h-16"
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Interests */}
          <section>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-500 text-sm">✨</span>
              Interests
            </h3>
            <div className="bg-gray-50 dark:bg-slate-700/40 border border-gray-100 dark:border-slate-600/30 rounded-2xl p-3 grid grid-cols-1 sm:grid-cols-2 gap-1">
              <InterestItem label="Web Development & Technology" />
              <InterestItem label="UI/UX Design" />
              <InterestItem label="Learning New Technologies" />
              <InterestItem label="Sports & Outdoor Activities" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;