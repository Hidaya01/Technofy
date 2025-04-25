import React from "react";
import VideoLesson from "../../VideoLesson";
const PythonTrainingCour = () => {
  return (
    <div className="question-page pagePyc">
      <div className="main-container3">
        <div className="course-section3 vs">
          <h1 className="vsTitles">🐍 Python Training Course</h1>
          <p>
            Start coding with Python — ideal for beginners! Learn variables, loops, functions,
            and more in a friendly and accessible way.
          </p>
        </div>

        <VideoLesson id={5} /> 
      </div>
    </div>
  );
};

export default PythonTrainingCour;
