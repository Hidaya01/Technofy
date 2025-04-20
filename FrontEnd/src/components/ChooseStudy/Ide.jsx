// IdePage.js
import React from "react";
import CardList from "./CardList";
import { FaCode, FaFlagUsa } from "react-icons/fa";

function Ide() {
  const cards = [
    { title: "Visual Studio Code", description: "The best code editor", icon: <FaCode /> },
    { title: "Visual Studio", description: "Microsoft's IDE for development", icon: <FaFlagUsa /> },
    { title: "PyCharm", description: "Python IDE", icon: <FaFlagUsa /> },
  ];

  return (
    <CardList
      title="IDEs"
      cards={cards}
      placeholder="Search IDE Interested to Learning..."
    />
  );
}

export default Ide;
