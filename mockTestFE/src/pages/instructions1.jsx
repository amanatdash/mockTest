import React from "react";
import { Link } from "react-router-dom";

export default function InstructionsA() {
  return (
    <div className="min-h-screen bg-[#f8f5e4] font-serif px-4 py-10">
      
      <div className="max-w-6xl mx-auto bg-[#fefdf6] border border-gray-300 rounded-2xl shadow-sm overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#ece2c6] border-b border-gray-300 px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Instructions & Terms & Conditions
          </h1>

          <p className="text-center text-gray-600 mt-2">
            निर्देश और शर्तें
          </p>
        </div>

        
        {/* Content */}
        <div className="p-8 space-y-10 text-gray-700">
          
          {/* Overview */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2">
              1. Exam Overview / परीक्षा का संक्षिप्त विवरण
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#f8f5e4] border border-gray-300 rounded-xl p-4">
                <strong>Duration:</strong> 90 minutes
              </div>

              <div className="bg-[#f8f5e4] border border-gray-300 rounded-xl p-4">
                <strong>Total Questions:</strong> 100
              </div>

              <div className="bg-[#f8f5e4] border border-gray-300 rounded-xl p-4">
                <strong>Negative Marking:</strong> 0.25 marks
              </div>

              <div className="bg-[#f8f5e4] border border-gray-300 rounded-xl p-4">
                <strong>Sections:</strong> 4
              </div>
            </div>

            
            {/* Table */}
            <div className="overflow-x-auto mt-6">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-[#ece2c6] text-gray-800">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3">
                      Section
                    </th>

                    <th className="border border-gray-300 px-4 py-3">
                      Subject
                    </th>

                    <th className="border border-gray-300 px-4 py-3">
                      Questions
                    </th>

                    <th className="border border-gray-300 px-4 py-3">
                      Marks
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white">
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">
                      PART-A
                    </td>

                    <td className="border border-gray-300 px-4 py-3">
                      Quantitative Aptitude
                    </td>

                    <td className="border border-gray-300 px-4 py-3">
                      25
                    </td>

                    <td className="border border-gray-300 px-4 py-3">
                      25
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 px-4 py-3">
                      PART-B
                    </td>

                    <td className="border border-gray-300 px-4 py-3">
                      General Intelligence & Reasoning
                    </td>

                    <td className="border border-gray-300 px-4 py-3">
                      25
                    </td>

                    <td className="border border-gray-300 px-4 py-3">
                      25
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 px-4 py-3">
                      PART-C
                    </td>

                    <td className="border border-gray-300 px-4 py-3">
                      General Awareness
                    </td>

                    <td className="border border-gray-300 px-4 py-3">
                      25
                    </td>

                    <td className="border border-gray-300 px-4 py-3">
                      25
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 px-4 py-3">
                      PART-D
                    </td>

                    <td className="border border-gray-300 px-4 py-3">
                      English Comprehension
                    </td>

                    <td className="border border-gray-300 px-4 py-3">
                      25
                    </td>

                    <td className="border border-gray-300 px-4 py-3">
                      25
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          
          {/* Sections */}
          {[
            {
              title: "2. Timing & Submission / समय और उत्तर जमा करना",
              items: [
                "The timer is server-controlled and visible at the top right.",
                "The exam auto-submits when time ends.",
                "Ensure proper face alignment if photo verification appears.",
              ],
            },
            {
              title: "3. Language / भाषा",
              items: [
                "Comprehension section depends on your initial language selection.",
                "MCQ sections may appear in English, Hindi, or both.",
                "Language preference can be changed during the exam.",
              ],
            },
            {
              title: "4. Navigation / नेविगेशन",
              items: [
                "Use question numbers or section names for navigation.",
                "Use Save & Next to move forward.",
                "Mark for Review to revisit later.",
              ],
            },
            {
              title: "5. Answering / उत्तर देना",
              items: [
                "Each question has 4 options with only 1 correct answer.",
                "Answers save only after clicking Save & Next.",
                "Saved answers can be changed before submission.",
              ],
            },
            {
              title: "6. Additional Notes / अतिरिक्त निर्देश",
              items: [
                "Maintain silence throughout the exam.",
                "No screenshots or photography allowed.",
                "Report technical issues immediately.",
                "Unfair means may lead to disqualification.",
                "Remain seated until the exam officially ends.",
              ],
            },
          ].map((section, index) => (
            <section
              key={index}
              className="bg-[#f8f5e4] border border-gray-300 rounded-2xl p-6"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {section.title}
              </h2>

              <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          ))}

          
          {/* Buttons */}
          <div className="flex justify-between pt-4">
            <Link
              to="/tests"
              className="px-6 py-3 rounded-xl border border-gray-300 bg-[#ece2c6] text-gray-800 hover:bg-[#dfd0a9] transition"
            >
              Previous
            </Link>

            <Link
              to="/instructions2"
              className="px-6 py-3 rounded-xl bg-gray-800 text-white hover:bg-black transition"
            >
              Next
            </Link>
          </div>

          
          {/* Footer */}
          <p className="text-center text-gray-500 text-sm pt-2">
            © mockTest. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}