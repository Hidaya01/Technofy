import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


  
const Forgot1 = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError('');
      setSubmitted(true);
      console.log('Email submitted:', email);
      navigate("/send-u-link");

    } else {
      setError('Veuillez entrer un email valide.');
      setSubmitted(false);
    }
  };
    

  return (
    <div className="auth-container">
      {/* Overlay */}
      <div className="auth-overlay" />

      {/* Centered Card Content */}
      <div className="auth-content">
        <div className="auth-card-wrapper">
          <div className="auth-card">
            <h3 className="">Forgot Password</h3>
            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="auth-group">
                <label className="auth-label" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="auth-input"
                  value={email}
                  placeholder="exemple@mail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {error && <p className="error">{error}</p>}
              {submitted && <p className="success">Email valide envoyé !</p>}

              <button type="submit" className="button-pink">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot1;
