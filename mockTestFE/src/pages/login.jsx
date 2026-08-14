import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import api from "@/api/axiosConfig";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      const data = response.data;

      if (data.token) {
        localStorage.setItem("token", data.token);

        localStorage.setItem(
          "user",
          JSON.stringify({
            id: data.id,
            name: data.name,
          })
        );

        navigate("/dashboard");
      } else {
        setError("Login failed: no token returned");
      }
    } catch (err) {
      console.error(err);
      setError("Login failed: invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f1e8] flex items-center justify-center px-4 py-10">
      
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-[#fefdf6] border border-gray-300 rounded-3xl shadow-sm overflow-hidden"
      >
        
        
        <div className="bg-[#ece2c6] border-b border-gray-300 px-8 py-6 text-center">
          
          <h2 className="text-3xl font-bold text-gray-800">
            Login
          </h2>

          <p className="text-gray-600 mt-2 text-sm">
            Access your dashboard and continue your preparation.
          </p>
        </div>

        
        
        <div className="px-8 py-8">
          
          {error && (
            <div className="mb-5 border border-red-300 bg-red-50 text-red-600 rounded-xl px-4 py-3 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-gray-500"
                required
              />
            </div>

            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-gray-500"
                required
              />
            </div>

            
            <button
              type="submit"
              className="w-full bg-gray-800 hover:bg-black text-white py-3 rounded-xl transition cursor-pointer"
            >
              Login
            </button>
          </form>

          
          <div className="mt-8 space-y-3 text-center text-sm text-gray-600">
            
            <p>
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="text-black font-medium hover:underline"
              >
                Register
              </Link>
            </p>

            <p>
              <Link
                to="/"
                className="hover:underline text-gray-700"
              >
                ← Back to Home Page
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}