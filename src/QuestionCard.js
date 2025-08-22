import React from 'react';

const QuestionCard = ({ question }) => {
  if (!question) {
    return null;
  }

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
      <p className="text-2xl text-gray-800">{question}</p>
    </div>
  );
};

export default QuestionCard;
