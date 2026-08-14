import React from "react";
import { CheckCircle } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Appraisal = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // data from tetspage
  const { questionsData, answers } = location.state || { questionsData: {}, answers: {} };

  const goToResults = () => {
    navigate("/result", { state: { questionsData, answers } });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="bg-white rounded-2xl shadow-xl p-10 text-center max-w-lg w-full">
        <CheckCircle className="mx-auto text-green-500 w-16 h-16 mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Thank You for Your Submission!
        </h1>
        <p className="text-gray-600 mb-6">
          Your responses have been successfully submitted. We appreciate your time and effort.
        </p>
        
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/tests")}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Back to Tests
          </button>
          <button
            onClick={goToResults}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            View Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appraisal;
