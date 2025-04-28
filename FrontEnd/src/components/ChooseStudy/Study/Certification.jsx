import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const CertificatePage = () => {
  const location = useLocation();
  const { score, total, username = "User" } = location.state || { score: 0, total: 0 };
  const percentage = (score / total) * 100;
  const certificateRef = useRef(null);

  const handleDownload = async () => {
    if (!certificateRef.current) return;
  
    try {
      // 1. Create a clone of the certificate div with white background
      const div = document.createElement('div');
      div.style.position = 'absolute';
      div.style.left = '-9999px';
      div.style.width = '800px';
      div.style.padding = '20px';
      div.style.background = 'white';
      div.style.color = 'black'; // Force black text
      div.innerHTML = certificateRef.current.innerHTML;
      
      // Force all text elements to be black
      const allElements = div.querySelectorAll('*');
      allElements.forEach(el => {
        el.style.color = 'black';
        el.style.borderColor = 'black'; // If you have borders
      });
      
      document.body.appendChild(div);
  
      // 2. Use html2canvas with white background configuration
      const canvas = await html2canvas(div, {
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: false,
        backgroundColor: 'white',
        removeContainer: true
      });
  
      document.body.removeChild(div);
  
      // 3. Create PDF
      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });
  
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const yPosition = (pageHeight - imgHeight) / 2;
  
      pdf.addImage(imgData, 'PNG', 0, yPosition, imgWidth, imgHeight);
      pdf.save(`certificate_${username}.pdf`);
  
    } catch (error) {
      console.error('PDF generation failed:', error);
      alert('Failed to generate certificate. Please try again.');
    }
  };
  return (
    <div className="result-page">
      <h2>🎉 Congratulations!</h2>
      <p>You answered <strong>{score}</strong> out of <strong>{total}</strong> questions correctly.</p>
      <p>Your score: <strong>{percentage.toFixed(2)}%</strong></p>

      {percentage >= 70 ? (
        <div className="certificate-section">
          <h3>You've earned your certificate!</h3>
          
          {/* Certificate design */}
          <div 
            className="certificate" 
            ref={certificateRef}
            style={{
              border: "2px solid #000",
              padding: "20px",
              textAlign: "center",
              margin: "20px auto",
              width: "800px",
              background: "#0d0d2b",
              fontFamily: "Arial, sans-serif"
            }}
          >
            <img src="/v.png" style={{width:"70px", borderRadius:"50%"}} alt="" />
            <h1 style={{ color: "white" }}>Certificate of Completion</h1>
            <p>This is to certify that</p>
            <h2 style={{ color: "#e74c3c" }}>hidaya</h2>
            <p>has successfully completed the course with a score of {percentage.toFixed(2)}%</p>
            <div style={{ margin: "30px 0" }}>
              <p>Date: {new Date().toLocaleDateString()}</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "50px" }}>
              <div>
                <hr style={{ width: "150px" }} />
                <p>TechnoFy</p>
              </div>
                
            </div>
          </div>

          <button 
            className="btn" 
            onClick={handleDownload}
            style={{
              padding: "10px 20px",
              background: "#e91e63",
              textAlign:"center",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            Download Certificate (PDF)
          </button>
        </div>
      ) : (
        <p>Unfortunately, you did not pass the quiz. Try again!</p>
      )}
    </div>
  );
};

export default CertificatePage;