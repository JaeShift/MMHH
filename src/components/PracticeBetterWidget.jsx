"use client";
import { useEffect, useState, useRef } from "react";

export default function PracticeBetterWidget() {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const widgetRef = useRef(null);

  useEffect(() => {
    let script = null;
    
    const loadWidget = () => {
      // Check if script already exists
      const existingScript = document.querySelector('script[src*="booking.widget.js"]');
      
      if (existingScript) {
        console.log("Practice Better script already loaded");
        setLoaded(true);
        return;
      }

      // Create and load the script
      script = document.createElement("script");
      script.src = "https://cdn.practicebetter.io/assets/js/booking.widget.js";
      script.type = "text/javascript";
      script.async = true;
      script.crossOrigin = "anonymous";
      
      script.onload = () => {
        console.log("✅ Practice Better script loaded");
        setLoaded(true);
        
        // Force widget initialization after a delay
        setTimeout(() => {
          if (widgetRef.current && typeof window !== 'undefined') {
            console.log("Widget container:", widgetRef.current);
            const iframe = widgetRef.current.querySelector('iframe');
            if (iframe) {
              console.log("✅ iFrame created:", iframe.src);
            } else {
              console.warn("⚠️ No iframe found after 2 seconds");
            }
          }
        }, 2000);
      };
      
      script.onerror = (err) => {
        console.error("❌ Failed to load Practice Better script:", err);
        setError("Failed to load booking widget script");
      };

      document.body.appendChild(script);
      console.log("Practice Better script tag added");
    };

    loadWidget();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div>
      {error && (
        <div style={{ 
          padding: "20px", 
          background: "#fee", 
          border: "1px solid #fcc",
          borderRadius: "8px",
          marginBottom: "20px"
        }}>
          <p style={{ color: "#c00", margin: 0 }}>
            <strong>Error:</strong> {error}
          </p>
          <p style={{ marginTop: "10px", fontSize: "14px" }}>
            Please try <a href="https://modernmentalhealthhormones.practicebetter.io" target="_blank" rel="noopener noreferrer">booking directly</a>.
          </p>
        </div>
      )}

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
        ref={widgetRef}
        className="better-inline-booking-widget"
        data-url="https://modernmentalhealthhormones.practicebetter.io"
        data-booking-page="6920bc45e324ab8666405e64"
        data-hash="68f453c28551a5c6aa0369e4"
        data-theme="7f7c65"
        data-theme-accent="5c5c49"
        data-scrollbar-visible="false"
        style={{
          width: "100%",
          maxWidth: "550px",
          height: "800px",
          margin: "0 auto",
        }}
      />

      {!loaded && !error && (
        <div style={{ textAlign: "center", padding: "40px" }}>
          <p>Loading booking widget...</p>
        </div>
      )}
    </div>
  );
}
