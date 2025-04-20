import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DoneAge = () => {
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
    navigate("/question/radio/question5");
  };

  return (
    <div className="pages div-age" >
      <h2 className="h2pages">
        There’s no <span style={{ color: "#E92E70" }}>Wrong</span> Age <br />
        Refresh The Skills, Or Learn A New Computer Language!
      </h2>

      <div>
        <img
          src="nowrongage.avif"
          alt="No Wrong Age"
          style={{
            borderRadius: "8px",
            width: "70%",
            margin: "10px",
            opacity: "65%",
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

export default DoneAge;
