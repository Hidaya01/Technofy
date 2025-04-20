import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from "./getStart";
import Features from "./Features";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/ATeachLevel'); 
  };

  return (
    <>
      <Hero onGetStartedClick={handleClick} /> 
      <Features />
    </>
  );
}

export default Home;
