import React, { useEffect, useState } from "react"; 
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const QuizPage = () => {
  const { id } = useParams(); // course ID
  const navigate = useNavigate(); // For navigation to the result page
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission state

  // Fetch questions only once when the component mounts
  useEffect(() => {
    axios.get(`http://localhost:8000/api/quiz/${id}`) // This now returns all questions for the course
      .then((res) => {
        console.log("Fetched Quiz Data:", res.data);
        // The response is now an array of questions
        setQuestions(Array.isArray(res.data) ? res.data : []); 
      })
      .catch((err) => {
        console.error("Error fetching quiz:", err.response ? err.response.data : err.message);
      });
  }, [id]);

  const handleChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = () => {
    setIsSubmitted(true); // Set submission state to true when user submits
    console.log("User Answers:", answers);

    // Calculate the number of correct answers
    const correctAnswersCount = questions.filter(q => q.correct_answer === answers[q.idQuiz]).length;

    // Calculate the percentage of correct answers
    const percentage = (correctAnswersCount / questions.length) * 100;

    // If the user answered 70% or more questions correctly, navigate to the result page
    if (percentage >= 70) {
      navigate("/certificate", { state: { score: correctAnswersCount, total: questions.length } });
    }
  };

  return (
    <div className="quiz-page">
      <h2>📝 Quiz</h2>
      {questions.map((q, index) => (
        <div key={q.idQuiz} className="question-block">
          <h4>Q{index + 1}: {q.question}</h4>
          <div style={{textAlign:"center"}}>
            {["A", "B", "C", "D"].map(letter => (
              <label key={letter}>
                <input
                  type="radio"
                  name={`question-${q.idQuiz}`}
                  value={letter}
                  checked={answers[q.idQuiz] === letter}
                  onChange={() => handleChange(q.idQuiz, letter)}
                  disabled={isSubmitted} // Disable radio buttons after submission
                />
                {q[`option_${letter.toLowerCase()}`]}
              </label>
            ))}
          </div>
          {isSubmitted && (
            <div className="answer-display">
              <strong>Correct Answer:</strong> {q[`option_${q.correct_answer.toLowerCase()}`]}
            </div>
          )}
        </div>
      ))}
      <button onClick={handleSubmit} className="btn" disabled={isSubmitted} style={{textAlign:"center"}}>
        {isSubmitted ? "Submitted" : "Submit"}
      </button>
    </div>
  );
};

export default QuizPage;