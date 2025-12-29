"use client";

import { useEffect, useState } from "react";
import PracticeBetterWidget from "@/components/PracticeBetterWidget";

export default function Page() {
  const [isHttps, setIsHttps] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if we're on HTTPS (only runs on client)
    setIsHttps(window.location.protocol === 'https:');
  }, []);

  // Show loading state during hydration
  if (isHttps === null) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1 style={{ marginBottom: "20px" }}>Book Your Appointment</h1>
        <p>Loading...</p>
      </div>
    );
  }

  // On localhost (HTTP), show a direct link instead of the widget
  if (!isHttps) {
    return (
      <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
        <h1 style={{ marginBottom: "20px" }}>Book Your Appointment</h1>
        
        <div style={{ 
          padding: "20px", 
          background: "#fff3cd", 
          border: "1px solid #ffc107",
          borderRadius: "8px",
          marginBottom: "20px"
        }}>
          <p style={{ margin: "0 0 10px 0", fontWeight: "600" }}>
            ℹ️ Development Mode
          </p>
          <p style={{ margin: 0, fontSize: "14px" }}>
            The booking widget requires HTTPS and will work on the production site. 
            For now, use the button below to access Practice Better directly.
          </p>
        </div>

        <a 
          href="https://modernmentalhealthhormones.practicebetter.io/#/68f453c28551a5c6aa0369e4/bookings?s=69211b1a253edabde2e0d7a8"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            padding: "15px 20px",
            background: "#75866D",
            color: "white",
            textDecoration: "none",
            borderRadius: "8px",
            textAlign: "center",
            fontWeight: "600",
            marginBottom: "20px"
          }}
        >
          Open Practice Better Booking →
        </a>

        <p style={{ fontSize: "14px", color: "#666", textAlign: "center" }}>
          Questions? Email <a href="mailto:info@modernmhh.com">info@modernmhh.com</a>
        </p>
      </div>
    );
  }

  // On production (HTTPS), show the embedded widget
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Book Your Appointment</h1>
      <PracticeBetterWidget />
    </div>
  );
}
