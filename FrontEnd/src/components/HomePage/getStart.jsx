function Hero({ onGetStartedClick }) {
  return (
    <section className="GetStart">
      <div>
        <h1><span className="highlight">100%</span> Technology</h1>
        <h2>E-Learning Platform</h2>
        <p>TechnoFy Build the Skills of tomorrow, Today.</p>
        <button className="button-pink" onClick={onGetStartedClick}>Get started</button>
      </div>
    </section>
  );
}

export default Hero;
