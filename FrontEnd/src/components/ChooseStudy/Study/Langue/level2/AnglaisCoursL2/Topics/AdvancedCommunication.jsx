import React from 'react';
import VideoLesson from "../../../../VideoLesson";

const AdvancedCommunication = () => {
  return (
    <div className="question-page pagePyc">
      <div className="main-container3">
        <div className="course-section3">
          <h1 className="vsTitles">🎤 Advanced Communication</h1>
          <div style={{ marginTop: "1rem" }}>
            <VideoLesson id={17} /> 
          </div>
          <p>
            In this module, you will enhance your communication skills by learning how to express complex ideas clearly.
            You will practice discussing a variety of topics, giving presentations, and engaging in debates.
          </p>

          <h3 className="vsTitles">Key Topics:</h3>
          <section className="list3">
            <p>Building advanced vocabulary for formal and informal conversations</p>
            <p>Practicing pronunciation and tone for effective communication</p>
            <p>Strategies for handling complex discussions and debates</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdvancedCommunication;
