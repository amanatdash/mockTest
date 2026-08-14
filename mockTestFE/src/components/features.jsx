import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

function Features() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Mock Tests",
      desc: "Practice with structured mock tests designed to improve speed and accuracy.",
      icon: "📘",
      link: "/tests",
    },
    {
      title: "Previous Year Papers",
      desc: "Understand exam patterns and important topics through PYQs.",
      icon: "📄",
      link: "/pyp",
    },
    {
      title: "Performance Analysis",
      desc: "Track strengths, weaknesses, and overall progress after every test.",
      icon: "📊",
      link: "/analysis",
    },
  ];

  return (
    <section className="px-4 py-10">
      
      <div className="max-w-7xl mx-auto bg-[#fefdf6] border border-gray-300 rounded-3xl shadow-sm overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#ece2c6] border-b border-gray-300 px-8 py-6 text-center">
          
          <h2 className="text-3xl font-bold text-gray-800">
            Prepare with Mastery
          </h2>

          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Improve your preparation through mock tests, previous year papers,
            and performance insights in a clean exam-like environment.
          </p>
        </div>

        
        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 p-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <Card
                onClick={() => navigate(feature.link)}
                className="h-full cursor-pointer rounded-2xl border border-gray-300 bg-white shadow-sm hover:shadow-md transition"
              >
                <CardContent className="p-8 text-center flex flex-col items-center">
                  
                  <div className="text-5xl mb-5">
                    {feature.icon}
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>

                  <div className="mt-6 text-sm text-gray-500">
                    Click to explore →
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;