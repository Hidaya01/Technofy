import { useNavigate } from 'react-router-dom';

export default function ATechLevel() {
  const navigate = useNavigate();

  const handleClick1 = () => {
    sessionStorage.setItem("afterATeachLevel", "/question/radio/question6");
    navigate("/BeforeQuestions"); 
  };

  const handleClick2 = () => {
    sessionStorage.setItem("afterATeachLevel", "/question/Q1"); 
    navigate("/BeforeQuestions"); 
  };

  return (
    <>
      <div className='question-page'>
        <div className='h2pages'>
          <h5>Change the way you learn</h5>
          <h4>Select your tech level to start</h4>
        </div>
        <div className="container">
          <div className="card-container">

            <div
              className="card"
              style={{
                backgroundImage: "url('beginner.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              onClick={handleClick1}
            >
              <div className="overlay"></div>
              <div className="label">Beginner</div>
            </div>

            <div
              className="card"
              style={{
                backgroundImage: "url('intermediate.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                cursor: 'pointer',
              }}
              onClick={handleClick2}
            >
              <div className="overlay"></div>
              <div className="label">Intermediate</div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
