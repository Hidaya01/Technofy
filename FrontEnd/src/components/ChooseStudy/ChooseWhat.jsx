import React from 'react';
import { useLocation } from 'react-router-dom';
import Features from '../HomePage/Features';

export default function ChooseWhat() {
  const location = useLocation();
  const username = location.state?.username || location.state?.name || "User"; // Handle both keys
  return (
    <div className='question-page'>
      <h5>Welcome {username}, to TechnoFy</h5>
      <h4>Now choose your next step</h4>
      <Features />
    </div>
  );
}
