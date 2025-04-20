import React from 'react';
import { useSelector } from 'react-redux';

const AnswerView = () => {
  const selectedAnswer = useSelector((state) => state.answer.selectedAnswer);

  return (
    <div className="p-8 text-xl">
      <h2>Your selected answer is:</h2>
      <p className="mt-4">
        <strong>{selectedAnswer ? selectedAnswer : "No answer selected."}</strong>
      </p>
    </div>
  );
};

export default AnswerView;
