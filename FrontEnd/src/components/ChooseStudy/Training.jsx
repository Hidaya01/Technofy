// TrainingPage.js
import React from "react";
import CardList from "./CardList";
import { FaHtml5, FaReact, FaPython } from "react-icons/fa";

function Training() {
  const cards = [
    { title: "HTML", description: "Take the basic for creating a web application", icon: <FaHtml5 /> },
    { title: "React", description: "Learn the fundamentals of React.js", icon: <FaReact /> },
    { title: "Python", description: "Learn the basics of Python programming", icon: <FaPython /> },
  ];

  return (
    <CardList
      title="Training"
      cards={cards}
      placeholder="Search Training Interested..."
    />
  );
}

export default Training;
