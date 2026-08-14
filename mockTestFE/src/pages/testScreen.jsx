import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "@/api/axiosConfig";

const sections = [
  "English Language",
  "Quantitative Aptitude",
  "Logical Reasoning",
  "General Knowledge",
];

export default function Testscreen() {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState("English Language");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [marked, setMarked] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [questionsData, setQuestionsData] = useState({});
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(90 * 60);

  // screen loads -> question loads
  useEffect(() => {
    async function fetchQuestions() {
      try {
        setLoading(true);
        const results = {};
        for (const sec of sections) {
          const res = await api.get(`/questions/${encodeURIComponent(sec)}`);

          const shuffled = [...res.data].sort(() => Math.random() - 0.5);

          results[sec] = shuffled.slice(0, 25).map((q, index) => ({
            id: q.id, // real database id
            displayNumber: index + 1,
            text: q.questionText,
            options: [q.optionA, q.optionB, q.optionC, q.optionD],
            correctAnswer: q.correctAnswer,
          }));
        }
        setQuestionsData(results);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching questions:", err);
        setLoading(false);
      }
    }
    fetchQuestions();
  }, []);

  //timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  if (loading) {
    return <div className="flex h-screen items-center justify-center">Loading questions...</div>;
  }

  const questions = questionsData[currentSection] || [];
  const currentQ = questions[currentIndex];

  const handleOptionClick = (option) => {
    const qKey = `${currentSection}-${currentQ.id}`;
    setAnswers((prev) => ({
      ...prev,
      [qKey]: prev[qKey] === option ? null : option,
    }));
  };

  const handleSaveNext = () => {
    const qKey = `${currentSection}-${currentQ.id}`;
    if (answers[qKey]) {
      setMarked((prev) => ({ ...prev, [qKey]: "answered" }));
    }
    setCurrentIndex((prev) => (prev + 1 < questions.length ? prev + 1 : prev));
  };

  const handleMarkReview = () => {
    const qKey = `${currentSection}-${currentQ.id}`;
    if (marked[qKey]?.includes("review")) {
      // unmark if already marked
      setMarked((prev) => {
        const copy = { ...prev };
        delete copy[qKey];
        return copy;
      });
    } else {
      const status = answers[qKey] ? "review-answered" : "review-unanswered";
      setMarked((prev) => ({ ...prev, [qKey]: status }));
    }
    setCurrentIndex((prev) => (prev + 1 < questions.length ? prev + 1 : prev));
  };

  const getButtonStyle = (qKey) => {
    if (marked[qKey] === "answered") return "bg-green-600 text-white";
    if (marked[qKey] === "review-unanswered")
      return "border-2 border-yellow-500 text-yellow-600";
    if (marked[qKey] === "review-answered") return "bg-yellow-400 text-black";
    return "bg-blue-700 text-white";
  };

  const handleSubmit = () => {
    setShowModal(true);
  };

  const confirmSubmit = () => {
    setShowModal(false);
    navigate("/appraisal", { state: { questionsData, answers } });
  };

  
  const analysis = { answered: 0, notAnswered: 0, reviewAnswered: 0, reviewUnanswered: 0 };
  questions.forEach((q) => {
    const qKey = `${currentSection}-${q.id}`;
    if (marked[qKey] === "answered") analysis.answered++;
    else if (marked[qKey] === "review-answered") analysis.reviewAnswered++;
    else if (marked[qKey] === "review-unanswered") analysis.reviewUnanswered++;
    else analysis.notAnswered++;
  });

  return (
    <div className="h-screen flex flex-col font-serif bg-[#f8f5e4]">
     
      <div className="flex justify-between items-center bg-[#ece2c6] px-6 py-3 border-b border-gray-400 relative">
        <div className="text-xl font-bold">mockTest</div>
        <div className="absolute left-1/2 transform -translate-x-1/2 text-lg font-semibold text-green-700">
          All The Best 👍🎉
        </div>
        <div className="flex space-x-8">
          <div>Total Questions: {questions.length}</div>
          <div>
            Time Left:{" "}
            <span
              className={`font-bold ${timeLeft <= 300 ? "text-red-600" : "text-green-700"}`}
            >
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-1">
        {/* Left Panel */}
        <div className="w-1/4 border-r border-gray-400 p-4 overflow-y-auto">
          <h2 className="text-lg font-bold mb-3">{currentSection}</h2>
          <div className="grid grid-cols-5 gap-2">
            {questions.map((q, i) => {
              const qKey = `${currentSection}-${q.id}`;
              return (
                <button
                  key={qKey}
                  onClick={() => setCurrentIndex(i)}
                  className={`rounded-lg w-10 h-10 text-sm border ${
                    currentIndex === i
                      ? "bg-gray-300 border-gray-500"
                      : "border-transparent"
                  } ${getButtonStyle(qKey)}`}
                >
                  {q.displayNumber}
                </button>
              );
            })}
          </div>

          {/*section switch */}
          <div className="mt-4 space-y-2">
            {sections.map((sec) => (
              <button
                key={sec}
                onClick={() => {
                  setCurrentSection(sec);
                  setCurrentIndex(0);
                }}
                className={`w-full py-2 rounded-lg border ${currentSection === sec ? "bg-gray-800 text-white" : "bg-gray-200"
                  }`}
              >
                {sec}
              </button>
            ))}
          </div>

          
          <div className="mt-5 border-t pt-3 text-sm">
            <h3 className="font-bold mb-2">Part Analysis</h3>
            <p>Answered: {analysis.answered}</p>
            <p>Not Answered: {analysis.notAnswered}</p>
            <p>Marked for Review (Answered): {analysis.reviewAnswered}</p>
            <p>Marked for Review (Unanswered): {analysis.reviewUnanswered}</p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 p-6">
          {currentQ ? (
            <>
              <h3 className="text-lg font-semibold mb-3">Question {currentQ.displayNumber}..</h3>
              <p className="mb-4">{currentQ.text}</p>

              
              <div className="space-y-3">
                {currentQ.options.map((opt, i) => {
                  const qKey = `${currentSection}-${currentQ.id}`;
                  const selected = answers[qKey] === opt;
                  return (
                    <div
                      key={i}
                      onClick={() => handleOptionClick(opt)}
                      className={`cursor-pointer border p-3 rounded-xl ${selected ? "bg-gray-800 text-white" : "bg-white hover:bg-gray-200"
                        }`}
                    >
                      {opt}
                    </div>
                  );
                })}
              </div>

              
              <div className="mt-6 flex space-x-3">
                <button
                  onClick={handleMarkReview}
                  className="bg-yellow-500 text-black px-4 py-2 rounded-lg shadow"
                >
                  {marked[`${currentSection}-${currentQ.id}`]?.includes("review")
                    ? "Unmark"
                    : "Mark for Review"}
                </button>
                <button
                  onClick={handleSaveNext}
                  className="bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
                >
                  Save & Next
                </button>
                <button
                  onClick={handleSubmit}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg shadow"
                >
                  Submit Test
                </button>
              </div>
            </>
          ) : (
            <p>No questions available for this section.</p>
          )}
        </div>
      </div>

      
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#fefdf6] rounded-lg p-6 w-96 shadow-lg text-center">
            <h2 className="text-lg font-bold mb-4">Submit Confirmation</h2>
            <p className="mb-6">Are you sure you want to submit the test?</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={confirmSubmit}
                className="bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Yes, Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
