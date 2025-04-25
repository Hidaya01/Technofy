import React from "react";
import { useNavigate } from "react-router-dom";
import CardList from "../../../../CardList"; // Adjust the import path if necessary
import { FaComments, FaBookOpen, FaPenFancy } from "react-icons/fa";

const AnglaisCourL2 = () => {
  const navigate = useNavigate();
  const baseRoute = "/courslangue/anglais2"; // Base route for English Level 2

  // Define cards with the desired structure
  const cardsA2 = [
    {
      title: "Advanced Communication",
      description: "Enhance your communication skills for more complex conversations.",
      icon: <FaComments />,
      route: `${baseRoute}/advanced-communication`, // The route for this card
    },
    {
      title: "Advanced Grammar and Conjugation",
      description: "Dive into more advanced grammar concepts and learn to conjugate complex verbs.",
      icon: <FaBookOpen />,
      route: `${baseRoute}/advanced-grammar`, // The route for this card
    },
    {
      title: "Essay and Structured Writing",
      description: "Learn to write argumentative essays and structure longer texts coherently.",
      icon: <FaPenFancy />,
      route: `${baseRoute}/structured-writing`, // The route for this card
    },
  ];

  // Handle card click by navigating to the route
  const handleCardClick = (route) => {
    navigate(route); // Navigates to the selected card's route
  };

  return (
    <div>
      <h2>Intermediate - English Course</h2>
      <CardList
        title="Course Topics"
        cards={cardsA2} // Pass the cards array to CardList
        placeholder="Search a topic..."
        onCardClick={handleCardClick} // Handle card click with route
      />
    </div>
  );
};

export default AnglaisCourL2;
