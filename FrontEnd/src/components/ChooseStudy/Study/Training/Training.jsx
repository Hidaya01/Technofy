import React from "react";
import { useNavigate } from "react-router-dom";
import CardList from "../../CardList";
import { FaHtml5, FaJsSquare, FaPython } from "react-icons/fa";

function Training() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "HTML",
      description: "Take the basic for creating a web application",
      icon: <FaHtml5 />,
      route: "/courstraining/html",
    },
    {
      title: "JavaScript",
      description: "Learn the fundamentals of JavaScript, the language of the web.",
      icon: <FaJsSquare />, 
      route: "/courstraining/javascript",
    },    
    {
      title: "Python",
      description: "Learn the basics of Python programming",
      icon: <FaPython />,
      route: "/courstraining/python",
    },
  ];

  const handleCardClick = (route) => {
    navigate(route);
  };

  return (
    <CardList
      title="Programming Languages"
      cards={cards}
      placeholder="Search Programming Languages Interested..."
      onCardClick={handleCardClick}
    />
  );
}

export default Training;
