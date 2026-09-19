import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

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

/* ── Floating Label Input (React-state driven, no CSS magic) ── */
const FloatingInput = ({ id, type = "text", label, icon }) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const isFloated = focused || value.length > 0;

  return (
    <div className="relative">
      {/* Leading icon */}
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500 pointer-events-none z-10">
        {icon}
      </span>

      {/* Floating label */}
      <label
        htmlFor={id}
        className={`absolute left-10 pointer-events-none transition-all duration-200 ${
          isFloated
            ? "top-[0.45rem] text-[0.68rem] font-semibold text-amber-500"
            : "top-1/2 -translate-y-1/2 text-sm text-gray-400 dark:text-slate-400"
        }`}
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => setValue(e.target.value)}
        className={`w-full pl-10 pr-4 bg-gray-50 dark:bg-slate-700/50 border border-gray-200 dark:border-slate-600 rounded-xl text-sm text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-400 transition-all ${
          isFloated ? "pt-6 pb-2" : "py-3.5"
        }`}
      />
    </div>
  );
};

/* ── Floating Label Textarea ── */
const FloatingTextarea = ({ id, label, icon, rows = 5 }) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const isFloated = focused || value.length > 0;

  return (
    <div className="relative">
      {/* Leading icon */}
      <span className="absolute left-3 top-4 text-gray-400 dark:text-slate-500 pointer-events-none z-10">
        {icon}
      </span>

      {/* Floating label */}
      <label
        htmlFor={id}
        className={`absolute left-10 pointer-events-none transition-all duration-200 ${
          isFloated
            ? "top-[0.45rem] text-[0.68rem] font-semibold text-amber-500"
            : "top-4 text-sm text-gray-400 dark:text-slate-400"
        }`}
      >
        {label}
      </label>

      <textarea
        id={id}
        rows={rows}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => setValue(e.target.value)}
        className={`w-full pl-10 pr-4 pb-3 bg-gray-50 dark:bg-slate-700/50 border border-gray-200 dark:border-slate-600 rounded-xl text-sm text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-400 transition-all resize-none ${
          isFloated ? "pt-6" : "pt-4"
        }`}
      />
    </div>
  );
};

const Contact = () => {
  const headerRef = useReveal();
  const mapRef    = useReveal(100);
  const formRef   = useReveal(200);
  const position  = [-7.3163644, 112.7255855, 21];

  const contactInfo = [
    { icon: "✉️", label: "Email",    value: "dimasfaizalfikriutama@gmail.com" },
    { icon: "📍", label: "Location", value: "Surabaya, Indonesia" },
    { icon: "🎓", label: "Study",    value: "Universitas Negeri Surabaya" },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 transition-colors duration-300">
      {/* ── Header ── */}
      <div ref={headerRef} className="reveal mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-1">
          Contact Me
        </h2>
        <span className="block w-40 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mb-3" />
        <p className="text-sm text-gray-500 dark:text-slate-400">
          Have a project or opportunity? I'd love to hear from you!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ── LEFT: Map + Contact Info ── */}
        <div className="space-y-5">
          {/* Map */}
          <div
            ref={mapRef}
            className="reveal rounded-2xl overflow-hidden border border-gray-100 dark:border-slate-600/40 shadow-md"
          >
            <MapContainer
              center={position}
              zoom={14}
              style={{ height: "220px", width: "100%" }}
            >
              <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>Universitas Negeri Surabaya Kampus 1</Popup>
              </Marker>
            </MapContainer>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-3">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-slate-700/40 border border-gray-100 dark:border-slate-600/30 rounded-xl hover:border-amber-200 dark:hover:border-amber-600/30 transition-colors"
              >
                <span className="text-2xl">{info.icon}</span>
                <div>
                  <p className="text-xs font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-wide">
                    {info.label}
                  </p>
                  <p className="text-sm font-medium text-gray-700 dark:text-slate-200">
                    {info.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Contact Form ── */}
        <div ref={formRef} className="reveal">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-5 flex items-center gap-2">
            <span className="text-xl">💬</span> Send a Message
          </h3>

          <form className="space-y-4">
            {/* Row 1: Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FloatingInput
                id="contact-name"
                label="Full Name"
                icon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                }
              />
              <FloatingInput
                id="contact-email"
                type="email"
                label="Email Address"
                icon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                }
              />
            </div>

            {/* Row 2: Subject */}
            <FloatingInput
              id="contact-subject"
              label="Subject"
              icon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                </svg>
              }
            />

            {/* Row 3: Message */}
            <FloatingTextarea
              id="contact-message"
              label="Your Message"
              rows={5}
              icon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                </svg>
              }
            />

            {/* Submit */}
            <div className="flex justify-end pt-1">
              <button
                type="submit"
                id="contact-submit"
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-semibold px-7 py-3 rounded-full shadow-md shadow-amber-400/30 hover:shadow-amber-400/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
