export interface Question {
  id: number;
  country: string;
  options: string[];
  correctAnswer: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  selectedAnswers: { [key: number]: string };
  showResults: boolean;
  score: number;
}