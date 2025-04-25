import React from "react";
import VideoLesson from "../../../../VideoLesson";

const GrammaireAvancee = () => {
  return (
    <div className="question-page pagePyc">
      <div className="main-container3">
        <div className="course-section3">
          <h1 className="vsTitles">📘 Grammaire Avancée et Conjugaison</h1>
          <div style={{ marginTop: "1rem" }}>
            <VideoLesson id={13} /> 
          </div>
          <p>
            Ce cours vous aidera à maîtriser des concepts de grammaire avancée et à conjuguer des verbes complexes dans diverses tenses et modes.
          </p>
          <section className="list3">
            <p>Les temps composés : passé composé, plus-que-parfait, futur antérieur, etc.</p>
            <p>Les conjugaisons irrégulières</p>
            <p>Les verbes pronominaux et réfléchis</p>
            <p>Accords de temps et mode dans les propositions subordonnées</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GrammaireAvancee;
