"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const WhatsAppButton = () => {
  const [message, setMessage] = useState(""); 

  const openWhatsApp = () => {
    const phoneNumber = "923470047829"; 
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
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
        <h2 className="text-success fw-bold mb-4"> Chat with Us on WhatsApp</h2>
        <p className="text-muted fs-5">Click the button below to start a WhatsApp chat.</p>
        <button 
          onClick={openWhatsApp} 
          className="btn btn-lg btn-success px-5 py-3 fw-bold rounded-pill shadow-sm"
          style={{ fontSize: "1.5rem" }} // Enlarges button text for large screens
        >
          <i className="bi bi-whatsapp"></i> Chat on WhatsApp
        </button>
      </div>
    </div>
  );
};

export default WhatsAppButton;
