import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-[#f8f5e4] font-serif px-4 py-10">

      <div className="max-w-5xl mx-auto mb-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-black transition"
        >
          ← Back to Home
        </Link>
      </div>

      <div className="max-w-5xl mx-auto bg-[#fefdf6] border border-gray-300 rounded-2xl shadow-sm overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#ece2c6] border-b border-gray-300 px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-800">
            About mockTest
          </h1>
          <p className="text-gray-600 mt-2">
            Practice smarter and prepare better.
          </p>
        </div>

        
        {/* Content */}
        <div className="px-8 py-10 space-y-8 text-gray-700">
          
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Who We Are
            </h2>

            <p className="leading-relaxed">
              mockTest is an online practice platform designed to help
              students prepare for aptitude and competitive examinations
              in a simple and distraction-free environment.
            </p>
          </div>

          
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              What We Provide
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#f8f5e4] border rounded-xl p-5">
                Aptitude Practice Tests
              </div>

              <div className="bg-[#f8f5e4] border rounded-xl p-5">
                Logical Reasoning Questions
              </div>

              <div className="bg-[#f8f5e4] border rounded-xl p-5">
                English Language Preparation
              </div>

              <div className="bg-[#f8f5e4] border rounded-xl p-5">
                Performance Analysis
              </div>
            </div>
          </div>

          
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Our Goal
            </h2>

            <p className="leading-relaxed">
              Our aim is to create a clean, fast, and reliable platform
              where students can improve their speed, accuracy, and
              confidence before real examinations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}