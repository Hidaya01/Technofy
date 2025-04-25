import React from "react";
import VideoLesson from "../../../../VideoLesson";

const EcritureParagraphes = () => {
  return (
    <div className="question-page pagePyc">
      <div className="main-container3">
        <div className="course-section3 vs">
          <h1 className="vsTitles">✍️ Écriture de Paragraphes</h1>
          <div style={{ marginTop: "1rem" }}>
            <VideoLesson id={9} /> 
          </div>
          <h3 className="vsTitles">1. Structure d’un paragraphe</h3>
          <section className="list3">
            <p><strong>Une phrase d’introduction</strong> – présente le sujet.</p>
            <p><strong>Des phrases de développement</strong> – ajoutent des détails.</p>
            <p><strong>Une phrase de conclusion</strong> – résume l’idée principale.</p>
          </section>

          <h3 className="vsTitles">2. Connecteurs logiques utiles</h3>
          <section className="list3">
            <p>D’abord, ensuite, enfin</p>
            <p>De plus, par exemple, cependant</p>
            <p>Donc, car, puisque</p>
          </section>

          <h3 className="vsTitles">3. Exemple de paragraphe simple</h3>
          <p className="code-block3 italic">
            J’aime l’été parce que je peux faire beaucoup d’activités dehors...
          </p>

          <h3 className="vsTitles">4. Conseils pratiques</h3>
          <section className="list3">
            <p>Utilisez des phrases courtes.</p>
            <p>Relisez votre texte.</p>
            <p>Ajoutez des exemples concrets.</p>
          </section>

          <h3 className="vsTitles">📝 Exercice suggéré</h3>
          <p>Écrivez un court paragraphe sur votre plat préféré avec deux connecteurs.</p>
        </div>
      </div>
    </div>
  );
};

export default EcritureParagraphes;
