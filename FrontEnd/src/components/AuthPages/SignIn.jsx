import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState(null); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      // Send POST request to the backend register endpoint
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        name,
        email,
        password,
        password_confirmation: passwordConfirmation, // Backend expects this key
      });

      console.log("Registration successful:", response.data);
      
      // Get the user name from the response
      const username = response.data.user_name;

      // Clear any errors
      setError(null);

      // Redirect to the desired page (e.g., welcome page or dashboard)
      navigate("/choose-what", { state: { username: username } }); // Pass user name
    } catch (err) {
      console.error("Registration error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Something went wrong."); // Display error to the user
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
            <h5 className="auth-title">Sign Up</h5>

            {/* Display error message */}
            {error && <p style={{ color: "red" }}>{error}</p>}

            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="auth-group">
                <label className="auth-label">Name</label>
                <input
                  type="text"
                  className="auth-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <label className="auth-label">Email</label>
                <input
                  type="email"
                  className="auth-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="auth-group">
                <label className="auth-label">Password</label>
                <input
                  type="password"
                  className="auth-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <label className="auth-label">Confirm Password</label>
                <input
                  type="password"
                  className="auth-input"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  required
                />
              </div>

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

export default SignUp;
