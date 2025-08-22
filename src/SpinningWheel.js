import React, { useState } from 'react';

const SpinningWheel = ({ questions, onQuestionSelect }) => {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const spin = () => {
    if (spinning) return;

    setSpinning(true);
    const newRotation = rotation + Math.floor(Math.random() * 360) + 1800; // Spin at least 5 times
    setRotation(newRotation);

    setTimeout(() => {
      const questionIndex = Math.floor(Math.random() * questions.length);
      onQuestionSelect(questions[questionIndex]);
      setSpinning(false);
    }, 4000); // 4 seconds for the wheel to spin
  };

  return (
    <div className="relative w-80 h-80">
      <div
        className="w-full h-full rounded-full border-8 border-blue-500 transition-transform duration-[4000ms] ease-in-out"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {questions.map((question, index) => (
          <div
            key={index}
            className="absolute w-1/2 h-1/2 origin-bottom-right"
            style={{ transform: `rotate(${index * (360 / questions.length)}deg)` }}
          >
            <div className="w-full h-full bg-yellow-200 clip-path-triangle"></div>
          </div>
        ))}
      </div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center cursor-pointer"
        onClick={spin}
      >
        <span className="text-xl font-bold text-blue-800">Spin</span>
      </div>
    </div>
  );
};

export default SpinningWheel;
