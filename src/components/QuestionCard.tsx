import React from 'react';
import { Question } from '../types/quiz';
import { MapPin } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: string | undefined;
  onAnswerSelect: (answer: string) => void;
  questionNumber: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ 
  question, 
  selectedAnswer, 
  onAnswerSelect, 
  questionNumber 
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 transform transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-purple-100 p-2 rounded-full">
          <MapPin className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Question {questionNumber}
          </h2>
          <p className="text-gray-600">What is the capital of</p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-3xl font-bold text-center text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent p-4">
          {question.country}
        </h3>
      </div>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <label
            key={index}
            className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
              selectedAnswer === option
                ? 'border-blue-500 bg-blue-50 shadow-md'
                : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
            }`}
          >
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option}
              checked={selectedAnswer === option}
              onChange={(e) => onAnswerSelect(e.target.value)}
              className="w-5 h-5 text-blue-600 border-2 border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
            <span className={`ml-4 text-lg ${
              selectedAnswer === option ? 'text-blue-700 font-medium' : 'text-gray-700'
            }`}>
              {option}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;