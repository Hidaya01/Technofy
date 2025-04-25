import React from "react";
import { useNavigate } from "react-router-dom";
import CardList from "../../../../CardList"; // Adjust the import path if necessary
import { FaComments, FaBookOpen, FaPenFancy } from "react-icons/fa";

const FrancaisCourL2 = () => {
  const navigate = useNavigate();
  const baseRoute = "/courslangue/francais2"; // Base route for French Level 2

  // Define cards with the route structure
  const cardsF2 = [
    {
      title: "Communication avancée",
      description: "Améliorez vos compétences en communication pour des conversations plus complexes.",
      icon: <FaComments />,
      route: `${baseRoute}/communication-avancee`, // The route for this card
    },
    {
      title: "Grammaire avancée et conjugaison",
      description: "Explorez des concepts grammaticaux plus avancés et apprenez à conjuguer des verbes plus complexes.",
      icon: <FaBookOpen />,
      route: `${baseRoute}/grammaire-avancee`, // The route for this card
    },
    {
      title: "Écriture d'essais et de textes structurés",
      description: "Apprenez à rédiger des essais argumentatifs et à structurer des textes longs de manière cohérente.",
      icon: <FaPenFancy />,
      route: `${baseRoute}/ecriture-structuree`, // The route for this card
    },
  ];

  // Handle card click by navigating to the route
  const handleCardClick = (route) => {
    navigate(route); // Navigates to the selected card's route
  };

  return (
    <div>
      <h2>Intermédiaire - Cours de Français</h2>
      <CardList
        title="Thèmes du cours"
        cards={cardsF2} // Pass the cards array to CardList2
        placeholder="Rechercher un thème..."
        onCardClick={handleCardClick} // Pass the function to handle click
      />
    </div>
  );
};

export default FrancaisCourL2;
