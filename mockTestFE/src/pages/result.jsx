import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "@/api/axiosConfig";

export default function Results() {
  const navigate = useNavigate();
  const location = useLocation();

  //Data from TestPage
  const { answers = {}, testName = "Mock Test" } = location.state || {};

  const [allQuestions, setAllQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await api.get("/questions");
        setAllQuestions(res.data);
      } catch (err) {
        console.error("Error fetching questions:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  // calc res
  let correct = 0,
    incorrect = 0;
  allQuestions.forEach((q) => {
    const qKey = `${q.section}-${q.id}`;
    if (answers[qKey]) {
      if (answers[qKey] === q.correctAnswer) correct++;
      else incorrect++;
    }
  });

  useEffect(() => {
    if (!loading) {
      const saveResult = async () => {
        try {
          await api.post("/results/save", {
            testName,
            totalQuestions: total,
            correctAnswers: correct,
            incorrectAnswers: incorrect,
            unanswered,
            percentage: percent,
          });
          console.log(" Result saved successfully");
        } catch (err) {
          console.error("Error saving result:", err);
        }
      };
      saveResult();
    }
  }, [loading]);


  const total = allQuestions.length;
  const unanswered = total - (correct + incorrect);
  const percent = Math.round((correct / total) * 100);


  let message = "";
  if (percent >= 80) message = "🎉 Excellent! You nailed it!";
  else if (percent >= 50) message = "👍 Good effort! Keep practicing!";
  else message = "💪 Don’t worry, best wishes for next time — you can retake!";

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center font-serif">
        <p className="text-lg font-semibold">Loading results...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f5e4] flex flex-col items-center py-8 px-4 font-serif">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-6 space-y-6 border border-gray-300">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-700">Results</h1>
          <p className="mt-2 text-lg">{message}</p>
        </div>

        <div className="flex justify-around bg-[#ece2c6] p-4 rounded-xl text-center">
          <div>
            <p className="text-2xl font-bold text-green-700">{correct}</p>
            <p>Correct</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-red-600">{incorrect}</p>
            <p>Incorrect</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-700">{unanswered}</p>
            <p>Unanswered</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-indigo-700">{percent}%</p>
            <p>Score</p>
          </div>
        </div>

        <div className="max-h-[400px] overflow-y-auto space-y-3">
          {allQuestions.map((q, i) => {
            const qKey = `${q.section}-${q.id}`;
            const userAns = answers[qKey];
            const isCorrect = userAns === q.correctAnswer;
            return (
              <div
                key={i}
                className={`p-3 rounded-lg border ${isCorrect
                    ? "border-green-400 bg-green-50"
                    : userAns
                      ? "border-red-400 bg-red-50"
                      : "border-gray-300 bg-gray-100"
                  }`}
              >
                <p className="font-semibold text-sm">
                  {q.section} – Q{q.id}: {q.questionText}
                </p>
                <p className="text-xs mt-1">
                  Your Answer:{" "}
                  <span
                    className={`font-medium ${isCorrect ? "text-green-600" : "text-red-600"
                      }`}
                  >
                    {userAns || "Not Answered"}
                  </span>
                </p>
                {!isCorrect && (
                  <p className="text-xs">
                    Correct Answer:{" "}
                    <span className="font-medium text-green-700">
                      {q.correctAnswer}
                    </span>
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-4 pt-4">
          <button
            onClick={() => navigate("/")}
            className="bg-gray-700 hover:bg-gray-800 text-white px-5 py-2 rounded-lg"
          >
            Go to Home
          </button>
          <button
            onClick={() => navigate("/instructions1")}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
          >
            Retake Test
          </button>
        </div>
      </div>
    </div>
  );
}
