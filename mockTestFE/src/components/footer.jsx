import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="px-4 pb-6 mt-auto">
      
      <div className="max-w-7xl mx-auto bg-[#fefdf6] border border-gray-300 rounded-3xl shadow-sm overflow-hidden">
        
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10 px-8 py-10">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              mockTest
            </h3>

            <p className="text-gray-600 leading-relaxed">
              A structured platform designed to help aspirants
              practice smarter, improve consistency, and prepare
              effectively for competitive examinations.
            </p>
          </div>

          
          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-600">
              
              <li>
                <Link
                  to="/"
                  className="hover:text-black transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/tests"
                  className="hover:text-black transition"
                >
                  Tests
                </Link>
              </li>

              <li>
                <Link
                  to="/pass"
                  className="hover:text-black transition"
                >
                  Pass
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-black transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-black transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          
          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-gray-600">
              
              <p>
                support@mocktest.com
              </p>

              <p>
                +91 9876543210
              </p>

              <p>
                Bhubaneswar, Odisha
              </p>
            </div>
          </div>
        </div>

        
        {/* Bottom */}
        <div className="bg-[#ece2c6] border-t border-gray-300 px-6 py-4 text-center text-gray-700 text-sm">
          © {new Date().getFullYear()} mockTest. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;