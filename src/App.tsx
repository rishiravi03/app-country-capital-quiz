import React, { useState } from 'react';
import { QuizState } from './types/quiz';
import { questions } from './data/questions';
import QuizHeader from './components/QuizHeader';
import QuestionCard from './components/QuestionCard';
import NavigationButtons from './components/NavigationButtons';
import ResultsScreen from './components/ResultsScreen';

function App() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    selectedAnswers: {},
    showResults: false,
    score: 0
  });

  const handleAnswerSelect = (answer: string) => {
    setQuizState(prev => ({
      ...prev,
      selectedAnswers: {
        ...prev.selectedAnswers,
        [prev.currentQuestionIndex]: answer
      }
    }));
  };

  const handleNext = () => {
    setQuizState(prev => ({
      ...prev,
      currentQuestionIndex: prev.currentQuestionIndex + 1
    }));
  };

  const handlePrevious = () => {
    setQuizState(prev => ({
      ...prev,
      currentQuestionIndex: prev.currentQuestionIndex - 1
    }));
  };

  const handleFinish = () => {
    // Calculate score
    let score = 0;
    questions.forEach((question, index) => {
      if (quizState.selectedAnswers[index] === question.correctAnswer) {
        score++;
      }
    });

    setQuizState(prev => ({
      ...prev,
      showResults: true,
      score
    }));
  };

  const handleRestart = () => {
    setQuizState({
      currentQuestionIndex: 0,
      selectedAnswers: {},
      showResults: false,
      score: 0
    });
  };

  const currentQuestion = questions[quizState.currentQuestionIndex];
  const currentAnswer = quizState.selectedAnswers[quizState.currentQuestionIndex];

  if (quizState.showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4">
        <ResultsScreen
          score={quizState.score}
          selectedAnswers={quizState.selectedAnswers}
          onRestart={handleRestart}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <QuizHeader
          currentQuestion={quizState.currentQuestionIndex + 1}
          totalQuestions={questions.length}
          score={quizState.score}
        />

        <QuestionCard
          question={currentQuestion}
          selectedAnswer={currentAnswer}
          onAnswerSelect={handleAnswerSelect}
          questionNumber={quizState.currentQuestionIndex + 1}
        />

        <NavigationButtons
          currentQuestionIndex={quizState.currentQuestionIndex}
          totalQuestions={questions.length}
          selectedAnswer={currentAnswer}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onFinish={handleFinish}
        />
      </div>
    </div>
  );
}

export default App;