import React from 'react';
import { Trophy, RotateCcw, CheckCircle, XCircle } from 'lucide-react';
import { questions } from '../data/questions';

interface ResultsScreenProps {
  score: number;
  selectedAnswers: { [key: number]: string };
  onRestart: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ score, selectedAnswers, onRestart }) => {
  const totalQuestions = questions.length;
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getScoreMessage = () => {
    if (percentage >= 90) return { message: "Outstanding! Geography Master!", color: "text-green-600" };
    if (percentage >= 80) return { message: "Excellent! Well done!", color: "text-green-600" };
    if (percentage >= 70) return { message: "Great job! Keep it up!", color: "text-blue-600" };
    if (percentage >= 60) return { message: "Good effort! Practice more!", color: "text-yellow-600" };
    return { message: "Keep learning! Try again!", color: "text-red-600" };
  };

  const scoreMessage = getScoreMessage();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <div className="text-center mb-8">
          <div className="bg-yellow-100 p-4 rounded-full inline-block mb-4">
            <Trophy className="w-12 h-12 text-yellow-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Quiz Complete!</h1>
          <p className={`text-2xl font-semibold ${scoreMessage.color}`}>
            {scoreMessage.message}
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Final Score</h3>
              <p className="text-4xl font-bold text-blue-600">{score}/{totalQuestions}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Percentage</h3>
              <p className="text-4xl font-bold text-green-600">{percentage}%</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Correct Answers</h3>
              <p className="text-4xl font-bold text-purple-600">{score}</p>
            </div>
          </div>
        </div>

        <button
          onClick={onRestart}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-3"
        >
          <RotateCcw className="w-6 h-6" />
          Take Quiz Again
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Review Your Answers</h2>
        <div className="space-y-4">
          {questions.map((question, index) => {
            const userAnswer = selectedAnswers[index];
            const isCorrect = userAnswer === question.correctAnswer;
            
            return (
              <div
                key={question.id}
                className={`p-4 rounded-xl border-2 ${
                  isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {index + 1}. What is the capital of {question.country}?
                    </h3>
                    <div className="space-y-1">
                      <p className={`flex items-center gap-2 ${
                        isCorrect ? 'text-green-700' : 'text-red-700'
                      }`}>
                        {isCorrect ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <XCircle className="w-4 h-4" />
                        )}
                        Your answer: {userAnswer || 'Not answered'}
                      </p>
                      {!isCorrect && (
                        <p className="text-green-700 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Correct answer: {question.correctAnswer}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen;