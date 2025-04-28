import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Features from "./Features";

export default function ChooseWhat() {
  const location = useLocation();
  const [username, setUsername] = useState(() => {
    return sessionStorage.getItem("username") || "User";
  });
  const [userLevel, setUserLevel] = useState(() => {
    return sessionStorage.getItem("techLevel") || "Unknown";
  });

  useEffect(() => {
    if (location.state?.username) {
      setUsername(location.state.username);
      sessionStorage.setItem("username", location.state.username);
    }
    if (location.state?.techLevel) {
      setUserLevel(location.state.techLevel);
      sessionStorage.setItem("techLevel", location.state.techLevel);
    }
  }, [location.state]);

  return (
    <div className="question-page">
      <h5>Welcome {username}, to TechnoFy</h5>
      <h4>Your current tech level is: {userLevel}</h4>
      <h4>Now choose your next step</h4>
      <Features userLevel={userLevel} />
    </div>
  );
}
