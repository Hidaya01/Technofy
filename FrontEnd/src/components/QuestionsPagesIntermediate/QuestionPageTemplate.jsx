import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveAnswer } from '../../redux/answer/answerSlice';
import axios from 'axios';
import BackButton from '../Buttons/BackButton';
import questionPagesDataRadio from './data/questionDataRadio'

const QuestionPageTemplate = () => {
  const { radioId } = useParams(); 
  const questionData = questionPagesDataRadio[radioId]; 

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState('');
  if (!questionData) {
    return <div className="question-page"><h2>Question not found.</h2></div>;
  }

  const handleSelection = async (option) => {
    setSelectedOption(option);
    dispatch(saveAnswer([option]));

    try {
      await axios.post('/api/save-answer', { answers: [option] });
    } catch (error) {
      console.error('Error saving answers:', error);
    }

    const next = typeof questionData.nextRoute === 'function'
      ? questionData.nextRoute(option)
      : questionData.nextRoute;

    navigate(next);
  };

  return (
    <div className="question-page">
      <div className="question-card">
        <div className="header-with-back">
          <h2 className="question-title">
            <BackButton />
            {questionData.question}
          </h2>
        </div>

        <div className="options-list">
          {questionData.options.map((option, index) => (
            <div
              key={index}
              className={`option-radio-item ${selectedOption === option ? 'selected' : ''}`}
              onClick={() => handleSelection(option)}
            >
              <span className="radio-dot" />
              <span className="option-radio-text">{option}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionPageTemplate;
