import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UNewPwd = () => {
  const navigate = useNavigate();
  const [pass, setPass] = useState('');
  const [newpass, setNewpass] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pass && newpass && pass !== newpass) {
      setSubmitted(true);
      // Optionally reset form fields:
      setPass('');
      setNewpass('');
      setTimeout(() => {
        navigate('/login'); // lowercase path!
      }, 1500); // allow user to see success message before redirect
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-overlay" />
      <div className="auth-content">
        <div className="auth-card-wrapper">
          <div className="auth-card">
            <h3 className="auth-title">Change Password</h3>
            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="auth-group">
                <label className="auth-label">Old Password</label>
                <input 
                  type="password" 
                  className="auth-input" 
                  value={pass} 
                  placeholder="***********" 
                  onChange={(e) => setPass(e.target.value)} 
                />
              </div>
              <div className="auth-group">
                <label className="auth-label">New Password</label>
                <input 
                  type="password" 
                  className="auth-input" 
                  value={newpass} 
                  placeholder="***********" 
                  onChange={(e) => setNewpass(e.target.value)} 
                />
              </div>
              {submitted && <p className="success">Password successfully changed!</p>}
              <button type="submit" className="button-pink">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UNewPwd;
