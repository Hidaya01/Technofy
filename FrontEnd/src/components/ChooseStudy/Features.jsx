import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCode, FaLanguage, FaLaptopCode } from "react-icons/fa";

function Features({ userLevel }) {
  const navigate = useNavigate();

  const features = [
    { name: "Coding", icon: <FaCode />, path: "/training" },
    { name: "Lang", icon: <FaLanguage />, path: "/langues" },
    { name: "IDE", icon: <FaLaptopCode />, path: "/ide" }
  ];

  const handleFeatureClick = (path) => {
    navigate(path, { state: { userLevel } }); 
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
