"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const EmailRedirectButton = () => {
  const openEmailClient = () => {
    const recipient = "rainasirsultan123@gmail.com"; 
    const subject = "";
    const body = `Hello`;
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center text-center py-5">
      <div 
        className="card shadow-lg p-5 border-0 rounded-4"
        style={{ 
          maxWidth: "600px", 
          width: "100%",
          minHeight: "300px",
          fontSize: "1.2rem" // Increases text size
        }}
      >
        <h2 className="text-primary fw-bold mb-4"> Contact Us via Email</h2>
        <p className="text-muted fs-5">Click the button below to send us an email.</p>
        <button 
          onClick={openEmailClient} 
          className="btn btn-lg btn-primary px-5 py-3 fw-bold rounded-pill shadow-sm"
          style={{ fontSize: "1.5rem" }} // Enlarges button text for large screens
        >
          <i className="bi bi-envelope-fill"></i> Send Email
        </button>
      </div>
    </div>
  );
};

export default EmailRedirectButton;
