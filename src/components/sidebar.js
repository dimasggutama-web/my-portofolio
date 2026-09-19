import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// ── paste the FULL base64 string you already have in the original sidebar ──
// (We reference the same variable so the image never changes)
import profilePhoto from "../assets/profile-photo.jpg";

const NAV_LINKS = [
  { to: "/about",         label: "About Me",      icon: "👤" },
  { to: "/resume",        label: "Resume",         icon: "📄" },
  { to: "/certification", label: "Certification",  icon: "🏆" },
  { to: "/portfolio",     label: "Portfolio",      icon: "🗂️"  },
  { to: "/contact",       label: "Contact",        icon: "✉️"  },
];

const SOCIAL_LINKS = [
  {
    href: "https://instagram.com/diimaasfaizaal",
    label: "Instagram",
    color: "text-pink-500 hover:text-pink-400",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    href: "https://github.com/dimasggutama-web",
    label: "GitHub",
    color: "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    href: "https://wa.me/+6282333520554",
    label: "WhatsApp",
    color: "text-green-500 hover:text-green-400",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/dimas-faizal-fikri-utama-93600b3a8/",
    label: "LinkedIn",
    color: "text-blue-500 hover:text-blue-400",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

const INFO_ROWS = [
  {
    icon: "✉️",
    label: "Email",
    value: "dimasfaizalfikriutama@gmail.com",
    truncate: true,
  },
  { icon: "🎂", label: "Birth",    value: "01 Februari 2005" },
  { icon: "📍", label: "Location", value: "Surabaya, Indonesia" },
];

const SidebarContent = ({ onClose }) => {
  const location = useLocation();
  const isActive = (path) =>
    location.pathname === path || (path === "/about" && location.pathname === "/");

  return (
    <div className="flex flex-col h-full">
      {/* ── Avatar ── */}
      <div className="flex flex-col items-center pt-6 pb-4">
        <div className="relative mb-3">
          <div className="w-28 h-28 rounded-full p-[3px] bg-gradient-to-br from-amber-400 via-orange-400 to-pink-500 avatar-glow shadow-xl">
            <img
              src={profilePhoto}
              alt="Dimas Faizal"
              className="w-full h-full rounded-full object-cover border-2 border-white dark:border-slate-800"
            />
          </div>
          {/* Online indicator */}
          <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-slate-800 shadow" />
        </div>

        {/* Name */}
        <h2 className="text-lg font-bold text-gray-800 dark:text-white text-center leading-tight">
          Dimas Faizal Fikri Utama
        </h2>
        <p className="text-xs text-gray-500 dark:text-slate-400 mt-0.5 text-center px-2">
          S1 Sistem Informasi · Web Dev
        </p>

        {/* Available Badge */}
        <span className="available-badge mt-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-700">
          Available for Work
        </span>
      </div>

      {/* ── Divider ── */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-slate-600 to-transparent mx-4 mb-4" />

      {/* ── Info rows ── */}
      <div className="px-4 space-y-2 mb-4">
        {INFO_ROWS.map((row) => (
          <div key={row.label} className="flex items-start gap-2.5 text-sm">
            <span className="text-base mt-0.5 shrink-0">{row.icon}</span>
            <div className="min-w-0">
              <span className="text-xs font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-wide block">
                {row.label}
              </span>
              <span
                className={`text-gray-700 dark:text-slate-300 ${
                  row.truncate ? "block truncate text-xs" : "text-xs"
                }`}
                title={row.truncate ? row.value : undefined}
              >
                {row.value}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Divider ── */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-slate-600 to-transparent mx-4 mb-4" />

      {/* ── Nav Links ── */}
      <nav className="px-3 space-y-1 flex-1">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={onClose}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
              isActive(link.to)
                ? "bg-gradient-to-r from-amber-400/20 to-orange-400/10 text-amber-600 dark:text-amber-400 border border-amber-200/50 dark:border-amber-700/30"
                : "text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700/60"
            }`}
          >
            <span className="text-base group-hover:scale-110 transition-transform">
              {link.icon}
            </span>
            {link.label}
            {isActive(link.to) && (
              <span className="ml-auto w-1.5 h-1.5 rounded-full bg-amber-400" />
            )}
          </Link>
        ))}
      </nav>

      {/* ── Social Icons ── */}
      <div className="px-4 pt-4 pb-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-slate-600 to-transparent mb-4" />
        <div className="flex justify-center gap-3">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className={`p-2 rounded-xl bg-gray-100 dark:bg-slate-700/60 transition-all duration-200 hover:scale-110 hover:shadow-md ${s.color}`}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ── Desktop Sidebar ── */}
      <aside className="hidden md:flex flex-col w-80 bg-white dark:bg-slate-800/95 shadow-xl fixed left-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto z-40 border-r border-gray-100 dark:border-slate-700/50 transition-colors duration-300">
        <SidebarContent />
      </aside>

      {/* ── Mobile FAB Button ── */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 text-white rounded-full shadow-xl shadow-amber-400/40 flex items-center justify-center hover:scale-105 transition-transform"
        id="sidebar-mobile-open"
        aria-label="Open sidebar"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* ── Mobile Drawer Overlay ── */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ── Mobile Drawer ── */}
      <div
        className={`md:hidden fixed left-0 top-0 h-full w-72 z-50 bg-white dark:bg-slate-800 shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-700"
          id="sidebar-mobile-close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <SidebarContent onClose={() => setIsOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;