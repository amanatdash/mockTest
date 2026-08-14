import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#f8f5e4] font-serif px-4 py-10">

      <div className="max-w-4xl mx-auto mb-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-black transition"
        >
          ← Back to Home
        </Link>
      </div>

      <div className="max-w-4xl mx-auto bg-[#fefdf6] border border-gray-300 rounded-2xl shadow-sm overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#ece2c6] border-b border-gray-300 px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Contact Us
          </h1>

          <p className="text-gray-600 mt-2">
            We would love to hear from you.
          </p>
        </div>

        
        {/* Content */}
        <div className="px-8 py-10 grid md:grid-cols-2 gap-10">
          
          {/* Left */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Get In Touch
              </h2>

              <p className="text-gray-600 leading-relaxed">
                If you have any questions, suggestions, or feedback,
                feel free to contact us anytime.
              </p>
            </div>

            <div className="space-y-4 text-gray-700">
              <div className="bg-[#f8f5e4] border rounded-xl p-4">
                📧 support@mocktest.com
              </div>

              <div className="bg-[#f8f5e4] border rounded-xl p-4">
                📍 Bhubaneswar, Odisha
              </div>

              <div className="bg-[#f8f5e4] border rounded-xl p-4">
                ☎ +91 9876543210
              </div>
            </div>
          </div>

          
          {/* Right */}
          <div className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-xl px-4 py-3 bg-white outline-none"
            />

            <input
              type="email"
              placeholder="Your email"
              className="w-full border rounded-xl px-4 py-3 bg-white outline-none"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border rounded-xl px-4 py-3 bg-white outline-none resize-none"
            />

            <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl transition">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}