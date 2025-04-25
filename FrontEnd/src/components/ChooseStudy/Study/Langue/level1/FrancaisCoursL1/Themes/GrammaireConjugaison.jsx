import React from "react";
import VideoLesson from "../../../../VideoLesson";

const GrammaireConjugaison = () => {
  return (
    <div className="question-page pagePyc">
      <div className="main-container3">
        <div className="course-section3">
          <h1 className="vsTitles">📘 Grammaire et Conjugaison</h1>
          <div style={{ marginTop: "1rem" }}>
            <VideoLesson id={8} /> 
          </div>
          <h3 className="vsTitles">1. Articles définis / indéfinis</h3>
          <section className="list3">
            <p><strong>Le / La / L’ / Les</strong> – choses spécifiques</p>
            <p><strong>Un / Une / Des</strong> – choses en général</p>
          </section>

          <h3 className="vsTitles">2. Pronoms personnels sujets</h3>
          <section className="list3">
            <p>Je, Tu, Il/Elle/On, Nous, Vous, Ils/Elles</p>
          </section>

          <h3 className="vsTitles">3. Présent des verbes réguliers</h3>
          <p className="code-block3">Je parle, Tu parles, Nous parlons...</p>
          <p className="code-block3">Je finis, Tu finis, Nous finissons...</p>
          <p className="code-block3">Je vends, Tu vends, Nous vendons...</p>

          <h3 className="vsTitles">4. Verbes irréguliers utiles</h3>
          <section className="list3">
            <p>Être – Je suis, Tu es, Il est...</p>
            <p>Avoir – J’ai, Tu as, Il a...</p>
            <p>Aller – Je vais, Tu vas, Il va...</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GrammaireConjugaison;
