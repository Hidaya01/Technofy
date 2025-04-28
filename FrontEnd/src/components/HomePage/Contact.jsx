import { useState } from 'react';

const ContactPage = ( {id} ) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    
    try {
      // Replace with your actual submission logic
      console.log('Form submitted:', formData);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmissionStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: 'general',
        message: ''
      });
    } catch (error) {
      setSubmissionStatus('error');
    }
  };

  return (
    <div id={id} className="">
      <div className="question-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 className="question-title">Contact Us</h2>
        <p style={{ 
          textAlign: 'center', 
          color: '#ccc', 
          marginBottom: '30px',
          fontSize: '1.1rem'
        }}>
          Have questions or feedback? We'd love to hear from you!
        </p>
        
        <form onSubmit={handleSubmit} style={{ 
          background: 'rgba(30, 30, 63, 0.5)',
          padding: '25px',
          borderRadius: '15px',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)'
        }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block',
              marginBottom: '8px',
              color: '#00f0ff',
              fontSize: '0.9rem'
            }}>Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px 15px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                fontSize: '1rem'
              }}
            />
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block',
              marginBottom: '8px',
              color: '#00f0ff',
              fontSize: '0.9rem'
            }}>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px 15px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                fontSize: '1rem'
              }}
            />
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block',
              marginBottom: '8px',
              color: '#00f0ff',
              fontSize: '0.9rem'
            }}>Subject</label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px 15px',
                background: 'rgba(0, 5, 27, 0.82)',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                fontSize: '1rem'
              }}
            >
              <option value="general">General Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="feedback">Feedback</option>
              <option value="business">Business Inquiry</option>
            </select>
          </div>
          
          <div style={{ marginBottom: '25px' }}>
            <label style={{ 
              display: 'block',
              marginBottom: '8px',
              color: '#00f0ff',
              fontSize: '0.9rem'
            }}>Your Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px 15px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                fontSize: '1rem',
                resize: 'vertical'
              }}
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="continue-btn2"
            disabled={submissionStatus === 'submitting'}
            style={{ 
              margin: '0 auto',
              display: 'block',
              transform: 'none',
              opacity: submissionStatus === 'submitting' ? 0.7 : 1
            }}
          >
            {submissionStatus === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>

          {submissionStatus === 'success' && (
            <div style={{ 
              marginTop: '20px',
              padding: '12px',
              background: 'rgba(40, 167, 69, 0.2)',
              color: '#d4edda',
              borderRadius: '5px',
              textAlign: 'center',
              border: '1px solid rgba(40, 167, 69, 0.3)'
            }}>
              Thank you! Your message has been sent.
            </div>
          )}
          {submissionStatus === 'error' && (
            <div style={{ 
              marginTop: '20px',
              padding: '12px',
              background: 'rgba(220, 53, 69, 0.2)',
              color: '#f8d7da',
              borderRadius: '5px',
              textAlign: 'center',
              border: '1px solid rgba(220, 53, 69, 0.3)'
            }}>
              Something went wrong. Please try again.
            </div>
          )}
        </form>
        
        <div style={{ 
          marginTop: '50px',
          paddingTop: '30px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          textAlign: 'center'
        }}>
          <h3 style={{ 
            color: '#e91e63',
            fontSize: '1.5rem',
            marginBottom: '20px'
          }}>Other Ways to Reach Us</h3>
          <p style={{ color: '#ccc', margin: '10px 0' }}>
            <i className="fas fa-envelope" style={{ marginRight: '10px', color: '#00f0ff' }}></i> 
            Email: contact@technofy.com
          </p>
          <p style={{ color: '#ccc', margin: '10px 0' }}>
            <i className="fas fa-phone" style={{ marginRight: '10px', color: '#00f0ff' }}></i> 
            Phone: +212 70009 1574
          </p>
          <p style={{ color: '#ccc', margin: '10px 0' }}>
            <i className="fas fa-map-marker-alt" style={{ marginRight: '10px', color: '#00f0ff' }}></i> 
            Tangier
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;