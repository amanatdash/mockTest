import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Megaphone,
  BookOpen,
  Landmark,
  Banknote,
  Train,
} from "lucide-react";

export default function Tests() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const isLoggedIn = !!localStorage.getItem("user");

  useEffect(() => {
    if (!isLoggedIn) {
      setShowPopup(true);
    }
  }, [isLoggedIn]);

  return (
    <div className="min-h-screen bg-[#f8f5e4] font-serif px-4 py-10">
      
      {/* Main Container */}
      <div className="max-w-7xl mx-auto bg-[#fefdf6] border border-gray-300 rounded-2xl shadow-sm overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#ece2c6] border-b border-gray-300 px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Test Categories
          </h1>

          <p className="text-gray-600 mt-2">
            Choose your preferred examination category and start practicing.
          </p>
        </div>

        
        {/* Content */}
        <div className="p-8 space-y-10">
          
          {/* Important Info */}
          <section className="bg-[#f8f5e4] border border-gray-300 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Megaphone className="text-gray-700 w-6 h-6" />

              <h2 className="text-2xl font-bold text-gray-800">
                Important Information
              </h2>
            </div>

            <ul className="space-y-3 text-gray-700 list-disc pl-6 leading-relaxed">
              <li>SSC CGL Tier-1 test will start from September 12.</li>
              <li>Banking prelims mock series will open from 25th September.</li>
              <li>Stay updated for Railway NTPC exam notifications.</li>
              <li>SSC CHSL Tier-1 test will start from November 12.</li>
            </ul>
          </section>

          
          {/* Categories */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Available Test Categories
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* SSC */}
              <Card className="rounded-2xl border border-gray-300 shadow-sm bg-white hover:shadow-md transition">
                <CardContent className="p-6 space-y-4 text-center">
                  <BookOpen className="w-10 h-10 text-gray-700 mx-auto" />

                  <h3 className="text-xl font-semibold text-gray-800">
                    SSC
                  </h3>

                  <p className="text-gray-600">
                    Choose from CGL, CHSL and more.
                  </p>

                  <div className="flex justify-center gap-3">
                    <Link
                      to="/instructions1"
                      className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-black transition"
                    >
                      CGL
                    </Link>

                    <Link
                      to="/instructions1"
                      className="px-4 py-2 bg-[#ece2c6] text-gray-800 rounded-lg hover:bg-[#dfd0a9] transition"
                    >
                      CHSL
                    </Link>
                  </div>
                </CardContent>
              </Card>

              
              {/* OSSC */}
              <Card className="rounded-2xl border border-gray-300 shadow-sm bg-white hover:shadow-md transition">
                <CardContent className="p-6 space-y-4 text-center">
                  <Landmark className="w-10 h-10 text-gray-700 mx-auto" />

                  <h3 className="text-xl font-semibold text-gray-800">
                    OSSC
                  </h3>

                  <p className="text-gray-600">
                    Odisha State Competitive Exams.
                  </p>

                  <div className="flex justify-center gap-3">
                    <Link
                      to="/instructions1"
                      className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-black transition"
                    >
                      CGL
                    </Link>

                    <Link
                      to="/instructions1"
                      className="px-4 py-2 bg-[#ece2c6] text-gray-800 rounded-lg hover:bg-[#dfd0a9] transition"
                    >
                      CHSL
                    </Link>
                  </div>
                </CardContent>
              </Card>

              
              {/* Banking */}
              <Card className="rounded-2xl border border-gray-300 shadow-sm bg-white hover:shadow-md transition">
                <CardContent className="p-6 space-y-4 text-center">
                  <Banknote className="w-10 h-10 text-gray-700 mx-auto" />

                  <h3 className="text-xl font-semibold text-gray-800">
                    Banking
                  </h3>

                  <p className="text-gray-600">
                    IBPS, SBI and other banking exams.
                  </p>

                  <div className="flex justify-center gap-3">
                    <Link
                      to="/instructions1"
                      className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-black transition"
                    >
                      IBPS
                    </Link>

                    <Link
                      to="/instructions1"
                      className="px-4 py-2 bg-[#ece2c6] text-gray-800 rounded-lg hover:bg-[#dfd0a9] transition"
                    >
                      SBI
                    </Link>
                  </div>
                </CardContent>
              </Card>

              
              {/* Railway */}
              <Card className="rounded-2xl border border-gray-300 shadow-sm bg-white hover:shadow-md transition">
                <CardContent className="p-6 space-y-4 text-center">
                  <Train className="w-10 h-10 text-gray-700 mx-auto" />

                  <h3 className="text-xl font-semibold text-gray-800">
                    Railway
                  </h3>

                  <p className="text-gray-600">
                    NTPC, Group D and other exams.
                  </p>

                  <div className="flex justify-center gap-3">
                    <Link
                      to="/instructions1"
                      className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-black transition"
                    >
                      NTPC
                    </Link>

                    <Link
                      to="/instructions1"
                      className="px-4 py-2 bg-[#ece2c6] text-gray-800 rounded-lg hover:bg-[#dfd0a9] transition"
                    >
                      Group D
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          
          {/* Back */}
          <p className="text-center text-gray-600 text-sm">
            <Link to="/" className="hover:text-black transition">
              ← Go Back to Home Page
            </Link>
          </p>
        </div>
      </div>

      
      {/* Login Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4">
          
          <div className="w-full max-w-md bg-[#fefdf6] border border-gray-300 rounded-2xl shadow-lg overflow-hidden">
            
            {/* Popup Header */}
            <div className="bg-[#ece2c6] border-b border-gray-300 px-6 py-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Login Recommended
              </h2>
            </div>

            
            {/* Popup Body */}
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed">
                You can continue without logging in, but your test
                results, performance history, and dashboard analytics
                will not be saved.
              </p>

              <div className="mt-8 flex justify-end gap-3">
                
                <button
                  onClick={() => setShowPopup(false)}
                  className="px-4 py-2 rounded-lg border border-gray-300 bg-[#f3ecd2] text-gray-700 hover:bg-[#e6d8b5] transition"
                >
                  Continue
                </button>

                <button
                  onClick={() => navigate("/login")}
                  className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-black transition"
                >
                  Login
                </button>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}