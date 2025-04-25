import React from "react";
import { useNavigate } from "react-router-dom";
import CardList from "../../../../CardList";
import { FaComments, FaBookOpen, FaPenFancy } from "react-icons/fa";

const FrancaisCourL1 = () => {
  const navigate = useNavigate();
  const baseRoute = "/courslangue/francais1"; // This is correct for how you navigate from this component

  const cardsF1 = [
    {
      title: "Communication de base",
      description: "Apprenez à saluer, poser des questions simples, et vous présenter.",
      icon: <FaComments />,
      route: `${baseRoute}/communication-base`, // Dynamically created route for this topic
    },
    {
      title: "Grammaire et conjugaison",
      description: "Les bases de la grammaire française et comment conjuguer les verbes les plus courants.",
      icon: <FaBookOpen />,
      route: `${baseRoute}/grammaire-conjugaison`,
    },
    {
      title: "Écriture de paragraphes",
      description: "Comment structurer un paragraphe simple et écrire des petits textes.",
      icon: <FaPenFancy />,
      route: `${baseRoute}/ecriture-paragraphes`,
    },
  ];

  const handleCardClick = (route) => {
    navigate(route); // Navigate to the dynamically generated route
  };

  return (
    <div>
      <CardList
        title="Thèmes du cours"
        cards={cardsF1} // Pass the cards array to CardList2
        placeholder="Rechercher un thème..."
        onCardClick={handleCardClick} // Pass the function to handle click
      />
    </div>
  );
};

export default FrancaisCourL1;
