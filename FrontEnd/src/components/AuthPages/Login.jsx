import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Send a POST request to the backend login endpoint
    const response = await axios.post("http://127.0.0.1:8000/api/login", {
      email,
      password,
    });

    console.log("Login successful:", response.data);
    const username = response.data.user_name; // Retrieve the username from the backend response
    navigate("/choose-what", { state: { username } }); // Redirect and pass the username
  } catch (err) {
    console.error("Login error:", err.response?.data || err.message);
    alert(err.response?.data?.message || "Invalid email or password"); // Display error to the user
  }
};

  const handleForgotPasswordClick = () => {
    navigate("/forgot-password");
  };

  return (
    <div className="auth-container">
      <div className="auth-overlay" />
      <div className="auth-content">
        <div className="auth-card-wrapper">
          <div className="auth-card">
            <h5 className="auth-title">Log in</h5>
            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="auth-group">
                <label className="auth-label">Email</label>
                <input
                  type="email"
                  className="auth-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="auth-group">
                <label className="auth-label">Password</label>
                <input
                  type="password"
                  className="auth-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div
                className="forgotPasswordStyle"
                onClick={handleForgotPasswordClick}
                style={{ cursor: "pointer", color: "#007bff", textDecoration: "underline" }}
              >
                Forget password?
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

export default Login;
