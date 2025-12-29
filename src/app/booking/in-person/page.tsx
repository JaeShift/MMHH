"use client";

import Link from "next/link";

export default function InPersonBookingPage() {
  return (
    <div style={{ 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      padding: "40px 20px",
      background: "#f8fafc"
    }}>
      <div style={{ 
        maxWidth: "600px", 
        textAlign: "center",
        background: "white",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
      }}>
        <h1 style={{ 
          fontSize: "32px", 
          marginBottom: "20px",
          color: "#1e293b"
        }}>
          In-Person Appointment Request Received
        </h1>
        
        <p style={{ 
          fontSize: "18px", 
          lineHeight: "1.6",
          color: "#475569",
          marginBottom: "30px"
        }}>
          Thank you for your interest in scheduling an in-person appointment. I will contact you within 1-2 business days to coordinate your visit.
        </p>

        <div style={{
          padding: "20px",
          background: "#f1f5f9",
          borderRadius: "8px",
          marginBottom: "30px"
        }}>
          <p style={{ 
            fontSize: "14px", 
            color: "#64748b",
            margin: 0
          }}>
            <strong>Need immediate assistance?</strong><br />
            Email me at <a href="mailto:info@modernmhh.com" style={{ color: "#75866D", textDecoration: "underline" }}>info@modernmhh.com</a>
          </p>
        </div>

        <Link 
          href="/"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            background: "#75866D",
            color: "white",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "600",
            fontSize: "16px"
          }}
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}

