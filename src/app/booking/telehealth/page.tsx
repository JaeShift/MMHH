"use client";

import { useEffect, useState } from "react";

export default function TelehealthBookingPage() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Load Practice Better widget script
    const scriptId = "practice-better-widget-script";
    const existingScript = document.getElementById(scriptId);
    
    if (existingScript) {
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "text/javascript";
    script.src = "https://cdn.practicebetter.io/assets/js/booking.widget.js";
    script.async = true;
    
    script.onload = () => {
      console.log("✅ Practice Better script loaded");
      setScriptLoaded(true);
    };
    
    script.onerror = (error) => {
      console.error("❌ Failed to load Practice Better script:", error);
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ padding: "20px", minHeight: "100vh", background: "#f8fafc" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", marginBottom: "10px", color: "#1e293b" }}>
          Book Your Telehealth Appointment
        </h1>
        <p style={{ textAlign: "center", marginBottom: "30px", color: "#64748b" }}>
          Schedule your virtual visit below
        </p>

        <div style={{ background: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
          {/* Practice Better Booking Widget */}
          <style>{`
            .better-inline-booking-widget {
              position: relative;
              overflow: hidden;
              min-height: 800px;
            }
            .better-inline-booking-widget iframe {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border: none;
            }
          `}</style>
          
          <div 
            className="better-inline-booking-widget" 
            data-url="https://modernmentalhealthhormones.practicebetter.io" 
            data-booking-page="6920bc45e324ab8666405e64"
            data-hash="68f453c28551a5c6aa0369e4" 
            data-theme="7f7c65" 
            data-theme-accent="5c5c49" 
            data-scrollbar-visible="false"
            style={{ 
              width: "100%", 
              maxWidth: "600px", 
              height: "800px",
              margin: "0 auto"
            }}
          />

          {!scriptLoaded && (
            <div style={{ textAlign: "center", padding: "40px" }}>
              <p>Loading booking system...</p>
            </div>
          )}
        </div>

        <div style={{ 
          marginTop: "20px", 
          textAlign: "center",
          fontSize: "14px",
          color: "#64748b"
        }}>
          <p>
            Questions? Email <a href="mailto:info@modernmhh.com" style={{ color: "#75866D", textDecoration: "underline" }}>info@modernmhh.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}

