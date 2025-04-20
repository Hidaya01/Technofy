import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <span onClick={handleBack} className="back-btn">
      &#x276E; 
      &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
    </span>
  );
};

export default BackButton;
