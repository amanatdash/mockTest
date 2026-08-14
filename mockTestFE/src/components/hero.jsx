import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Hero() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("user");

    if (token) {
      axios
        .get("http://localhost:8080/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setUser(res.data))
        .catch(() => setUser(null));
    }
  }, []);

  
  if (user) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-10">
        
        <div className="bg-[#fefdf6] border border-gray-300 rounded-3xl overflow-hidden shadow-sm">
          
          <div className="grid md:grid-cols-2 gap-10 items-center px-8 py-14">
            
            {/* Left */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-center md:text-left"
            >
              <div className="inline-block bg-[#ece2c6] border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm">
                Welcome Back
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Hello, {user.name}
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                Continue your preparation journey and improve your
                performance with structured mock tests and analytics.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                
                <Button
                  onClick={() => navigate("/dashboard")}
                  className="bg-gray-800 hover:bg-black text-white rounded-xl px-6 py-6 text-base shadow-none"
                >
                  Dashboard
                </Button>

                <Button
                  onClick={() => navigate("/tests")}
                  className="bg-[#ece2c6] hover:bg-[#dfd0a9] text-gray-800 rounded-xl px-6 py-6 text-base border border-gray-300 shadow-none"
                >
                  Start Test
                </Button>
              </div>
            </motion.div>

            
            {/* Right */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Student Illustration"
                className="w-72 md:w-96"
              />
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      
      <div className="bg-[#fefdf6] border border-gray-300 rounded-3xl overflow-hidden shadow-sm">
        
        <div className="grid md:grid-cols-2 gap-10 items-center px-8 py-14">
          
          {/* Left */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center md:text-left"
          >
            <div className="inline-block bg-[#ece2c6] border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm">
              #vidya_dadati_vinayam..
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Prepare Smarter,
              <br />
              Perform Better
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Practice competitive examinations with a structured
              interface, realistic mock tests, and detailed analysis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              
              <Button
                onClick={() => navigate("/login")}
                className="bg-gray-800 hover:bg-black text-white rounded-xl px-8 py-6 text-base shadow-none cursor-pointer"
              >
                Login
              </Button>

              <Button
                onClick={() => navigate("/register")}
                className="bg-[#ece2c6] hover:bg-[#dfd0a9] text-gray-800 rounded-xl px-6 py-6 text-base border border-gray-300 shadow-none cursor-pointer"
              >
                Register
              </Button>
            </div>
          </motion.div>

          
          {/* Right */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/906/906175.png"
              alt="Hero Illustration"
              className="w-72 md:w-96"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;