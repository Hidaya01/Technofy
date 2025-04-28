import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Videosteps = ({ lessonId }) => {  // Changed from useParams to props
  const [steps, setSteps] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Received lessonId:', lessonId); // Debug the prop
    
    if (!lessonId) {
      console.error("No lesson ID provided");
      setError("Invalid course - missing ID");
      setLoading(false);
      return;
    }

    setLoading(true);
    axios.get(`http://localhost:8000/api/courses/${lessonId}`)
      .then(res => {
        const rawSteps = res.data.steps || '';
        
        if (!rawSteps) {
          setError("No steps available for this course.");
          setSteps([]);
          return;
        }

        const parsedSteps = rawSteps
          .split('\n')
          .map(line => {
            const match = line.match(/^\s*(?:\((\d{2}:\d{2}:\d{2})\))?\s*(.+)?$/);
            if (!match || !match[2]) return null;

            return {
              title: match[2].trim(),
              duration: match[1] || null
            };
          })
          .filter(Boolean);

        setSteps(parsedSteps);
        setError(null);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
        setError(
          err.response?.status === 404 
            ? "Course not found" 
            : "Error loading course steps"
        );
        setSteps([]);
      })
      .finally(() => setLoading(false));
  }, [lessonId]);  // Changed dependency to lessonId

  if (loading) {
    return <div>Loading steps...</div>;
  }

  return (
    <div className="video-section">
      <div className="section-header">
        <span>{steps.length} étapes</span>
      </div>
      
      <ul className="steps-list">
        {error ? (
          <li className="error-message">{error}</li>
        ) : steps.length > 0 ? (
          steps.map((step, index) => (
            <li key={index} className="step-item">
              <span className="step-title">{step.title}</span>
              {step.duration && (
                <span className="step-duration">({step.duration})</span>
              )}
            </li>
          ))
        ) : (
          <li>No steps available</li>
        )}
      </ul>
    </div>
  );
};

export default Videosteps;