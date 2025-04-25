import { useState } from 'react';
import { Link } from 'react-router-dom';
import './HelpPage.css'; // Create this CSS file

const faqItems = [
  {
    question: "How do I create an account?",
    answer: "Click on the 'Sign Up' button at the top right corner of the page and follow the instructions to create your account."
  },
  {
    question: "How can I reset my password?",
    answer: "Go to the login page and click 'Forgot Password'. You'll receive an email with instructions to reset your password."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers."
  }
];

const troubleshootingItems = [
  "Page not loading: Try clearing your browser cache or using a different browser",
  "Form not submitting: Check that all required fields are filled and try again",
  "Error messages: Note the exact message and contact our support team"
];

const HelpPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="help-page">
      <h1>Help Center</h1>
      
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        
        {faqItems.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <h3 
              onClick={() => toggleAccordion(index)}
              className="faq-question"
            >
              {item.question}
              <span className="toggle-icon">
                {activeIndex === index ? '−' : '+'}
              </span>
            </h3>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </section>
      
      <section className="troubleshooting">
        <h2>Troubleshooting</h2>
        <ul>
          {troubleshootingItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
      
      <section className="contact-support">
        <h2>Still Need Help?</h2>
        <p>Our support team is available 24/7 to assist you.</p>
        <Link to="/contact" className="support-btn">Contact Support</Link>
        <p>Or call us at: <strong>+1 (555) 987-6543</strong></p>
      </section>
    </div>
  );
};

export default HelpPage;