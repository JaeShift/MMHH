"use client";

import { useEffect } from "react";

export default function TestWidgetPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.practicebetter.io/assets/js/booking.widget.js";
    script.type = "text/javascript";
    script.async = false; // Load synchronously for testing
    
    script.onload = () => {
      console.log("✅ Practice Better script loaded");
    };
    
    script.onerror = (error) => {
      console.error("❌ Failed to load Practice Better script:", error);
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Practice Better Widget Test</h1>
      <p>Check the browser console for loading status.</p>
      
      <style>{`
        .better-inline-booking-widget {
          position: relative;
          overflow: hidden;
          border: 2px solid red;
        }
        .better-inline-booking-widget iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
      
      <div 
        className="better-inline-booking-widget" 
        data-url="https://modernmentalhealthhormones.practicebetter.io" 
        data-booking-page="" 
        data-hash="68f453c28551a5c6aa0369e4" 
        data-theme="7f7c65" 
        data-theme-accent="5c5c49" 
        data-scrollbar-visible="false"
        style={{ width: "100%", maxWidth: "550px", height: "800px", margin: "20px 0" }}
      />
    </div>
  );
}

