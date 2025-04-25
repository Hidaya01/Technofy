import React from "react";

export default function About({ id }) {
    return (
    <div id={id} className="about-container">
      <div className="about-header">
        <h1 className="about-title">About TechnoFy</h1>
        <p className="about-subtitle">Empowering Growth Through Learning and Innovation</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            At TechnoFy, we believe that education and personal development should be accessible, 
            engaging, and effective. Our goal is to empower individuals by providing structured 
            learning paths, expert insights, and interactive tools that promote mastery of soft skills, 
            leadership, personal growth, and professional excellence.
          </p>
        </section>

        <section className="about-section">
          <h2 className="section-title">What We Offer</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🚀</span>
              <h3>Interactive Learning</h3>
              <p>Engaging courses and structured programs on essential skills</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">💡</span>
              <h3>Practical Insights</h3>
              <p>Expert tips and hands-on exercises for real-life application</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🤝</span>
              <h3>Community</h3>
              <p>Network of learners, mentors, and professionals</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🔗</span>
              <h3>Career Development</h3>
              <p>Resources to strengthen your personal brand and skills</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2 className="section-title">Why Choose TechnoFy?</h2>
          <ul className="benefits-list">
            <li><span className="highlight">🔹 Comprehensive Content</span> Covering everything from soft skills to career success</li>
            <li><span className="highlight">🔹 Easy-to-Use Platform</span> Designed for intuitive navigation</li>
            <li><span className="highlight">🔹 Future-Ready Approach</span> Skills that matter in evolving workplaces</li>
            <li><span className="highlight">🔹 Supportive Environment</span> Encouraging growth and self-confidence</li>
          </ul>
        </section>

        <div className="cta-section">
          <h2 className="cta-title">Join Us Today!</h2>
          <p className="cta-text">
            Be part of the TechnoFy journey and unlock your potential! Whether you're a student, 
            a professional, or someone passionate about self-improvement, TechnoFy is here to support you.
          </p>
          <p className="cta-motto">Stay curious. Keep learning. Shape your future.</p>
          <div className="contact-info">
            <p>🌐 Explore More: <a href="#">Your Website Link</a></p>
            <p>📩 Contact Us: <a href="mailto:contact@technofy.com">contact@technofy.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}