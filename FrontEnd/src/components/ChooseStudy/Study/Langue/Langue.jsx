import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CardList from "../../CardList";
import { FaFlagCheckered, FaFlagUsa } from "react-icons/fa";

function Langue() {
  const navigate = useNavigate();
  const location = useLocation();
  const userLevel = location.state?.userLevel || "débutant";

  const getRoute = (lang, userLevel) => {
    if (lang === "francais") {
      return userLevel === "intermédiaire" ? "/courslangue/francais2" : "/courslangue/francais1";
    }
    if (lang === "anglais") {
      return userLevel === "intermédiaire" ? "/courslangue/anglais2" : "/courslangue/anglais1";
    }
    console.warn("Langue ou niveau non reconnu:", lang, userLevel);
    return "/";
  };

  const cards = [
    {
      title: "Français",
      description: "Cours de français",
      icon: <FaFlagCheckered />,
      route: getRoute("francais", userLevel),
    },
    {
      title: "Anglais",
      description: "Cours d’anglais",
      icon: <FaFlagUsa />,
      route: getRoute("anglais", userLevel),
    },
  ];

  return (
    <CardList
      title="Langues"
      cards={cards}
      placeholder="Recherchez une langue..."
      userLevel={userLevel}
      onCardClick={(route) => {
        console.log("Navigating to:", route);
        navigate(route);
      }}
    />
  );
}

export default Langue;
