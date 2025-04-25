// IdePage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import CardList from "../../CardList";
import { FaCode, FaFlagUsa } from "react-icons/fa";

function Ide() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Visual Studio Code",
      description: "The best code editor",
      icon: <FaCode />,
      route: "/courside/vscode",
    },
    {
      title: "Visual Studio",
      description: "Microsoft's IDE for development",
      icon: <FaFlagUsa />,
      route: "/courside/visualstudio",
    },
    {
      title: "PyCharm",
      description: "Python IDE",
      icon: <FaFlagUsa />,
      route: "/courside/pycharm",
    },
  ];

  const handleCardClick = (route) => {
    navigate(route);
  };

  return (
    <CardList
      title="IDEs"
      cards={cards}
      placeholder="Search IDE Interested to Learning..."
      onCardClick={handleCardClick}
    />
  );
}

export default Ide;
