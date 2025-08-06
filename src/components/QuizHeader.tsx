import React from 'react';
import { Globe, Trophy } from 'lucide-react';

interface QuizHeaderProps {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({ currentQuestion, totalQuestions, score }) => {
  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-full">
            <Globe className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Country Capitals Quiz</h1>
            <p className="text-gray-600">Test your geography knowledge</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
          <Trophy className="w-5 h-5 text-green-600" />
          <span className="font-semibold text-green-700">Score: {score}</span>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Question {currentQuestion} of {totalQuestions}</span>
          <span>{Math.round(progressPercentage)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default QuizHeader;