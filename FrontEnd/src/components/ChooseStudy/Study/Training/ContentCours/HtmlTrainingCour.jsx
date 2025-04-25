import React from "react";
import VideoLesson from "../../VideoLesson";
const HtmlTrainingCour = () => {
  return (
    <div className="question-page pagePyc">
      <div className="main-container3">
        <div className="course-section3 vs">
          <h1 className="vsTitles">📄 HTML Training Course</h1>
          <p>
            Learn how to structure web pages using HTML. This course covers the basic elements, tags, and how to build clean and semantic HTML layouts.
          </p>
        </div>
        <VideoLesson id={2} /> 
      </div>
    </div>
  );
};

export default HtmlTrainingCour;
