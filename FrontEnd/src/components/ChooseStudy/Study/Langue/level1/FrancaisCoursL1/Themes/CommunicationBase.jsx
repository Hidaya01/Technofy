import React from "react";
import VideoLesson from "../../../../VideoLesson";

const CommunicationBase = () => {
  return (
    <div className="question-page pagePyc">
      <div className="main-container3">
        <div className="course-section3 vs">
          <h1 className="vsTitles">🗣️ Communication de Base</h1>
          <div style={{ marginTop: "1rem" }}>
            <VideoLesson id={8} /> 
          </div>
          <p>
            Apprenez à saluer, poser des questions simples et vous présenter en français.
          </p>

          <h3 className="vsTitles">1. Salutations</h3>
          <section className="list3">
            <p>Bonjour - Good Morning</p>
            <p>Salut - Hi</p>
            <p>Bonsoir - Good Evening</p>
          </section>

          <h3 className="vsTitles">2. Se présenter</h3>
          <p>
            Bonjour, je m'appelle [Nom]. Comment vous appelez-vous ?<br />
            Hi, my name is [Name]. What is your name?
          </p>

          <h3 className="vsTitles">3. Poser des questions simples</h3>
          <section className="list3">
            <p>Comment ça va ? - How are you?</p>
            <p>Où est… ? - Where is…?</p>
            <p>Qu'est-ce que c'est ? - What is this?</p>
          </section>

          <h3 className="vsTitles">Exercice</h3>
          <p>Pratiquez les phrases ci-dessus avec un partenaire.</p>

          
         
        </div>
      </div>
    </div>
  );
};

export default CommunicationBase;
