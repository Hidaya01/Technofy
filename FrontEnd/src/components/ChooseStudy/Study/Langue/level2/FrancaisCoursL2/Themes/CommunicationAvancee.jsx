import React from "react";
import VideoLesson from "../../../../VideoLesson";

const CommunicationAvancee = () => {
  return (
    <div className="question-page pagePyc">
      <div className="main-container3">
        <div className="course-section3">
          <h1 className="vsTitles">💬 Communication Avancée</h1>
          <div style={{ marginTop: "1rem" }}>
            <VideoLesson id={11} /> 
          </div>
          <p>
            Dans ce cours, nous allons approfondir vos compétences en communication pour gérer des conversations complexes dans diverses situations professionnelles et sociales.
          </p>
          <section className="list3">
            <p>Techniques de conversation avancées</p>
            <p>Discussion sur des sujets techniques</p>
            <p>Comment exprimer des opinions et des idées de manière claire et cohérente</p>
            <p>Pratique d'écoute active et de réponse pertinente</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CommunicationAvancee;
