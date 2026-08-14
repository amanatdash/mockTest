import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import api from "@/api/axiosConfig";
import Header from "@/components/header";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation(); 
  const isNewUser = location.state?.isNew || false;

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUserString = localStorage.getItem("user");
    const storedUser = storedUserString ? JSON.parse(storedUserString) : null;

    if (token && storedUser) {
      api
        .get(`/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setUser({ ...storedUser, ...res.data });
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching user data:", err);
          setUser(storedUser);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (user) {
      api.get("/results/my").then((res) => {
        const results = res.data;

        if (results.length > 0) {
          const totalTests = results.length;
          const avgScore =
            results.reduce((sum, r) => sum + r.percentage, 0) / totalTests;
          const bestScore = Math.max(...results.map((r) => r.percentage));

          setUser((prev) => ({
            ...prev,
            totalTests,
            avgScore: avgScore.toFixed(1),
            bestScore: bestScore.toFixed(1),
          }));
        }
      });
    }
  }, [user]);


  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-semibold text-gray-600">
          Loading Dashboard...
        </p>
      </div>
    );
  }

  const isLoggedIn = !!user;

  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-50 to-white p-6"
      >
        <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-4xl">
          
          <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">
            {isLoggedIn ? (
              isNewUser ? (
                `Welcome, ${user.name || "Student"} 🎉`
              ) : (
                `Welcome back, ${user.name || "Student"} 👋`
              )
            ) : (
              "Welcome to Your Dashboard 🎉"
            )}
          </h1>

          <p className="text-gray-600 text-center mb-8">
            {isLoggedIn
              ? isNewUser
                ? "Thanks for joining us! Start your first test below."
                : "Here’s a quick overview of your performance."
              : "Register now and start your journey. Once you take tests, stats will appear here."}
          </p>

          
          <div className="flex justify-center gap-6 mb-8">
            <Link
              to="/"
              className="px-5 py-2 rounded-lg bg-blue-500 text-white font-medium shadow hover:bg-blue-600"
            >
              Home
            </Link>
            <Link
              to="/tests"
              className="px-5 py-2 rounded-lg bg-green-500 text-white font-medium shadow hover:bg-green-600"
            >
              Take Tests
            </Link>
            <Link
              to="/results"
              className="px-5 py-2 rounded-lg bg-purple-500 text-white font-medium shadow hover:bg-purple-600"
            >
              My Results
            </Link>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{ scale: 1.05 }} className="bg-blue-100 rounded-xl shadow-md p-6 text-center" >
              <h2 className="text-xl font-semibold text-blue-800"> Total Tests </h2>
              <p className="text-2xl font-bold text-blue-600 mt-2"> {isLoggedIn ? user.totalTests || 0 : 0} </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-green-100 rounded-xl shadow-md p-6 text-center" >
              <h2 className="text-xl font-semibold text-green-800"> Average Score </h2>
              <p className="text-2xl font-bold text-green-600 mt-2"> {isLoggedIn ? user.avgScore || 0 : 0}% </p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-purple-100 rounded-xl shadow-md p-6 text-center" >
              <h2 className="text-xl font-semibold text-purple-800"> Best Score </h2>
              <p className="text-2xl font-bold text-purple-600 mt-2"> {isLoggedIn ? user.bestScore || 0 : 0}% </p>
            </motion.div>
          </div>

          
          <div className="mt-10 text-center">
            {isLoggedIn ? (<p className="text-lg text-gray-700"> 🚀 Keep it up! Each test brings you closer to mastery. </p>) : (<p className="text-lg text-gray-700"> ✨ Appear in your first test to unlock your progress stats! </p>)}
          </div>
        </div>
      </motion.div>
    </>
  );
}
