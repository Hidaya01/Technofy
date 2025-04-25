import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from "./getStart";
import Features from "./Features";
import About from './About';
import ContactPage from './Contact';

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/ATeachLevel'); 
  };

  return (
    <>
      <Hero onGetStartedClick={handleClick} /> 
      <Features />
      <About id="about" />  {/* Pass id as prop */}
      <ContactPage id="contact"/>
    </>
  );
}

export default Home;