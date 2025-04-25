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
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });
  
      console.log("Full API Response:", response.data);
  
      const username = response.data.user_name;
      const role = response.data.role?.toLowerCase().trim();
  
      // Store user session in localStorage
      localStorage.setItem("user", JSON.stringify({ username, role }));
      console.log("Processed Role:", role); // Debugging
      
          // Normalize role format (remove accents to ensure matching)
      const normalizedRole = role.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      
      if (normalizedRole === "admin") {
            navigate("/admin/dashboard", { state: { username } });
          } else if (normalizedRole.includes("etudiant")) { 
            navigate("/choose-what", { state: { username } });
          } else {
            alert(`Unrecognized role: "${normalizedRole}" (Raw: "${response.data.role}")`);
          }
        } catch (err) {
          console.error("Login error:", err.response?.data || err.message);
          alert(err.response?.data?.message || "Invalid email or password");
        }
      };
      

  const handleForgotPasswordClick = () => {
    navigate("/forgot-password");
  };

  const handleSignUpClick = () => {
    navigate("/Ateachlevel"); // Assuming your registration route is '/register'
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
              </div>

              <div
                className="forgotPasswordStyle"
                onClick={handleForgotPasswordClick}
                style={{ cursor: "pointer", color: "#007bff", textDecoration: "underline" }}
              >
                Forgot password?
              </div>

              <button type="submit" className="button-pink">
                Submit
              </button>
              
              {/* Add this sign-up link section */}
              <div className="signup-link" style={{ marginTop: '1rem', textAlign: 'center' }}>
                Don't have an account?{' '}
                <span 
                  onClick={handleSignUpClick}
                  style={{ 
                    cursor: "pointer", 
                    color: "#007bff", 
                    textDecoration: "underline",
                    fontWeight: "bold"
                  }}
                >
                  Create one
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;