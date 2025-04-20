import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCode, FaLanguage, FaLaptopCode, FaQuestionCircle } from "react-icons/fa";

function Features() {
  const navigate = useNavigate();

  const features = [
    { name: "Training", icon: <FaCode />, path: "/training" },
    { name: "Lang", icon: <FaLanguage />, path: "/langues" },
    { name: "IDE", icon: <FaLaptopCode />, path: "/ide" },
    { name: "Quiz", icon: <FaQuestionCircle />, path: "/quiz" },
  ];

  const handleFeatureClick = (path) => {
    navigate(path);
  };

  return (
    <section className="features">
      {features.map((feature, index) => (
        <div
          key={index}
          className="feature-card"
          onClick={() => handleFeatureClick(feature.path)}
          style={{ cursor: "pointer" }}
        >
          <span className="icon">{feature.icon}</span>
          <h2 className="h-featur">{feature.name}</h2>
        </div>
      ))}
    </section>
  );
}

export default Features;
