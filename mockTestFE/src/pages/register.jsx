import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import api from "@/api/axiosConfig";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const validateForm = () => {
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook|hotmail)\.com$/;

    if (!emailRegex.test(email)) {
      setError(
        "Email must be valid (gmail, yahoo, outlook, hotmail)."
      );
      return false;
    }

    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters long with letters, numbers, and symbols."
      );
      return false;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }

    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    try {
      const response = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      console.log("Register success:", response.data);

      const { token, id, name: userName } = response.data;

      if (token) {
        localStorage.setItem("token", token);

        localStorage.setItem(
          "user",
          JSON.stringify({
            id,
            name: userName || name,
            email,
          })
        );

        navigate("/dashboard", {
          state: { isNew: true },
        });
      } else {
        setError("Registration successful but no token received.");
      }
    } catch (err) {
      console.error("Register error:", err);

      setError(
        err.response?.data?.message || "Registration failed!"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f3ea] px-4 py-10 flex items-center justify-center">

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-[#fefdf6] border border-gray-300 rounded-3xl shadow-sm p-8"
      >

        <div className="text-center bg-[#ded3b6] border-b border-gray-300 -mx-8 -mt-8 px-8 py-10 rounded-t-3xl mb-8">

          <p className="text-xs uppercase tracking-[0.25em] text-gray-600 mb-4">
            Create your account
          </p>

          <h2 className="text-4xl font-bold text-gray-800">
            Register
          </h2>

          <div className="w-14 h-[2px] bg-gray-500 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-700 mt-4 text-sm leading-relaxed max-w-xs mx-auto">
            Join mockTest and continue your preparation journey.
          </p>

        </div>

        {error && (
          <div className="mb-5 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-5">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-gray-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-gray-500 transition"
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
              placeholder="Create a password"
              required
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-gray-500 transition"
            />

            <p className="text-xs text-gray-500 mt-2">
              Must contain letters, numbers and symbols.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter password"
              required
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-gray-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 hover:bg-black text-white py-3 rounded-xl transition cursor-pointer"
          >
            Register
          </button>
        </form>

        <div className="mt-8 space-y-3 text-center text-sm text-gray-600">

          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-gray-800 font-medium hover:underline"
            >
              Login
            </Link>
          </p>

          <p>
            <Link
              to="/"
              className="hover:underline text-gray-700"
            >
              ← Back to Home
            </Link>
          </p>

        </div>

      </motion.div>
    </div>
  );
}