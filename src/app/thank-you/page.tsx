"use client";

import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div style={{ 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      padding: "40px 20px",
      background: "linear-gradient(to bottom, #f8fafc, #e2e8f0)"
    }}>
      <div style={{ 
        maxWidth: "600px", 
        textAlign: "center",
        background: "white",
        padding: "50px 40px",
        borderRadius: "16px",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
      }}>
        <div style={{
          width: "80px",
          height: "80px",
          background: "#75866D",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 30px",
          fontSize: "40px",
          color: "white"
        }}>
          ✓
        </div>

        <h1 style={{ 
          fontSize: "36px", 
          marginBottom: "20px",
          color: "#1e293b",
          fontWeight: "600"
        }}>
          Thank You!
        </h1>
        
        <p style={{ 
          fontSize: "18px", 
          lineHeight: "1.7",
          color: "#475569",
          marginBottom: "30px"
        }}>
          Your appointment request has been received. I will contact you within 1-2 business days to schedule your visit.
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
            margin: 0,
            lineHeight: "1.6"
          }}>
            <strong style={{ display: "block", marginBottom: "8px", color: "#475569" }}>
              What happens next?
            </strong>
            I&apos;ll review your information and reach out to confirm your appointment details. Please check your email and phone for my message.
          </p>
        </div>

        <Link 
          href="/"
          style={{
            display: "inline-block",
            padding: "14px 32px",
            background: "#75866D",
            color: "white",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "600",
            fontSize: "16px",
            transition: "background 0.2s"
          }}
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}

