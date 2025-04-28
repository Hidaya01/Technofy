import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Videosteps = () => {
  const params = useParams();
  console.log('All URL params:', params); // Debug all parameters
  console.log('Current URL:', window.location.href); // Debug current URL
  
  const { id } = params;
  console.log('Extracted ID:', id); // Debug the specific ID
  const [steps, setSteps] = useState([]);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    if (!id) {
      console.error("No course ID provided in URL");
      setError("Invalid course URL");
      return;
    }
    // Fetch course data
    axios.get(`http://localhost:8000/api/courses/${id}`)
      .then(res => {
        console.log('API Response:', res.data); // Log the full response to check the structure
        const rawSteps = res.data.steps || ''; // Ensure steps exist, else default to empty string

        // Check if the steps are missing or empty
        if (!rawSteps) {
          console.log("No steps found in the API response");
          setError("No steps available for this course.");
          return;
        }

        // Parsing the steps
        const parsed = rawSteps
          .split('\n')  // Split the steps by line breaks
          .map(line => {
            // Match timestamp format (hh:mm:ss) or lines without timestamp
            const match = line.match(/^\s*(\(\d{2}:\d{2}:\d{2}\))?\s*(.*)$/);
            if (!match) return null; // Skip lines that don't match

            const [, time, title] = match;
            const duration = time ? time.slice(1, -1) : null; // Remove parentheses from the time

            return {
              title: title.trim(),
              duration,
            };
          })
          .filter(Boolean);  // Remove any null values from the array

        if (parsed.length === 0) {
          setError("No valid steps found.");
        }

        setSteps(parsed);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
        if (err.response) {
          // The request was made and the server responded with a status code
          if (err.response.status === 404) {
            setError("Course not found");
          } else {
            setError(`Server error: ${err.response.status}`);
          }
        } else if (err.request) {
          // The request was made but no response was received
          setError("Network error - could not connect to server");
        } else {
          // Something happened in setting up the request
          setError("Error setting up request");
        }
      });
  }, [id]);

  return (
    <div className="video-section">
      <div className="section-header">
        <span>{steps.length} étapes</span>
      </div>
      <ul className="steps-list">
        {error ? (
          <li>{error}</li>
        ) : (
          steps.length > 0 ? (
            steps.map((step, index) => (
              <li key={index} className="step-item">
                <span className="step-title">{step.title}</span>
                {step.duration && <span className="step-duration">({step.duration})</span>}
              </li>
            ))
          ) : (
            <li>No steps available</li>
          )
        )}
      </ul>
    </div>
  );
};

export default Videosteps;