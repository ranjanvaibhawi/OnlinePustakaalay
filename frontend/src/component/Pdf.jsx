import React from 'react';
import './Pdf.css'; // Assuming you have a CSS file for styling
import { useLocation } from 'react-router-dom';

const Pdf = () => {
  const location = useLocation();
  const bookLink = location.state?.bookLink;

  if (!bookLink) {
    return <p className="text-center mt-8">No PDF link provided.</p>;
  }

  return (
    <div className="pdf-container">
      <h1 className="pdf-heading">Here's Your Book! Happy Reading!!</h1>
      <div className="pdf-iframe-container">
        <iframe
          src={bookLink}
          width="100%"
          height="800"
          allow="autoplay"
          title="PDF Preview"
        ></iframe>
      </div>
    </div>
  );
};

export default Pdf;
