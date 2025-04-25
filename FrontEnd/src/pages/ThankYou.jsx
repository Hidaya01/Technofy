import { useNavigate } from "react-router-dom";

function ThankYou() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/SignIn");
  };

  return (
    <div className="thankyou-container">
      <div className="thankyou-card">
        <h1 className="thankyou-title">
          Thank you for your response 🚀&#10023; <br/>
          We hope to help you and benefit you so that you learn what you want
        </h1>
        <button className="button-pink thankyou-button" onClick={handleSignIn}>
          Sign in &#10174;
        </button>
        
      </div>
    </div>
  );
}

export default ThankYou;
