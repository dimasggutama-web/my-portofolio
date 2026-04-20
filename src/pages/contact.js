import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const Contact = () => {
  const position = [-7.3163644,112.7255855,21];
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Contact Me</h2>
      <span className="block w-40 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mb-6"></span>
      {/* Map */}
      <div className="rounded-xl overflow-hidden mb-8 border border-white/10">
        <MapContainer
          center={position}
          zoom={14}
          style={{ height: "250px", width: "100%" }}
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

      {/* Contact Form */}
      <h3 className="text-lg md:text-xl font-semibold text-black mb-4">
        Contact Form
      </h3>

      <form className="space-y-3 md:space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <input
            type="text"
            placeholder="Full name"
            className="bg-[#ffffff] text-black placeholder-gray-400 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Email address"
            className="bg-[#ffffff] text-black placeholder-gray-400 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full bg-[#ffffff] text-black placeholder-gray-400 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        ></textarea>

        <div className="text-right">
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-full transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
