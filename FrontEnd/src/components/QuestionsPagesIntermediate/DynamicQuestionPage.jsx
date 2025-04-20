import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveAnswer } from '../../redux/answer/answerSlice';
import axios from 'axios';
import ContinueButton from '../Buttons/ContinueButton';
import BackButton from '../Buttons/BackButton';
import questionsData from './data/questionsData';

const DynamicQuestionPage = () => {
  const { id } = useParams(); 
  const questionSet = questionsData[id];

  const [selectedOptions, setSelectedOptions] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const continueButtonRef = useRef(null);

  if (!questionSet) return <div>Question not found</div>;

  const toggleSelection = (option) => {
    setSelectedOptions((prevSelected) => {
      const updated = prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option)
        : [...prevSelected, option];

      if (updated.length > 3) {
        continueButtonRef.current?.scrollIntoView({ behavior: 'smooth' });
      }

      return updated;
    });
  };

  const handleContinue = async () => {
    dispatch(saveAnswer(selectedOptions));
    try {
      await axios.post('/api/save-answer', { answers: selectedOptions });
    } catch (err) {
      console.error('Error saving answer:', err);
    }
    navigate(questionSet.next);
  };

  return (
    <div className="question-page">
      <div className="question-card">
        <div className="header-with-back">
          <h2 className="question-title">
            <BackButton />
            {questionSet.question}
          </h2>
        </div>

        <div className="option-list">
          {questionSet.options.map((option, index) => (
            <div
              key={index}
              className={`option-item ${selectedOptions.includes(option) ? 'selected' : ''}`}
              onClick={() => toggleSelection(option)}
            >
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                readOnly
                className="option-checkbox"
              />
              <span className="option-text">{option}</span>
            </div>
          ))}
        </div>

        <ContinueButton
          ref={continueButtonRef}
          onClick={handleContinue}
          isDisabled={selectedOptions.length === 0}
        />
      </div>
    </div>
  );
};

export default DynamicQuestionPage;
