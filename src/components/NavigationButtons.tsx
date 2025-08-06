import React from 'react';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

interface NavigationButtonsProps {
  currentQuestionIndex: number;
  totalQuestions: number;
  selectedAnswer: string | undefined;
  onPrevious: () => void;
  onNext: () => void;
  onFinish: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  currentQuestionIndex,
  totalQuestions,
  selectedAnswer,
  onPrevious,
  onNext,
  onFinish
}) => {
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  return (
    <div className="flex justify-between items-center">
      <button
        onClick={onPrevious}
        disabled={isFirstQuestion}
        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
          isFirstQuestion
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-gray-600 text-white hover:bg-gray-700 hover:shadow-lg transform hover:-translate-y-0.5'
        }`}
      >
        <ChevronLeft className="w-5 h-5" />
        Previous
      </button>

      <div className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
        {currentQuestionIndex + 1} / {totalQuestions}
      </div>

      {isLastQuestion ? (
        <button
          onClick={onFinish}
          disabled={!selectedAnswer}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
            selectedAnswer
              ? 'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg transform hover:-translate-y-0.5'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          <CheckCircle className="w-5 h-5" />
          Finish Quiz
        </button>
      ) : (
        <button
          onClick={onNext}
          disabled={!selectedAnswer}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
            selectedAnswer
              ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Next
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;