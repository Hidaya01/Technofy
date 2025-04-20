import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CourseHas = () => {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/question/radio/question4");
  };

  return (
    <div
      className="pages "
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h2 className="h2pages" style={{ animation: "fadeIn 1s ease-in-out" }}>
        Every course chapter has interactive coding <br />
        exercises to test your skill
      </h2>

      <div style={{ animation: "fadeIn 1.5s ease-in-out" }}>
        <img
          src="practice.png"
          alt="Practice"
          style={{
            borderRadius: "8px",
            width: "70%",
            margin: "0px",
            opacity: "55%",
          }}
        />
      </div>

      {showButton && (
        <button onClick={handleContinue} className="continue-btn2 fade-in">
          Continue &nbsp; &nbsp; &#x276F;&#x276F;
        </button>
      )}
    </div>
  );
};

export default CourseHas;
