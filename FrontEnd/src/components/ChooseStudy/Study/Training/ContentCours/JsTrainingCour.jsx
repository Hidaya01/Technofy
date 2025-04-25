import React from "react";
import VideoLesson from "../../VideoLesson";
const JsTrainingCour = () => {
  return (
    <div className="question-page pagePyc">
      <div className="main-container3">
        <div className="course-section3 vs">
          <h1 className="vsTitles">🟨 JavaScript Training Course</h1>
          <p>
            Master the basics of JavaScript — the language of the web. Learn variables, functions, loops, and more to bring interactivity to your web pages.
          </p>
        </div>

        <VideoLesson id={6} /> 
      </div>
    </div>
  );
};

export default JsTrainingCour;
