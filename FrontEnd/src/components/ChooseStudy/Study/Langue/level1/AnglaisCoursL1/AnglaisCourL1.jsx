import React from "react";
import { useNavigate } from "react-router-dom";
import { FaComments, FaBookOpen, FaPenFancy } from "react-icons/fa";
import CardList from "../../../../CardList";

// The AnglaisCourL1 component
const AnglaisCourL1 = () => {
  const navigate = useNavigate();
  const baseRoute = "/courslangue/anglais1"; 

  const cardsA1 = [
    {
      title: "Basic Communication",
      description: "Learn how to greet, ask simple questions, and introduce yourself.",
      icon: <FaComments />,
      route: `${baseRoute}/basic-communication`, // Path for the topic
    },
    {
      title: "Grammar and Conjugation",
      description: "Learn the basics of English grammar and how to conjugate common verbs.",
      icon: <FaBookOpen />,
      route: `${baseRoute}/grammar-conjugation`, // Path for the topic
    },
    {
      title: "Writing Paragraphs",
      description: "Learn how to structure a simple paragraph and write short texts.",
      icon: <FaPenFancy />,
      route: `${baseRoute}/writing-paragraphs`, // Path for the topic
    },
  ];

  // Function to handle card click and navigate to the appropriate topic
  const handleCardClick = (route) => {
    navigate(route); // Navigate to the selected route
  };

  return (
    <div>
      <CardList
        title="Course Topics"
        cards={cardsA1}
        placeholder="Search a topic..."
        onCardClick={handleCardClick} // Pass the click handler to CardList
      />
    </div>
  );
};

export default AnglaisCourL1;
