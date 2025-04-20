import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BeforeQuestions = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [nextRoute, setNextRoute] = useState(null);

  useEffect(() => {
    const route = sessionStorage.getItem("afterATeachLevel");
    if (route) {
      setNextRoute(route);
    }
  }, []);

  const handleClick = () => {
    if (nextRoute) {
      navigate(nextRoute);
      sessionStorage.removeItem("afterATeachLevel"); 
    } else {
      console.warn("No route set in sessionStorage.");
    }
  };
 

  return (
    <div className="question-page div-BQ">
      <h5 className="h1-BQ">Welcome to TechnoFy</h5>
      <h4> Just a few quick questions so we create the learning track for you</h4>
      <button className=" button-pink thankyou-button"
        onClick={handleClick}
       
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          padding: "10px 25px",
          backgroundColor: isHovered ? "#E92E70" : "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Start
      </button>
    </div>
  );
};

export default BeforeQuestions;
