import React from 'react';
import VideoLesson from "../../../../VideoLesson";

const StructuredWriting = () => {
  return (
    <div className="question-page pagePyc">
      <div className="main-container3">
        <div className="course-section3">
          <h1 className="vsTitles">📝 Essay and Structured Writing</h1>
          <div style={{ marginTop: "1rem" }}>
            <VideoLesson id={19} /> 
          </div>
          <p>
            In this module, you will learn how to write well-structured essays on various topics. You will focus on
            organizing your thoughts, creating clear arguments, and ensuring coherence in your writing.
          </p>

          <h3 className="vsTitles">Key Topics:</h3>
          <section className="list3">
            <p>Creating a strong thesis and supporting arguments</p>
            <p>Organizing essays using clear paragraph structures</p>
            <p>Writing persuasive and argumentative essays</p>
            <p>Polishing writing for clarity and coherence</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StructuredWriting;
