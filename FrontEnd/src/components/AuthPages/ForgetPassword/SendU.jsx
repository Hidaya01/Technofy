import { useNavigate } from 'react-router-dom';

const SendU = () => {
  const navigate = useNavigate();

  const handleClose = () => {
   
    navigate('/forgot-password'); 
  };

  return (
    <div className="auth-container">
      <div className="auth-overlay" />
      <div className="auth-content">
        <div className="sendU-container sendU">
          <button className="close-button" onClick={handleClose}>×</button>
          <p className="auth-message">We will sent you a recovery link</p>
          <button className="sendU-btn" onClick={() => navigate('/new-password')}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default SendU;
