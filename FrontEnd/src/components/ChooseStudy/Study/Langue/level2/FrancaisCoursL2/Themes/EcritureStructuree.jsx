import React from "react";
import VideoLesson from "../../../../VideoLesson";

const EcritureStructuree = () => {
  return (
    <div className="question-page pagePyc">
      <div className="main-container3">
        <div className="course-section3">
          <h1 className="vsTitles">📝 Écriture Structurée</h1>
          <div style={{ marginTop: "1rem" }}>
            <VideoLesson id={12} /> 
          </div>
          <p>
            Ce cours se concentre sur la rédaction d'essais argumentatifs et sur la structuration d'articles longs et détaillés. Nous allons couvrir les meilleures pratiques pour structurer un texte de manière logique et cohérente.
          </p>
          <section className="list3">
            <p>La structure d'un essai : introduction, développement, conclusion</p>
            <p>Utilisation des connecteurs logiques pour organiser les idées</p>
            <p>Introduction aux différents types de textes : narratif, descriptif, argumentatif</p>
            <p>Comment structurer un article complexe avec plusieurs arguments</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EcritureStructuree;
