import React from "react";
import { Link } from "react-router-dom";

export default function Pass() {
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
        <div className="bg-[#ece2c6] border-b border-gray-300 px-8 py-5">
          <h1 className="text-2xl font-bold text-gray-800">
            Pass Facility
          </h1>

          <p className="text-sm text-gray-600 mt-1">
            Feature availability status
          </p>
        </div>

        {/* Body */}
        <div className="px-8 py-14 text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-gray-200 flex items-center justify-center text-4xl mb-6">
            🚧
          </div>

          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Currently Unavailable
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto">
            The pass facility is not available at the moment.
            <br />
            We are working on it and it will be added in future updates.
          </p>

          <div className="mt-10">
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition">
              Stay Tuned
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}