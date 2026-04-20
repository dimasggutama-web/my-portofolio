import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="md:hidden fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-xl"
    >
      {isOpen ? "✕" : "☰"}
    </button>

    {/* Sidebar Mobile */}
    <div
      className={`md:hidden fixed inset-0 z-40 flex items-end justify-center transition-all duration-300
      ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >
      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
      ></div>

      {/* Card */}
      <div
        className={`relative w-[92%] max-w-sm mb-6 bg-white rounded-3xl shadow-2xl p-6
        transform transition-all duration-300
        ${isOpen ? "translate-y-0 scale-100" : "translate-y-10 scale-95"}`}
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..." 
            className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
          />
          <div>
            <h2 className="text-lg font-bold text-gray-800">
              Dimas Faizal Fikri Utama
            </h2>
            <p className="text-sm text-gray-500">
              S1 Sistem Informasi | Web Development
            </p>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-2 text-sm text-gray-700">
          <p><span className="font-semibold">Email:</span> dimasfaizalfikriutama@gmail.com</p>
          <p><span className="font-semibold">Birth:</span> 01 Februari 2005</p>
          <p><span className="font-semibold">Location:</span> Surabaya, Indonesia</p>
        </div>

        {/* Social */}
        <div className="flex justify-center gap-5 mt-5">
          <a
            href="https://instagram.com/diimaasfaizaal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700 transition-colors"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a
            href="https://github.com/dimas317"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600 transition-colors"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>

          <a
            href="https://wa.me/yourphonenumber"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-700 transition-colors"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/dimas-faizal-454b5634b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    {/* Sidebar */}
    <aside className="hidden md:block w-80 bg-white shadow-lg p-6 fixed left-0 top-16 h-full overflow-y-auto z-40">
      <div className="text-center">
        {/* Foto */}
        <img
          src="data:image/jpeg;base64,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" // Ganti dengan URL foto Anda
          alt="Foto Profil"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
        />

        {/* Nama */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Dimas Faizal Fikri Utama</h2>

        {/* Jurusan */}
        <p className="text-gray-600 mb-4">S1 Sistem Informasi | Web Development</p>

        {/* Email */}
        <p className="text-gray-700 mb-2">
          <strong>Email:</strong> dimasfaizalfikriutama@gmail.com
        </p>

        {/* Tanggal Lahir */}
        <p className="text-gray-700 mb-2">
          <strong>Birth:</strong> 01 Februari 2005
        </p>

        {/* Lokasi */}
        <p className="text-gray-700 mb-6">
          <strong>Location:</strong> Surabaya, Indonesia
        </p>

        {/* Media Sosial */}
        <div className="flex justify-center space-x-4">
          <a
            href="https://instagram.com/diimaasfaizaal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700 transition-colors"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a
            href="https://github.com/dimas317"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600 transition-colors"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://wa.me/yourphonenumber"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-700 transition-colors"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/dimas-faizal-454b5634b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </aside>
    </>
  );
};

export default Sidebar;