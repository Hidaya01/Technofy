import React from 'react';
import VideoLesson from "../../../../VideoLesson";

const AdvancedGrammar = () => {
  return (
    <div className="question-page pagePyc">
      <div className="main-container3">
        <div className="course-section3">
          <h1 className="vsTitles">📚 Advanced Grammar and Conjugation</h1>
          <div style={{ marginTop: "1rem" }}>
            <VideoLesson id={15} /> 
          </div>
          <p>
            This module delves into complex grammatical structures such as conditional and subjunctive moods,
            as well as passive and active voice in advanced contexts. You will also learn to conjugate irregular and 
            advanced verbs in different tenses.
          </p>

          <h3 className="vsTitles">Key Topics:</h3>
          <section className="list3">
            <p>Mastering the subjunctive and conditional tenses</p>
            <p>Perfect and past perfect tenses in complex sentences</p>
            <p>Using passive voice and indirect speech</p>
            <p>Advanced verb conjugation in all forms</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdvancedGrammar;
