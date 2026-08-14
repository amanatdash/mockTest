import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function InstructionsB() {
  const [language, setLanguage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const navigate = useNavigate();

  const handleNext = () => {
    if (!language) {
      setModalMessage("Please select a language before proceeding.");
    } else {
      setModalMessage(
        `You selected "${language}". Do you want to proceed to the test?`
      );
    }

    setShowModal(true);
  };

  const confirmLanguage = () => {
    setShowModal(false);

    if (language) {
      navigate("/testscreen", { state: { language } });
    }
  };

  const cancelModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-[#f8f5e4] font-serif px-4 py-10">
      
      <div className="max-w-6xl mx-auto bg-[#fefdf6] border border-gray-300 rounded-2xl shadow-sm overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#ece2c6] border-b border-gray-300 px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Exam Instructions
          </h1>

          <p className="text-center text-gray-600 mt-2">
            परीक्षा निर्देश
          </p>
        </div>

        
        {/* Content */}
        <div className="p-8 space-y-10 text-gray-700">
          
          {/* Overview */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2">
              Exam Overview / परीक्षा का संक्षिप्त विवरण
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              
              <div className="bg-[#f8f5e4] border border-gray-300 rounded-xl p-4">
                <strong>Duration:</strong> 90 Minutes
              </div>

              <div className="bg-[#f8f5e4] border border-gray-300 rounded-xl p-4">
                <strong>Total Questions:</strong> 100
              </div>

              <div className="bg-[#f8f5e4] border border-gray-300 rounded-xl p-4">
                <strong>Marking:</strong> 1 Mark per Question
              </div>

              <div className="bg-[#f8f5e4] border border-gray-300 rounded-xl p-4">
                <strong>Negative Marking:</strong> 0.25 Marks
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

          
          {/* Symbols */}
          <section className="bg-[#f8f5e4] border border-gray-300 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Symbols / प्रतीक
            </h2>

            <div className="space-y-4">
              
              <div className="flex items-center gap-4">
                <div className="w-5 h-5 border border-gray-500 rounded-full"></div>
                <span>Option Not Chosen</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-5 h-5 bg-gray-800 rounded-full"></div>
                <span>Selected Option</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-sm">
                  N
                </div>

                <span>Question Not Attempted</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-sm">
                  A
                </div>

                <span>Question Answered</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full border-2 border-yellow-500"></div>

                <span>Marked for Review</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-yellow-400"></div>

                <span>Answered & Marked for Review</span>
              </div>
            </div>
          </section>

          
          {/* Language */}
          <section className="bg-[#f8f5e4] border border-gray-300 rounded-2xl p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Select Language / भाषा चुनें
            </h2>

            <select
              className="w-full max-w-sm border border-gray-300 rounded-xl p-3 bg-white outline-none focus:border-gray-500"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="">
                -- Select Language --
              </option>

              <option value="English">English</option>

              <option value="Hindi">Hindi</option>
            </select>
          </section>

          
          {/* Buttons */}
          <div className="flex justify-between pt-4">
            <Link
              to="/instructions1"
              className="px-6 py-3 rounded-xl border border-gray-300 bg-[#ece2c6] text-gray-800 hover:bg-[#dfd0a9] transition"
            >
              Previous
            </Link>

            <button
              onClick={handleNext}
              className="px-6 py-3 rounded-xl bg-gray-800 text-white hover:bg-black transition"
            >
              Next
            </button>
          </div>

          
          {/* Footer */}
          <p className="text-center text-gray-500 text-sm">
            © mockTest. All rights reserved.
          </p>
        </div>
      </div>

      
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 px-4">
          
          <div className="w-full max-w-md bg-[#fefdf6] border border-gray-300 rounded-2xl shadow-lg overflow-hidden">
            
            {/* Header */}
            <div className="bg-[#ece2c6] border-b border-gray-300 px-6 py-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Notice
              </h2>
            </div>

            
            {/* Body */}
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed">
                {modalMessage}
              </p>

              <div className="flex justify-end gap-3 mt-8">
                
                <button
                  onClick={cancelModal}
                  className="px-4 py-2 rounded-lg border border-gray-300 bg-[#ece2c6] text-gray-800 hover:bg-[#dfd0a9] transition"
                >
                  Cancel
                </button>

                {language && (
                  <button
                    onClick={confirmLanguage}
                    className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-black transition"
                  >
                    Proceed
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}