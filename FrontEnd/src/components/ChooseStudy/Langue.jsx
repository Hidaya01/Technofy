// LanguePage.js
import React from "react";
import CardList from "./CardList";
import { FaFlagCheckered, FaFlagUsa } from "react-icons/fa";

function Langue() {
  const cards = [
    { title: "Français", description: "Français", icon: <FaFlagCheckered /> },
    { title: "Anglais", description: "Anglais", icon: <FaFlagUsa /> },
    { title: "Espagnole", description: "Espagnole", icon: <FaFlagUsa /> },
  ];

  return (
    <CardList
      title="Languages"
      cards={cards}
      placeholder="Search Language Interested..."
    />
  );
}

export default Langue;
