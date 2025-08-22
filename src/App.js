import React, { useState } from 'react';

const questions = [
  "What is the color of the sky?",
  "What is the capital of France?",
  "What is 2 + 2?",
  "What is the opposite of 'hot'?",
  "What animal says 'meow'?",
  "How many days are in a week?",
];

import SpinningWheel from './SpinningWheel';
import QuestionCard from './QuestionCard';

function App() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">Spin the Wheel!</h1>
      <SpinningWheel questions={questions} onQuestionSelect={setSelectedQuestion} />
      <QuestionCard question={selectedQuestion} />
    </div>
  );
}

export default App;
