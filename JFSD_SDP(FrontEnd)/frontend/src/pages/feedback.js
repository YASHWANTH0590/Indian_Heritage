import React from 'react';

const FeedbackPage = () => {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1 style={{ color: '#4CAF50' }}>Feedback</h1>
      <p style={{ fontSize: '18px', margin: '10px 0' }}>
        Thank you for visiting our webpage! We value your feedback and appreciate you taking the time to share your thoughts with us. 
        Kindly fill out the form below to help us improve.
      </p>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSc2bBGoVx2edf1gt3SXI_17MCZh-GZizKLwe9KS6hAb0NjQGA/viewform?usp=sf_link"
        width="100%"
        height="800"
        style={{ border: 'none' }}
        title="Feedback Form"
      ></iframe>
      <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
        Your feedback is invaluable to us. Thank you once again!
      </p>
    </div>
  );
};

export default FeedbackPage;
