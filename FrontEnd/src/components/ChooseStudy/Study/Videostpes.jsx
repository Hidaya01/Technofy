import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';

const Videosteps = () => {
  const params = useParams();
  const location = useLocation();
  const [steps, setSteps] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Debugging output
  console.log('Router params:', params);
  console.log('Current path:', location.pathname);

  const { id } = params;

  useEffect(() => {
    // Validate ID before making API call
    if (!id || id === 'undefined') {
      console.error('Invalid ID:', id);
      setError('Invalid course ID in URL');
      setLoading(false);
      return;
    }

    setLoading(true);
    axios.get(`http://localhost:8000/api/courses/${id}`)
      .then(res => {
        const rawSteps = res.data.steps || '';
        const parsedSteps = rawSteps.split('\n')
          .map(line => {
            const match = line.match(/^\s*(\(\d{2}:\d{2}:\d{2}\))?\s*(.*)$/);
            return match ? {
              title: match[2].trim(),
              duration: match[1] ? match[1].slice(1, -1) : null
            } : null;
          })
          .filter(Boolean);
        
        setSteps(parsedSteps);
        setError(parsedSteps.length === 0 ? 'No steps available' : null);
      })
      .catch(err => {
        console.error('API Error:', err);
        setError(err.response?.status === 404 
          ? 'Course not found' 
          : 'Error loading course data');
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (!id) {
    return (
      <div className="video-section">
        <div className="error-message">
          Error: No course ID specified in the URL.
          <p>Expected URL format: /courses/123</p>
        </div>
      </div>
    );
  }

  return (
    <div className="video-section">
      <div className="section-header">
        <span>{steps.length} étapes</span>
      </div>
      
      {loading ? (
        <div>Loading course details...</div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <ul className="steps-list">
          {steps.map((step, index) => (
            <li key={index} className="step-item">
              <span className="step-title">{step.title}</span>
              {step.duration && (
                <span className="step-duration">({step.duration})</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Videosteps;