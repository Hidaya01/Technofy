import React from "react";
import { useLocation } from "react-router-dom";
import Features from "./Features";

export default function ChooseWhat() {
  const location = useLocation();
  const userLevel = sessionStorage.getItem("techLevel");
  const username = location.state?.username || "User";

  return (
    <div className="question-page">
      <h5>Welcome {username}, to TechnoFy</h5>
      <h4>Your current tech level is: Beginner {userLevel}</h4>
      <h4>Now choose your next step</h4>
      <Features userLevel={userLevel} />
    </div>
  );
}
